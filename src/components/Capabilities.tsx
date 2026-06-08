import { site } from "@/data/site";

/**
 * A scannable competency band placed right under the hero so a hiring manager
 * can match the work to a role in seconds. Grouped by the kind of work rather
 * than by tool or buzzword.
 */
export function Capabilities() {
  return (
    <section className="border-b border-surface-line bg-white py-12 sm:py-14">
      <div className="container-content">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {site.capabilities.map((cap) => (
            <div key={cap.group}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                {cap.group}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {cap.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
