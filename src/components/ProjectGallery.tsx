import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

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
                className="group grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-2 border-b border-ink/15 py-8 transition-colors hover:bg-surface sm:grid-cols-[3rem_1fr_auto] sm:gap-x-8 sm:py-10"
              >
                <span className="pt-1 font-mono text-sm tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-2xl font-light tracking-tight text-ink transition-colors group-hover:text-accent sm:text-3xl">
                      {p.title}
                    </h3>
                    <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink-muted">
                      {p.status}
                    </span>
                  </div>

                  <p className="mt-3 max-w-2xl text-pretty font-light leading-relaxed text-ink-soft">
                    {p.oneLiner}
                  </p>

                  <p className="mt-3 text-xs font-light text-ink-muted">
                    {p.roleFit.join("  ·  ")}
                  </p>
                </div>

                <ArrowUpRight
                  size={22}
                  strokeWidth={1.5}
                  className="hidden text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent sm:block sm:self-center"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
