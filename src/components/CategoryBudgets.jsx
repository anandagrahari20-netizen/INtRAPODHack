import { useExpenses } from "../context/ExpenseContext.jsx";

const inr = (n) => `₹${n.toLocaleString("en-IN")}`;

const CategoryBudgets = () => {
  const { categoryBudgets } = useExpenses();

  return (
    <section className="rounded-xl border border-line/70 bg-surface p-6 shadow-[0_1px_2px_rgba(42,32,24,0.04),0_8px_24px_-12px_rgba(42,32,24,0.12)]">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-xl font-semibold text-ink">
          Category Budgets
        </h2>
        <button
          type="button"
          className="text-sm font-medium text-brand hover:underline"
        >
          Manage
        </button>
      </div>

      <div className="mt-5 space-y-5">
        {categoryBudgets.length === 0 ? (
          <p className="rounded-lg border border-dashed border-line/70 px-4 py-8 text-center text-sm text-muted">
            No category budgets yet.
          </p>
        ) : (
          categoryBudgets.map((cat) => {
            const percent = Math.round((cat.spent / cat.total) * 100);
            const left = cat.total - cat.spent;
            return (
              <div key={cat.id}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-ink">{cat.label}</span>
                  <span className="text-ink">
                    {inr(cat.spent)}{" "}
                    <span className="text-muted">/ {inr(cat.total)}</span>
                  </span>
                </div>

                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${percent}%`, backgroundColor: cat.color }}
                  />
                </div>

                <div className="mt-1.5 flex items-center justify-between text-xs">
                  <span className="text-muted">{percent}% used</span>
                  <span className="font-medium text-positive">{inr(left)} left</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default CategoryBudgets;
