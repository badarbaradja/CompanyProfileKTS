import { isDraftMode } from "@/lib/draft";

/**
 * Thin "site under development" banner shown while
 * NEXT_PUBLIC_DRAFT_MODE is on — see REVISION_V0.2.md section 5.
 * Height is driven by the --banner-height CSS var (globals.css), which
 * Navbar/RootLayout read so fixed positioning stays in sync.
 */
export function DraftBanner() {
  if (!isDraftMode()) return null;

  return (
    <div
      id="draft-banner"
      role="status"
      className="fixed inset-x-0 top-0 z-[60] flex items-center justify-center gap-2 bg-amber-400 px-4 text-center text-xs font-medium text-amber-950"
      style={{ height: "var(--banner-height)" }}
    >
      <span aria-hidden="true">⚠</span>
      This site is under development — some content is still placeholder data.
    </div>
  );
}
