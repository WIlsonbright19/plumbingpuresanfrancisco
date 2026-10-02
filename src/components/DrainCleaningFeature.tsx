import { ArrowRight, CheckCircle2, Video } from "lucide-react";
import { ASSET_IMAGES } from "../data/content";

interface DrainCleaningFeatureProps {
  onNavigateToContact: (serviceId?: string) => void;
}

export function DrainCleaningFeature({ onNavigateToContact }: DrainCleaningFeatureProps) {
  return (
    <section className="w-full bg-[#F7F6F1] py-24 sm:py-36 md:py-44 px-6 sm:px-10 lg:px-16 border-b border-[#D9D8D1]/70">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* IMAGE LEFT */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-[#D9D8D1] shadow-lg aspect-[4/3] sm:aspect-[16/11] bg-[#242421]">
              <img
                src={ASSET_IMAGES.drainCleaning}
                alt="Professional plumbing drain cleaning and inspection equipment"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white">
                <span className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 inline-flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-[#B83A25]" />
                  HD Video Sewer Camera Inspection
                </span>
                <span className="text-white/80">Diagnostics</span>
              </div>
            </div>
          </div>

          {/* TEXT RIGHT */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <div className="text-xs font-semibold tracking-[0.25em] text-[#73736D] uppercase mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B83A25]" />
              DRAIN CLEANING
            </div>

            <h2
              className="text-[#171716] text-balance font-normal leading-[0.98] tracking-[-0.045em] mb-6 sm:mb-8"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 6vw, 84px)"
              }}
            >
              Clear the blockage.<br />
              Keep things moving.
            </h2>

            <p className="text-lg sm:text-2xl text-[#242421] font-normal leading-relaxed max-w-xl mb-8 sm:mb-10 text-balance">
              Snaking and hydro-jetting help clear clogged or slow-moving drain lines.
            </p>

            <div className="space-y-3 mb-8 sm:mb-10">
              <div className="flex items-center gap-3 text-sm text-[#73736D]">
                <CheckCircle2 className="w-4 h-4 text-[#B83A25] shrink-0" />
                <span>Heavy-duty motorized snaking for main sewer laterals & branches</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#73736D]">
                <CheckCircle2 className="w-4 h-4 text-[#B83A25] shrink-0" />
                <span>Video camera pipe diagnostics to verify clear line conditions</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#73736D]">
                <CheckCircle2 className="w-4 h-4 text-[#B83A25] shrink-0" />
                <span>Respectful protection of floors and living areas</span>
              </div>
            </div>

            <div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateToContact("drain-cleaning");
                }}
                className="inline-flex items-center gap-2 px-8 py-4 text-sm sm:text-base font-semibold text-white bg-[#171716] hover:bg-[#B83A25] rounded-full transition-all duration-200 shadow-md active:scale-[0.98]"
              >
                <span>Book Service</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
