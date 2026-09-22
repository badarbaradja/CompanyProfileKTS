import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StatusBadge } from "@/components/ui/Badge";
import { getProductBySlug, products } from "@/content/products";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found | PT KTS" };

  return {
    title: `${product.name} | PT KTS`,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

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
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)]">
                {product.category}
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

          {/* Concept disclaimer */}
          <div className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] mb-10 flex gap-3 items-start max-w-2xl">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
              <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
            </svg>
            <div>
              <p className="text-sm font-medium text-[var(--color-text)] mb-1">
                This is a concept product entry.
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                No specifications, pricing, certifications, or performance metrics are published here.
                Product information will be updated after validation by the PT KTS team.
              </p>
            </div>
          </div>

          {/* Problem */}
          {product.problem && (
            <div className="max-w-2xl mb-10">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-3">
                The Problem
              </h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                {product.problem}
              </p>
            </div>
          )}

          {/* Description */}
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-3">
              The Concept
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* CTA */}
          <div className="border-t border-[var(--color-border)] pt-10">
            <h2
              className="font-semibold mb-3"
              style={{ fontSize: "var(--text-h4)" }}
            >
              Interested in this technology?
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm mb-5">
              Contact PT KTS to request product information or discuss a
              potential application.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors duration-150"
            >
              Request Product Information
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
