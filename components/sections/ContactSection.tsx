import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding section-dark"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 mb-6 justify-center">
              <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                Get in touch
              </span>
              <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
            </div>

            <h2
              id="contact-heading"
              className="font-bold leading-tight tracking-tight mb-6"
              style={{ fontSize: "var(--text-h1)", color: "#F5F5F3" }}
            >
              Have a problem worth solving?
            </h2>

            <p
              className="leading-relaxed mb-10 max-w-[50ch] mx-auto"
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--color-dark-muted)",
              }}
            >
              If you&apos;re working on an engineering challenge, a waste
              management problem, or an idea rooted in research — we&apos;d
              like to hear from you.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/contact"
                id="contact-cta-primary"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors duration-150"
              >
                Talk to KTS
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <a
                href="https://www.instagram.com/kappasolution/"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-instagram"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold text-[#F5F5F3] border border-[var(--color-dark-border)] hover:border-[var(--color-dark-muted)] hover:bg-[var(--color-dark-surface)] transition-colors duration-150"
              >
                <InstagramIcon />
                @kappasolution
              </a>
            </div>

            {/* Contact placeholders */}
            <div className="border-t border-[var(--color-dark-border)] pt-8">
              <p className="text-xs text-[var(--color-dark-muted)] mb-4">Contact details</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-dark-muted)] mb-1">
                    Email
                  </p>
                  <p className="text-sm text-[var(--color-dark-muted)] italic">
                    To be updated
                  </p>
                </div>
                <div className="hidden sm:block w-px bg-[var(--color-dark-border)]" aria-hidden="true" />
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-dark-muted)] mb-1">
                    WhatsApp / Phone
                  </p>
                  <p className="text-sm text-[var(--color-dark-muted)] italic">
                    To be updated
                  </p>
                </div>
                <div className="hidden sm:block w-px bg-[var(--color-dark-border)]" aria-hidden="true" />
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-dark-muted)] mb-1">
                    Location
                  </p>
                  <p className="text-sm text-[var(--color-dark-muted)] italic">
                    To be updated
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}
