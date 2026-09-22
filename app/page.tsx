import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { BusinessLinesSection } from "@/components/sections/BusinessLinesSection";
import { BusinessUnitsSection } from "@/components/sections/BusinessUnitsSection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { UpcomingActivitiesSection } from "@/components/sections/UpcomingActivitiesSection";
import { EsicNetworkSection } from "@/components/sections/EsicNetworkSection";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.legalName} — ${site.tagline}`,
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BusinessLinesSection />
      <BusinessUnitsSection />
      <FeaturedProductsSection />
      <UpcomingActivitiesSection />
      <EsicNetworkSection />
      <ContactCtaSection />
    </>
  );
}
