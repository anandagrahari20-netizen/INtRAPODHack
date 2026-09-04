import { Download, FileText } from "lucide-react";
import { journalMeta } from "../data/demodata";

const actionIcons = {
  download: Download,
  "file-text": FileText,
};

const JournalHeader = () => {
  const { title, actions } = journalMeta;

  return (
    <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
      <div className="max-w-xl">
        <h1 className="font-serif text-4xl font-semibold text-ink">{title}</h1>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        {actions.map(({ id, label, icon }) => {
          const Icon = actionIcons[icon];
          return (
            <button
              key={id}
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-line/70 bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-chip"
            >
              <Icon className="h-4 w-4 text-muted" />
              {label}
            </button>
          );
        })}
      </div>
    </header>
  );
};

export default JournalHeader;
