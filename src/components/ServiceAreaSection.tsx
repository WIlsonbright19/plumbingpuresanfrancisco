import { useState } from "react";
import { MapPin, Check, Search, ShieldCheck } from "lucide-react";
import { SERVICE_AREAS } from "../data/content";

export function ServiceAreaSection() {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const handleCheckArea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const q = query.toLowerCase().trim();
    const sfMatch = SERVICE_AREAS.sf.some(area => area.toLowerCase().includes(q)) ||
      ["94121", "94118", "94115", "94123", "94109", "94114", "94110", "94107", "94103", "94117", "94122", "sf", "san francisco"].some(code => code.includes(q));

    const marinMatch = SERVICE_AREAS.marin.some(area => area.toLowerCase().includes(q)) ||
      ["94965", "94941", "94920", "94925", "94939", "94901", "94903", "94945", "94947", "marin"].some(code => code.includes(q));

    if (sfMatch || marinMatch) {
      setSearchResult(`Yes — Plumbing Pure directly services ${query.trim()}. Residential, commercial, & emergency response available.`);
    } else {
      setSearchResult(`We focus exclusively on San Francisco and Marin County to guarantee fast, dependable local response.`);
    }
  };

  return (
    <section className="w-full bg-[#171716] text-white py-24 sm:py-36 px-6 sm:px-10 lg:px-16 overflow-hidden relative">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#F7F6F1_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-semibold tracking-[0.25em] text-[#B83A25] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B83A25]" />
            WHERE WE WORK
          </div>

          <h2
            className="text-white text-balance font-normal leading-[0.96] tracking-[-0.05em] mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(42px, 6.5vw, 92px)"
            }}
          >
            San Francisco<br />
            & Marin County.
          </h2>

          <p className="text-lg sm:text-xl text-[#E7E6E0]/90 font-normal leading-relaxed">
            Local plumbing service for homes and businesses. We do not stretch across distant counties, so when you call, you receive timely, dedicated local attention.
          </p>
        </div>

        {/* 2 Primary Service Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* San Francisco */}
          <div className="bg-[#242421]/90 rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-[#B83A25]/50 transition-colors">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B83A25]">
                  REGION 01
                </span>
                <h3
                  className="text-3xl font-semibold text-white mt-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  San Francisco
                </h3>
              </div>
              <MapPin className="w-6 h-6 text-[#B83A25]" />
            </div>

            <p className="text-sm text-[#E7E6E0]/80 mb-6 leading-relaxed">
              Based at 319 27th Ave in the Richmond District, providing fast access to every neighborhood across the city:
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-[#E7E6E0]/90">
              {SERVICE_AREAS.sf.map((area) => (
                <div key={area} className="flex items-center gap-2 py-1">
                  <Check className="w-3.5 h-3.5 text-[#B83A25] shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Marin County */}
          <div className="bg-[#242421]/90 rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-[#B83A25]/50 transition-colors">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B83A25]">
                  REGION 02
                </span>
                <h3
                  className="text-3xl font-semibold text-white mt-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Marin County
                </h3>
              </div>
              <MapPin className="w-6 h-6 text-[#B83A25]" />
            </div>

            <p className="text-sm text-[#E7E6E0]/80 mb-6 leading-relaxed">
              Serving residential estates, hillside plumbing, and commercial spaces across Southern and Central Marin:
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-[#E7E6E0]/90">
              {SERVICE_AREAS.marin.map((area) => (
                <div key={area} className="flex items-center gap-2 py-1">
                  <Check className="w-3.5 h-3.5 text-[#B83A25] shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coverage Checker Form */}
        <div className="bg-[#242421]/60 rounded-2xl p-6 sm:p-8 border border-white/10 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-[#E7E6E0]/70 mb-3">
            VERIFY COVERAGE
          </div>
          <form onSubmit={handleCheckArea} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter your SF/Marin neighborhood or ZIP code..."
                className="w-full bg-[#171716] border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#B83A25]"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#B83A25] hover:bg-[#a1321f] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors shrink-0 flex items-center justify-center gap-2"
            >
              <Search className="w-3.5 h-3.5" />
              Check Area
            </button>
          </form>

          {searchResult && (
            <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-[#E7E6E0] animate-in fade-in">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B83A25] shrink-0 mt-0.5" />
                <span>{searchResult}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
