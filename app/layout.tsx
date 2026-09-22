import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "PT Kappa Technology Solution — From Research to Real-World Solutions",
    template: "%s | PT KTS",
  },
  description:
    "PT Kappa Technology Solution develops and commercializes practical technology originating from research, experimentation, and engineering innovation.",
  keywords: [
    "PT Kappa Technology Solution",
    "PT KTS",
    "technology innovation",
    "research to product",
    "engineering Indonesia",
  ],
  authors: [{ name: "PT Kappa Technology Solution" }],
  creator: "PT Kappa Technology Solution",
  openGraph: {
    type: "website",
    locale: "en_US",
    ...(siteUrl ? { url: siteUrl } : {}),
    siteName: "PT Kappa Technology Solution",
    title: "PT KTS — From Research to Real-World Solutions",
    description:
      "We turn research and engineering ideas into practical technology for real-world impact.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT KTS — From Research to Real-World Solutions",
    description:
      "We turn research and engineering ideas into practical technology for real-world impact.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F5F3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
