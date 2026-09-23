import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { buttonClasses } from "@/components/ui/Button";
import { site } from "@/content/site";

export function ContactCtaSection() {
  return (
    <section id="contact-cta" aria-labelledby="contact-cta-heading" className="section-padding">
      <Container>
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2
            id="contact-cta-heading"
            className="leading-[1.12] tracking-tight mb-6"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Contact PT KTS for products, services, or training.
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-8 max-w-lg mx-auto" style={{ fontSize: "var(--text-body-lg)" }}>
            Use the contact page to reach the team.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className={buttonClasses("primary", "lg")}>
              Contact PT KTS
            </Link>
            {site.contact.shopUrl && (
              <a
                href={site.contact.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses("outline", "lg")}
              >
                Shop online
              </a>
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
