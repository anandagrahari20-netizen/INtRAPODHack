import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ExpenseContext = createContext(null);
const API_BASE = "/api/expenses";
const MONTHLY_BUDGET = 25000;
const categoryMeta = {
  "Food & Dining": { icon: "utensils", tint: "peach", dot: "#b6432b" },
  Food: { icon: "utensils", tint: "peach", dot: "#b6432b" },
  Shopping: { icon: "shopping-bag", tint: "peach", dot: "#d98a5b" },
  Groceries: { icon: "shopping-cart", tint: "mint", dot: "#5c8a6e" },
  Transport: { icon: "car", tint: "neutral", dot: "#b08a5a" },
  Entertainment: { icon: "play", tint: "peach", dot: "#d98a5b" },
  Other: { icon: "wallet", tint: "neutral", dot: "#8d7a6a" },
};

const parseAmount = (value) => {
  const numeric = Number(String(value ?? "").replace(/[^0-9.-]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
};

const formatAmount = (value) => `₹${Math.round(value).toLocaleString("en-IN")}`;

const formatDate = (value) => {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) {
    return new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date());
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
};

const formatTime = (value) => {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());
  }

  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

const dateFromLabel = (label) => {
  const date = new Date(label);
  return Number.isNaN(date.getTime()) ? new Date() : date;
};

const normalizeExpense = (expense) => {
  const category = expense.classification?.label || expense.category || "Other";
  const meta = categoryMeta[category] || categoryMeta.Other;
  const amountValue = parseAmount(expense.amount);
  const formattedDate = formatDate(expense.date || expense.dateLabel || new Date());

  return {
    id: expense.id || `expense-${Date.now()}`,
    day: expense.day || dateFromLabel(formattedDate).getDate().toString().padStart(2, "0"),
    date: formattedDate,
    time: expense.time || formatTime(expense.date || expense.dateLabel),
    channel: expense.channel || "Manual",
    payee: expense.payee || "Unknown Merchant",
    tag: expense.tag ?? null,
    note: expense.note || "Added from the expense form",
    icon: expense.icon || meta.icon,
    iconTint: expense.iconTint || meta.tint,
    classification: expense.classification || { label: category, dot: meta.dot },
    instrument: expense.instrument || { label: "Card", icon: "card" },
    documentation: expense.documentation || { label: "Attached", status: "attached" },
    amount: expense.amount ? expense.amount : formatAmount(amountValue),
    negative: true,
  };
};

const buildWeeklySpending = (expenses) => {
  const weekdayOrder = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const labelOrder = ["M", "T", "W", "T", "F", "S", "S"];
  const totals = new Map(weekdayOrder.map((day) => [day, 0]));

  expenses.forEach((expense) => {
    const date = dateFromLabel(expense.date);
    const weekday = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
    const key = weekday === "Thu" ? "Thu" : weekday;
    totals.set(key, (totals.get(key) || 0) + parseAmount(expense.amount));
  });

  const maxValue = Math.max(...totals.values(), 0);

  return {
    total: formatAmount(expenses.reduce((sum, expense) => sum + parseAmount(expense.amount), 0)),
    days: labelOrder.map((label, index) => {
      const weekday = weekdayOrder[index];
      const value = totals.get(weekday) || 0;

      return {
        label,
        amount: formatAmount(value),
        value,
        highlight: maxValue > 0 && value === maxValue,
      };
    }),
  };
};

const buildDashboardStats = (expenses) => {
  const spent = expenses.reduce((sum, expense) => sum + parseAmount(expense.amount), 0);
  const remaining = Math.max(MONTHLY_BUDGET - spent, 0);
  const percentSpent = MONTHLY_BUDGET ? Math.round((spent / MONTHLY_BUDGET) * 100) : 0;
  const dailyAverage = expenses.length ? Math.round(spent / expenses.length) : 0;

  return [
    {
      id: "remaining",
      label: "Remaining Budget",
      value: formatAmount(remaining),
      subtitle: `of ${formatAmount(MONTHLY_BUDGET)} monthly limit`,
      progress: MONTHLY_BUDGET ? remaining / MONTHLY_BUDGET : 0,
      progressColor: "#6e4b2a",
    },
    {
      id: "spent",
      label: "Spent This Month",
      value: formatAmount(spent),
      subtitle: `${percentSpent}% of total budget`,
      progress: MONTHLY_BUDGET ? spent / MONTHLY_BUDGET : 0,
      progressColor: "#b6432b",
    },
    {
      id: "daily",
      label: "Daily Average",
      value: formatAmount(dailyAverage),
      subtitle: "Target ceiling: ₹1,500 / day",
      footer: "Within safe pacing",
    },
  ];
};

