// lib/utils.ts
// Utility helpers — className merging

/**
 * Simple className concatenation utility.
 * Keeps server components dependency-free (no clsx/tailwind-merge needed
 * for our token-based design system).
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Builds a wa.me link with a pre-filled message. `phone` may contain spaces/dashes/+. */
export function buildWhatsAppUrl(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
