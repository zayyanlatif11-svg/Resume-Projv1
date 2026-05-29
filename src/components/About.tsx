import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="container-content">
        <div className="mx-auto max-w-3xl rounded-2xl border border-surface-line bg-surface-subtle p-8 sm:p-10">
          <p className="eyebrow">About</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            A business student who builds practical tools
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            {site.about}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="chip">{site.school}</span>
            <span className="chip">{site.role}</span>
            <span className="chip">{site.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
