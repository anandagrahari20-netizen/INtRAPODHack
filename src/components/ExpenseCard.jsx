import {
  Wallet,
  TrendingUp,
  ArrowUpRight,
  BadgeCheck,
  ArrowDown,
} from "lucide-react";
import { summaryCards } from "../data/demodata";

const icons = {
  wallet: <Wallet className="h-4 w-4" />,
  trend: <TrendingUp className="h-4 w-4" />,
  "arrow-up-right": <ArrowUpRight className="h-4 w-4" />,
  "badge-check": <BadgeCheck className="h-4 w-4" />,
  "arrow-down": <ArrowDown className="h-3.5 w-3.5" />,
};

const toneClass = {
  positive: "text-positive",
  neutral: "text-muted",
};

const SummaryCard = ({
  label,
  icon,
  value,
  valueDecimals,
  valueSuffix,
  valueTone,
  subtitle,
  progress,
  footer,
}) => {
  return (
    <section className="group flex flex-col rounded-lg border border-line/70 bg-surface p-5 shadow-[0_1px_2px_rgba(42,32,24,0.04),0_8px_24px_-12px_rgba(42,32,24,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(42,32,24,0.06),0_16px_32px_-14px_rgba(42,32,24,0.18)]">
      <div className="flex items-start justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          {label}
        </p>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-chip text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-surface">
          {icons[icon]}
        </span>
      </div>
      <div
        className={`mt-4 font-serif text-[2rem] font-semibold leading-none tracking-tight ${
          valueTone === "positive" ? "text-positive" : "text-ink"
        }`}
      >
        {value}
        {valueDecimals && (
          <span className="align-top text-base text-debit">{valueDecimals}</span>
        )}
        {valueSuffix && (
          <span className="text-base font-normal text-muted">{valueSuffix}</span>
        )}
      </div>
      <p className="mt-2 text-sm text-muted">{subtitle}</p>
      {progress != null && (
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-debit transition-[width] duration-700 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}
      {footer && (
        <p
          className={`mt-4 flex items-center gap-1.5 text-sm font-medium ${
            toneClass[footer.tone] || "text-muted"
          }`}
        >
          {footer.dot && <span className="h-1.5 w-1.5 rounded-full bg-brand" />}
          {footer.icon && icons[footer.icon]}
          {footer.text}
        </p>
      )}
    </section>
  );
};

const ExpenseCard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {summaryCards.map((card) => (
        <SummaryCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default ExpenseCard;
