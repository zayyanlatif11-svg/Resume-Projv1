const pillars = [
  "Sourcing leads",
  "Cleaning financials",
  "Tracking risk",
  "Reviewing performance",
];

export function WhyProjectsMatter() {
  return (
    <section className="border-y border-surface-line bg-surface py-20 sm:py-28">
      <div className="container-content">
        <div className="grid gap-10 lg:grid-cols-[0.5fr_1fr] lg:gap-16">
          <p className="eyebrow lg:pt-3">Why these matter</p>

          <div className="max-w-2xl">
            <p className="display text-2xl sm:text-3xl lg:text-[2.5rem] lg:leading-[1.12]">
              Built around real analyst and operator tasks — not flashy demos.
            </p>
            <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-ink-soft">
              Each project starts from a task someone actually does: sourcing
              leads, cleaning financials, tracking risk, reviewing performance,
              organizing follow-up. The point isn't to look impressive
              technically — it's to show I can understand a messy business
              process, structure the information, and build something
              decision-useful.
            </p>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm font-light text-ink-muted">
              {pillars.map((p) => (
                <li key={p} className="flex items-center gap-2.5">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
