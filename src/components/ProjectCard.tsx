import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import type { Project } from "@/data/projects";
import { StatusBadge } from "@/components/ui/Badge";
import { CardPreview } from "@/components/CardPreview";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <article className="group flex flex-col rounded-2xl border border-surface-line bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift">
      <CardPreview metrics={project.metrics} seed={index} />

      <div className="mt-5 flex items-center justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
          {project.category}
        </p>
        <StatusBadge status={project.status} />
      </div>

      <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight text-ink">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {project.oneLiner}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        <span className="font-semibold text-ink">The workflow: </span>
        {project.problem}
      </p>

      <ul className="mt-4 space-y-1.5">
        {project.keyFeatures.slice(0, 3).map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
            <Check
              size={14}
              className="mt-0.5 shrink-0 text-accent"
              strokeWidth={3}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
          Relevant for
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.roleFit.map((r) => (
            <span
              key={r}
              className="inline-flex items-center rounded-md bg-accent-wash px-2.5 py-1 text-xs font-medium text-accent ring-1 ring-inset ring-accent/15"
            >
              {r}
            </span>
          ))}
        </div>

        <Link
          to={`/case-study/${project.slug}`}
          className="mt-5 inline-flex w-full items-center justify-between rounded-xl border border-surface-line bg-surface-subtle px-4 py-3 text-sm font-semibold text-ink transition-colors group-hover:border-accent/30 group-hover:bg-accent-wash group-hover:text-accent"
        >
          View case study
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  );
}
