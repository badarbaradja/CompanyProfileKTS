import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/content/site";

export function ContactCtaSection() {
  return (
    <section
      id="cta-kontak"
      aria-labelledby="cta-kontak-heading"
      className="section-padding-sm section-dark"
    >
      <Container>
        <FadeIn className="max-w-xl">
          <h2
            id="cta-kontak-heading"
            className="font-bold leading-tight tracking-tight mb-5"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Punya kebutuhan yang bisa kami bantu?
          </h2>
          <p className="mb-8 leading-relaxed" style={{ fontSize: "var(--text-body-lg)" }}>
            Hubungi PT KTS untuk konsultasi, pertanyaan produk, atau kerja sama pelatihan.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors duration-150"
            >
              Hubungi PT KTS
            </Link>
            {site.contact.shopUrl && (
              <a
                href={site.contact.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold border border-white/25 text-white hover:bg-white/10 transition-colors duration-150"
              >
                Toko Online
              </a>
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
