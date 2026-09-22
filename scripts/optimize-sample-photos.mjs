// scripts/optimize-sample-photos.mjs
//
// Sample product-photo pipeline — see REVISION v0.6 part C.2.
// Source files are downloaded from Unsplash (free license) into a
// scratch directory outside the repo, then processed here. Run
// manually: node scripts/optimize-sample-photos.mjs
//
// - Resizes to a max longest-side of 1400px
// - Converts to WebP, quality ~80
// - Strips EXIF/GPS metadata (sharp's default output behavior — metadata
//   is only preserved if .withMetadata() is called, which we never do)

import sharp from "sharp";
import path from "path";
import fs from "fs";

const RAW_DIR =
  "C:/Users/USER/AppData/Local/Temp/claude/d--USER-website-dev-pt-kts-website/eaef6e51-b35d-4e0b-b45e-963a4dbbd7eb/scratchpad/raw";
const OUT_DIR = path.resolve("public/photos/samples");
const LONGEST_SIDE = 1400;

const slugs = [
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

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const slug of slugs) {
    const srcPath = path.join(RAW_DIR, `${slug}.jpg`);
    const outPath = path.join(OUT_DIR, `${slug}.webp`);

    const image = sharp(srcPath).rotate();
    const meta = await image.metadata();
    const resize =
      meta.width >= meta.height
        ? { width: LONGEST_SIDE }
        : { height: LONGEST_SIDE };

    await image
      .resize({ ...resize, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outPath);

    const outMeta = await sharp(outPath).metadata();
    const outSize = fs.statSync(outPath).size;
    console.log(
      `${slug}.webp  ${meta.width}x${meta.height} -> ${outMeta.width}x${outMeta.height} ${(outSize / 1024).toFixed(0)}KB`
    );
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
