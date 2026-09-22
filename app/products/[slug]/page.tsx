import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StatusBadge } from "@/components/ui/Badge";
import { Pending } from "@/components/ui/Pending";
import { buttonClasses } from "@/components/ui/Button";
import { getProductBySlug, products } from "@/content/products";
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
    description: product.tagline,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const unit = site.businessUnits.find((u) => u.slug === product.unit)!;
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

          {/* Header */}
          <div className="max-w-2xl mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)]">
                {unit.name} · {product.type === "service" ? "Service" : "Product"}
              </span>
              <StatusBadge status={product.status} />
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
              {product.tagline}
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

          {/* Specifications */}
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-3">
              Specifications
            </h2>
            {product.specs && Object.keys(product.specs).length > 0 ? (
              <dl className="grid grid-cols-2 gap-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-3">
                    <dt className="text-xs text-[var(--color-text-faint)]">{key}</dt>
                    <dd className="text-sm font-medium text-[var(--color-text)]">{value}</dd>
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
