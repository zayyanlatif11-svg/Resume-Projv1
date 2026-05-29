import { ArrowRight, FileText, Mail } from "lucide-react";
import { site } from "@/data/site";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-surface-line bg-white">
      {/* subtle grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      <div className="container-content relative py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="chip mb-6 bg-accent-wash text-accent ring-1 ring-inset ring-accent/15">
            {site.positioning}
          </span>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {site.hero.headline}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
            {site.hero.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white shadow-card transition-colors hover:bg-ink-soft"
            >
              View Projects <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo("case-studies")}
              className="inline-flex items-center gap-2 rounded-lg border border-surface-line bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-subtle"
            >
              <FileText size={16} /> See Case Studies
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-ink-muted transition-colors hover:text-ink"
            >
              <Mail size={16} /> Contact Me
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {site.hero.chips.map((chip) => (
              <span key={chip} className="chip">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
