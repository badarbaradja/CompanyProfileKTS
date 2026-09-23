import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // import.meta.dirname (Node 22+), not __dirname — this file becomes
    // an ES module once vinext's Cloudflare deploy path sets "type":
    // "module" in package.json (REVISION_V0.9 part B), and CJS globals
    // aren't available in ESM.
    root: import.meta.dirname,
  },
  // v0.1 → v0.3 route renames — see REVISION_V0.3.md part A.1.
  // /about, /products, /products/[slug], and /contact are unchanged
  // v0.1 paths and need no redirect. /innovation, /projects, and
  // /insights have no direct v0.3 equivalent and map to the closest
  // replacement page.
  async redirects() {
    return [
      { source: "/innovation", destination: "/services", permanent: true },
      { source: "/projects", destination: "/events", permanent: true },
      { source: "/insights", destination: "/events", permanent: true },
      { source: "/insights/:slug", destination: "/events", permanent: true },
    ];
  },
};

export default nextConfig;
