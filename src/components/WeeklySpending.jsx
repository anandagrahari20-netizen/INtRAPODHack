import { motion } from "motion/react";
import { useExpenses } from "../context/ExpenseContext.jsx";

const WeeklySpending = () => {
  const { weeklySpending } = useExpenses();
  const { total, days } = weeklySpending;
  const max = Math.max(...days.map((d) => d.value), 0);

  return (
    <section className="rounded-xl border border-line/70 bg-surface p-6 shadow-[0_1px_2px_rgba(42,32,24,0.04),0_8px_24px_-12px_rgba(42,32,24,0.12)]">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-xl font-semibold text-ink">
          Weekly Spending
        </h2>
        <span className="text-sm text-muted">Total: {total}</span>
      </div>

      {days.every((day) => day.value === 0) && (
        <p className="mt-4 rounded-lg border border-dashed border-line/70 px-4 py-8 text-center text-sm text-muted">
          No spending data yet.
        </p>
      )}

      <div className="mt-8 flex h-56 items-end justify-between gap-3">
        {days.map((day, i) => (
          <div
            key={i}
            className="flex h-full flex-1 flex-col items-center justify-end"
          >
            <span
              className={`mb-2 text-xs font-medium ${
                day.highlight ? "text-ink" : "text-muted"
              }`}
            >
              {day.amount}
            </span>
            <motion.div
              className={`w-full max-w-10 rounded-full ${
                day.highlight ? "bg-[#e8703a]" : "bg-[#e7ddd2]"
              }`}
              initial={{ height: 0 }}
              animate={{ height: max ? `${(day.value / max) * 100}%` : "0%" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.06 }}
            />
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-between gap-3">
        {days.map((day, i) => (
          <span
            key={i}
            className="flex-1 text-center text-xs font-medium text-muted"
          >
            {day.label}
          </span>
        ))}
      </div>
    </section>
  );
};

export default WeeklySpending;
