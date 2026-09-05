import { ScrollText, BookCheck } from "lucide-react";

const AuditorBalance = () => {
  return (
    <section className="flex flex-col gap-5 rounded-xl bg-chip/60 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#f6dcc4] text-brand">
          <ScrollText className="h-5 w-5" />
        </span>
        <div className="max-w-2xl">
          <h2 className="font-serif text-lg font-semibold text-ink">Ledger Balance</h2>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            This is a small note area for future balance checks.
          </p>
        </div>
      </div>
      <div className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-surface">
        <BookCheck className="h-4 w-4" />
        Ready for later
      </div>
    </section>
  );
};

export default AuditorBalance;
