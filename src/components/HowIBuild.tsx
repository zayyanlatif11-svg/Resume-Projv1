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
    <section id="process" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow">Process</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              How I approach projects
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              I treat each project like a small product built for one job. The
              goal is never to look impressive technically — it is to produce
              something an analyst or operator would actually keep open.
            </p>
          </div>

          <ol className="space-y-3">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-xl border border-surface-line bg-surface-subtle p-5"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-ink text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
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
