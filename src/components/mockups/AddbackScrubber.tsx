import { AlertTriangle } from "lucide-react";
import { MockWindow, Kpi, Pill, SampleNote } from "./primitives";

const lines = [
  { item: "Owner salary (above market)", amt: "$185,000", adj: "+$95,000", cls: "Owner comp", tone: "blue" },
  { item: "Family member payroll", amt: "$52,000", adj: "+$52,000", cls: "Discretionary", tone: "amber" },
  { item: "One-time legal settlement", amt: "$28,000", adj: "+$28,000", cls: "One-time", tone: "green" },
  { item: "\"Consulting\" — unsupported", amt: "$41,000", adj: "flagged", cls: "Review", tone: "red" },
];

export function AddbackScrubber() {
  return (
    <MockWindow title="Add-Back Scrubber — normalization" tabs={["P&L", "Add-backs", "Summary"]}>
      <div className="grid grid-cols-3 gap-3">
        <Kpi label="Reported EBITDA" value="$310K" />
        <Kpi label="Total add-backs" value="$175K" tone="accent" />
        <Kpi label="Adjusted EBITDA" value="$485K" tone="good" hint="conceptual" />
      </div>

      <div className="mt-4 overflow-hidden rounded-lg border border-surface-line">
        <table className="w-full text-left text-xs">
          <thead className="bg-surface-subtle text-[10px] uppercase tracking-wide text-ink-muted">
            <tr>
              <th className="px-3 py-2 font-semibold">P&amp;L line item</th>
              <th className="hidden px-3 py-2 font-semibold sm:table-cell">Reported</th>
              <th className="px-3 py-2 font-semibold">Adjustment</th>
              <th className="px-3 py-2 font-semibold">Class</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-line">
            {lines.map((l) => (
              <tr key={l.item} className="bg-white">
                <td className="px-3 py-2.5 font-medium text-ink">{l.item}</td>
                <td className="hidden px-3 py-2.5 text-ink-soft sm:table-cell">{l.amt}</td>
                <td className="px-3 py-2.5 font-semibold text-ink-soft">{l.adj}</td>
                <td className="px-3 py-2.5"><Pill tone={l.tone}>{l.cls}</Pill></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-rose-200 bg-rose-50 p-3">
        <AlertTriangle size={15} className="mt-0.5 shrink-0 text-rose-600" />
        <p className="text-[11px] leading-relaxed text-rose-700">
          <span className="font-semibold">1 risk flag:</span> $41K
          &quot;consulting&quot; add-back lacks supporting documentation — likely
          to be challenged by a buyer.
        </p>
      </div>
      <SampleNote />
    </MockWindow>
  );
}
