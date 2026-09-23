// lib/draft.ts
// Draft-mode flag — see REVISION_V0.2.md section 5.
//
// Default is ON (true) unless explicitly disabled, so a missing env var
// never accidentally ships placeholder content as if it were final.

export function isDraftMode(): boolean {
  return process.env.NEXT_PUBLIC_DRAFT_MODE !== "false";
}
