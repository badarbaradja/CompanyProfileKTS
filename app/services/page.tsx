import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BusinessLinesSection } from "@/components/sections/BusinessLinesSection";
import { BusinessUnitsSection } from "@/components/sections/BusinessUnitsSection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description: `${site.legalName}'s four business lines and three business units.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-padding">
        <Container>
          <FadeIn className="max-w-2xl">
            <SectionHeading
              eyebrow="Services"
              title="Business lines and units"
              description="PT KTS runs four business lines through three business units."
            />
          </FadeIn>
        </Container>
      </section>

      <BusinessLinesSection />
      <BusinessUnitsSection />
    </>
  );
}
