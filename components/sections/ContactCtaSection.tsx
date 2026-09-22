import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { AccentHeading } from "@/components/ui/SectionHeading";
import { buttonClasses } from "@/components/ui/Button";
import { site } from "@/content/site";

export function ContactCtaSection() {
  return (
    <section id="contact-cta" aria-labelledby="contact-cta-heading" className="section-padding">
      <Container>
        <FadeIn className="max-w-2xl mx-auto text-center">
          <AccentHeading
            as="h2"
            align="center"
            line1="Got something we can help with?"
            line2="Let's talk."
            className="mb-6"
          />
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-8 max-w-lg mx-auto" style={{ fontSize: "var(--text-body-lg)" }}>
            Reach out for a consultation, a product question, or a training partnership.
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
                Online Shop
              </a>
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
