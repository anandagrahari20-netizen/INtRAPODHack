import {
  ShoppingBag,
  Utensils,
  ShoppingCart,
  Car,
  ChevronRight,
} from "lucide-react";
import { recentTransactions } from "../data/demodata";

const icons = {
  "shopping-bag": ShoppingBag,
  utensils: Utensils,
  "shopping-cart": ShoppingCart,
  car: Car,
};

const tints = {
  peach: "bg-[#f6dcc4] text-[#a6603a]",
  mint: "bg-[#bfe3cf] text-[#3f7a5e]",
  neutral: "bg-[#eae4dd] text-muted",
};

const RecentTransactions = () => {
  return (
    <section className="rounded-xl border border-line/70 bg-surface p-6 shadow-[0_1px_2px_rgba(42,32,24,0.04),0_8px_24px_-12px_rgba(42,32,24,0.12)]">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-xl font-semibold text-ink">
          Recent Transactions
        </h2>
        <button
          type="button"
          className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
        >
          View All
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <ul className="mt-4 divide-y divide-line/70">
        {recentTransactions.map((tx) => {
          const Icon = icons[tx.icon];
          return (
            <li key={tx.id} className="flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${tints[tx.iconTint]}`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-serif text-base font-semibold text-ink">
                      {tx.payee}
                    </p>
                    <span className="rounded-md bg-chip px-2 py-0.5 text-xs font-medium text-muted">
                      {tx.category}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-muted">
                    {tx.note} • {tx.datetime}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-serif text-base font-semibold text-debit">
                  {tx.amount}
                </p>
                <p className="mt-0.5 text-xs text-muted">{tx.instrument}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RecentTransactions;
