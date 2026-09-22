import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { buttonClasses } from "@/components/ui/Button";
import { site } from "@/content/site";
import { getHeroPhoto } from "@/content/photos";

export function HeroSection() {
  const heroPhoto = getHeroPhoto();

  return (
    <section id="hero" aria-labelledby="hero-heading" className="bg-[var(--color-canvas)]">
      <Container className="pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <FadeIn delay={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-accent)] mb-5">
                {site.legalName}
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1
                id="hero-heading"
                className="leading-[1.08] tracking-tight mb-6"
                style={{ fontSize: "var(--text-display)" }}
              >
                Four business lines,
                <br />
                three business units,
                <br />
                <em className="italic text-[var(--color-accent)]">one innovation network.</em>
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p
                className="text-[var(--color-text-muted)] mb-9 leading-relaxed max-w-[52ch]"
                style={{ fontSize: "var(--text-body-lg)" }}
              >
                {site.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="flex flex-wrap gap-3">
                <Link href="/services" className={buttonClasses("primary", "lg")}>
                  See Our Services
                </Link>
                <Link href="/products" className={buttonClasses("outline", "lg")}>
                  Explore Products
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Visual — real documentation photo (Engineering Camp 2026), the site's LCP element */}
          <FadeIn delay={0.2} direction="left">
            <div className="relative rounded-[var(--radius-xl)] bg-[var(--color-dark)] aspect-[4/5] lg:aspect-[3/4] overflow-hidden shadow-[var(--shadow-lg)]">
              {heroPhoto ? (
                <>
                  <Image
                    src={heroPhoto.src}
                    alt={heroPhoto.alt}
                    width={heroPhoto.width}
                    height={heroPhoto.height}
                    priority
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0"
                    aria-hidden="true"
                  />
                  {heroPhoto.caption && (
                    <span className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-widest text-white/80">
                      {heroPhoto.caption}
                    </span>
                  )}
                </>
              ) : (
                <span className="absolute top-5 right-5 text-[10px] font-semibold uppercase tracking-widest text-white/45 bg-white/10 rounded-full px-2.5 py-1">
                  Photo coming soon
                </span>
              )}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
