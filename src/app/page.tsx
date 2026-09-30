import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import CoursesSection from "@/components/landing/CoursesSection";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import PromoBanner from "@/components/landing/PromoBanner";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import NewsletterSection from "@/components/landing/NewsletterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#CAFF00] selection:text-[#0F52FF]">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <CoursesSection />
        <WhyChooseUs />
        <PromoBanner />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