const buildSummaryCards = (expenses) => {
  const spent = expenses.reduce((sum, expense) => sum + parseAmount(expense.amount), 0);
  const averageTicket = expenses.length ? Math.round(spent / expenses.length) : 0;
  const highestTicket = [...expenses].sort((a, b) => parseAmount(b.amount) - parseAmount(a.amount))[0];
  const filedReceipts = expenses.filter((expense) => expense.documentation?.status !== "missing").length;

  return [
    {
      id: "total-disbursed",
      label: "TOTAL DISBURSED",
      icon: "wallet",
      value: formatAmount(spent),
      valueDecimals: ".00",
      subtitle: `${expenses.length} documented transactions`,
      progress: MONTHLY_BUDGET ? Math.min(spent / MONTHLY_BUDGET, 1) : 0,
      footer: null,
    },
    {
      id: "average-daily-ticket",
      label: "AVERAGE DAILY TICKET",
      icon: "trend",
      value: formatAmount(averageTicket),
      valueSuffix: "/tx",
      subtitle: "Updated from your saved expenses",
      footer: {
        icon: "arrow-down",
        text: "Within safe bounds",
        tone: "positive",
      },
    },
    {
      id: "highest-ticket",
      label: "HIGHEST TICKET",
      icon: "arrow-up-right",
      value: highestTicket ? formatAmount(parseAmount(highestTicket.amount)) : "₹0",
      valueDecimals: highestTicket ? ".00" : "",
      subtitle: highestTicket ? `${highestTicket.payee} • ${highestTicket.date}` : "No expenses yet",
      footer: {
        dot: true,
        text: highestTicket ? highestTicket.note : "Add your first expense to see it here",
        tone: "neutral",
      },
    },
    {
      id: "receipt-audit",
      label: "RECEIPT AUDIT",
      icon: "badge-check",
      value: `${expenses.length ? ((filedReceipts / expenses.length) * 100).toFixed(1) : 0}%`,
      valueTone: "positive",
      subtitle: `${filedReceipts} of ${expenses.length} receipts filed`,
      footer: {
        text: `${Math.max(expenses.length - filedReceipts, 0)} pending • Camera sync ready`,
        tone: "positive",
      },
    },
  ];
};

const buildCategoryBudgets = (expenses) => {
  const totals = new Map();

  expenses.forEach((expense) => {
    const category = expense.classification?.label || "Other";
    totals.set(category, (totals.get(category) || 0) + parseAmount(expense.amount));
  });

  const order = ["Food & Dining", "Shopping", "Groceries", "Transport", "Entertainment", "Other"];

  return order
    .filter((category) => totals.has(category))
    .map((category) => {
      const spent = totals.get(category) || 0;
      const budget = Math.max(spent * 1.5, 1000);
      const meta = categoryMeta[category] || categoryMeta.Other;

      return {
        id: category.toLowerCase().replace(/[^a-z]+/g, "-"),
        label: category,
        spent: Math.round(spent),
        total: Math.round(budget),
        color: meta.dot,
      };
    });
};

const buildRecentTransactions = (expenses) =>
  [...expenses].slice(0, 4).map((expense) => ({
    id: expense.id,
    payee: expense.payee,
    category: expense.classification?.label || "Other",
    note: expense.note,
    datetime: `${expense.date}, ${expense.time}`,
    icon: expense.icon,
    iconTint: expense.iconTint,
    amount: `-${formatAmount(parseAmount(expense.amount))}`,
    instrument: expense.instrument?.label || "Card",
  }));

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    let active = true;

    const loadExpenses = async () => {
      try {
        const response = await fetch(API_BASE);
        if (!response.ok) {
          return;
        }

        const payload = await response.json();
        if (active && Array.isArray(payload.expenses)) {
          setExpenses(payload.expenses.map(normalizeExpense));
        }
      } catch {
        return;
      }
    };

    loadExpenses();

    return () => {
      active = false;
    };
  }, []);

  const addExpense = async (expense) => {
    const response = await fetch(API_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    });

    if (!response.ok) {
      throw new Error("Failed to save expense");
    }

    const payload = await response.json();
    const createdExpense = normalizeExpense(payload.expense);
    setExpenses((current) => [createdExpense, ...current]);
    return createdExpense;
  };

  const value = useMemo(() => {
    const total = expenses.length;
    const pageSize = 6;

    return {
      expenses,
      transactions: expenses,
      addExpense,
      ledgerMeta: {
        showingFrom: total ? 1 : 0,
        showingTo: Math.min(total, pageSize),
        total,
        page: 1,
        totalPages: Math.max(1, Math.ceil(total / pageSize)),
      },
      summaryCards: buildSummaryCards(expenses),
      weeklySpending: buildWeeklySpending(expenses),
      dashboardStats: buildDashboardStats(expenses),
      categoryBudgets: buildCategoryBudgets(expenses),
      recentTransactions: buildRecentTransactions(expenses),
    };
  }, [addExpense, expenses]);

  return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>;
}

export function useExpenses() {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error("useExpenses must be used within ExpenseProvider");
  }

  return context;
}
