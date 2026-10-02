import { useState } from "react";
import { ArrowRight, UserCheck, Shield, Award, X, Phone, Mail } from "lucide-react";
import { BUSINESS_INFO } from "../data/content";

export function AboutSection() {
  const [showBioModal, setShowBioModal] = useState(false);

  return (
    <>
      <section id="about" className="w-full bg-[#F7F6F1] py-24 sm:py-36 md:py-44 px-6 sm:px-10 lg:px-16 border-b border-[#D9D8D1]/70">
        <div className="max-w-5xl mx-auto">
          {/* Small label */}
          <div className="text-xs font-semibold tracking-[0.25em] text-[#73736D] uppercase mb-6 sm:mb-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B83A25]" />
            ABOUT PLUMBING PURE
          </div>

          {/* Headline */}
          <h2
            className="text-[#171716] text-balance font-normal leading-[0.98] tracking-[-0.045em] mb-10 sm:mb-14"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(42px, 7vw, 92px)"
            }}
          >
            Your local plumber.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12">
            <div className="md:col-span-8">
              {/* Body */}
              <p className="text-xl sm:text-2xl text-[#242421] font-normal leading-relaxed mb-6">
                Plumbing Pure has served San Francisco and Marin County since {BUSINESS_INFO.founded}, providing residential, commercial, and emergency plumbing services.
              </p>

              {/* Secondary line */}
              <p className="text-base sm:text-lg text-[#73736D] font-normal leading-relaxed mb-10">
                Founded by {BUSINESS_INFO.founder}, with more than {BUSINESS_INFO.experienceYears} years of plumbing experience.
              </p>

              {/* CTA */}
              <div>
                <button
                  onClick={() => setShowBioModal(true)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#171716] bg-transparent hover:bg-[#171716] hover:text-white border border-[#171716] rounded-full transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Meet the Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick trust metrics */}
            <div className="md:col-span-4 flex flex-col gap-6 pt-4 md:pt-0 md:border-l md:border-[#D9D8D1] md:pl-8">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#73736D] mb-1">
                  Experience
                </div>
                <div className="text-2xl font-semibold text-[#171716]">
                  20+ Years
                </div>
                <p className="text-xs text-[#73736D] mt-1">
                  Master craftsmanship in San Francisco architectural plumbing
                </p>
              </div>

              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#73736D] mb-1">
                  Service Area
                </div>
                <div className="text-lg font-semibold text-[#171716]">
                  SF & Marin County
                </div>
                <p className="text-xs text-[#73736D] mt-1">
                  Dedicated local coverage
                </p>
              </div>

              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#73736D] mb-1">
                  Office Location
                </div>
                <div className="text-sm font-medium text-[#171716]">
                  {BUSINESS_INFO.address}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Modal */}
      {showBioModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#F7F6F1] rounded-3xl p-8 sm:p-10 border border-[#D9D8D1] shadow-2xl">
            <button
              onClick={() => setShowBioModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full text-[#73736D] hover:text-[#171716] hover:bg-[#E7E6E0] transition-colors"
              aria-label="Close bio modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-semibold tracking-widest text-[#B83A25] uppercase mb-3">
              FOUNDER & LEAD PLUMBER
            </div>

            <h3
              className="text-3xl font-semibold text-[#171716] mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {BUSINESS_INFO.founder}
            </h3>

            <p className="text-sm font-medium text-[#73736D] mb-6">
              Over 20 years in residential and commercial plumbing across the Bay Area.
            </p>

            <div className="text-sm text-[#242421] space-y-4 leading-relaxed border-t border-[#D9D8D1] pt-6 mb-8">
              <p>
                Alexei founded Plumbing Pure in 2016 with a singular goal: to eliminate the ambiguity and frustration that homeowners often face when dealing with plumbing repairs.
              </p>
              <p>
                Having worked extensively on San Francisco's historic Victorians, modern high-rises, and Marin County hillside homes, Alexei brings deep architectural familiarity to every pipe, regulator, and water heater system.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#D9D8D1]">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex-1 py-3 text-center text-sm font-semibold text-white bg-[#B83A25] hover:bg-[#a1321f] rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Alexei ({BUSINESS_INFO.phone})
              </a>
              <button
                onClick={() => setShowBioModal(false)}
                className="py-3 px-6 text-sm font-medium text-[#171716] border border-[#D9D8D1] rounded-xl hover:bg-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
