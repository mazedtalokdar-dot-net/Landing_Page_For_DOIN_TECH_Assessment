import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import SolutionsSection from "@/components/landing/SolutionsSection";
import PricingSection from "@/components/landing/PricingSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FaqSection from "@/components/landing/FaqSection";
import CtaSection from "@/components/landing/CtaSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <SolutionsSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
