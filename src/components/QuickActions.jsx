import { motion } from "motion/react";
import { Plus, ScanLine } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    { id: "add", label: "Add Expense", icon: Plus, primary: true, to: "/AddExpense" },
    { id: "scan", label: "Scan Receipt", icon: ScanLine, to: "/ScanReceipt" },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action) => {
        const Icon = action.icon;
        const base =
          "inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-colors";
        const variant = action.primary
          ? "bg-brand text-surface hover:bg-brand/90"
          : "border border-line/70 bg-surface text-ink hover:bg-chip";
        return (
          <motion.button
            key={action.id}
            type="button"
            onClick={() => navigate(action.to)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`${base} ${variant}`}
          >
            <Icon className="h-4 w-4" />
            {action.label}
          </motion.button>
        );
      })}
    </div>
  );
};

export default QuickActions;
