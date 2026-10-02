import { useState } from "react";
import { ArrowUpRight, MapPin, Eye } from "lucide-react";
import { RECENT_WORK, WorkItem } from "../data/content";

const CATEGORIES = ["All", "Residential", "Commercial", "Water Heaters", "Drain & Sewer", "Remodels"] as const;

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<WorkItem | null>(null);

  const filteredWork = selectedCategory === "All"
    ? RECENT_WORK
    : RECENT_WORK.filter((item) => item.category === selectedCategory);

  return (
    <>
      <section id="work" className="w-full bg-[#F7F6F1] py-24 sm:py-36 px-6 sm:px-10 lg:px-16 border-b border-[#D9D8D1]/70">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
            <div>
              <div className="text-xs font-semibold tracking-[0.25em] text-[#73736D] uppercase mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B83A25]" />
                RECENT WORK
              </div>

              <h2
                className="text-[#171716] text-balance font-normal leading-[0.98] tracking-[-0.045em]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(38px, 6vw, 84px)"
                }}
              >
                Work that speaks<br />for itself.
              </h2>
            </div>

            {/* Category Filter Tabs (Interactive, compliant with constitution) */}
            <div className="flex items-center flex-wrap gap-1 p-1 bg-[#E7E6E0]/70 rounded-full border border-[#D9D8D1]">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-[#171716] text-white shadow-sm"
                      : "text-[#73736D] hover:text-[#171716]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Editorial Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWork.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group cursor-pointer flex flex-col justify-between bg-white rounded-2xl p-5 sm:p-6 border border-[#D9D8D1] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-[#242421]">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#171716] group-hover:bg-[#171716] group-hover:text-white transition-colors">
                      <Eye className="w-4 h-4" />
                    </div>

                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-white bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Metadata & Title */}
                  <div className="flex items-center gap-2 text-xs text-[#73736D] mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#B83A25]" />
                    <span>{item.location}</span>
                  </div>

                  <h3
                    className="text-xl font-normal text-[#171716] mb-2 leading-snug group-hover:text-[#B83A25] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-[#73736D] font-normal leading-relaxed pt-3 border-t border-[#E7E6E0] mt-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Detail Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#F7F6F1] rounded-3xl p-6 sm:p-8 border border-[#D9D8D1] shadow-2xl">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#242421]">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#B83A25] font-semibold">
                {activeItem.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-[#73736D]">
                <MapPin className="w-3.5 h-3.5 text-[#B83A25]" />
                <span>{activeItem.location}</span>
              </div>
            </div>

            <h3
              className="text-2xl sm:text-3xl font-normal text-[#171716] mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {activeItem.title}
            </h3>

            <p className="text-sm sm:text-base text-[#73736D] leading-relaxed mb-6">
              {activeItem.description}
            </p>

            <div className="flex justify-end pt-4 border-t border-[#D9D8D1]">
              <button
                onClick={() => setActiveItem(null)}
                className="px-6 py-2.5 text-xs font-medium uppercase tracking-wider bg-[#171716] text-white rounded-full hover:bg-[#B83A25] transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
