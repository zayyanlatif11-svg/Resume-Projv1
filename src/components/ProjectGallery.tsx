import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { MiniChart } from "@/components/mockups/primitives";

// Deterministic sparkline shapes so each thumbnail looks distinct but stable.
const shapes: number[][] = [
  [2, 3, 2.4, 4, 3.6, 5, 4.6, 6],
  [6, 5.2, 5.6, 4.4, 4.8, 3.6, 4, 3],
  [3, 3.4, 3.1, 3.8, 3.5, 4.2, 4, 4.6],
];

function WorkThumb({ project, seed }: { project: Project; seed: number }) {
  const m = project.metrics[0];
  return (
    <div className="hidden w-32 shrink-0 self-center rounded-lg border border-surface-line bg-surface p-2.5 sm:block">
      <span className="mb-2 flex gap-1">
        <span className="h-1 w-1 rounded-full bg-ink/15" />
        <span className="h-1 w-1 rounded-full bg-ink/15" />
        <span className="h-1 w-1 rounded-full bg-ink/15" />
      </span>
      <p className="text-[8px] font-medium uppercase tracking-wide text-ink-muted">
        {m.label}
      </p>
      <p className="text-sm font-semibold leading-none text-ink">{m.value}</p>
      <div className="mt-2 h-5">
        <MiniChart points={shapes[seed % shapes.length]} color="#9a5b3b" />
      </div>
    </div>
  );
}

export function ProjectGallery() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-content">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="eyebrow">Selected work</p>
            <h2 className="display mt-5 text-3xl sm:text-4xl">
              Six tools, built around real workflows.
            </h2>
          </div>
          <p className="text-sm font-light text-ink-muted">
            {projects.length} projects · sourcing → diligence → risk → trading →
            operations
          </p>
        </div>

        <ul className="mt-14 border-t border-ink/15">
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Link
                to={`/case-study/${p.slug}`}
                className="group flex items-start gap-5 border-b border-ink/15 py-8 transition-colors hover:bg-surface sm:gap-8 sm:py-10"
              >
                <span className="pt-1.5 font-mono text-sm tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-4">
                    <h3 className="shrink-0 text-2xl font-light tracking-tight text-ink transition-colors group-hover:text-accent sm:text-3xl">
                      {p.title}
                    </h3>
                    {/* dotted leader guiding the eye to the status */}
                    <span className="hidden h-0 flex-1 self-center border-b border-dotted border-ink/25 sm:block" />
                    <span className="hidden shrink-0 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-muted sm:block">
                      {p.status}
                    </span>
                  </div>

                  <p className="mt-3 max-w-2xl text-pretty font-light leading-relaxed text-ink-soft">
                    {p.oneLiner}
                  </p>

                  <p className="mt-3 text-xs font-light text-ink-muted">
                    {p.roleFit.join("  ·  ")}
                  </p>

                  <span className="mt-3 inline-block text-[11px] font-medium uppercase tracking-[0.12em] text-ink-muted sm:hidden">
                    {p.status}
                  </span>
                </div>

                <WorkThumb project={p} seed={i} />

                <ArrowUpRight
                  size={22}
                  strokeWidth={1.5}
                  className="hidden self-center text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent sm:block"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
