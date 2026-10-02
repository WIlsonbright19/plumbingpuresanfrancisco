import { useState, useEffect } from "react";
import { Phone, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { BUSINESS_INFO, ASSET_IMAGES } from "../data/content";

interface HeroProps {
  onNavigateToContact: () => void;
}

export function Hero({ onNavigateToContact }: HeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation on mount
    const timer = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#171716] text-white pt-28 sm:pt-36 pb-10 sm:pb-14">
      {/* Background Architectural Image with Cinematic Scaling Entrance */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSET_IMAGES.hero}
          alt="Modern San Francisco bathroom plumbing architecture"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center transition-transform duration-[1200ms] ease-out will-change-transform ${
            loaded ? "scale-100 opacity-65" : "scale-[1.08] opacity-0"
          }`}
        />
        {/* Measured cinematic scrim ensuring WCAG AA contrast (≥ 4.5:1) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171716] via-[#171716]/65 to-[#171716]/35" />
        <div className="absolute inset-0 bg-radial-[at_center_center] from-transparent via-[#171716]/40 to-[#171716]/80" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 my-auto">
        {/* Step 2: Eyebrow fades upward */}
        <div
          className={`transition-all duration-700 delay-100 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-[0.2em] text-[#E7E6E0]/80 uppercase mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#B83A25] inline-block animate-pulse" />
            <span>SAN FRANCISCO</span>
            <span className="text-[#B83A25]">·</span>
            <span>MARIN COUNTY</span>
          </div>
        </div>

        {/* Step 3: Headline reveals line-by-line */}
        <h1
          className="text-white text-balance font-normal leading-[0.94] tracking-[-0.05em] mb-6 sm:mb-8"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 7.2vw, 106px)"
          }}
        >
          <span
            className={`block transition-all duration-700 delay-200 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Straightforward plumbing.
          </span>
          <span
            className={`block text-[#F7F6F1]/95 transition-all duration-700 delay-300 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Done right.
          </span>
        </h1>

        {/* Step 4: Supporting text */}
        <p
          className={`max-w-xl text-lg sm:text-xl text-[#E7E6E0] font-normal leading-relaxed mb-8 sm:mb-10 transition-all duration-700 delay-400 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Residential, commercial, and emergency plumbing across San Francisco and Marin County.
        </p>

        {/* Step 5: CTAs appear last */}
        <div
          className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 transition-all duration-700 delay-500 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-semibold text-white bg-[#B83A25] hover:bg-[#a1321f] rounded-full transition-all duration-200 shadow-lg shadow-[#B83A25]/25 hover:shadow-xl active:scale-[0.98]"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToContact();
            }}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm sm:text-base font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full backdrop-blur-sm transition-all duration-200 active:scale-[0.98]"
          >
            <span>Book Online</span>
            <ArrowRight className="w-4 h-4 text-white/80" />
          </a>
        </div>
      </div>

      {/* Hero Bottom Detail Bar */}
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 sm:pt-12 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-[#E7E6E0]/80 transition-all duration-700 delay-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="font-medium text-white">Emergency</span>
          <span className="text-[#B83A25]">·</span>
          <span className="font-medium text-white">Water Heaters</span>
          <span className="text-[#B83A25]">·</span>
          <span className="font-medium text-white">Drain Cleaning</span>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#E7E6E0]/70">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#B83A25]" />
            Founded 2016 · Alexei Doubianski
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#B83A25]" />
            Local Direct Response
          </span>
        </div>
      </div>
    </section>
  );
}
