import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BusinessLinesSection } from "@/components/sections/BusinessLinesSection";
import { BusinessUnitsSection } from "@/components/sections/BusinessUnitsSection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Layanan",
  description: `Empat lini usaha dan tiga unit usaha ${site.legalName}.`,
};

export default function LayananPage() {
  return (
    <>
      <section className="section-padding">
        <Container>
          <FadeIn className="max-w-2xl">
            <SectionHeading
              eyebrow="Layanan"
              title="Lini usaha & unit usaha kami"
              description="PT KTS menjalankan empat lini usaha melalui tiga unit usaha."
            />
          </FadeIn>
        </Container>
      </section>

      <BusinessLinesSection />
      <BusinessUnitsSection />
    </>
  );
}
