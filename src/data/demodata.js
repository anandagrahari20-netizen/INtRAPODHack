export const summaryCards = [
  {
    id: "total-disbursed",
    label: "TOTAL DISBURSED",
    icon: "wallet",
    value: "₹8,420",
    valueDecimals: ".00",
    subtitle: "28 documented transactions",
    progress: 0.55,
    footer: null,
  },
  {
    id: "average-daily-ticket",
    label: "AVERAGE DAILY TICKET",
    icon: "trend",
    value: "₹301",
    valueSuffix: "/tx",
    subtitle: "−12% from last cycle",
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
    value: "₹4,500",
    valueDecimals: ".00",
    subtitle: "Amazon India • May 14",
    footer: {
      dot: true,
      text: "Study organizer & furniture",
      tone: "neutral",
    },
  },
  {
    id: "receipt-audit",
    label: "RECEIPT AUDIT",
    icon: "badge-check",
    value: "92.8%",
    valueTone: "positive",
    subtitle: "26 of 28 receipts filed",
    footer: {
      text: "2 pending • Camera sync ready",
      tone: "positive",
    },
  },
];

export const transactions = [
  {
    id: "txn-amazon",
    day: "14",
    date: "May 14, 2024",
    time: "04:42 PM",
    channel: "Online",
    payee: "Amazon India",
    tag: "Tax Inv #7890",
    note: "Desk lamp & study organizer",
    icon: "shopping-bag",
    iconTint: "peach",
    classification: { label: "Shopping", dot: "#d98a5b" },
    instrument: { label: "HDFC …", icon: "card" },
    documentation: { label: "Verified", status: "verified" },
    amount: "₹4,500",
    negative: true,
  },
  {
    id: "txn-swiggy",
    day: "13",
    date: "May 13, 2024",
    time: "08:15 PM",
    channel: "Mobile",
    payee: "Swiggy",
    tag: { text: "Split (3)", icon: "split" },
    note: "Dinner with friends (Split with 2 others)",
    icon: "utensils",
    iconTint: "peach",
    classification: { label: "Food & Dining", dot: "#b6432b" },
    instrument: { label: "UPI", icon: "bank" },
    documentation: { label: "Attached", status: "attached" },
    amount: "₹2,300",
    negative: true,
  },
  {
    id: "txn-reliance",
    day: "11",
    date: "May 11, 2024",
    time: "11:30 AM",
    channel: "In-store",
    payee: "Reliance Smart",
    tag: null,
    note: "Weekly fresh groceries & pantry refill",
    icon: "shopping-cart",
    iconTint: "mint",
    classification: { label: "Groceries", dot: "#5c8a6e" },
    instrument: { label: "Axis CC", icon: "card" },
    documentation: { label: "Verified", status: "verified" },
    amount: "₹1,800",
    negative: true,
  },
  {
    id: "txn-uber",
    day: "08",
    date: "May 08, 2024",
    time: "09:12 AM",
    channel: "Commute",
    payee: "Uber India",
    tag: null,
    note: "Office commute • Indiranagar to Whitefield",
    icon: "car",
    iconTint: "neutral",
    classification: { label: "Transport", dot: "#d98a5b" },
    instrument: { label: "Paytm UPI", icon: "phone" },
    documentation: { label: "Verified", status: "verified" },
    amount: "−₹640",
    negative: true,
  },
  {
    id: "txn-bluetokai",
    day: "05",
    date: "May 05, 2024",
    time: "04:10 PM",
    channel: "Cafe",
    payee: "Blue Tokai Coffee",
    tag: null,
    note: "Espresso & almond croissant",
    icon: "coffee",
    iconTint: "peach",
    classification: { label: "Food & Dining", dot: "#b6432b" },
    instrument: { label: "UPI", icon: "card" },
    documentation: { label: "Missing", status: "missing" },
    amount: "−₹340",
    negative: true,
  },
  {
    id: "txn-netflix",
    day: "02",
    date: "May 02, 2024",
    time: "12:00 AM",
    channel: "Recurring",
    payee: "Netflix India",
    tag: "Auto-Debit",
    note: "Monthly Premium 4K UHD plan",
    icon: "play",
    iconTint: "peach",
    classification: { label: "Entertainment", dot: "#d98a5b" },
    instrument: { label: "HDFC …", icon: "card" },
    documentation: { label: "Auto e-Doc", status: "auto" },
    amount: "−₹649",
    negative: true,
  },
];

