import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Contact | PT KTS",
  description: "Get in touch with PT Kappa Technology Solution.",
};

export default function ContactPage() {
  return (
    <section className="section-padding">
      <Container>
        <FadeIn className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              Contact
            </span>
          </div>
          <h1 className="font-bold leading-tight tracking-tight mb-5" style={{ fontSize: "var(--text-h1)" }}>
            Have a problem worth solving?
          </h1>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-8" style={{ fontSize: "var(--text-body-lg)" }}>
            If you&apos;re working on an engineering challenge, waste management problem, or a research-rooted idea — we&apos;d like to hear from you.
          </p>

          {/* Contact placeholders */}
          <div className="space-y-5 mb-8">
            {[
              { label: "Email", value: "To be updated" },
              { label: "WhatsApp / Phone", value: "To be updated" },
              { label: "Office Location", value: "To be updated" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)]">
                  {item.label}
                </span>
                <span className="text-sm text-[var(--color-text-muted)] italic">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/kappasolution/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-[var(--color-border-strong)] text-[var(--color-text)] hover:bg-[var(--color-border)] transition-colors duration-150"
          >
            Find us on Instagram @kappasolution
          </a>

          <div className="mt-8 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <p className="text-sm text-[var(--color-text-muted)] italic">
              Contact details are being finalized. Reach us via Instagram while the official contact information is updated.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
