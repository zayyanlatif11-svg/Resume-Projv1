import { MockWindow, Pill, SampleNote } from "./primitives";

const risks = [
  { item: "Single payroll vendor dependency", type: "Vendor", owner: "Ops Lead", status: "Mitigating", tone: "amber" },
  { item: "No documented close checklist", type: "Process", owner: "Finance", status: "Open", tone: "red" },
  { item: "Customer concentration (>30%)", type: "Operational", owner: "Founder", status: "Open", tone: "red" },
  { item: "Expired contractor NDAs", type: "Compliance", owner: "Ops Lead", status: "Closed", tone: "green" },
];

// 3x3 severity matrix counts (likelihood rows x impact cols), sample data
const matrix = [
  [0, 1, 2],
  [1, 1, 0],
  [0, 1, 0],
];
const cellTone = (r: number, c: number) => {
  const sev = r + c;
  if (sev >= 3) return "bg-rose-100 text-rose-700";
  if (sev === 2) return "bg-amber-100 text-amber-700";
  return "bg-emerald-50 text-emerald-700";
};

export function RiskLedger() {
  return (
    <MockWindow title="RiskLedger — operational risk register" tabs={["Register", "Severity matrix", "Owners"]}>
      <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
        <div className="overflow-hidden rounded-lg border border-surface-line">
          <table className="w-full text-left text-xs">
            <thead className="bg-surface-subtle text-[10px] uppercase tracking-wide text-ink-muted">
              <tr>
                <th className="px-3 py-2 font-semibold">Risk item</th>
                <th className="px-3 py-2 font-semibold">Owner</th>
                <th className="px-3 py-2 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-line">
              {risks.map((r) => (
                <tr key={r.item} className="bg-white">
                  <td className="px-3 py-2.5">
                    <p className="font-medium text-ink">{r.item}</p>
                    <p className="text-[11px] text-ink-muted">{r.type}</p>
                  </td>
                  <td className="px-3 py-2.5 text-ink-soft">{r.owner}</td>
                  <td className="px-3 py-2.5"><Pill tone={r.tone}>{r.status}</Pill></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-lg border border-surface-line bg-surface-subtle p-3">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
            Severity matrix
          </p>
          <div className="flex gap-2">
            <div className="flex flex-col justify-between py-1 text-[9px] font-semibold uppercase text-ink-muted">
              <span>High</span><span>Med</span><span>Low</span>
            </div>
            <div className="grid flex-1 grid-cols-3 gap-1">
              {matrix.map((row, r) =>
                row.map((count, c) => (
                  <div
                    key={`${r}-${c}`}
                    className={`grid aspect-square place-items-center rounded text-sm font-bold ${cellTone(2 - r, c)}`}
                  >
                    {count || ""}
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="mt-1 grid grid-cols-3 gap-1 pl-6 text-center text-[9px] font-semibold uppercase text-ink-muted">
            <span>Low</span><span>Med</span><span>High</span>
          </div>
          <p className="mt-1 text-center text-[9px] text-ink-muted">Impact →</p>
        </div>
      </div>
      <SampleNote />
    </MockWindow>
  );
}
