import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pending } from "@/components/ui/Pending";
import { site } from "@/content/site";

export function EsicNetworkSection() {
  const { esicNetwork } = site;

  return (
    <section id="esic-network" aria-labelledby="esic-network-heading" className="section-padding-sm">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <FadeIn>
            <SectionHeading as="h2" eyebrow="Jaringan" title={esicNetwork.name} />
            <p className="text-[var(--color-text-muted)] leading-relaxed mt-2 mb-6" style={{ fontSize: "var(--text-body-lg)" }}>
              {esicNetwork.relationship}
            </p>
            {!esicNetwork.expansion && (
              <Pending label="Kepanjangan dan penjelasan lengkap ESIC" />
            )}
          </FadeIn>

          <FadeIn direction="left">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={esicNetwork.logo}
                alt={esicNetwork.name}
                width={416}
                height={143}
                className="h-10 w-auto object-contain"
              />
            </div>
            <ul className="grid grid-cols-2 gap-3" role="list">
              {esicNetwork.activities.map((activity) => (
                <li
                  key={activity.name}
                  className="flex items-center justify-between gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3"
                >
                  <span className="text-sm font-medium text-[var(--color-text)]">
                    {activity.name}
                  </span>
                  <span
                    className={
                      activity.status === "aktif"
                        ? "text-[10px] font-semibold uppercase tracking-wider text-[var(--color-accent)] bg-[var(--color-accent-light)] rounded-full px-2 py-0.5"
                        : "text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-faint)] bg-[var(--color-border)] rounded-full px-2 py-0.5"
                    }
                  >
                    {activity.status === "aktif" ? "Aktif" : "Segera Hadir"}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
