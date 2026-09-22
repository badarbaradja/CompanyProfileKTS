import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // v0.1 → v0.2 route renames — see REVISION_V0.2.md section 4.1.
  // /innovation, /insights, and /projects have no v0.2 equivalent and
  // fall back to the homepage.
  async redirects() {
    return [
      { source: "/about", destination: "/tentang", permanent: true },
      { source: "/products", destination: "/produk", permanent: true },
      { source: "/products/:slug", destination: "/produk/:slug", permanent: true },
      { source: "/contact", destination: "/kontak", permanent: true },
      { source: "/innovation", destination: "/", permanent: true },
      { source: "/insights", destination: "/", permanent: true },
      { source: "/insights/:slug", destination: "/", permanent: true },
      { source: "/projects", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
