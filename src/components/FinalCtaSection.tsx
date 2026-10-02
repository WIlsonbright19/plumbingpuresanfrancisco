import { Phone, ArrowRight, Shield } from "lucide-react";
import { BUSINESS_INFO, ASSET_IMAGES } from "../data/content";

interface FinalCtaSectionProps {
  onNavigateToContact: () => void;
}

export function FinalCtaSection({ onNavigateToContact }: FinalCtaSectionProps) {
  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#171716] text-white py-24 sm:py-32 px-6 sm:px-10">
      {/* Background Architectural Plumbing Image with dark overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSET_IMAGES.piping}
          alt="Immaculate copper piping plumbing manifold installation"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-[2000ms] ease-out opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171716] via-[#171716]/85 to-[#171716]/75" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Headline */}
        <h2
          className="text-white font-normal leading-[0.94] tracking-[-0.05em] mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(46px, 8vw, 108px)"
          }}
        >
          Need a plumber?
        </h2>

        {/* Supporting text */}
        <p className="text-xl sm:text-2xl text-[#E7E6E0] font-normal leading-relaxed mb-10 max-w-md">
          Let's get it sorted.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full max-w-md mb-8">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-[#B83A25] hover:bg-[#a1321f] rounded-full transition-all duration-200 shadow-xl shadow-[#B83A25]/30 active:scale-[0.98]"
          >
            <Phone className="w-4 h-4" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToContact();
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full backdrop-blur-sm transition-all duration-200 active:scale-[0.98]"
          >
            <span>Book Online</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Small text */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#E7E6E0]/80 uppercase tracking-widest font-mono">
          <span>{BUSINESS_INFO.serviceArea}</span>
          <span className="text-[#B83A25]">·</span>
          <span>Since {BUSINESS_INFO.founded}</span>
        </div>
      </div>
    </section>
  );
}
