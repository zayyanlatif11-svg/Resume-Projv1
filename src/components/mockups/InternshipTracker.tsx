import { Clock } from "lucide-react";
import { MockWindow, Kpi, Pill, SampleNote } from "./primitives";

const leads = [
  { co: "Mercury", role: "Risk Ops Intern", status: "Replied", tone: "green", fit: 92 },
  { co: "Ramp", role: "Finance Ops Intern", status: "Applied", tone: "blue", fit: 88 },
  { co: "Search fund (cold)", role: "Sourcing Analyst", status: "Cold email sent", tone: "amber", fit: 81 },
  { co: "Regional CRE firm", role: "Research Intern", status: "Sourced", tone: "slate", fit: 74 },
];

export function InternshipTracker() {
  return (
    <MockWindow title="Internship Lead Tracker — funnel" tabs={["Funnel", "Outreach", "Follow-ups"]}>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Kpi label="Active leads" value="34" />
        <Kpi label="Outreach sent" value="22" tone="accent" />
        <Kpi label="Replies" value="6" tone="good" />
        <Kpi label="Interviews" value="2" tone="good" />
      </div>

      <div className="mt-4 overflow-hidden rounded-lg border border-surface-line">
        <table className="w-full text-left text-xs">
          <thead className="bg-surface-subtle text-[10px] uppercase tracking-wide text-ink-muted">
            <tr>
              <th className="px-3 py-2 font-semibold">Company / role</th>
              <th className="px-3 py-2 font-semibold">Status</th>
              <th className="px-3 py-2 font-semibold">Fit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-line">
            {leads.map((l) => (
              <tr key={l.co} className="bg-white">
                <td className="px-3 py-2.5">
                  <p className="font-semibold text-ink">{l.co}</p>
                  <p className="text-[11px] text-ink-muted">{l.role}</p>
                </td>
                <td className="px-3 py-2.5"><Pill tone={l.tone}>{l.status}</Pill></td>
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-12 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full rounded-full bg-accent" style={{ width: `${l.fit}%` }} />
                    </div>
                    <span className="text-[11px] text-ink-muted">{l.fit}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3">
        <Clock size={15} className="mt-0.5 shrink-0 text-amber-600" />
        <p className="text-[11px] leading-relaxed text-amber-800">
          <span className="font-semibold">4 follow-ups due:</span> high-fit leads
          with no reply after 7 days — queued for this week&apos;s outreach.
        </p>
      </div>
      <SampleNote />
    </MockWindow>
  );
}
