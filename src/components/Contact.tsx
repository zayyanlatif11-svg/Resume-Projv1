import { Download, Linkedin, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-ink py-20 text-white sm:py-24">
      <div className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Want the resume version?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            The projects are the portfolio — but if you'd like the traditional
            one-pager, it's here too. Happy to talk through any of these tools.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-slate-100"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Mail size={16} /> Email Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-300">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Mail size={15} className="text-accent-soft" /> {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Linkedin size={15} className="text-accent-soft" />{" "}
              {site.linkedinLabel}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-accent-soft" /> {site.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
