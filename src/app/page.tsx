import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import SidesSection from "@/components/SidesSection";
import StorySection from "@/components/StorySection";
import TestimonialSection from "@/components/TestimonialSection";
import InfoOrderSection from "@/components/InfoOrderSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <Hero />
      <div className="section-divider" />
      <MenuSection />
      <div className="section-divider" />
      <SidesSection />
      <StorySection />
      <div className="section-divider" />
      <TestimonialSection />
      <div className="section-divider" />
      <InfoOrderSection />
      <Footer />
    </main>
  );
}
