import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { getCaseStudy } from "@/data/caseStudies";
import { StatusBadge } from "@/components/ui/Badge";

export function CaseStudyPreviews() {
  return (
    <section
      id="case-studies"
      className="scroll-mt-20 bg-surface-subtle py-20 sm:py-24"
    >
      <div className="container-content">
        <div className="max-w-2xl">
          <p className="eyebrow">Case Studies</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            The thinking behind each tool
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Every project has a full case study covering the business problem,
            who it is for, what I built, and what I would improve next — written
            to be skimmed by a hiring manager.
          </p>
        </div>

        <div className="mt-12 divide-y divide-surface-line overflow-hidden rounded-2xl border border-surface-line bg-white shadow-card">
          {projects.map((p) => {
            const cs = getCaseStudy(p.slug);
            return (
              <Link
                key={p.slug}
                to={`/case-study/${p.slug}`}
                className="group flex flex-col gap-3 p-6 transition-colors hover:bg-surface-subtle sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-bold tracking-tight text-ink">
                      {p.title}
                    </h3>
                    <StatusBadge status={p.status} />
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {cs?.overview ?? p.oneLiner}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                  Read case study
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
