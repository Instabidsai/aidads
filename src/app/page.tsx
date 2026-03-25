import { Hero } from "@/components/Hero";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FeaturedCompanies } from "@/components/FeaturedCompanies";
import { PartnershipPitch } from "@/components/PartnershipPitch";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BeforeAfter />
      <FeaturedCompanies />
      <PartnershipPitch />
      <ContactSection />
    </>
  );
}
