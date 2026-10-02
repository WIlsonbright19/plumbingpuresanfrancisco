import { useState, useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { SERVICES, ServiceItem } from "../data/content";
import { getServiceIcon } from "./ServiceIcons";

interface ServicesSectionProps {
  onNavigateToContact: (serviceId?: string) => void;
}

export function ServicesSection({ onNavigateToContact }: ServicesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.querySelectorAll(".service-card");
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      container.scrollTo({
        left: card.offsetLeft - 32,
        behavior: "smooth"
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeIndex - 1);
    scrollToIndex(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(SERVICES.length - 1, activeIndex + 1);
    scrollToIndex(nextIdx);
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const itemWidth = containerWidth * 0.7;
    const index = Math.round(scrollLeft / itemWidth);
    if (index >= 0 && index < SERVICES.length && index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section id="services" className="w-full bg-[#F7F6F1] py-24 sm:py-32 overflow-hidden border-b border-[#D9D8D1]/70">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold tracking-[0.25em] text-[#73736D] uppercase mb-4">
              WHAT WE DO
            </div>
            <h2
              className="text-[#171716] text-balance font-normal leading-[0.98] tracking-[-0.04em]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5.5vw, 76px)"
              }}
            >
              Plumbing for<br />real life.
            </h2>
          </div>

          {/* Desktop Navigation & Indicator */}
          <div className="hidden md:flex items-center gap-6">
            <div className="text-sm font-mono text-[#73736D]">
              <span className="text-[#171716] font-semibold">0{activeIndex + 1}</span> / 0{SERVICES.length}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label="Previous service"
                className="w-12 h-12 rounded-full border border-[#D9D8D1] flex items-center justify-center text-[#171716] hover:bg-[#171716] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#171716] transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={activeIndex === SERVICES.length - 1}
                aria-label="Next service"
                className="w-12 h-12 rounded-full border border-[#D9D8D1] flex items-center justify-center text-[#171716] hover:bg-[#171716] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#171716] transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP HORIZONTAL SCROLLING CONTAINER (65-75vw per panel) */}
      <div className="hidden md:block w-full">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto no-scrollbar px-6 sm:px-12 lg:px-16 pb-8 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              onClick={() => onNavigateToContact(service.id)}
              className="service-card group relative shrink-0 w-[72vw] max-w-[940px] bg-white rounded-3xl p-8 sm:p-12 border border-[#D9D8D1] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-all duration-300 snap-start cursor-pointer flex flex-col justify-between"
            >
              {/* Top Row: Large Number & Service Title */}
              <div>
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    {/* Minimalist Custom Line-Art Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-[#F7F6F1] border border-[#D9D8D1] group-hover:border-[#B83A25] group-hover:bg-[#B83A25]/5 flex items-center justify-center text-[#171716] group-hover:text-[#B83A25] transition-all duration-300 shrink-0">
                      {getServiceIcon(service.id, "w-6 h-6")}
                    </div>

                    <div className="flex items-baseline gap-3">
                      <span
                        className="text-3xl sm:text-5xl font-mono text-[#D9D8D1] group-hover:text-[#B83A25] group-hover:-translate-y-0.5 transition-all duration-300"
                      >
                        {service.num}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#73736D] bg-[#F7F6F1] px-2.5 py-1 rounded-full border border-[#D9D8D1]/60">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <div className="w-11 h-11 rounded-full border border-[#D9D8D1] group-hover:border-[#171716] group-hover:bg-[#171716] group-hover:text-white flex items-center justify-center text-[#171716] transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

                <h3
                  className="text-[#171716] text-3xl sm:text-5xl font-normal leading-[1.05] tracking-tight mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>

                <p className="text-lg sm:text-xl text-[#73736D] max-w-xl font-normal mb-8">
                  {service.shortDesc}
                </p>
              </div>

              {/* Large Photograph with Hover Subtle Zoom */}
              <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden bg-[#242421]">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs sm:text-sm font-medium">
                  <span className="bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                    Click to request {service.title.toLowerCase()}
                  </span>
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    San Francisco · Marin
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal Progress Bar */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-6 flex items-center gap-4">
          <div className="h-[2px] flex-1 bg-[#D9D8D1] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#171716] transition-all duration-300"
              style={{
                width: `${((activeIndex + 1) / SERVICES.length) * 100}%`
              }}
            />
          </div>
          <span className="text-xs font-mono text-[#73736D]">
            Drag or swipe horizontally
          </span>
        </div>
      </div>

      {/* MOBILE STACKED SECTIONS (Comfortable touch targets, no cramped cards) */}
      <div className="md:hidden px-6 flex flex-col gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            onClick={() => onNavigateToContact(service.id)}
            className="bg-white rounded-2xl p-6 border border-[#D9D8D1] shadow-sm active:scale-[0.99] transition-transform cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#F7F6F1] border border-[#D9D8D1] flex items-center justify-center text-[#B83A25] shrink-0">
                  {getServiceIcon(service.id, "w-4.5 h-4.5")}
                </div>
                <span className="text-2xl font-mono text-[#B83A25] font-semibold">
                  {service.num}
                </span>
              </div>
              <span className="text-xs uppercase tracking-wider text-[#73736D] bg-[#F7F6F1] px-2.5 py-1 rounded-full border border-[#D9D8D1]/60">
                {service.category}
              </span>
            </div>

            <h3
              className="text-2xl font-normal text-[#171716] leading-tight mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {service.title}
            </h3>

            <p className="text-sm text-[#73736D] leading-relaxed mb-5">
              {service.shortDesc}
            </p>

            <div className="w-full h-48 rounded-xl overflow-hidden mb-4 relative bg-[#242421]">
              <img
                src={service.image}
                alt={service.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between text-xs font-medium text-[#171716] pt-2 border-t border-[#E7E6E0]">
              <span>Request Service</span>
              <ArrowUpRight className="w-4 h-4 text-[#B83A25]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
