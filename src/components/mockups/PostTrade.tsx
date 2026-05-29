import { MockWindow, Kpi, Pill, MiniChart, SampleNote } from "./primitives";

const setups = [
  { name: "Opening range breakout", exp: "+0.42R", wr: "58%", tone: "green" },
  { name: "Trend pullback", exp: "+0.18R", wr: "47%", tone: "blue" },
  { name: "Mean reversion", exp: "−0.06R", wr: "41%", tone: "amber" },
  { name: "Revenge trades", exp: "−0.71R", wr: "29%", tone: "red" },
];

const mistakes = [
  { label: "Oversized risk", pct: 38 },
  { label: "Early exit", pct: 27 },
  { label: "No stop set", pct: 21 },
  { label: "Chasing entry", pct: 14 },
];

const equity = [0, 1, 0.6, 1.8, 1.4, 2.6, 2.2, 3.4, 3.0, 4.2];

export function PostTrade() {
  return (
    <MockWindow title="Post-Trade Analytics — performance review" tabs={["Overview", "Setups", "Mistakes"]}>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Kpi label="Win rate" value="51%" />
        <Kpi label="Expectancy" value="+0.21R" tone="good" />
        <Kpi label="Net profit" value="+$4,180" tone="good" />
        <Kpi label="Max drawdown" value="−$1,240" tone="bad" />
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-surface-line bg-surface-subtle p-3">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
            Equity curve
          </p>
          <div className="h-24">
            <MiniChart points={equity} />
          </div>
        </div>

        <div className="rounded-lg border border-surface-line p-3">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
            Setup performance
          </p>
          <div className="space-y-1.5">
            {setups.map((s) => (
              <div key={s.name} className="flex items-center justify-between gap-2 text-xs">
                <span className="truncate text-ink-soft">{s.name}</span>
                <span className="flex shrink-0 items-center gap-2">
                  <span className="text-[11px] text-ink-muted">{s.wr}</span>
                  <Pill tone={s.tone}>{s.exp}</Pill>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-surface-line bg-surface-subtle p-3">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
          Behavioral mistake breakdown
        </p>
        <div className="space-y-2">
          {mistakes.map((m) => (
            <div key={m.label} className="flex items-center gap-3 text-xs">
              <span className="w-24 shrink-0 text-ink-soft">{m.label}</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-accent" style={{ width: `${m.pct}%` }} />
              </div>
              <span className="w-8 shrink-0 text-right text-ink-muted">{m.pct}%</span>
            </div>
          ))}
        </div>
      </div>
      <SampleNote />
    </MockWindow>
  );
}
