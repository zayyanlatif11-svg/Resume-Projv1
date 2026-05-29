import { MockWindow, Pill, SampleNote } from "./primitives";

const rows = [
  { co: "Bayline HVAC Services", ind: "Home Services", geo: "Sacramento, CA", stage: "In conversation", tone: "green", broker: "M. Reyes" },
  { co: "Coastal Facility Mgmt", ind: "B2B Services", geo: "Tampa, FL", stage: "Contacted", tone: "amber", broker: "Direct / owner" },
  { co: "Northgate Dental Group", ind: "Healthcare", geo: "Columbus, OH", stage: "Diligence", tone: "blue", broker: "Sunbelt" },
  { co: "PrintWorks Logistics", ind: "Light Mfg", geo: "Reno, NV", stage: "Sourced", tone: "slate", broker: "—" },
];

export function SearchFundCrm() {
  return (
    <MockWindow title="Sourcing CRM — pipeline" tabs={["Pipeline", "Brokers", "Follow-ups"]}>
      <div className="mb-3 flex flex-wrap gap-2">
        <Pill tone="blue">42 targets</Pill>
        <Pill tone="amber">11 awaiting follow-up</Pill>
        <Pill tone="green">3 in conversation</Pill>
      </div>
      <div className="overflow-hidden rounded-lg border border-surface-line">
        <table className="w-full text-left text-xs">
          <thead className="bg-surface-subtle text-[10px] uppercase tracking-wide text-ink-muted">
            <tr>
              <th className="px-3 py-2 font-semibold">Target</th>
              <th className="hidden px-3 py-2 font-semibold sm:table-cell">Industry</th>
              <th className="hidden px-3 py-2 font-semibold md:table-cell">Broker</th>
              <th className="px-3 py-2 font-semibold">Stage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-line">
            {rows.map((r) => (
              <tr key={r.co} className="bg-white">
                <td className="px-3 py-2.5">
                  <p className="font-semibold text-ink">{r.co}</p>
                  <p className="text-[11px] text-ink-muted">{r.geo}</p>
                </td>
                <td className="hidden px-3 py-2.5 text-ink-soft sm:table-cell">{r.ind}</td>
                <td className="hidden px-3 py-2.5 text-ink-soft md:table-cell">{r.broker}</td>
                <td className="px-3 py-2.5">
                  <Pill tone={r.tone}>{r.stage}</Pill>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SampleNote />
    </MockWindow>
  );
}
