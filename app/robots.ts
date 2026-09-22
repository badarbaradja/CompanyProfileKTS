import type { MetadataRoute } from "next";
import { isDraftMode } from "@/lib/draft";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

// While NEXT_PUBLIC_DRAFT_MODE is on, keep the skeleton site out of
// search results — see REVISION_V0.2.md section 5.
export default function robots(): MetadataRoute.Robots {
  const draft = isDraftMode();

  return {
    rules: {
      userAgent: "*",
      ...(draft ? { disallow: "/" } : { allow: "/" }),
    },
    ...(siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}
