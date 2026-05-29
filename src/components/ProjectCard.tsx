import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import type { Project } from "@/data/projects";
import { StatusBadge, Tag } from "@/components/ui/Badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-surface-line bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lift">
      <div className="mb-4 flex items-start justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
          {project.category}
        </p>
        <StatusBadge status={project.status} />
      </div>

      <h3 className="text-lg font-bold tracking-tight text-ink">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {project.oneLiner}
      </p>

      <div className="mt-5 rounded-xl border border-surface-line bg-surface-subtle p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
          Problem solved
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
          {project.problem}
        </p>
      </div>

      <ul className="mt-5 space-y-2">
        {project.keyFeatures.slice(0, 4).map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
            <Check
              size={15}
              className="mt-0.5 shrink-0 text-accent"
              strokeWidth={2.5}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.concepts.slice(0, 4).map((c) => (
          <Tag key={c}>{c}</Tag>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-surface-line pt-4">
        <Link
          to={`/case-study/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-accent"
        >
          View Case Study
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  );
}
