import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-ink py-24 text-surface-subtle sm:py-32"
    >
      <div className="container-content">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
          Contact
        </p>

        <h2 className="mt-8 max-w-3xl text-pretty text-3xl font-light leading-[1.1] tracking-tightest sm:text-5xl">
          The projects are the portfolio — happy to talk through any of them.
        </h2>

        <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/60">
          Looking for internships in finance operations, accounting, business
          operations, strategy, fintech, search funds, and market research. If
          you'd like the traditional one-pager, it's here too.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-light">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 border-b border-white/30 pb-0.5 text-white transition-colors hover:border-white"
          >
            {site.email} <ArrowUpRight size={15} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-b border-white/30 pb-0.5 text-white transition-colors hover:border-white"
          >
            {site.linkedinLabel} <ArrowUpRight size={15} />
          </a>
          <a
            href={site.resumePath}
            download
            className="inline-flex items-center gap-1.5 border-b border-white/30 pb-0.5 text-white transition-colors hover:border-white"
          >
            Download résumé <ArrowUpRight size={15} />
          </a>
        </div>

        <p className="mt-12 text-sm font-light text-white/40">
          {site.location}
        </p>
      </div>
    </section>
  );
}
