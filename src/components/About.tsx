import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-content">
        <div className="grid gap-10 lg:grid-cols-[0.5fr_1fr] lg:gap-16">
          <p className="eyebrow lg:pt-3">About</p>
          <div className="max-w-2xl">
            <p className="display text-pretty text-2xl sm:text-3xl lg:text-[2.25rem] lg:leading-[1.18]">
              {site.about}
            </p>
            <p className="mt-8 text-sm font-light text-ink-muted">
              {site.role}, {site.school} · {site.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
