import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/content/site";

export function BusinessLinesSection() {
  return (
    <section
      id="business-lines"
      aria-labelledby="business-lines-heading"
      className="section-padding-sm section-dark"
    >
      <Container>
        <FadeIn className="max-w-xl mb-12">
          <h2 id="business-lines-heading" className="leading-[1.1] tracking-tight" style={{ fontSize: "var(--text-h2)" }}>
            What we do
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x divide-[var(--color-dark-border)]">
          {site.businessLines.map((line, i) => (
            <FadeIn key={line.name} delay={i * 0.06} className="py-6 lg:py-0 lg:px-6 first:lg:pl-0 border-t border-[var(--color-dark-border)] lg:border-t-0 first:border-t-0">
              <h3 className="font-display text-xl font-medium text-[var(--color-canvas)] mb-2">
                {line.name}
              </h3>
              <p className="text-sm text-[var(--color-dark-muted)] leading-relaxed">
                {line.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
