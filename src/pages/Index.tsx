import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PropertyTicker from "@/components/PropertyTicker";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(state.scrollTo!)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      // Clear state
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="overflow-x-hidden">
      <Navbar delayedShow />
      <HeroSection />
      <PropertyTicker />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <WhatsAppButton variant="float" message="Olá, vim pelo site e gostaria de mais informações." />
    </div>
  );
};

export default Index;
