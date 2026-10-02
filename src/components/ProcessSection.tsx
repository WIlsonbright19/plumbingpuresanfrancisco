import { PROCESS_STEPS } from "../data/content";

export function ProcessSection() {
  return (
    <section className="w-full bg-[#F7F6F1] py-24 sm:py-36 px-6 sm:px-10 lg:px-16 border-b border-[#D9D8D1]/70">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 sm:mb-24">
          <div className="text-xs font-semibold tracking-[0.25em] text-[#73736D] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B83A25]" />
            HOW IT WORKS
          </div>

          <h2
            className="text-[#171716] text-balance font-normal leading-[0.98] tracking-[-0.045em]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(38px, 6vw, 84px)"
            }}
          >
            Simple from<br />start to finish.
          </h2>
        </div>

        {/* 4 Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.num}
              className="group flex flex-col justify-between pt-8 border-t border-[#171716] transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <span
                  className="text-4xl sm:text-6xl font-mono text-[#D9D8D1] group-hover:text-[#B83A25] transition-colors duration-300 block mb-6 font-light"
                >
                  {step.num}
                </span>

                <h3
                  className="text-xl sm:text-2xl font-normal text-[#171716] mb-3 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>

                <p className="text-base text-[#73736D] font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
