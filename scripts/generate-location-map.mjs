// scripts/generate-location-map.mjs
//
// Static location map for /contact — see REVISION_V0.7.md part F.1.
// Fetches a small grid of raw OpenStreetMap tiles once at build time,
// stitches them with a marker, and saves a single static WebP image to
// public/photos/map/. No client-side map script/iframe is ever loaded —
// the page just renders this file like any other photo.
//
// The marker sits on "Cigugur Tengah" (the kelurahan named in the
// office address), at a neighborhood-level zoom — not a precise pin on
// the unconfirmed street number, since REVIEW_NOTES.md section 6.1
// notes the address itself hasn't been confirmed by the team yet.
//
// Run manually: node scripts/generate-location-map.mjs
// Respects OSM's tile usage policy: a handful of tiles, one run, a
// descriptive User-Agent. Not for repeated/high-volume use.

import sharp from "sharp";
import fs from "fs";
import path from "path";

const LAT = -6.896;
const LON = 107.5538;
const ZOOM = 14;
const TILE = 256;
const GRID = 3; // 3x3 tiles
const OUT_PATH = path.resolve("public/photos/map/cimahi-location.webp");
const USER_AGENT =
  "pt-kts-website-build/1.0 (one-time static map asset, contact: kappasolution25@gmail.com)";

function lonToTileX(lon, zoom) {
  return ((lon + 180) / 360) * Math.pow(2, zoom);
}
function latToTileY(lat, zoom) {
  const latRad = (lat * Math.PI) / 180;
  return (
    ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) *
    Math.pow(2, zoom)
  );
}

async function run() {
  const xf = lonToTileX(LON, ZOOM);
  const yf = latToTileY(LAT, ZOOM);
  const centerXTile = Math.floor(xf);
  const centerYTile = Math.floor(yf);
  const offsetXPx = (xf - centerXTile) * TILE;
  const offsetYPx = (yf - centerYTile) * TILE;

  const half = Math.floor(GRID / 2);
  const gridPx = GRID * TILE;
  const composites = [];

  for (let dy = -half; dy <= half; dy++) {
    for (let dx = -half; dx <= half; dx++) {
      const x = centerXTile + dx;
      const y = centerYTile + dy;
      const url = `https://tile.openstreetmap.org/${ZOOM}/${x}/${y}.png`;
      const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
      if (!res.ok) throw new Error(`Tile fetch failed ${url}: ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      composites.push({ input: buf, left: (dx + half) * TILE, top: (dy + half) * TILE });
      await new Promise((r) => setTimeout(r, 300)); // polite delay between requests
    }
  }

  const centerOffsetPx = { x: half * TILE + offsetXPx, y: half * TILE + offsetYPx };
  const markerSvg = `
    <svg width="${gridPx}" height="${gridPx}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${centerOffsetPx.x}" cy="${centerOffsetPx.y}" r="9" fill="#0A8A4B" stroke="white" stroke-width="3"/>
      <circle cx="${centerOffsetPx.x}" cy="${centerOffsetPx.y}" r="26" fill="#0A8A4B" fill-opacity="0.18"/>
    </svg>`;

  // Two composite passes — combining raster tiles and an SVG marker in
  // a single sharp .composite() call throws "must have same dimensions
  // or smaller" for reasons that don't reproduce when done separately.
  const tilesBuf = await sharp({
    create: { width: gridPx, height: gridPx, channels: 3, background: "#e8e4d8" },
  })
    .composite(composites)
    .png()
    .toBuffer();

  const withMarkerBuf = await sharp(tilesBuf)
    .composite([{ input: Buffer.from(markerSvg), left: 0, top: 0 }])
    .png()
    .toBuffer();

  const CROP_W = 700;
  const CROP_H = 420;
  const left = Math.max(0, Math.min(Math.round(centerOffsetPx.x - CROP_W / 2), gridPx - CROP_W));
  const top = Math.max(0, Math.min(Math.round(centerOffsetPx.y - CROP_H / 2), gridPx - CROP_H));

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  await sharp(withMarkerBuf)
    .extract({ left, top, width: CROP_W, height: CROP_H })
    .webp({ quality: 82 })
    .toFile(OUT_PATH);

  const outMeta = await sharp(OUT_PATH).metadata();
  const outSize = fs.statSync(OUT_PATH).size;
  console.log(`${OUT_PATH}  ${outMeta.width}x${outMeta.height}  ${(outSize / 1024).toFixed(0)}KB`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
