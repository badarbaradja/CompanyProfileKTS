// scripts/optimize-photos.mjs
//
// Curated documentation-photo pipeline — see REVISION v0.4 part B step 2.
// Source files live outside the repo (raw camera exports, never committed).
// Run manually: node scripts/optimize-photos.mjs
//
// - Resizes to a max longest-side (2000px hero / 1400px everything else)
// - Converts to WebP, quality ~80
// - Strips EXIF/GPS metadata (sharp's default output behavior — metadata
//   is only preserved if .withMetadata() is called, which we never do)

import sharp from "sharp";
import path from "path";
import fs from "fs";

const OUT_ROOT = path.resolve("public/photos");

/** @type {{src: string, out: string, longestSide: number}[]} */
const jobs = [
  // --- ESIC Conference 2026 ---
  {
    src: "C:/Users/USER/Downloads/drive-download-20260922T162515Z-1-001/IMG_9905.JPG",
    out: "esic-conference/esic-presentation-01.webp",
    longestSide: 1400,
  },
  {
    src: "C:/Users/USER/Downloads/drive-download-20260922T162515Z-1-001/IMG_9965.JPG",
    out: "esic-conference/esic-audience-qa.webp",
    longestSide: 1400,
  },
  {
    src: "C:/Users/USER/Downloads/drive-download-20260922T162515Z-1-001/IMG_9985.JPG",
    out: "esic-conference/esic-presentation-02.webp",
    longestSide: 1400,
  },
  {
    src: "C:/Users/USER/Downloads/drive-download-20260922T162515Z-1-001/IMG_9992.JPG",
    out: "esic-conference/esic-title-slide.webp",
    longestSide: 1400,
  },

  // --- Engineering Camp 2026 ---
  {
    src: "C:/Users/USER/Downloads/camp/DAY 3/CAM 2/DJI_20260903091239_0243_D.JPG",
    out: "camp/camp-farm-visit-briefing.webp",
    longestSide: 1400,
  },
  {
    src: "C:/Users/USER/Downloads/camp/DAY 3/CAM 2/DJI_20260903133136_0373_D.JPG",
    out: "camp/camp-outdoor-briefing.webp",
    longestSide: 2000, // hero image — LCP, keep under 400KB
    quality: 68,
  },
  {
    src: "C:/Users/USER/Downloads/camp/DAY 3/CAM 2/DJI_20260903133011_0368_D.JPG",
    out: "camp/camp-group-circle-briefing.webp",
    longestSide: 1400,
  },
  {
    src: "C:/Users/USER/Downloads/camp/DAY 3/CAM 2/DJI_20260903134045_0388_D.JPG",
    out: "camp/camp-team-gear-up.webp",
    longestSide: 1400,
  },
  {
    src: "C:/Users/USER/Downloads/camp/DAY 3/CAM 2/DJI_20260903141358_0421_D.JPG",
    out: "camp/camp-team-lineup.webp",
    longestSide: 1400,
  },
  {
    src: "C:/Users/USER/Downloads/camp/DAY 4/CAM 1/IMG_8436.JPG",
    out: "camp/campus-walkway-group.webp",
    longestSide: 1400,
  },
  {
    src: "C:/Users/USER/Downloads/camp/DAY 4/CAM 1/IMG_8439.JPG",
    out: "camp/campus-garden-walk.webp",
    longestSide: 1400,
  },
  {
    src: "C:/Users/USER/Downloads/camp/DAY 4/CAM 1/IMG_8468.JPG",
    out: "camp/camp-lunch-together.webp",
    longestSide: 1400,
  },
  {
    src: "C:/Users/USER/Downloads/camp/DAY 4/CAM 1/IMG_8472.JPG",
    out: "camp/camp-classroom-discussion.webp",
    longestSide: 1400,
  },
];

async function run() {
  for (const job of jobs) {
    const outPath = path.join(OUT_ROOT, job.out);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });

    const image = sharp(job.src).rotate(); // auto-orient from EXIF before we strip it
    const meta = await image.metadata();
    const resize =
      meta.width >= meta.height
        ? { width: job.longestSide }
        : { height: job.longestSide };

    await image
      .resize({ ...resize, withoutEnlargement: true })
      .webp({ quality: job.quality ?? 80 })
      .toFile(outPath);

    const outMeta = await sharp(outPath).metadata();
    const outSize = fs.statSync(outPath).size;
    console.log(
      `${job.out}  ${meta.width}x${meta.height} -> ${outMeta.width}x${outMeta.height} ${(outSize / 1024).toFixed(0)}KB`
    );
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
