import { MiniChart } from "@/components/mockups/primitives";

/**
 * A compact dashboard-snapshot header rendered at the top of each project
 * card. It makes every card read like a small product/tool rather than a
 * resume bullet. Metrics come from `project.metrics` (sample figures).
 */

// Deterministic sparkline shapes so each card looks distinct but stable.
const shapes: Record<string, number[]> = {
  a: [2, 3, 2.4, 4, 3.6, 5, 4.6, 6],
  b: [6, 5.2, 5.6, 4.4, 4.8, 3.6, 4, 3],
  c: [3, 3.4, 3.1, 3.8, 3.5, 4.2, 4, 4.6],
};

export function CardPreview({
  metrics,
  seed,
}: {
  metrics: { label: string; value: string }[];
  seed: number;
}) {
  const shapeKey = ["a", "b", "c"][seed % 3];
  return (
    <div className="relative overflow-hidden rounded-xl border border-surface-line bg-gradient-to-br from-white to-surface-subtle p-3">
      {/* faux app chrome */}
      <div className="mb-2.5 flex items-center justify-between">
        <span className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
          Live preview
        </span>
      </div>

      <div className="flex items-stretch gap-2">
        {metrics.slice(0, 2).map((m) => (
          <div
            key={m.label}
            className="flex-1 rounded-lg border border-surface-line bg-white px-2.5 py-2"
          >
            <p className="text-[9px] font-semibold uppercase tracking-wide text-ink-muted">
              {m.label}
            </p>
            <p className="mt-0.5 text-base font-bold leading-tight text-ink">
              {m.value}
            </p>
          </div>
        ))}
        <div className="flex w-16 items-end rounded-lg border border-surface-line bg-white p-1.5">
          <div className="h-8 w-full">
            <MiniChart points={shapes[shapeKey]} />
          </div>
        </div>
      </div>
    </div>
  );
}
