import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UnitLogo } from "@/components/brand/Logo";
import { site } from "@/content/site";

export function BusinessUnitsSection() {
  return (
    <section
      id="unit-usaha"
      aria-labelledby="unit-usaha-heading"
      className="section-padding-sm bg-[var(--color-surface-raised)]"
    >
      <Container>
        <FadeIn className="max-w-2xl mb-12">
          <SectionHeading
            as="h2"
            eyebrow="Unit Usaha"
            title="Tiga unit usaha PT KTS"
            description="Setiap unit menjalankan bidangnya masing-masing di bawah PT KTS."
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {site.businessUnits.map((unit) => (
            <StaggerItem key={unit.slug}>
              <Link
                href={`/produk#${unit.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 hover:border-[var(--color-border-strong)] hover:shadow-[0_4px_32px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <UnitLogo unit={unit} className="h-10 mb-6" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-2">
                  {unit.field}
                </span>
                <h3 className="font-semibold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-200" style={{ fontSize: "var(--text-h4)" }}>
                  {unit.name}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5">
                  {unit.description}
                </p>
                <ul className="mt-auto space-y-1.5" role="list">
                  {unit.activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-accent)] shrink-0" aria-hidden="true" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
