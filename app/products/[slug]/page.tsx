import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StatusBadge } from "@/components/ui/Badge";
import { Pending } from "@/components/ui/Pending";
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
  if (!product) return { title: "Produk tidak ditemukan" };

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
  const inquiryHref = whatsapp
    ? buildWhatsAppUrl(whatsapp, `Halo PT KTS, saya ingin menanyakan tentang ${product.name}.`)
    : "/kontak";

  return (
    <section className="section-padding">
      <Container>
        <FadeIn>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
              <li><Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Beranda</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/produk" className="hover:text-[var(--color-accent)] transition-colors">Produk</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[var(--color-text)] font-medium" aria-current="page">{product.name}</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="max-w-2xl mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)]">
                {unit.name} · {product.type === "layanan" ? "Layanan" : "Produk"}
              </span>
              <StatusBadge status={product.status} />
            </div>

            <h1
              className="font-bold leading-tight tracking-tight mb-4"
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
              Deskripsi
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Specifications */}
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-3">
              Spesifikasi
            </h2>
            {product.specs && Object.keys(product.specs).length > 0 ? (
              <dl className="grid grid-cols-2 gap-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="rounded-lg border border-[var(--color-border)] px-4 py-3">
                    <dt className="text-xs text-[var(--color-text-faint)]">{key}</dt>
                    <dd className="text-sm font-medium text-[var(--color-text)]">{value}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <Pending label={`Kapasitas, dimensi, dan spesifikasi teknis ${product.name}`} />
            )}
          </div>

          {/* CTA */}
          <div className="border-t border-[var(--color-border)] pt-10">
            <h2
              className="font-semibold mb-3"
              style={{ fontSize: "var(--text-h4)" }}
            >
              Tertarik dengan {product.type === "layanan" ? "layanan" : "produk"} ini?
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm mb-5">
              Hubungi PT KTS untuk menanyakan informasi lebih lanjut.
            </p>
            <a
              href={inquiryHref}
              target={whatsapp ? "_blank" : undefined}
              rel={whatsapp ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors duration-150"
            >
              Tanyakan
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
