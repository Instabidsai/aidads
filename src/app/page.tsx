import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { EcosystemPreview } from "@/components/EcosystemPreview";
import { PartnershipsSection } from "@/components/PartnershipsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { NumbersSection } from "@/components/NumbersSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StorySection />
      <EcosystemPreview />
      <PartnershipsSection />
      <ServicesSection />
      <NumbersSection />
      <ContactSection />
    </>
  );
}
