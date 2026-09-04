import { ScrollText, BookCheck } from "lucide-react";
import { auditorNote } from "../data/demodata";

const AuditorBalance = () => {
  const { title, description, action } = auditorNote;

  return (
    <section className="flex flex-col gap-5 rounded-lg bg-chip/60 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#f6dcc4] text-brand">
          <ScrollText className="h-5 w-5" />
        </span>
        <div className="max-w-2xl">
          <h2 className="font-serif text-lg font-semibold text-ink">{title}</h2>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            {description}
          </p>
        </div>
      </div>

      <button
        type="button"
        className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-surface transition-colors hover:bg-brand/90"
      >
        <BookCheck className="h-4 w-4" />
        {action.label}
      </button>
    </section>
  );
};

export default AuditorBalance;
