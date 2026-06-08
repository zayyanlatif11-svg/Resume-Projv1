import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Lightbulb,
  Sparkles,
  Target,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { projects } from "@/data/projects";
import { getCaseStudy } from "@/data/caseStudies";
import { CategoryBadge, StatusBadge, Tag } from "@/components/ui/Badge";
import { Mockup } from "@/components/mockups";

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const cs = slug ? getCaseStudy(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!project || !cs) {
    return (
      <div className="container-content py-32 text-center">
        <h1 className="text-2xl font-bold text-ink">Case study not found</h1>
        <Link
          to="/"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent"
        >
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-white">
      {/* Hero */}
      <header className="border-b border-surface-line bg-surface-subtle">
        <div className="container-content py-10 sm:py-14">
          <Link
            to="/#case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={16} /> All case studies
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <CategoryBadge>{project.category}</CategoryBadge>
            <StatusBadge status={project.status} />
          </div>

          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {project.oneLiner}
          </p>

          {/* At a glance */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-surface-line bg-white px-4 py-3"
              >
                <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
                  {m.label}
                </p>
                <p className="mt-0.5 text-xl font-bold text-ink">{m.value}</p>
              </div>
            ))}
            <div className="rounded-xl border border-surface-line bg-white px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
                Stage
              </p>
              <p className="mt-1 text-sm font-bold text-ink">{project.status}</p>
            </div>
            <div className="rounded-xl border border-surface-line bg-white px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
                Data shown
              </p>
              <p className="mt-1 text-sm font-bold text-ink">Sample</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container-content grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.5fr_1fr]">
        {/* Main column */}
        <div className="space-y-10">
          <Section title="Overview">
            <p>{cs.overview}</p>
          </Section>

          <div className="rounded-2xl border border-surface-line bg-ink p-6 text-white sm:p-7">
            <div className="flex items-center gap-2">
              <Target size={18} className="text-accent-soft" />
              <h2 className="text-base font-bold">The business problem</h2>
            </div>
            <p className="mt-3 leading-relaxed text-slate-300">
              {cs.businessProblem}
            </p>
          </div>

          {/* Dashboard preview — placed early so the tool leads */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <p className="eyebrow">Dashboard preview</p>
              <span className="text-xs text-ink-muted">Sample-data mockup</span>
            </div>
            <Mockup mockup={cs.mockup} />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Section icon={Users} title="Who the tool is for">
              <p>{cs.audience}</p>
            </Section>
            <Section icon={Target} title="Why the workflow is messy">
              <p>{cs.whyMessy}</p>
            </Section>
          </div>

          <Section icon={Wrench} title="What I built">
            <p>{cs.whatIBuilt}</p>
          </Section>

          {/* Core features */}
          <div>
            <h2 className="text-base font-bold text-ink">Core features</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {cs.features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-surface-line bg-white p-5 shadow-card transition-shadow hover:shadow-lift"
                >
                  <h3 className="font-semibold text-ink">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Example use case */}
          <div className="rounded-2xl border border-accent/20 bg-accent-wash p-6 sm:p-7">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-accent" />
              <h2 className="text-base font-bold text-ink">Example use case</h2>
            </div>
            <p className="mt-3 leading-relaxed text-ink-soft">
              {cs.exampleUseCase}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-surface-line bg-white p-6 shadow-card">
            <h3 className="text-sm font-bold text-ink">Relevant for roles in</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.roleFit.map((r) => (
                <span
                  key={r}
                  className="inline-flex items-center rounded-md bg-accent-wash px-2.5 py-1 text-xs font-medium text-accent ring-1 ring-inset ring-accent/15"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-surface-line bg-white p-6 shadow-card">
            <h3 className="text-sm font-bold text-ink">
              Business concepts applied
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {cs.conceptsApplied.map((c) => (
                <Tag key={c}>{c}</Tag>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent to-accent/80 p-6 text-white shadow-lift">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/80">
              What this tool demonstrates
            </p>
            <p className="mt-3 text-[15px] font-medium leading-relaxed">
              {cs.employerRelevance}
            </p>
          </div>

          <div className="rounded-2xl border border-surface-line bg-surface-subtle p-6">
            <div className="flex items-center gap-2">
              <Lightbulb size={16} className="text-accent" />
              <h3 className="text-sm font-bold text-ink">
                What I would improve next
              </h3>
            </div>
            <ul className="mt-3 space-y-2">
              {cs.improveNext.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Footer nav */}
      <div className="border-t border-surface-line bg-surface-subtle">
        <div className="container-content flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
          <p className="text-sm text-ink-muted">
            Explore the rest of the portfolio.
          </p>
          <div className="flex gap-3">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-surface-line bg-white px-4 py-2.5 text-sm font-semibold text-ink hover:bg-surface-subtle"
            >
              <ArrowLeft size={15} /> All projects
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-ink-soft"
            >
              Contact me <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon?: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        {Icon && <Icon size={18} className="text-accent" />}
        <h2 className="text-base font-bold text-ink">{title}</h2>
      </div>
      <div className="mt-3 leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}