export const ledgerMeta = {
  showingFrom: 1,
  showingTo: 6,
  total: 28,
  page: 1,
  totalPages: 5,
};

export const journalMeta = {
  eyebrow: "Ledger • Fiscal Year 2024–25",
  title: "Expense Journal",
  description:
    "A physical record of outgoings, receipts, and allocations. Every expenditure accounted for with deliberate clarity.",
  actions: [
    { id: "csv", label: "Export CSV", icon: "download" },
    { id: "pdf", label: "PDF Statement", icon: "file-text" },
  ],
};

export const searchPlaceholder = "Search by merchant, category, or note...";
export const filterControls = [
  { id: "date", label: "May 1 – May 31, 2024", icon: "calendar" },
  { id: "categories", label: "All Categories", icon: "shapes" },
  { id: "accounts", label: "All Accounts", icon: "wallet" },
  { id: "sort", label: "Newest First", icon: "sort" },
];

export const auditorNote = {
  title: "Auditor's Monthly Balance",
  description:
    "All debits reconcile with connected banking feeds (HDFC, Axis, UPI). Missing physical receipts will automatically trigger polite weekly nudges.",
  action: { label: "Reconcile Ledger", icon: "book-check" },
};

export const weeklySpending = {
  total: "₹8,420",
  days: [
    { label: "M", amount: "₹740", value: 740 },
    { label: "T", amount: "₹520", value: 520 },
    { label: "W", amount: "₹1,120", value: 1120 },
    { label: "T", amount: "₹820", value: 820 },
    { label: "F", amount: "₹1,430", value: 1430 },
    { label: "S", amount: "₹2,200", value: 2200, highlight: true },
    { label: "S", amount: "₹1,000", value: 1000 },
  ],
};

export const dashboardMeta = {
  title: "Dashboard",
  subtitle: "Overview of your monthly spending",
  sync: "HDFC Bank synced today, 09:42 AM",
};

export const quickActions = [
  { id: "add", label: "Add Expense", icon: "plus", primary: true },
  { id: "scan", label: "Scan Receipt", icon: "scan" },
  { id: "split", label: "Split Bill", icon: "split" },
];

export const dashboardStats = [
  {
    id: "remaining",
    label: "Remaining Budget",
    value: "₹16,140",
    subtitle: "of ₹25,000 monthly limit",
    progress: 0.65,
    progressColor: "#6e4b2a",
  },
  {
    id: "spent",
    label: "Spent This Month",
    value: "₹8,420",
    subtitle: "34% of total budget",
    progress: 0.34,
    progressColor: "#b6432b",
  },
  {
    id: "daily",
    label: "Daily Average",
    value: "₹1,202",
    subtitle: "Target ceiling: ₹1,500 / day",
    footer: "Within safe pacing",
  },
];

export const categoryBudgets = [
  { id: "food", label: "Food & Dining", spent: 3200, total: 9000, color: "#b6432b" },
  { id: "shopping", label: "Shopping", spent: 2270, total: 6000, color: "#6e4b2a" },
  { id: "bills", label: "Bills & Utilities", spent: 1680, total: 5000, color: "#3f8f79" },
  { id: "transport", label: "Transport", spent: 1270, total: 5000, color: "#b08a5a" },
];

export const recentTransactions = [
  {
    id: "recent-amazon",
    payee: "Amazon India",
    category: "Shopping",
    note: "Noise-cancelling headphones",
    datetime: "16 Oct, 04:15 PM",
    icon: "shopping-bag",
    iconTint: "peach",
    amount: "-₹4,500",
    instrument: "ICICI Debit",
  },
  {
    id: "recent-swiggy",
    payee: "Swiggy Gourmet",
    category: "Dining",
    note: "Weekend gathering meal",
    datetime: "15 Oct, 08:30 PM",
    icon: "utensils",
    iconTint: "peach",
    amount: "-₹2,300",
    instrument: "UPI · Split with 2",
  },
  {
    id: "recent-reliance",
    payee: "Reliance Smart",
    category: "Groceries",
    note: "Weekly essentials pantry refill",
    datetime: "14 Oct, 11:20 AM",
    icon: "shopping-cart",
    iconTint: "mint",
    amount: "-₹1,800",
    instrument: "HDFC Card",
  },
  {
    id: "recent-uber",
    payee: "Uber India",
    category: "Transport",
    note: "Airport commute transfer",
    datetime: "13 Oct, 06:45 AM",
    icon: "car",
    iconTint: "neutral",
    amount: "-₹640",
    instrument: "UPI Auto-pay",
  },
];
