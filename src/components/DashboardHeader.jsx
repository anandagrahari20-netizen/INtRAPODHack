import { RefreshCw } from "lucide-react";
import { dashboardMeta } from "../data/demodata";

const DashboardHeader = () => {
  const { title, subtitle, sync } = dashboardMeta;

  return (
    <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="font-serif text-4xl font-semibold text-ink">{title}</h1>
        <p className="mt-1 text-sm text-muted">{subtitle}</p>
      </div>
      <p className="flex items-center gap-2 text-xs font-medium text-muted">
        <RefreshCw className="h-3.5 w-3.5" />
        {sync}
      </p>
    </header>
  );
};

export default DashboardHeader;
