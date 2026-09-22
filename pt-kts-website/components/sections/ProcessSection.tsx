import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

const steps = [
  {
    number: "01",
    label: "Research",
    description:
      "Every product begins with a research question or an engineering challenge observed in the real world.",
  },
  {
    number: "02",
    label: "Engineering",
    description:
      "Research insights are translated into engineered systems — designed to be manufacturable, operable, and maintainable.",
  },
  {
    number: "03",
    label: "Development",
    description:
      "Prototypes are built, tested, and iterated under realistic conditions. Failure is expected and used constructively.",
  },
  {
    number: "04",
    label: "Validation",
    description:
      "We test for safety, reliability, and real-world performance. Nothing becomes a product claim until it is validated.",
  },
  {
    number: "05",
    label: "Productization",
    description:
      "Validated technology is packaged into deployable products with clear documentation and support models.",
  },
  {
    number: "06",
    label: "Impact",
    description:
      "Products reach the farms, industries, and communities where they can create measurable, lasting change.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="how-we-innovate"
      aria-labelledby="process-heading"
      className="section-padding bg-[var(--color-surface)]"
    >
      <Container>
        {/* Heading */}
        <FadeIn className="max-w-xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              How We Innovate
            </span>
          </div>
          <h2
            id="process-heading"
            className="font-bold leading-tight tracking-tight mb-4"
            style={{ fontSize: "var(--text-h2)" }}
          >
            A disciplined path from idea to impact.
          </h2>
          <p
            className="text-[var(--color-text-muted)] leading-relaxed"
            style={{ fontSize: "var(--text-body-lg)" }}
          >
            We don&apos;t ship research papers — we ship products. Each step
            in our process is designed to close the gap between theory and
            real-world deployment.
          </p>
        </FadeIn>

        {/* Process steps */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.07}
        >
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <ProcessStep step={step} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

function ProcessStep({
  step,
}: {
  step: { number: string; label: string; description: string };
}) {
  return (
    <div className="group flex flex-col gap-4">
      {/* Number + horizontal rule */}
      <div className="flex items-center gap-3">
        <span
          className="text-[13px] font-bold tabular-nums"
          style={{ color: "var(--color-accent)" }}
        >
          {step.number}
        </span>
        <div className="flex-1 h-px bg-[var(--color-border)]" />
      </div>

      {/* Label */}
      <h3
        className="font-semibold tracking-tight"
        style={{ fontSize: "var(--text-h4)", color: "var(--color-text)" }}
      >
        {step.label}
      </h3>

      {/* Description */}
      <p
        className="text-[var(--color-text-muted)] leading-relaxed"
        style={{ fontSize: "var(--text-sm)" }}
      >
        {step.description}
      </p>
    </div>
  );
}
