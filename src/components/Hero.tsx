import { ArrowDown, Download } from "lucide-react";
import { site } from "@/data/site";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section className="border-b border-surface-line">
      <div className="container-content py-24 sm:py-32 lg:py-40">
        <div className="max-w-4xl">
          <p className="eyebrow">{site.hero.eyebrow}</p>

          <h1 className="display mt-8 text-4xl sm:text-5xl lg:text-[4.25rem] lg:leading-[1.04]">
            {site.hero.headline}
          </h1>

          <p className="mt-10 max-w-2xl text-pretty text-lg font-light leading-relaxed text-ink-soft sm:text-xl">
            {site.hero.subheadline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium">
            <button
              onClick={() => scrollTo("projects")}
              className="link-underline"
            >
              View work <ArrowDown size={15} />
            </button>
            <a href={site.resumePath} download className="link-underline">
              <Download size={15} /> Download résumé
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="link-underline"
            >
              Get in touch
            </button>
          </div>

          <p className="mt-12 max-w-xl text-sm font-light leading-relaxed text-ink-muted">
            {site.hero.note}
          </p>
        </div>
      </div>
    </section>
  );
}
