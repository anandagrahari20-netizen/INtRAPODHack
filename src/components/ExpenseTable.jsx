import {
  ShoppingBag,
  Utensils,
  ShoppingCart,
  Car,
  Coffee,
  Play,
} from "lucide-react";
import { useExpenses } from "../context/ExpenseContext.jsx";

const payeeIcons = {
  "shopping-bag": ShoppingBag,
  utensils: Utensils,
  "shopping-cart": ShoppingCart,
  car: Car,
  coffee: Coffee,
  play: Play,
};

const columns = [
  "Date",
  "Merchant",
  "Classification",
  "Instrument",
  "Debit",
];

const TableRow = ({ row }) => {
  const PayeeIcon = payeeIcons[row.icon];

  return (
    <tr className="border-t border-line/70 transition-colors hover:bg-cream/40">
      <td className="py-2.5 pl-6 pr-4 align-middle text-sm text-ink">{row.date}</td>
      <td className="py-2.5 pr-4 align-middle">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-chip text-muted">
            <PayeeIcon className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-medium text-ink">{row.payee}</p>
            <p className="mt-0.5 text-xs text-muted">{row.note}</p>
          </div>
        </div>
      </td>

      <td className="py-2.5 pr-4 align-middle text-sm text-ink">
        {row.classification.label}
      </td>

      <td className="py-2.5 pr-4 align-middle text-sm text-ink">
        {row.instrument.label}
      </td>

      <td className="py-2.5 pr-6 text-right align-middle">
        <span className="font-serif text-base font-semibold text-debit">
          {row.amount}
        </span>
      </td>
    </tr>
  );
};

const Pagination = () => {
  const { ledgerMeta } = useExpenses();
  const { total } = ledgerMeta;

  return (
    <div className="border-t border-line/70 px-6 py-2.5 text-sm text-muted">
      Showing {total} saved expense{total === 1 ? "" : "s"}.
    </div>
  );
};

const ExpenseTable = () => {
  const { transactions } = useExpenses();

  return (
    <div className="overflow-hidden rounded-xl border border-line/70 bg-surface shadow-[0_1px_2px_rgba(42,32,24,0.04),0_8px_24px_-12px_rgba(42,32,24,0.12)]">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-cream/50">
            {columns.map((col, i) => (
              <th
                key={col}
                className={`py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-muted ${
                  i === 0 ? "pl-6" : ""
                } ${col === "Debit" ? "pr-6 text-right" : "pr-4"}`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td className="px-6 py-10 text-center text-sm text-muted" colSpan={7}>
                No expenses yet. Add one to see it here.
              </td>
            </tr>
          ) : (
            transactions.map((row) => <TableRow key={row.id} row={row} />)
          )}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ExpenseTable;
