import { TRUST_PILLARS } from "../data/content";

export function TrustSection() {
  return (
    <section className="w-full bg-[#F7F6F1] py-24 sm:py-36 px-6 sm:px-10 lg:px-16 border-b border-[#D9D8D1]/70">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 sm:mb-24">
          <div className="text-xs font-semibold tracking-[0.25em] text-[#73736D] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B83A25]" />
            THE PLUMBING PURE WAY
          </div>

          <h2
            className="text-[#171716] text-balance font-normal leading-[0.98] tracking-[-0.045em]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(38px, 6vw, 84px)"
            }}
          >
            Straight answers.<br />
            Clean work.
          </h2>
        </div>

        {/* Four Horizontal Statements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.num}
              className="pt-8 border-t border-[#171716] flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300"
            >
              <div>
                <span className="text-xs font-mono text-[#B83A25] font-semibold block mb-4">
                  {pillar.num}
                </span>

                <h3
                  className="text-lg sm:text-xl font-semibold tracking-tight text-[#171716] uppercase mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pillar.title}
                </h3>

                <p className="text-base text-[#73736D] font-normal leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
