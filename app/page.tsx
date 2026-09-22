import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyKTSSection } from "@/components/sections/WhyKTSSection";
import { InnovationsSection } from "@/components/sections/InnovationsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title:
    "PT Kappa Technology Solution — From Research to Real-World Solutions",
  description:
    "PT KTS develops and commercializes practical technology originating from research, experimentation, and engineering innovation.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyKTSSection />
      <InnovationsSection />
      <ProcessSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
