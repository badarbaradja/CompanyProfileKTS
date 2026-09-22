import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export function BusinessLinesSection() {
  return (
    <section id="lini-usaha" aria-labelledby="lini-usaha-heading" className="section-padding-sm">
      <Container>
        <FadeIn className="max-w-2xl mb-12">
          <SectionHeading
            as="h2"
            eyebrow="Lini Usaha"
            title="Empat lini usaha PT KTS"
            description="Dijalankan bersama oleh tiga unit usaha PT KTS."
          />
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          staggerDelay={0.07}
        >
          {site.businessLines.map((line, i) => (
            <StaggerItem key={line.name}>
              <div className="h-full p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                <span className="text-xs font-mono text-[var(--color-text-faint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-semibold text-[var(--color-text)]" style={{ fontSize: "var(--text-h4)" }}>
                  {line.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {line.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
