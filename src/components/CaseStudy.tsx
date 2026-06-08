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
        <h1 className="text-2xl font-light text-ink">Case study not found</h1>
        <Link
          to="/"
          className="link-underline mt-6 text-sm font-medium"
        >
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-surface-subtle">
      {/* Hero */}
      <header className="border-b border-surface-line">
        <div className="container-content py-14 sm:py-20">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-light text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={16} /> All work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CategoryBadge>{project.category}</CategoryBadge>
            <StatusBadge status={project.status} />
          </div>

          <h1 className="display mt-6 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-ink-soft">
            {project.oneLiner}
          </p>

          {/* At a glance */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-surface-line bg-surface px-4 py-3"
              >
                <p className="text-[10px] font-medium uppercase tracking-wide text-ink-muted">
                  {m.label}
                </p>
                <p className="mt-1 text-2xl font-light text-ink">{m.value}</p>
              </div>
            ))}
            <div className="rounded-xl border border-surface-line bg-surface px-4 py-3">
              <p className="text-[10px] font-medium uppercase tracking-wide text-ink-muted">
                Stage
              </p>
              <p className="mt-2 text-sm font-normal text-ink">
                {project.status}
              </p>
            </div>
            <div className="rounded-xl border border-surface-line bg-surface px-4 py-3">
              <p className="text-[10px] font-medium uppercase tracking-wide text-ink-muted">
                Data shown
              </p>
              <p className="mt-2 text-sm font-normal text-ink">Sample</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container-content grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        {/* Main column */}
        <div className="space-y-12">
          <Section title="Overview">
            <p>{cs.overview}</p>
          </Section>

          <div className="rounded-2xl bg-ink p-7 text-white sm:p-9">
            <div className="flex items-center gap-2">
              <Target size={18} className="text-accent-soft" />
              <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
                The business problem
              </h2>
            </div>
            <p className="mt-4 text-lg font-light leading-relaxed text-white/80">
              {cs.businessProblem}
            </p>
          </div>

          {/* Dashboard preview — placed early so the tool leads */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <p className="eyebrow">Dashboard preview</p>
              <span className="text-xs font-light text-ink-muted">
                Sample-data mockup
              </span>
            </div>
            <Mockup mockup={cs.mockup} />
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
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
            <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted">
              Core features
            </h2>
            <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-surface-line bg-surface-line sm:grid-cols-2">
              {cs.features.map((f) => (
                <div key={f.title} className="bg-surface p-6">
                  <h3 className="font-normal text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-ink-muted">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Example use case */}
          <div className="rounded-2xl border border-accent/20 bg-accent-wash p-7 sm:p-9">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-accent" />
              <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                Example use case
              </h2>
            </div>
            <p className="mt-4 text-lg font-light leading-relaxed text-ink-soft">
              {cs.exampleUseCase}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-surface-line bg-surface p-6">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted">
              Relevant for roles in
            </h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
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

          <div className="rounded-2xl border border-surface-line bg-surface p-6">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted">
              Business concepts applied
            </h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {cs.conceptsApplied.map((c) => (
                <Tag key={c}>{c}</Tag>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-ink p-6 text-white">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent-soft">
              What this tool demonstrates
            </p>
            <p className="mt-4 text-[15px] font-light leading-relaxed text-white/85">
              {cs.employerRelevance}
            </p>
          </div>

          <div className="rounded-2xl border border-surface-line bg-surface p-6">
            <div className="flex items-center gap-2">
              <Lightbulb size={16} className="text-accent" />
              <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted">
                What I would improve next
              </h3>
            </div>
            <ul className="mt-4 space-y-2.5">
              {cs.improveNext.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm font-light text-ink-soft"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Footer nav */}
      <div className="border-t border-surface-line">
        <div className="container-content flex flex-col items-center justify-between gap-4 py-12 sm:flex-row">
          <p className="text-sm font-light text-ink-muted">
            Explore the rest of the portfolio.
          </p>
          <div className="flex gap-7 text-sm font-medium">
            <Link to="/#projects" className="link-underline">
              <ArrowLeft size={15} /> All work
            </Link>
            <Link to="/#contact" className="link-underline">
              Get in touch <ArrowUpRight size={15} />
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
        {Icon && <Icon size={16} className="text-accent" />}
        <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted">
          {title}
        </h2>
      </div>
      <div className="mt-4 text-lg font-light leading-relaxed text-ink-soft">
        {children}
      </div>
    </div>
  );
}
