import { Search, FileSpreadsheet, ShieldAlert, LineChart } from "lucide-react";

const pillars = [
  { icon: Search, label: "Sourcing leads" },
  { icon: FileSpreadsheet, label: "Cleaning financials" },
  { icon: ShieldAlert, label: "Tracking risk" },
  { icon: LineChart, label: "Reviewing performance" },
];

export function WhyProjectsMatter() {
  return (
    <section className="border-y border-surface-line bg-ink py-20 text-white sm:py-24">
      <div className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft">
            Why these projects matter
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Built around real analyst and operator tasks
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            These projects are intentionally built around real analyst and
            operator tasks: sourcing leads, cleaning financials, tracking risk,
            reviewing performance, and organizing follow-up. They are not meant
            to look like flashy apps. They are meant to show that I can
            understand a messy business process, structure the information, and
            build something decision-useful.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {pillars.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 text-center"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/20 text-accent-soft">
                <Icon size={18} />
              </span>
              <span className="text-sm font-medium text-slate-200">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
