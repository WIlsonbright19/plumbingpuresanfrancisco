import { ArrowRight, Flame, Wrench, Phone } from "lucide-react";
import { BUSINESS_INFO, ASSET_IMAGES } from "../data/content";

interface WaterHeaterFeatureProps {
  onNavigateToContact: (serviceId?: string) => void;
}

export function WaterHeaterFeature({ onNavigateToContact }: WaterHeaterFeatureProps) {
  return (
    <section className="w-full bg-[#171716] text-white py-14 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-16 overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#B83A25]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="text-xs font-semibold tracking-[0.25em] text-[#B83A25] uppercase mb-3 sm:mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B83A25]" />
              SPECIALTY
            </div>

            <h2
              className="text-white text-balance font-normal leading-[0.96] tracking-[-0.05em] mb-4 sm:mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(34px, 6vw, 88px)"
              }}
            >
              Hot water.<br />
              Handled.
            </h2>

            <p className="text-base sm:text-xl text-[#E7E6E0] font-normal leading-relaxed max-w-xl mb-6 sm:mb-8 text-balance">
              From repairs to replacement and installation, we help keep your hot water running.
            </p>

            {/* Specialty highlights: two clean items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-white/10 mb-6 sm:mb-8 text-xs sm:text-sm text-[#E7E6E0]/80">
              <div className="flex items-start gap-3 bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none">
                <Flame className="w-4 h-4 text-[#B83A25] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Tankless & Standard</span>
                  <span className="text-xs text-[#73736D]">Gas, electric, and high-efficiency systems</span>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none">
                <Wrench className="w-4 h-4 text-[#B83A25] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Code & Seismic Compliant</span>
                  <span className="text-xs text-[#73736D]">Proper strapping, PRVs, and expansion tanks</span>
                </div>
              </div>
            </div>

            {/* Action buttons: exactly two clean buttons for mobile and tablet */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateToContact("water-heaters");
                }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-white bg-[#B83A25] hover:bg-[#a1321f] rounded-full transition-all duration-200 shadow-lg shadow-[#B83A25]/30 active:scale-[0.98] text-center"
              >
                <span>Talk to Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-colors active:scale-[0.98] text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Large Water-Heater Image with responsive ratio and non-colliding badges */}
          <div className="lg:col-span-6 relative mt-2 lg:mt-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.4)] aspect-[4/3] sm:aspect-[16/11] bg-[#242421]">
              <img
                src={ASSET_IMAGES.waterHeater}
                alt="High-end tankless water heater mechanical installation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-white/90">
                <span className="bg-[#171716]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  Precision Copper & Gas
                </span>
                <span className="text-[#E7E6E0]/80">SF & Marin Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
