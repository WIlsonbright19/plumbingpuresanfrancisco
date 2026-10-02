import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/content";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#F7F6F1] py-24 sm:py-36 md:py-44 px-6 sm:px-10 lg:px-16 border-b border-[#D9D8D1]/70">
      <div className="max-w-4xl mx-auto">
        {/* Label */}
        <div className="text-xs font-semibold tracking-[0.25em] text-[#73736D] uppercase mb-12 sm:mb-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B83A25]" />
            CLIENT EXPERIENCES
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full border border-[#D9D8D1] flex items-center justify-center text-[#171716] hover:bg-[#171716] hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next review"
              className="w-10 h-10 rounded-full border border-[#D9D8D1] flex items-center justify-center text-[#171716] hover:bg-[#171716] hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* One Large Quote */}
        <div className="relative min-h-[260px] flex flex-col justify-between">
          <Quote className="w-12 h-12 text-[#D9D8D1] mb-6" />

          <blockquote
            className="text-2xl sm:text-4xl text-[#171716] font-normal leading-[1.25] tracking-tight mb-8 sm:mb-12 text-balance transition-all duration-300"
            style={{ fontFamily: "var(--font-display)" }}
          >
            "{current.quote}"
          </blockquote>

          {/* Small customer name & Small location */}
          <div className="flex items-center gap-4 pt-6 border-t border-[#D9D8D1]">
            <div className="w-8 h-8 rounded-full bg-[#171716] text-white text-xs font-semibold flex items-center justify-center">
              {current.author.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-semibold text-[#171716]">
                {current.author}
              </div>
              <div className="text-xs text-[#73736D]">
                {current.location} <span className="mx-1">·</span> {current.service}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex items-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-[#171716]" : "w-2 bg-[#D9D8D1]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
