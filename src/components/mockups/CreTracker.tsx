import { MockWindow, Pill, SampleNote } from "./primitives";

const tenants = [
  { co: "Haldenby Capital", bldg: "201 Mission", sub: "SoMa", exp: "Q3 2026", risk: "High", tone: "red", sqft: "18,400" },
  { co: "Northpeak Software", bldg: "555 California", sub: "FiDi", exp: "Q1 2027", risk: "Medium", tone: "amber", sqft: "32,000" },
  { co: "Marlow & Reed LLP", bldg: "44 Montgomery", sub: "FiDi", exp: "Q4 2026", risk: "Medium", tone: "amber", sqft: "12,200" },
  { co: "Vantage Health", bldg: "1 Bush St", sub: "FiDi", exp: "Q2 2028", risk: "Low", tone: "green", sqft: "9,800" },
];

export function CreTracker() {
  return (
    <MockWindow title="CRE Lease Expiry & Flight Risk Tracker" tabs={["Tenants", "Timeline", "Outreach"]}>
      <div className="mb-3 flex flex-wrap gap-2">
        <Pill tone="red">2 high flight risk</Pill>
        <Pill tone="amber">5 in rollover window</Pill>
        <Pill tone="slate">SF office · sample set</Pill>
      </div>

      <div className="overflow-hidden rounded-lg border border-surface-line">
        <table className="w-full text-left text-xs">
          <thead className="bg-surface-subtle text-[10px] uppercase tracking-wide text-ink-muted">
            <tr>
              <th className="px-3 py-2 font-semibold">Tenant</th>
              <th className="hidden px-3 py-2 font-semibold sm:table-cell">Submarket</th>
              <th className="px-3 py-2 font-semibold">Lease exp.</th>
              <th className="px-3 py-2 font-semibold">Risk</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-line">
            {tenants.map((t) => (
              <tr key={t.co} className="bg-white">
                <td className="px-3 py-2.5">
                  <p className="font-semibold text-ink">{t.co}</p>
                  <p className="text-[11px] text-ink-muted">{t.bldg} · {t.sqft} sf</p>
                </td>
                <td className="hidden px-3 py-2.5 text-ink-soft sm:table-cell">{t.sub}</td>
                <td className="px-3 py-2.5 font-medium text-ink-soft">{t.exp}</td>
                <td className="px-3 py-2.5"><Pill tone={t.tone}>{t.risk}</Pill></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 rounded-lg border border-surface-line bg-surface-subtle p-3">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
          Rollover timeline (next 24 months)
        </p>
        <div className="flex h-6 overflow-hidden rounded-md">
          <div className="flex-[3] bg-rose-400" title="0-6mo" />
          <div className="flex-[4] bg-amber-300" title="6-12mo" />
          <div className="flex-[5] bg-accent-soft/60" title="12-18mo" />
          <div className="flex-[6] bg-slate-200" title="18-24mo" />
        </div>
      </div>
      <SampleNote />
    </MockWindow>
  );
}
