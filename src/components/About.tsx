import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <div className="container-content">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">About</p>
          <p className="mt-4 text-pretty text-xl font-medium leading-relaxed text-ink sm:text-2xl">
            {site.about}
          </p>
          <p className="mt-5 text-sm text-ink-muted">
            {site.role}, {site.school} · {site.location}
          </p>
        </div>
      </div>
    </section>
  );
}
