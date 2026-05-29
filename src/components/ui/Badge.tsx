import type { ProjectStatus } from "@/data/projects";

const statusStyles: Record<ProjectStatus, string> = {
  Built: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  Prototype: "bg-accent-wash text-accent ring-accent/20",
  "In Progress": "bg-amber-50 text-amber-700 ring-amber-600/20",
};

const statusDot: Record<ProjectStatus, string> = {
  Built: "bg-emerald-500",
  Prototype: "bg-accent",
  "In Progress": "bg-amber-500",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${statusDot[status]}`} />
      {status}
    </span>
  );
}

export function CategoryBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-ink/5 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">
      {children}
    </span>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-surface-line bg-surface-subtle px-2.5 py-1 text-xs font-medium text-ink-muted">
      {children}
    </span>
  );
}
