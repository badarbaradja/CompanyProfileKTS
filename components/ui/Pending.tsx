import { isDraftMode } from "@/lib/draft";
import { cn } from "@/lib/utils";

interface PendingProps {
  /** What data is missing, e.g. "Nomor WhatsApp resmi" */
  label: string;
  className?: string;
}

/**
 * Consistent placeholder marker for missing data — see
 * REVISION_V0.2.md section 5. Renders nothing once
 * NEXT_PUBLIC_DRAFT_MODE is turned off, so the surrounding section
 * disappears cleanly instead of showing a stale placeholder.
 */
export function Pending({ label, className }: PendingProps) {
  if (!isDraftMode()) return null;

  return (
    <div
      role="note"
      className={cn(
        "flex items-start gap-2.5 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900",
        className
      )}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mt-0.5 shrink-0 text-amber-500"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
      <p>
        <span className="font-semibold">Menunggu data:</span> {label}
      </p>
    </div>
  );
}
