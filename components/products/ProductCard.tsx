import Link from "next/link";
import { StatusBadge } from "@/components/ui/Badge";
import { UnitLogo } from "@/components/brand/Logo";
import { site } from "@/content/site";
import type { Product } from "@/content/products";

interface ProductCardProps {
  product: Product;
}

const UNIT_TINT: Record<Product["unit"], string> = {
  "kappa-solution": "linear-gradient(135deg, #e8eaf3 0%, #c5cbe0 100%)",
  "nara-aquaponics": "linear-gradient(135deg, #e8f3f0 0%, #c5e0d8 100%)",
  "bumi-hijau": "linear-gradient(135deg, #f0efe8 0%, #dcdbc5 100%)",
};

/**
 * Editorial product card — per DESIGN.md section 7.
 * No fake prices, ratings, or reviews.
 * Clear status badge to communicate development stage.
 */
export function ProductCard({ product }: ProductCardProps) {
  const unit = site.businessUnits.find((u) => u.slug === product.unit)!;

  return (
    <Link
      href={`/produk/${product.slug}`}
      className="group flex flex-col bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden hover:border-[var(--color-border-strong)] hover:shadow-[0_4px_32px_rgba(0,0,0,0.06)] transition-all duration-300"
      aria-label={`Lihat ${product.name}`}
    >
      {/* Product visual placeholder */}
      <div
        className="relative aspect-[4/3] overflow-hidden flex items-center justify-center"
        style={{ background: UNIT_TINT[product.unit] }}
      >
        <UnitLogo unit={unit} className="h-14 opacity-70" />
        <div className="absolute top-4 left-4">
          <StatusBadge status={product.status} />
        </div>
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)] backdrop-blur-sm">
            {product.type === "layanan" ? "Layanan" : "Produk"}
          </span>
        </div>
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-1 p-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-2">
          {unit.name}
        </span>
        <h3 className="text-[var(--color-text)] font-semibold text-[1.0625rem] leading-snug mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
          {product.tagline}
        </p>

        {/* Arrow CTA */}
        <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] group-hover:gap-3 transition-all duration-300">
          <span>Lihat detail</span>
          <ArrowRight />
        </div>
      </div>
    </Link>
  );
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
