import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Pending } from "@/components/ui/Pending";
import { site } from "@/content/site";

export function EsicNetworkSection() {
  const { esicNetwork } = site;

  return (
    <section
      id="esic-network"
      aria-labelledby="esic-network-heading"
      className="section-padding section-dark"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <FadeIn>
            {/* esic-network.png has its own solid-color background (not
                transparent line art like the unit logos), so it renders
                natively rather than with the invert-to-white treatment. */}
            <div className="inline-block rounded-[var(--radius-sm)] overflow-hidden mb-6">
              <Image
                src={esicNetwork.logo}
                alt={esicNetwork.name}
                width={416}
                height={143}
                className="h-10 w-auto object-contain"
              />
            </div>
            <h2
              id="esic-network-heading"
              className="leading-[1.1] tracking-tight mb-4"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {esicNetwork.name}
            </h2>
            <p className="text-[var(--color-dark-muted)] leading-relaxed mb-4" style={{ fontSize: "var(--text-body-lg)" }}>
              {esicNetwork.relationship}
            </p>
            {!esicNetwork.expansion && (
              <Pending label="Full expansion and explanation of ESIC" variant="dark" />
            )}
          </FadeIn>

          <FadeIn direction="left">
            <ul className="grid grid-cols-2 gap-3" role="list">
              {esicNetwork.activities.map((activity) => (
                <li
                  key={activity.name}
                  className="flex items-center justify-between gap-2 rounded-[var(--radius-md)] bg-[var(--color-dark-surface)] px-4 py-3.5"
                >
                  <span className="text-sm font-medium text-[var(--color-canvas)]">
                    {activity.name}
                  </span>
                  <span
                    className={
                      activity.status === "active"
                        ? "text-[10px] font-semibold uppercase tracking-wider text-[var(--color-accent)] bg-[var(--color-accent)]/15 rounded-full px-2 py-0.5"
                        : "text-[10px] font-semibold uppercase tracking-wider text-[var(--color-dark-muted)] bg-white/10 rounded-full px-2 py-0.5"
                    }
                  >
                    {activity.status === "active" ? "Active" : "Coming Soon"}
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
