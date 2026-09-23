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

/** Formats a raw international phone number for display, e.g. "6282119563800" -> "+62 821-1956-3800". */
export function formatPhoneDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (!digits.startsWith("62")) return `+${digits}`;
  const rest = digits.slice(2);
  const groups = [rest.slice(0, 3), rest.slice(3, 7), rest.slice(7)].filter(Boolean);
  return `+62 ${groups.join("-")}`;
}
