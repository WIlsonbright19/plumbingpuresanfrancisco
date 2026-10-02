import { useState } from "react";
import { Phone, ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO } from "../data/content";

export function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="w-full bg-[#171716] text-[#E7E6E0] pt-16 sm:pt-20">
        {/* Main Footer Links & Info */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
            <div>
              <div
                className="text-2xl font-bold tracking-tight text-white uppercase mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {BUSINESS_INFO.name}
              </div>
              <div className="text-sm text-[#73736D]">
                {BUSINESS_INFO.serviceArea}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-lg font-normal text-white hover:text-[#B83A25] transition-colors"
              >
                {BUSINESS_INFO.phone}
              </a>

              <nav className="flex items-center gap-6 text-[#E7E6E0]/80">
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
                <a href="#work" className="hover:text-white transition-colors">
                  Work
                </a>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </nav>
            </div>
          </div>

          <div className="pt-8 pb-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#73736D]">
            <div>
              © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setShowPrivacy(true)}
                className="hover:text-white transition-colors"
              >
                Privacy
              </button>
              <span>·</span>
              <span>319 27th Ave, San Francisco, CA 94121</span>
            </div>
          </div>
        </div>

        {/* AT THE END OF THE FOOTER: Massive Plumbing Pure Editorial Brandmark (fit to business, template buttons deleted) */}
        <div className="relative w-full bg-[#0d0d0c] border-t border-white/10 overflow-hidden py-8 sm:py-12 px-4 sm:px-8">
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 relative min-h-[110px] sm:min-h-[140px]">
            {/* Massive Oversized Brand Graphic for Plumbing Pure */}
            <div className="flex items-center gap-4 sm:gap-8 select-none overflow-hidden pr-4">
              {/* Architectural Plumbing Pure Monogram Crest */}
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-[#1c1c1a] border border-white/10 flex items-center justify-center shrink-0 text-[#B83A25] shadow-inner">
                <span
                  className="font-bold text-2xl sm:text-4xl tracking-tighter"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  PP
                </span>
              </div>

              {/* Giant Typography "PLUMBING PURE" */}
              <span
                className="text-[#262623] hover:text-[#2d2d29] transition-colors font-bold tracking-tight uppercase leading-none whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(38px, 9vw, 130px)",
                  letterSpacing: "-0.05em"
                }}
              >
                Plumbing Pure
              </span>
            </div>

            {/* Direct Local Business Action (Replaced template buttons) */}
            <div className="relative z-10 flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#B83A25] hover:bg-[#a1321f] rounded-xl shadow-lg transition-all active:scale-95 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call ({BUSINESS_INFO.phone})</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-medium text-white/90 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-all active:scale-95 whitespace-nowrap"
              >
                <span>Request Service</span>
                <ArrowUpRight className="w-4 h-4 text-white/70" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Minimal Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#F7F6F1] rounded-2xl p-6 sm:p-8 max-w-lg w-full border border-[#D9D8D1] text-[#171716]">
            <h3
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Privacy & Communication Policy
            </h3>
            <p className="text-xs text-[#73736D] leading-relaxed mb-4">
              Plumbing Pure respects your personal information. When you provide your phone number, address, or email for service requests, we use it solely to schedule and communicate directly regarding your plumbing service. We never sell, share, or market your information to third parties.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowPrivacy(false)}
                className="px-5 py-2 text-xs font-semibold uppercase bg-[#171716] text-white rounded-full hover:bg-[#B83A25]"
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

