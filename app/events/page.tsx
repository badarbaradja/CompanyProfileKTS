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
  title: "Kegiatan",
  description: "Kalender kegiatan PT KTS: pelatihan, camp, dan aktivitas ESIC Network.",
};

const TYPE_LABEL: Record<KTSEventType, string> = {
  pelatihan: "Pelatihan",
  camp: "Camp",
  esic: "ESIC",
  jesic: "JESIC",
  lainnya: "Kegiatan",
};

export default function KegiatanPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <>
      <section className="section-padding">
        <Container>
          <FadeIn className="max-w-2xl">
            <SectionHeading
              eyebrow="Kegiatan"
              title="Kalender kegiatan"
              description="Data di bawah ini bersumber dari content/events.ts dan diperbarui manual oleh tim PT KTS."
            />
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-14">
            <EventList title="Akan datang" events={upcoming} emptyLabel="Belum ada kegiatan terjadwal." />
            <EventList title="Sudah terlaksana" events={past} emptyLabel="Belum ada riwayat kegiatan." />
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
      <h2 className="font-semibold text-[var(--color-text)] mb-6" style={{ fontSize: "var(--text-h3)" }}>
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
                    className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                        {TYPE_LABEL[event.type]}
                      </span>
                      {event.isDummy && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                          Contoh
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
