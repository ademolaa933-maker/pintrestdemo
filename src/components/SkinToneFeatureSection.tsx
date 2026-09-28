import React, { useState } from "react";
import { Search, ChevronLeft, SlidersHorizontal, Sparkles } from "lucide-react";
import { SKIN_TONE_DATA, SkinToneItem } from "../data/mockData";

interface SkinToneFeatureSectionProps {
  onJoinPinterest: () => void;
}

export const SkinToneFeatureSection: React.FC<SkinToneFeatureSectionProps> = ({
  onJoinPinterest,
}) => {
  const [selectedToneIndex, setSelectedToneIndex] = useState(0);
  const activeTone = SKIN_TONE_DATA[selectedToneIndex];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Intro Kicker */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111] tracking-tight text-balance">
            Bring your favorite ideas to life
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed text-balance">
            With Pinterest, you can unlock tools that spark your creativity and help you find more inspiration.
          </p>
        </div>

        {/* Feature 1: Search by skin tone */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Phone/Card Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[480px] bg-[#f8f8f8] rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200/80">
              
              {/* Internal Mockup Screen */}
              <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
                
                {/* Search Bar Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                  <div className="text-gray-400 hover:text-black cursor-pointer">
                    <ChevronLeft className="w-5 h-5" />
                  </div>
                  <div className="flex-1 flex items-center gap-2 bg-gray-100 px-3.5 py-2 rounded-full text-xs font-semibold text-gray-700">
                    <Search className="w-3.5 h-3.5 text-gray-400" />
                    <span>find lipstick...</span>
                  </div>
                  <div className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 cursor-pointer">
                    <SlidersHorizontal className="w-4 h-4" />
                  </div>
                </div>

                {/* Skin Tone Selector Row */}
                <div className="mt-4 pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      Search by skin tone
                    </span>
                    <span className="text-[11px] font-semibold text-gray-400">
                      {activeTone.name}
                    </span>
                  </div>

                  {/* Swatches */}
                  <div className="flex items-center gap-2 sm:gap-2.5 p-2 bg-gray-50 rounded-2xl border border-gray-100 justify-between">
                    {SKIN_TONE_DATA.map((tone, idx) => {
                      const isSelected = idx === selectedToneIndex;
                      return (
                        <button
                          key={tone.id}
                          onClick={() => setSelectedToneIndex(idx)}
                          className={`group relative rounded-full transition-all duration-200 focus:outline-none ${
                            isSelected
                              ? "scale-110 ring-2 ring-black ring-offset-2"
                              : "hover:scale-105 opacity-80 hover:opacity-100"
                          }`}
                          style={{
                            width: "36px",
                            height: "36px",
                            backgroundColor: tone.hex,
                          }}
                          aria-label={`Select skin tone ${tone.name}`}
                        >
                          {isSelected && (
                            <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold">
                              ✓
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4 Image Grid Results matching selected skin tone */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {activeTone.images.map((item, idx) => (
                    <div
                      key={idx}
                      className="group/card relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100 shadow-sm border border-gray-100 cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      {/* Gradient Backdrop representing the cosmetic look */}
                      <div className={`w-full h-full bg-gradient-to-br ${item.gradient} p-4 flex flex-col justify-between text-white relative`}>
                        {/* Shimmer overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                        
                        {/* Top Tag */}
                        <div className="relative z-10 flex justify-between items-start">
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
                            {item.shade}
                          </span>
                          <Sparkles className="w-3.5 h-3.5 opacity-80" />
                        </div>

                        {/* Center cosmetic styling graphic */}
                        <div className="relative z-10 flex items-center justify-center my-auto">
                          <div className="w-14 h-14 rounded-full border-2 border-white/40 shadow-inner flex items-center justify-center backdrop-blur-xs bg-white/10">
                            <span className="text-2xl">💄</span>
                          </div>
                        </div>

                        {/* Bottom Information */}
                        <div className="relative z-10">
                          <p className="text-xs font-bold leading-tight drop-shadow-sm truncate">
                            {item.title}
                          </p>
                          <div className="flex gap-1 mt-1">
                            {item.tags.map((t, tIdx) => (
                              <span key={tIdx} className="text-[9px] text-white/80">
                                #{t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 text-center">
                  <span className="text-[11px] font-medium text-gray-400">
                    Interactive Preview: Click tones above to change matches
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Copy and CTA */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111] tracking-tight leading-tight">
              Search by skin tone
            </h3>
            
            <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed text-balance">
              Search with skin tone ranges for beauty ideas that represent you.
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
