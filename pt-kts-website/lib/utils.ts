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
