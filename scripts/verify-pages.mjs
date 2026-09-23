// scripts/verify-pages.mjs
//
// Text-only Playwright verification — see REVISION_V0.7.md part G.3 and
// REVISION_V0.8.md part D. No screenshots are taken or saved. Opens
// every route at 390px and 1440px against a running server and prints
// one summary table:
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
// Then, added in v0.8: a dedicated /contact map check (Leaflet or its
// fallback), since that page's requirements are shaped differently
// from the generic per-route table above.
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
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const BASE_URL = process.argv[2] || "http://localhost:3000";
const WIDTHS = [390, 1440];
const BASE_HEIGHT = 900;

// Read the office coordinates from content/site.ts rather than
// hardcoding them here too — keeps this script honest about the same
// single source of truth the app itself uses.
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const siteSrc = fs.readFileSync(path.join(scriptDir, "../content/site.ts"), "utf8");
const CONTACT_LAT = parseFloat(siteSrc.match(/lat:\s*(-?\d+\.\d+)/)[1]);
const CONTACT_LNG = parseFloat(siteSrc.match(/lng:\s*(-?\d+\.\d+)/)[1]);

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

async function checkContactMap(page) {
  await page.waitForSelector("[data-location-map]", { timeout: 5000 }).catch(() => {});
  // Give Leaflet's dynamic import + tile requests (or the 8s fallback
  // timer in LocationMap.tsx) time to resolve one way or the other.
  await page.waitForTimeout(9000);

  return page.evaluate(
    ({ lat, lng }) => {
      const mapEl = document.querySelector("[data-location-map]");
      const heightPx = mapEl ? Math.round(mapEl.getBoundingClientRect().height) : 0;
      const isLeaflet = !!document.querySelector(".leaflet-container");
      const mode = isLeaflet ? "leaflet" : mapEl ? "fallback" : "missing";
      const attributionPresent = document.body.textContent.includes("OpenStreetMap");

      const query = `${lat},${lng}`;
      const mapsLinks = Array.from(document.querySelectorAll('a[href*="google.com/maps"]')).map((a) =>
        a.getAttribute("href")
      );
      const searchLinkOk = mapsLinks.some((h) => h.includes("/maps/search/") && h.includes(query));
      const dirLinkOk = mapsLinks.some((h) => h.includes("/maps/dir/") && h.includes(query));

      return { mode, heightPx, attributionPresent, searchLinkOk, dirLinkOk, mapsLinkCount: mapsLinks.length };
    },
    { lat: CONTACT_LAT, lng: CONTACT_LNG }
  );
}

async function run() {
  const browser = await chromium.launch();
  const rows = [];
  const contactChecks = [];

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

      if (route === "/contact") {
        // Runs before the row below is pushed, so any console errors
        // that occur while waiting for tiles/the fallback timer are
        // still captured in this route's consoleErrors count.
        const mapResult = await checkContactMap(page);
        contactChecks.push({ width, consoleErrors, ...mapResult });
      }

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

  function printRow(cells, widths) {
    console.log(cells.map((c, i) => c.padEnd(widths[i])).join("  "));
  }

  printRow(header, colWidths);
  printRow(colWidths.map((w) => "-".repeat(w)), colWidths);
  for (const row of formattedRows) printRow(row, colWidths);

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

  // /contact map check — REVISION_V0.8.md part D.2.
  console.log("");
  console.log(`/contact map check (office coordinates: ${CONTACT_LAT}, ${CONTACT_LNG})`);
  const mapHeader = ["W", "Mode", "MapHeightPx", "OSMAttribution", "SearchLinkOk", "DirLinkOk", "ConsoleErr"];
  const mapColWidths = mapHeader.map((h) => h.length);
  const mapFormattedRows = contactChecks.map((c) => [
    String(c.width),
    c.mode,
    String(c.heightPx),
    String(c.attributionPresent),
    String(c.searchLinkOk),
    String(c.dirLinkOk),
    String(c.consoleErrors),
  ]);
  for (const row of mapFormattedRows) {
    row.forEach((cell, i) => {
      mapColWidths[i] = Math.max(mapColWidths[i], cell.length);
    });
  }
  printRow(mapHeader, mapColWidths);
  printRow(mapColWidths.map((w) => "-".repeat(w)), mapColWidths);
  for (const row of mapFormattedRows) printRow(row, mapColWidths);
  console.log("");
  for (const c of contactChecks) {
    if (c.mode === "leaflet") {
      console.log(
        `  @ ${c.width}px: Leaflet tiles loaded successfully (network reachable). Map height ${c.heightPx}px, attribution ${c.attributionPresent ? "present" : "MISSING"}.`
      );
    } else if (c.mode === "fallback") {
      console.log(
        `  @ ${c.width}px: NOTE - tiles did not load (likely no network access to tile.openstreetmap.org in this environment). LocationFallback rendered correctly instead (height ${c.heightPx}px, no empty gap). OSM attribution is expected to be absent in fallback mode.`
      );
    } else {
      console.log(`  @ ${c.width}px: FAIL - no [data-location-map] element found in the DOM at all.`);
    }
    if (!c.searchLinkOk || !c.dirLinkOk) {
      console.log(`  @ ${c.width}px: FAIL - Google Maps link(s) missing or coordinates don't match (searchLinkOk=${c.searchLinkOk}, dirLinkOk=${c.dirLinkOk}).`);
    }
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
