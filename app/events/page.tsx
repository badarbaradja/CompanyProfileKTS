import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EsicNetworkSection } from "@/components/sections/EsicNetworkSection";
import {
  getUpcomingEvents,
  getPastEvents,
  groupEventsByMonth,
  formatEventDate,
  type KTSEvent,
  type KTSEventType,
} from "@/content/events";

export const metadata: Metadata = {
  title: "Events",
  description: "PT KTS's events calendar: training, camps, and ESIC Network activities.",
};

const TYPE_LABEL: Record<KTSEventType, string> = {
  training: "Training",
  camp: "Camp",
  esic: "ESIC",
  jesic: "JESIC",
  other: "Event",
};

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <>
      <section className="section-padding">
        <Container>
          <FadeIn className="max-w-2xl">
            <SectionHeading
              eyebrow="Events"
              title="Events calendar"
              description="Sourced from content/events.ts and updated manually by the PT KTS team."
            />
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-14">
            <EventList title="Upcoming" events={upcoming} emptyLabel="No events scheduled yet." />
            <EventList title="Past" events={past} emptyLabel="No event history yet." />
          </div>
        </Container>
      </section>

      <EsicNetworkSection />
    </>
  );
}

function EventList({
  title,
  events,
  emptyLabel,
}: {
  title: string;
  events: KTSEvent[];
  emptyLabel: string;
}) {
  const groups = groupEventsByMonth(events);

  return (
    <div>
      <h2 className="font-display font-medium text-[var(--color-text)] mb-6" style={{ fontSize: "var(--text-h3)" }}>
        {title}
      </h2>

      {groups.length === 0 ? (
        <p className="text-sm text-[var(--color-text-muted)]">{emptyLabel}</p>
      ) : (
        <div className="space-y-8">
          {groups.map((group) => (
            <div key={group.label}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-3">
                {group.label}
              </h3>
              <ul className="space-y-3" role="list">
                {group.items.map((event) => (
                  <li
                    key={event.slug}
                    className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                        {TYPE_LABEL[event.type]}
                      </span>
                      {event.isDummy && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                          Example
                        </span>
                      )}
                    </div>
                    <p className="font-medium text-[var(--color-text)] mb-1">{event.title}</p>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {formatEventDate(event)}
                      {event.location ? ` · ${event.location}` : ""}
                    </p>
                    {event.description && (
                      <p className="text-sm text-[var(--color-text-muted)] mt-1.5">
                        {event.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
