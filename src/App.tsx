import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { IntroSection } from "./components/IntroSection";
import { ServicesSection } from "./components/ServicesSection";
import { WaterHeaterFeature } from "./components/WaterHeaterFeature";
import { DrainCleaningFeature } from "./components/DrainCleaningFeature";
import { TrustSection } from "./components/TrustSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ProcessSection } from "./components/ProcessSection";
import { ServiceAreaSection } from "./components/ServiceAreaSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { MobileStickyCallBar } from "./components/MobileStickyCallBar";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleNavigateToContact = (serviceId?: string) => {
    if (serviceId) {
      setSelectedService(serviceId);
    }
    const elem = document.getElementById("contact");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
    // Focus the input to let user easily send message or booking inquiry
    setTimeout(() => {
      const input = document.getElementById("contact-name-input");
      if (input) {
        input.focus();
      }
    }, 450);
  };

  return (
    <div className="relative min-h-screen bg-[#F7F6F1] text-[#171716] flex flex-col font-sans selection:bg-[#B83A25] selection:text-white pb-14 sm:pb-0">
      {/* Floating Rounded Navigation (with tablet support) */}
      <Navbar onNavigateToContact={handleNavigateToContact} />

      <main className="flex-grow w-full">
        {/* 1. Hero with Cinematic Entrance */}
        <Hero onNavigateToContact={() => handleNavigateToContact()} />

        {/* 2. Large Editorial Statement */}
        <IntroSection />

        {/* 3. Horizontal Services Showcase */}
        <ServicesSection onNavigateToContact={handleNavigateToContact} />

        {/* 4. Water Heater Specialty (Dark Section) */}
        <WaterHeaterFeature onNavigateToContact={handleNavigateToContact} />

        {/* 5. Drain Cleaning Feature (Warm White, Image Left) */}
        <DrainCleaningFeature onNavigateToContact={handleNavigateToContact} />

        {/* 6. The Plumbing Pure Way (4 Horizontal Statements) */}
        <TrustSection />

        {/* 7. About Plumbing Pure (Local Plumber, Alexei Doubianski) */}
        <AboutSection />

        {/* 8. Recent Work (Editorial Categories Gallery) */}
        <ProjectsSection />

        {/* 9. Process (01 Talk, 02 Assess, 03 Solve, 04 Follow Through) */}
        <ProcessSection />

        {/* 10. Service Area (Dark Map-Inspired Visual Section) */}
        <ServiceAreaSection />

        {/* 11. Customer Reviews (Quiet, One Large Quote) */}
        <TestimonialsSection />

        {/* 12. Final CTA (Large Photographic Section) */}
        <FinalCtaSection onNavigateToContact={() => handleNavigateToContact()} />

        {/* 13. Minimal Contact Section & Direct Form */}
        <ContactSection selectedService={selectedService} />
      </main>

      {/* 14. Minimal Footer with Galvoria Bottom End Bar */}
      <Footer />

      {/* Mobile & Tablet Persistent Sticky Call Bar (≤ 15% mobile viewport height compliant) */}
      <MobileStickyCallBar onNavigateToContact={() => handleNavigateToContact()} />

      {/* Floating WhatsApp chat button in bottom-right corner */}
      <WhatsAppButton />
    </div>
  );
}
