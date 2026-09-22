import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

const steps = [
  {
    id: "research",
    label: "Research",
    description: "We start from real scientific and engineering research — not market trends.",
    icon: MicroscopeIcon,
  },
  {
    id: "engineering",
    label: "Engineering",
    description: "Research is turned into engineered systems through disciplined iteration.",
    icon: GearIcon,
  },
  {
    id: "development",
    label: "Development",
    description: "Systems are built, refined, and tested against real operating conditions.",
    icon: BuildIcon,
  },
  {
    id: "validation",
    label: "Validation",
    description: "We verify performance before making any product claims.",
    icon: CheckIcon,
  },
  {
    id: "product",
    label: "Product",
    description: "Validated technology becomes a deployable product.",
    icon: ProductIcon,
  },
  {
    id: "impact",
    label: "Impact",
    description: "Products reach the people and organizations that need them most.",
    icon: ImpactIcon,
  },
];

export function WhyKTSSection() {
  return (
    <section
      id="why-kts"
      aria-labelledby="why-kts-heading"
      className="section-dark section-padding"
    >
      <Container>
        {/* Heading */}
        <FadeIn>
          <div className="max-w-2xl mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                Why KTS
              </span>
            </div>
            <h2
              id="why-kts-heading"
              className="font-bold leading-tight tracking-tight mb-5"
              style={{ fontSize: "var(--text-h1)", color: "#F5F5F3" }}
            >
              Research should not stop in the lab.
            </h2>
            <p
              style={{ color: "var(--color-dark-muted)", fontSize: "var(--text-body-lg)" }}
              className="leading-relaxed max-w-[54ch]"
            >
              PT KTS exists to bridge the gap between research outcomes and
              real-world deployment. We take engineering ideas seriously enough
              to see them through to practical impact.
            </p>
          </div>
        </FadeIn>

        {/* Process flow */}
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-2"
          staggerDelay={0.07}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.id}>
                <div className="flex flex-col items-start lg:items-center text-left lg:text-center">
                  {/* Step number + connector */}
                  <div className="relative flex items-center w-full justify-start lg:justify-center mb-4">
                    {/* Number badge */}
                    <div className="relative z-10 w-11 h-11 rounded-xl border border-[var(--color-dark-border)] flex items-center justify-center shrink-0 bg-[var(--color-dark-surface)]">
                      <Icon />
                    </div>
                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <div
                        className="hidden lg:block absolute left-1/2 top-1/2 h-px w-full -translate-y-1/2"
                        style={{
                          background:
                            "linear-gradient(to right, var(--color-dark-border), transparent)",
                          left: "calc(50% + 22px)",
                          width: "calc(100% - 22px)",
                        }}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Step label */}
                  <p
                    className="text-sm font-semibold mb-1.5"
                    style={{ color: "#F5F5F3" }}
                  >
                    {step.label}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--color-dark-muted)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}

/* --- Step icons --- */
function MicroscopeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 18h12M10 18V8M14 18V8M10 8l4-4M14 8l-4-4M12 4v4" />
      <circle cx="12" cy="5" r="2" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </svg>
  );
}

function BuildIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="12" width="6" height="9" rx="1" />
      <rect x="9" y="7" width="6" height="14" rx="1" />
      <rect x="15" y="3" width="6" height="18" rx="1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 7L10 17l-5-5" />
    </svg>
  );
}

function ProductIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

function ImpactIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
