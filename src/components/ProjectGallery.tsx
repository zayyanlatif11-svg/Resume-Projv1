import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectGallery() {
  return (
    <section id="projects" className="scroll-mt-20 bg-surface-subtle py-20 sm:py-24">
      <div className="container-content">
        <div className="max-w-2xl">
          <p className="eyebrow">Featured Projects</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Analyst tools, built around real workflows
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Each project is a small, practical tool modeled around a task an
            analyst, operator, or broker actually does — sourcing, diligence,
            risk, performance review, and follow-up. Open any card for the full
            case study.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
