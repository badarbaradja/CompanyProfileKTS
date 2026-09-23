import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { buttonClasses } from "@/components/ui/Button";
import { getUpcomingEvents, formatEventDate, type KTSEventType } from "@/content/events";

const TYPE_LABEL: Record<KTSEventType, string> = {
  training: "Training",
  camp: "Camp",
  esic: "ESIC",
  jesic: "JESIC",
  other: "Event",
};

export function UpcomingActivitiesSection() {
  const upcoming = getUpcomingEvents().slice(0, 4);

  if (upcoming.length === 0) return null;

  return (
    <section id="upcoming-activities" aria-labelledby="upcoming-activities-heading" className="section-padding">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
          <FadeIn>
            <h2
              id="upcoming-activities-heading"
              className="leading-[1.1] tracking-tight mb-4"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Training and upcoming events
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
              Upcoming training, camps, and ESIC Network activities.
            </p>
            <Link href="/events" className={buttonClasses("outline", "md")}>
              View full calendar
            </Link>
          </FadeIn>

          <FadeIn direction="left">
            <ul className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]" role="list">
              {upcoming.map((event) => (
                <li key={event.slug} className="flex items-center justify-between gap-4 py-5">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                        {TYPE_LABEL[event.type]}
                      </span>
                      {event.isDummy && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                          Example
                        </span>
                      )}
                    </div>
                    <p className="font-display text-lg font-medium text-[var(--color-text)] truncate">
                      {event.title}
                    </p>
                  </div>
                  <p className="text-sm text-[var(--color-text-muted)] shrink-0 whitespace-nowrap">
                    {formatEventDate(event)}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
