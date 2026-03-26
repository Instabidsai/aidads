import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { NumbersSection } from "@/components/NumbersSection";
import { EcosystemPreview } from "@/components/EcosystemPreview";
import { PartnershipsSection } from "@/components/PartnershipsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <NumbersSection />
      <StorySection />
      <EcosystemPreview />
      <PartnershipsSection />
      <ContactSection />
    </>
  );
}
