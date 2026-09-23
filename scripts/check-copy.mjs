// scripts/check-copy.mjs
//
// Copy-style guard — see REVISION v0.5 part D.1.
//
// Fails (exit 1) if an em dash (—) or en dash (–) is found in
// content/**/*.ts or any .tsx file under app/ or components/, outside
// of comments. This covers both quoted string literals (props, object
// values, template literals) and bare JSX text content — comments are
// developer-facing, not user-visible, so they're intentionally excluded.
//
// Run standalone: node scripts/check-copy.mjs
// Registered as "check:copy" in package.json, and wired as a "prebuild"
// hook so it runs automatically before `npm run build`.

import fs from "fs";
import path from "path";

const ROOTS = [
  { dir: "content", exts: [".ts", ".tsx"] },
  { dir: "app", exts: [".tsx"] },
  { dir: "components", exts: [".tsx"] },
];

function walk(dir, exts, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, exts, out);
    } else if (exts.some((ext) => entry.name.endsWith(ext))) {
      out.push(full);
    }
  }
  return out;
}

const DASH_CHARS = new Set(["—", "–"]); // em dash, en dash

/**
 * Scans source text for em/en dash characters, skipping // and /* *\/
 * comments. Dashes inside string literals AND bare JSX text both count
 * (both are user-visible); dashes inside comments are ignored.
 */
function findDashes(source) {
  const hits = [];
  let i = 0;
  let line = 1;
  let inBlockComment = false;
  let inLineComment = false;
  let stringChar = null; // ' " ` while inside a string/template literal
  const n = source.length;

  while (i < n) {
    const c = source[i];
    const next = i + 1 < n ? source[i + 1] : "";

    if (c === "\n") {
      line++;
      inLineComment = false;
      i++;
      continue;
    }

    if (inBlockComment) {
      if (c === "*" && next === "/") {
        inBlockComment = false;
        i += 2;
        continue;
      }
      i++;
      continue;
    }

    if (inLineComment) {
      i++;
      continue;
    }

    if (stringChar) {
      if (c === "\\") {
        i += 2; // skip escaped character
        continue;
      }
      if (c === stringChar) {
        stringChar = null;
        i++;
        continue;
      }
      if (DASH_CHARS.has(c)) hits.push({ line, char: c });
      i++;
      continue;
    }

    // Not inside a comment or a string.
    if (c === "/" && next === "*") {
      inBlockComment = true;
      i += 2;
      continue;
    }
    if (c === "/" && next === "/") {
      inLineComment = true;
      i += 2;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      stringChar = c;
      i++;
      continue;
    }
    if (DASH_CHARS.has(c)) hits.push({ line, char: c }); // bare JSX text
    i++;
  }

  return hits;
}

const files = ROOTS.flatMap(({ dir, exts }) => walk(dir, exts));

let hasErrors = false;
for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  const hits = findDashes(source);
  for (const hit of hits) {
    hasErrors = true;
    const label = hit.char === "—" ? "em dash (—)" : "en dash (–)";
    console.error(`${file}:${hit.line}: found ${label} in user-visible text`);
  }
}

if (hasErrors) {
  console.error(
    "\ncheck:copy failed. Replace em/en dashes with a period, colon, comma, " +
      "parentheses, or the word \"to\" for ranges. See CLAUDE.md \"Writing rules\"."
  );
  process.exit(1);
} else {
  console.log(`check:copy passed (${files.length} files scanned).`);
}
