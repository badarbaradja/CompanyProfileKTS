import type { MetadataRoute } from "next";
import { products } from "@/content/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

  const routes = [
    "",
    "/tentang",
    "/layanan",
    "/produk",
    "/pelatihan",
    "/kegiatan",
    "/kontak",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const productRoutes = products.map((product) => ({
    url: `${siteUrl}/produk/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...productRoutes];
}
