import type { ReactNode } from "react";

/** Shared building blocks for the dashboard mockups (sample-data UI). */

export function MockWindow({
  title,
  tabs = ["Overview", "All records", "Review"],
  children,
}: {
  title: string;
  /** Faux navigation tabs shown in the app toolbar. Set to [] to hide. */
  tabs?: string[];
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-surface-line bg-white shadow-lift">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-surface-line bg-surface-subtle px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </span>
        <span className="ml-2 truncate text-xs font-medium text-ink-muted">
          {title}
        </span>
      </div>

      {/* app toolbar */}
      {tabs.length > 0 && (
        <div className="flex items-center justify-between gap-3 border-b border-surface-line bg-white px-4 py-2">
          <div className="flex gap-1 overflow-hidden">
            {tabs.map((t, i) => (
              <span
                key={t}
                className={`whitespace-nowrap rounded-md px-2.5 py-1 text-[11px] font-medium ${
                  i === 0
                    ? "bg-accent-wash text-accent"
                    : "text-ink-muted"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
          <span className="hidden items-center gap-1.5 rounded-md border border-surface-line bg-surface-subtle px-2.5 py-1 text-[11px] text-ink-muted sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
            Search
          </span>
        </div>
      )}

      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

export function Kpi({
  label,
  value,
  hint,
  tone = "default",
}: {
  label: string;
  value: string;
  hint?: string;
  tone?: "default" | "good" | "bad" | "accent";
}) {
  const toneCls = {
    default: "text-ink",
    good: "text-emerald-600",
    bad: "text-rose-600",
    accent: "text-accent",
  }[tone];
  return (
    <div className="rounded-lg border border-surface-line bg-surface-subtle p-3">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
        {label}
      </p>
      <p className={`mt-1 text-xl font-bold ${toneCls}`}>{value}</p>
      {hint && <p className="mt-0.5 text-[11px] text-ink-muted">{hint}</p>}
    </div>
  );
}

const pillTones: Record<string, string> = {
  slate: "bg-slate-100 text-slate-700",
  blue: "bg-accent-wash text-accent",
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  red: "bg-rose-50 text-rose-700",
  purple: "bg-violet-50 text-violet-700",
};

export function Pill({
  children,
  tone = "slate",
}: {
  children: ReactNode;
  tone?: keyof typeof pillTones | string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${
        pillTones[tone] ?? pillTones.slate
      }`}
    >
      {children}
    </span>
  );
}

export function SampleNote() {
  return (
    <p className="mt-3 text-[11px] italic text-ink-muted">
      Interface mockup with sample data — illustrative, not real client data.
    </p>
  );
}

/** A lightweight CSS-only equity / trend line placeholder. */
export function MiniChart({
  points,
  color = "#1d4ed8",
}: {
  points: number[];
  color?: string;
}) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const coords = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * 100;
      const y = 100 - ((p - min) / range) * 100;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="h-full w-full"
    >
      <polyline
        points={coords}
        fill="none"
        stroke={color}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
