import { site } from "@/data/site";

/**
 * A scannable competency band placed right under the hero so a hiring manager
 * can match the work to a role in seconds. Grouped by the kind of work rather
 * than by tool or buzzword.
 */
export function Capabilities() {
  return (
    <section className="border-y border-surface-line bg-surface py-20 sm:py-28">
      <div className="container-content">
        <div className="grid gap-10 lg:grid-cols-[0.5fr_1fr] lg:gap-16">
          <p className="eyebrow lg:pt-1">Capabilities</p>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {site.capabilities.map((cap) => (
              <div key={cap.group}>
                <h3 className="text-sm font-medium text-ink">{cap.group}</h3>
                <ul className="mt-4 space-y-2">
                  {cap.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm font-light leading-relaxed text-ink-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
