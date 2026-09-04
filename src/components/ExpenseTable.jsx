import {
  ShoppingBag,
  Utensils,
  ShoppingCart,
  Car,
  Coffee,
  Play,
  Split,
  CreditCard,
  Landmark,
  Smartphone,
  BadgeCheck,
  Paperclip,
  ReceiptText,
  RefreshCw,
  Receipt,
  MoreVertical,
} from "lucide-react";
import { transactions, ledgerMeta } from "../data/demodata";

const payeeIcons = {
  "shopping-bag": ShoppingBag,
  utensils: Utensils,
  "shopping-cart": ShoppingCart,
  car: Car,
  coffee: Coffee,
  play: Play,
};

const instrumentIcons = {
  card: CreditCard,
  bank: Landmark,
  phone: Smartphone,
};

const tints = {
  peach: "bg-[#f6dcc4] text-[#a6603a]",
  mint: "bg-[#bfe3cf] text-[#3f7a5e]",
  neutral: "bg-[#eae4dd] text-muted",
};

const docStyles = {
  verified: { Icon: BadgeCheck, className: "bg-[#d7ebdd] text-positive" },
  auto: { Icon: RefreshCw, className: "bg-[#d7ebdd] text-positive" },
  attached: { Icon: Paperclip, className: "bg-chip text-muted" },
  missing: { Icon: ReceiptText, className: "bg-chip text-muted" },
};

const columns = [
  "Date • Timestamp",
  "Payee • Allocation Note",
  "Classification",
  "Instrument",
  "Documentation",
  "Debit",
  "Ledger Ops",
];

const PayeeTag = ({ tag }) => {
  const text = typeof tag === "string" ? tag : tag.text;
  const withIcon = typeof tag === "object" && tag.icon === "split";
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-chip px-2 py-0.5 text-xs font-medium text-muted">
      {withIcon && <Split className="h-3 w-3" />}
      {text}
    </span>
  );
};

const TableRow = ({ row }) => {
  const PayeeIcon = payeeIcons[row.icon];
  const InstrumentIcon = instrumentIcons[row.instrument.icon];
  const doc = docStyles[row.documentation.status];
  const DocIcon = doc.Icon;

  return (
    <tr className="border-t border-line/70 transition-colors hover:bg-cream/40">
      <td className="py-2.5 pl-6 pr-4 align-middle">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-chip text-xs font-semibold text-brand">
            {row.day}
          </span>
          <div>
            <p className="text-xs font-semibold text-ink">{row.date}</p>
            <p className="text-[11px] text-muted">
              {row.time} • {row.channel}
            </p>
          </div>
        </div>
      </td>
      <td className="py-2.5 pr-4 align-middle">
        <div className="flex items-start gap-3">
          <span
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${tints[row.iconTint]}`}
          >
            <PayeeIcon className="h-4 w-4" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-serif text-sm font-semibold text-ink">
                {row.payee}
              </p>
              {row.tag && <PayeeTag tag={row.tag} />}
            </div>
            <p className="mt-0.5 text-xs text-muted">{row.note}</p>
          </div>
        </div>
      </td>

      <td className="py-2.5 pr-4 align-middle">
        <span className="inline-flex items-center gap-2 rounded-md bg-chip/60 px-3 py-1 text-xs text-ink">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: row.classification.dot }}
          />
          {row.classification.label}
        </span>
      </td>

      <td className="py-2.5 pr-4 align-middle">
        <span className="inline-flex items-center gap-2 text-xs text-ink">
          <InstrumentIcon className="h-4 w-4 text-muted" />
          {row.instrument.label}
        </span>
      </td>

      <td className="py-2.5 pr-4 align-middle">
        <span
          className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium ${doc.className}`}
        >
          <DocIcon className="h-3.5 w-3.5" />
          {row.documentation.label}
        </span>
      </td>

      <td className="py-2.5 pr-4 text-right align-middle">
        <span className="font-serif text-base font-semibold text-debit">
          {row.amount}
        </span>
      </td>

      <td className="py-2.5 pr-6 align-middle">
        <div className="flex items-center justify-end gap-2 text-muted">
          <button
            type="button"
            aria-label="View receipt"
            className="rounded-md p-1 hover:bg-chip hover:text-brand"
          >
            <Receipt className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="More options"
            className="rounded-md p-1 hover:bg-chip hover:text-brand"
          >
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};

const Pagination = () => {
  const { showingFrom, showingTo, total, page, totalPages } = ledgerMeta;
  const pages = [1, 2, 3, "…", totalPages];

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line/70 px-6 py-2.5">
      <p className="text-sm text-muted">
        Displaying{" "}
        <span className="font-semibold text-ink">
          {showingFrom} – {showingTo}
        </span>{" "}
        of {total} records • Page {page} of {totalPages}
      </p>

      <div className="flex items-center gap-1">
        <button
          type="button"
          disabled={page === 1}
          className="rounded-lg px-3 py-1.5 text-sm text-muted disabled:opacity-40"
        >
          Previous
        </button>
        {pages.map((p, i) =>
          p === "…" ? (
            <span key={`gap-${i}`} className="px-2 text-sm text-muted">
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              className={`grid h-8 w-8 place-items-center rounded-full text-sm ${
                p === page
                  ? "bg-brand font-semibold text-surface"
                  : "text-ink hover:bg-chip"
              }`}
            >
              {p}
            </button>
          ),
        )}
        <button
          type="button"
          className="rounded-lg px-3 py-1.5 text-sm text-ink hover:bg-chip"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const ExpenseTable = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-line/70 bg-surface shadow-[0_1px_2px_rgba(42,32,24,0.04),0_8px_24px_-12px_rgba(42,32,24,0.12)]">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-cream/50">
            {columns.map((col, i) => (
              <th
                key={col}
                className={`py-2.5 text-xs font-semibold uppercase tracking-wider text-muted ${
                  i === 0 ? "pl-6" : ""
                } ${col === "Debit" ? "text-right pr-4" : ""} ${
                  col === "Ledger Ops" ? "text-right pr-6" : "text-left"
                }`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((row) => (
            <TableRow key={row.id} row={row} />
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ExpenseTable;
