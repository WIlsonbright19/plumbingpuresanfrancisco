import { useState, useEffect } from "react";
import { Phone, ArrowUpRight, Menu, X } from "lucide-react";
import { BUSINESS_INFO } from "../data/content";

interface NavbarProps {
  onNavigateToContact: (serviceId?: string) => void;
}

export function Navbar({ onNavigateToContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 flex justify-center px-3 sm:px-6 pt-3 sm:pt-5 pointer-events-none transition-all duration-300"
      >
        <div
          className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl px-3.5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-[#F7F6F1]/92 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#D9D8D1]/80"
              : "bg-[#F7F6F1]/75 backdrop-blur-sm border border-[#D9D8D1]/40"
          }`}
        >
          {/* Zone 1: Single text element wordmark with reduced, refined mobile sizing */}
          <a
            href="#"
            className="text-[12px] sm:text-[13px] md:text-sm lg:text-base font-bold tracking-[0.05em] sm:tracking-[0.04em] text-[#171716] uppercase hover:text-[#B83A25] transition-colors whitespace-nowrap"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {BUSINESS_INFO.name}
          </a>

          {/* Zone 2: Clean text navigation links (Hidden on Mobile & Tablet, visible on lg Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#73736D]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#171716] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#171716] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary actions */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Desktop Book button (navigates to contact) */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToContact();
              }}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#171716] hover:text-[#B83A25] transition-colors whitespace-nowrap"
            >
              Book Online
            </a>

            {/* Call button with reduced mobile typography */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold text-white bg-[#171716] hover:bg-[#B83A25] rounded-full transition-all duration-200 shadow-sm active:scale-95 whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-white/90" />
              <span className="sm:hidden">Call</span>
              <span className="hidden sm:inline">Call Now</span>
              <ArrowUpRight className="hidden sm:inline-block w-3 h-3 text-white/70" />
            </a>

            {/* Mobile & Tablet menu toggle (visible on both mobile and tablet < lg) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-full hover:bg-black/5 text-[#171716] hover:text-[#B83A25] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Dropdown Menu with reduced, crisp typography */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-3 sm:inset-x-4 top-16 sm:top-20 z-50 p-4 sm:p-5 bg-[#F7F6F1]/98 backdrop-blur-md border border-[#D9D8D1] rounded-2xl shadow-xl lg:hidden animate-in fade-in slide-in-from-top-3 duration-200 max-w-lg mx-auto">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#E7E6E0] text-[10px] font-mono tracking-widest text-[#73736D] uppercase">
            <span>Navigation</span>
            <span>SF & Marin County</span>
          </div>

          <nav className="flex flex-col gap-1 text-[13px] font-medium text-[#171716]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2 rounded-lg hover:bg-black/5 hover:text-[#B83A25] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-[#73736D] font-mono">→</span>
              </a>
            ))}

            <div className="pt-3 mt-1 border-t border-[#E7E6E0] flex flex-col gap-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  onNavigateToContact();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[#171716] border border-[#D9D8D1] rounded-xl hover:bg-white transition-colors block"
              >
                Book Online
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-2.5 text-center text-xs font-semibold text-white bg-[#B83A25] hover:bg-[#a1321f] rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call ({BUSINESS_INFO.phone})</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
