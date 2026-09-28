import React, { useState } from "react";
import { Search, Camera, Tag, ArrowRight } from "lucide-react";
import { VISUAL_SEARCH_TAGS, VisualSearchTag } from "../data/mockData";

interface VisualSearchFeatureSectionProps {
  onJoinPinterest: () => void;
}

export const VisualSearchFeatureSection: React.FC<VisualSearchFeatureSectionProps> = ({
  onJoinPinterest,
}) => {
  const [activeTag, setActiveTag] = useState<VisualSearchTag>(VISUAL_SEARCH_TAGS[0]);

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Search Image with Interactive Tags */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[480px] bg-[#f5f5f5] rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200/80">
              
              {/* Image Frame with Lens Overlay */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-neutral-900 aspect-[3/4] group">
                
                {/* Fashion illustration / graphic of model wearing red sweater & pleated skirt */}
                <div className="w-full h-full bg-gradient-to-b from-[#f3e9dc] to-[#e8d8c8] relative flex items-center justify-center p-4">
                  <svg viewBox="0 0 300 400" className="w-full h-full drop-shadow-md">
                    {/* Head / Hair */}
                    <circle cx="150" cy="90" r="32" fill="#3a2518" />
                    <circle cx="150" cy="95" r="26" fill="#fcd5ce" />
                    {/* Long brown hair */}
                    <path d="M120 90 Q110 160 125 210 Q145 150 145 120 Z" fill="#3a2518" />
                    <path d="M180 90 Q190 160 175 210 Q155 150 155 120 Z" fill="#3a2518" />

                    {/* Cherry Red Knit Sweater */}
                    <path
                      d="M110 120 L190 120 L215 220 L185 225 L175 160 L170 250 L130 250 L125 160 L115 225 L85 220 Z"
                      fill="#d90429"
                    />
                    {/* Knit sweater ribbed neckline & texture */}
                    <ellipse cx="150" cy="122" rx="22" ry="10" fill="#a0001e" />
                    <line x1="130" y1="140" x2="170" y2="140" stroke="#b00424" strokeWidth="2" strokeDasharray="3 3" />
                    <line x1="125" y1="165" x2="175" y2="165" stroke="#b00424" strokeWidth="2" strokeDasharray="3 3" />
                    <line x1="120" y1="190" x2="180" y2="190" stroke="#b00424" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Preppy Pleated Skirt */}
                    <path
                      d="M130 248 L170 248 L195 330 L105 330 Z"
                      fill="#1e293b"
                    />
                    {/* Skirt pleats */}
                    <line x1="135" y1="248" x2="120" y2="330" stroke="#334155" strokeWidth="2" />
                    <line x1="145" y1="248" x2="140" y2="330" stroke="#334155" strokeWidth="2" />
                    <line x1="155" y1="248" x2="160" y2="330" stroke="#334155" strokeWidth="2" />
                    <line x1="165" y1="248" x2="180" y2="330" stroke="#334155" strokeWidth="2" />

                    {/* Legs */}
                    <rect x="132" y="330" width="14" height="60" rx="4" fill="#fcd5ce" />
                    <rect x="154" y="330" width="14" height="60" rx="4" fill="#fcd5ce" />
                  </svg>

                  {/* Lens UI Camera Icon badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-white text-xs font-semibold">
                    <Camera className="w-3.5 h-3.5 text-red-400" />
                    <span>Visual Search</span>
                  </div>

                  {/* Floating Tags Matching Screenshot:
                      1. "Cherry red"
                      2. "Knit sweater"
                      3. "Preppy look" */}
                  {VISUAL_SEARCH_TAGS.map((tag) => {
                    const isSelected = activeTag.id === tag.id;
                    return (
                      <button
                        key={tag.id}
                        onClick={() => setActiveTag(tag)}
                        style={{
                          left: `${tag.xPercent}%`,
                          top: `${tag.yPercent}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                        className={`absolute z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 shadow-lg ${
                          isSelected
                            ? "bg-white text-gray-900 ring-2 ring-[#e60023] scale-105"
                            : "bg-white/90 hover:bg-white text-gray-800 backdrop-blur-md hover:scale-105"
                        }`}
                      >
                        {/* Dot / Tag Icon */}
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isSelected ? "bg-[#e60023]" : "bg-gray-400"
                          }`}
                        />
                        <span className="whitespace-nowrap">{tag.label}</span>
                      </button>
                    );
                  })}

                  {/* Active Tag Results Floating Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-white/60 z-30">
                    <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                      <span className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5 text-[#e60023]" />
                        Matched styles for: <span className="text-[#e60023]">{activeTag.label}</span>
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium">3 results</span>
                    </div>

                    <div className="mt-2.5 space-y-1.5">
                      {activeTag.results.map((res, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-center justify-between text-xs py-1 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-800 truncate mr-2">
                            {res.title}
                          </span>
                          <span className="font-bold text-gray-900 shrink-0">
                            {res.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Copy & Call to Action */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111] tracking-tight leading-tight">
              Search visually with images
            </h3>

            <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed text-balance">
              Search objects within an image to find more styles you&apos;ll love.
            </p>

            <button
              onClick={onJoinPinterest}
              className="mt-8 px-7 py-3.5 rounded-full bg-[#e60023] hover:bg-[#b6001c] text-white font-bold text-base shadow-sm hover:shadow transition-all duration-150 active:scale-95"
            >
              Join Pinterest
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
