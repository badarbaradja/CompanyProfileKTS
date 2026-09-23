import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { SampleBadge } from "@/components/ui/SampleBadge";
import { Pending } from "@/components/ui/Pending";
import { buttonClasses } from "@/components/ui/Button";
import { getProductBySlug, products } from "@/content/products";
import { getSampleProductPhoto } from "@/content/photos";
import { site } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found" };

  return {
    title: product.name,
    description: product.summary,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const unit = site.businessUnits.find((u) => u.slug === product.unit)!;
  const photo = getSampleProductPhoto(product.images[0] ?? "");
  const whatsapp = site.contact.whatsapp;
  // WhatsApp message stays in Indonesian — its recipient is the PT KTS team, per REVISION_V0.3.md part A.4.
  const inquiryHref = whatsapp
    ? buildWhatsAppUrl(whatsapp, `Halo PT KTS, saya ingin menanyakan tentang ${product.name}.`)
    : "/contact";

  return (
    <section className="section-padding">
      <Container>
        <FadeIn>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
              <li><Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/products" className="hover:text-[var(--color-accent)] transition-colors">Products</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[var(--color-text)] font-medium" aria-current="page">{product.name}</li>
            </ol>
          </nav>

          {/* Photo */}
          {photo && (
            <div className="relative aspect-[16/9] rounded-[var(--radius-lg)] overflow-hidden mb-10 max-w-3xl">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 768px, 100vw"
                className="object-cover"
                priority
              />
              {product.isSample && (
                <SampleBadge className="absolute top-4 right-4" />
              )}
            </div>
          )}

          {/* Header */}
          <div className="max-w-2xl mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)]">
                {unit.name} · {product.type === "service" ? "Service" : "Product"}
              </span>
            </div>

            <h1
              className="leading-tight tracking-tight mb-4"
              style={{ fontSize: "var(--text-h1)" }}
            >
              {product.name}
            </h1>

            <p
              className="text-[var(--color-text-muted)] leading-relaxed"
              style={{ fontSize: "var(--text-body-lg)" }}
            >
              {product.summary}
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl mb-10">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-3">
              Description
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Highlights */}
          {product.highlights.length > 0 && (
            <div className="max-w-2xl mb-10">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-3">
                Highlights
              </h2>
              <ul className="space-y-2">
                {product.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[var(--color-text-muted)] leading-relaxed">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Applications */}
          {product.applications.length > 0 && (
            <div className="max-w-2xl mb-12">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-3">
                Applications
              </h2>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Specifications */}
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)]">
                Specifications
              </h2>
              {product.isSample && product.specs.length > 0 && <SampleBadge />}
            </div>
            {product.specs.length > 0 ? (
              <dl className="grid grid-cols-2 gap-3">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-3">
                    <dt className="text-xs text-[var(--color-text-faint)]">{spec.label}</dt>
                    <dd className="text-sm font-medium text-[var(--color-text)]">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <Pending label={`Capacity, dimensions, and technical specifications for ${product.name}`} />
            )}
          </div>

          {/* CTA */}
          <div className="border-t border-[var(--color-border)] pt-10">
            <h2
              className="mb-3"
              style={{ fontSize: "var(--text-h4)" }}
            >
              Ask about this {product.type === "service" ? "service" : "product"}
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm mb-5">
              Contact PT KTS for more information.
            </p>
            <a
              href={inquiryHref}
              target={whatsapp ? "_blank" : undefined}
              rel={whatsapp ? "noopener noreferrer" : undefined}
              className={buttonClasses("primary", "md")}
            >
              Ask about this {product.type === "service" ? "service" : "product"}
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-1"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
