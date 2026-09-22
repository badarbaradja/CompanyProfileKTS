import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DraftBanner } from "@/components/layout/DraftBanner";
import { isDraftMode } from "@/lib/draft";
import { site } from "@/content/site";

// Self-hosted fonts — see REVISION_V0.2.md item #7 (v0.1 misconception
// table): next/font/google made the build depend on network access to
// Google Fonts. next/font/local removes that dependency.
//
// Cormorant Garamond (display) + DM Sans (body) — derived from
// sparktalks/bestiego-app, see DESIGN.md section 0.
const cormorant = localFont({
  src: [
    { path: "./fonts/cormorant/cormorant-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/cormorant/cormorant-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/cormorant/cormorant-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/cormorant/cormorant-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/cormorant/cormorant-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/cormorant/cormorant-500-italic.woff2", weight: "500", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = localFont({
  src: [
    { path: "./fonts/dmsans/dmsans-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/dmsans/dmsans-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/dmsans/dmsans-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/dmsans/dmsans-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-dmsans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const draft = isDraftMode();

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: `${site.legalName} — ${site.tagline}`,
    template: "%s | PT KTS",
  },
  description: site.description,
  keywords: [
    "PT Kappa Technology Solution",
    "PT KTS",
    "Kappa Solution",
    "Nara Aquaponics",
    "Bumi Hijau",
    "ESIC Network",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  openGraph: {
    type: "website",
    locale: "en_US",
    ...(siteUrl ? { url: siteUrl } : {}),
    siteName: site.legalName,
    title: `PT KTS — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `PT KTS — ${site.tagline}`,
    description: site.description,
  },
  // Draft-mode sites stay out of search results — see REVISION_V0.2.md section 5.
  robots: {
    index: !draft,
    follow: !draft,
    googleBot: { index: !draft, follow: !draft },
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F4EC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-draft={draft ? "true" : "false"}
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body>
        <DraftBanner />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
