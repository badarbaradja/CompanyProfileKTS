import Link from "next/link";
import { StatusBadge } from "@/components/ui/Badge";
import type { Product } from "@/content/products";

interface ProductCardProps {
  product: Product;
}

/**
 * Editorial product card — per DESIGN.md section 7.
 * No fake prices, ratings, or reviews.
 * Clear status badge to communicate development stage.
 */
export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden hover:border-[var(--color-border-strong)] hover:shadow-[0_4px_32px_rgba(0,0,0,0.06)] transition-all duration-300"
      aria-label={`Learn more about ${product.name}`}
    >
      {/* Product visual placeholder */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-[var(--color-canvas)] to-[var(--color-border)] overflow-hidden">
        <ProductVisualPlaceholder category={product.category} />
        <div className="absolute top-4 left-4">
          <StatusBadge status={product.status} />
        </div>
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-1 p-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-2">
          {product.category}
        </span>
        <h3 className="text-[var(--color-text)] font-semibold text-[1.0625rem] leading-snug mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
          {product.tagline}
        </p>

        {/* Arrow CTA */}
        <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] group-hover:gap-3 transition-all duration-300">
          <span>View product</span>
          <ArrowRight />
        </div>
      </div>
    </Link>
  );
}

/** SVG placeholder visual — unique per category */
function ProductVisualPlaceholder({ category }: { category: string }) {
  // Deterministic color from category string
  const isAgri = category.toLowerCase().includes("agri");
  const isWaste = category.toLowerCase().includes("waste");

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Background pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`grid-${category.slice(0, 5)}`}
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#111" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${category.slice(0, 5)})`} />
      </svg>

      {/* Center icon */}
      <div
        className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center"
        style={{
          background: isAgri
            ? "linear-gradient(135deg, #e8f3f0 0%, #c5e0d8 100%)"
            : isWaste
            ? "linear-gradient(135deg, #f0efe8 0%, #dcdbc5 100%)"
            : "linear-gradient(135deg, #e8eaf3 0%, #c5cbe0 100%)",
        }}
      >
        <TechIcon category={category} />
      </div>
    </div>
  );
}

function TechIcon({ category }: { category: string }) {
  const isAgri = category.toLowerCase().includes("agri");
  const isWaste = category.toLowerCase().includes("waste");

  if (isAgri || isWaste) {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path
          d="M18 4C10.268 4 4 10.268 4 18s6.268 14 14 14 14-6.268 14-14S25.732 4 18 4Z"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
        <rect x="12" y="15" width="12" height="10" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" />
        <path d="M15 15v-3a3 3 0 0 1 6 0v3" stroke="var(--color-accent)" strokeWidth="1.5" />
        <path d="M18 19v3" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="24" height="16" rx="3" stroke="var(--color-accent)" strokeWidth="1.5" />
      <path d="M6 16h24M14 10v4M22 10v4M14 22v4M22 22v4" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
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
