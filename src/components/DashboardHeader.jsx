import { RefreshCw } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="font-serif text-4xl font-semibold text-ink">Dashboard</h1>
        <p className="mt-1 text-sm text-muted">A simple view of your saved expenses.</p>
      </div>
      <p className="flex items-center gap-2 text-xs font-medium text-muted">
        <RefreshCw className="h-3.5 w-3.5" />
        Syncs with the backend data file
      </p>
    </header>
  );
};

export default DashboardHeader;
