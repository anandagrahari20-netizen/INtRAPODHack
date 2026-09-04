import { BadgeCheck } from "lucide-react";
import { dashboardStats } from "../data/demodata";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {dashboardStats.map((stat) => (
        <section
          key={stat.id}
          className="rounded-xl border border-line/70 bg-surface p-5 shadow-[0_1px_2px_rgba(42,32,24,0.04),0_8px_24px_-12px_rgba(42,32,24,0.12)]"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            {stat.label}
          </p>
          <p className="mt-3 font-serif text-3xl font-semibold leading-none text-ink">
            {stat.value}
          </p>
          <p className="mt-2 text-sm text-muted">{stat.subtitle}</p>

          {stat.progress != null && (
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-line">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${stat.progress * 100}%`,
                  backgroundColor: stat.progressColor,
                }}
              />
            </div>
          )}

          {stat.footer && (
            <p className="mt-4 flex items-center gap-1.5 text-sm font-medium text-positive">
              <BadgeCheck className="h-4 w-4" />
              {stat.footer}
            </p>
          )}
        </section>
      ))}
    </div>
  );
};

export default DashboardStats;
