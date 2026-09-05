import {
  Search,
  Calendar,
  Shapes,
  Wallet,
  ArrowDownWideNarrow,
  ChevronDown,
  FilterX,
} from "lucide-react";

const FilterBar = () => {
  const controls = [
    { id: "date", label: "This Month", icon: Calendar },
    { id: "category", label: "All Categories", icon: Shapes },
    { id: "account", label: "All Accounts", icon: Wallet },
    { id: "sort", label: "Newest First", icon: ArrowDownWideNarrow },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border border-line/70 bg-surface p-3 shadow-[0_1px_2px_rgba(42,32,24,0.04)]">
      <div className="flex min-w-56 flex-1 items-center gap-2 rounded-lg bg-cream/60 px-4 py-2">
        <Search className="h-4 w-4 text-muted" />
        <input
          type="text"
          placeholder="Search expenses"
          className="w-full bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
        />
      </div>

      {controls.map(({ id, label, icon: Icon }) => {
        return (
          <button
            key={id}
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-cream/60 px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-chip"
          >
            <Icon className="h-4 w-4 text-muted" />
            {label}
            <ChevronDown className="h-4 w-4 text-muted" />
          </button>
        );
      })}

      <button
        type="button"
        aria-label="Clear filters"
        className="grid h-9 w-9 place-items-center rounded-lg bg-cream/60 text-muted transition-colors hover:bg-chip hover:text-brand"
      >
        <FilterX className="h-4 w-4" />
      </button>
    </div>
  );
};

export default FilterBar;
