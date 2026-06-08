const steps = [
  {
    title: "Identify a real business workflow",
    description:
      "Start from a task someone actually does — sourcing targets, normalizing a P&L, tracking risk — not a hypothetical app idea.",
  },
  {
    title: "Break it into inputs, decisions, and outputs",
    description:
      "Map what goes in, what judgment is required, and what a useful result looks like for the person doing the work.",
  },
  {
    title: "Build a simple tool or dashboard around it",
    description:
      "Use AI-assisted development to turn the workflow into a focused interface — a tracker, scrubber, register, or dashboard.",
  },
  {
    title: "Pressure-test the output",
    description:
      "Ask whether the result would genuinely help an analyst, operator, broker, or manager make a decision faster.",
  },
  {
    title: "Improve the interface for clarity",
    description:
      "Refine the layout so the tool can be understood in seconds, because clarity is what makes it usable in real reviews.",
  },
];

export function HowIBuild() {
  return (
    <section id="process" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow">Process</p>
            <h2 className="display mt-5 text-3xl sm:text-4xl">
              How I approach projects
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-ink-soft">
              I treat each project like a small product built for one job. The
              goal is never to look impressive technically — it's to produce
              something an analyst or operator would actually keep open.
            </p>
          </div>

          <ol className="border-t border-ink/15">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-6 border-b border-ink/15 py-7"
              >
                <span className="pt-0.5 font-mono text-sm tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-normal text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-ink-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
