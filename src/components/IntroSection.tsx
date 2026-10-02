import { BUSINESS_INFO } from "../data/content";

export function IntroSection() {
  return (
    <section className="w-full bg-[#F7F6F1] text-[#171716] py-24 sm:py-36 md:py-48 px-6 sm:px-12 lg:px-20 border-b border-[#D9D8D1]/60">
      <div className="max-w-5xl mx-auto">
        {/* Small label */}
        <div className="text-xs font-semibold tracking-[0.25em] text-[#73736D] uppercase mb-8 sm:mb-12">
          {BUSINESS_INFO.name}
        </div>

        {/* Headline */}
        <h2
          className="text-[#171716] text-balance font-normal leading-[1.0] tracking-[-0.045em] mb-10 sm:mb-16"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 6.5vw, 92px)"
          }}
        >
          Good plumbing should feel simple.
        </h2>

        {/* Supporting text with expansive whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="hidden md:block md:col-span-4" />
          <div className="md:col-span-8">
            <p className="text-xl sm:text-2xl text-[#242421] font-normal leading-relaxed text-balance">
              We provide clear communication, practical solutions, and professional plumbing service across San Francisco and Marin County.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm font-medium text-[#73736D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B83A25]" />
              <span>Independent & locally owned since {BUSINESS_INFO.founded}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
