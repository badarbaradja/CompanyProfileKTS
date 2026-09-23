// scripts/verify-pages.mjs
//
// Text-only Playwright verification — see REVISION_V0.7.md part G.3.
// No screenshots are taken or saved. Opens every route at 390px and
// 1440px against a running server (npm run start, or npm run dev) and
// prints one summary table:
//
//   - route, viewport width
//   - document.documentElement.scrollWidth - window.innerWidth (must be 0)
//   - console error count (must be 0)
//   - count of sections whose only real content is a Pending marker
//     (must be 0 — Pending elements carry a data-pending attribute)
//   - largest vertical empty gap between top-level section/footer
//     blocks, in px (reported, not enforced)
//   - full page height, in px
//
// The viewport is reset to a fixed base size before every navigation —
// this script never resizes to full-page height (no screenshot step),
// so the v0.5 leftover-viewport-height bug (a stale huge viewport
// inflating a min-height:100vh section on the next page) can't recur
// here, but we reset defensively anyway per the revision brief.
//
// Usage: node scripts/verify-pages.mjs [baseUrl]
// Defaults to http://localhost:3000 — start the server first:
//   npm run build && npm run start

import { chromium } from "playwright";

const BASE_URL = process.argv[2] || "http://localhost:3000";
const WIDTHS = [390, 1440];
const BASE_HEIGHT = 900;

const PRODUCT_SLUGS = [
  "lab-practicum-equipment",
  "engineering-developed-equipment",
  "system-design",
  "hydroponic-aquaponic-design-build",
  "mechanical-biological-filters",
  "aeration-systems",
  "biofloc-ponds",
  "waste-shredder",
  "rampus-incinerator",
  "takakura-composter",
  "gasification-stove",
];

const ROUTES = [
  "/",
  "/about",
  "/services",
  "/products",
  ...PRODUCT_SLUGS.map((s) => `/products/${s}`),
  "/training",
  "/events",
  "/contact",
];

async function measurePage(page) {
  return page.evaluate(() => {
    const overflowPx = document.documentElement.scrollWidth - window.innerWidth;
    const pageHeightPx = document.documentElement.scrollHeight;

    // Sections whose only real content (besides headings and the
    // Pending marker itself) is a [data-pending] element.
    let pendingOnlySections = 0;
    const blocks = document.querySelectorAll("section");
    for (const sec of blocks) {
      const pendingEls = sec.querySelectorAll("[data-pending]");
      if (pendingEls.length === 0) continue;
      const clone = sec.cloneNode(true);
      clone.querySelectorAll("[data-pending]").forEach((el) => el.remove());
      clone.querySelectorAll("h1,h2,h3,h4").forEach((el) => el.remove());
      const remainingText = clone.textContent.replace(/\s+/g, " ").trim();
      if (remainingText.length < 20) pendingOnlySections++;
    }

    // Largest vertical gap between consecutive top-level section/footer
    // blocks, in document order. Each section's own vertical padding
    // (section-padding/section-padding-sm) is applied ON the <section>
    // element itself, so adjacent <section> boxes always touch (gap 0)
    // even when there's plenty of visual whitespace — that whitespace
    // is the padding *inside* each section. To measure the whitespace a
    // visitor actually sees, use each landmark's first element child
    // (the <Container>/.container-kts wrapper that holds the real
    // content) instead of the section/footer box itself.
    const landmarks = Array.from(document.querySelectorAll("section, footer"));
    const rects = landmarks
      .map((el) => (el.firstElementChild || el).getBoundingClientRect())
      .sort((a, b) => a.top - b.top);
    let maxGapPx = 0;
    for (let i = 0; i < rects.length - 1; i++) {
      const gap = rects[i + 1].top - rects[i].bottom;
      if (gap > maxGapPx) maxGapPx = gap;
    }

    return {
      overflowPx,
      pageHeightPx,
      pendingOnlySections,
      maxGapPx: Math.round(maxGapPx),
    };
  });
}

async function run() {
  const browser = await chromium.launch();
  const rows = [];

  for (const width of WIDTHS) {
    const context = await browser.newContext({ viewport: { width, height: BASE_HEIGHT } });
    const page = await context.newPage();

    let consoleErrors = 0;
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors++;
    });
    page.on("pageerror", () => {
      consoleErrors++;
    });

    for (const route of ROUTES) {
      consoleErrors = 0;
      await page.setViewportSize({ width, height: BASE_HEIGHT });
      const res = await page.goto(`${BASE_URL}${route}`, { waitUntil: "networkidle" });
      const status = res ? res.status() : 0;
      const metrics = await measurePage(page);
      rows.push({ route, width, status, consoleErrors, ...metrics });
    }

    await context.close();
  }

  await browser.close();

  const header = ["Route", "W", "HTTP", "Overflow", "ConsoleErr", "PendingOnly", "MaxGapPx", "PageH"];
  const colWidths = header.map((h) => h.length);
  const formattedRows = rows.map((r) => [
    r.route,
    String(r.width),
    String(r.status),
    String(r.overflowPx),
    String(r.consoleErrors),
    String(r.pendingOnlySections),
    String(r.maxGapPx),
    String(r.pageHeightPx),
  ]);
  for (const row of formattedRows) {
    row.forEach((cell, i) => {
      colWidths[i] = Math.max(colWidths[i], cell.length);
    });
  }

  function printRow(cells) {
    console.log(cells.map((c, i) => c.padEnd(colWidths[i])).join("  "));
  }

  printRow(header);
  printRow(colWidths.map((w) => "-".repeat(w)));
  for (const row of formattedRows) printRow(row);

  const failures = rows.filter(
    (r) => r.overflowPx !== 0 || r.consoleErrors !== 0 || r.pendingOnlySections !== 0 || r.status >= 400
  );
  console.log("");
  if (failures.length === 0) {
    console.log(`All ${rows.length} checks passed: no overflow, no console errors, no Pending-only sections.`);
  } else {
    console.log(`${failures.length} of ${rows.length} checks have a nonzero flag (Overflow/ConsoleErr/PendingOnly/HTTP):`);
    for (const f of failures) {
      console.log(`  - ${f.route} @ ${f.width}px: overflow=${f.overflowPx} consoleErr=${f.consoleErrors} pendingOnly=${f.pendingOnlySections} http=${f.status}`);
    }
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
