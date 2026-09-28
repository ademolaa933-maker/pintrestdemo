import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onJoinFree: () => void;
  onAlreadyHaveAccount: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onJoinFree,
  onAlreadyHaveAccount,
}) => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px]">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center z-10">
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-[#111] tracking-tight leading-[1.08] text-balance">
              Create the life you love <br className="hidden sm:inline" />
              on pintrest
            </h1>

            <p className="mt-5 text-lg text-gray-600 max-w-md leading-relaxed hidden sm:block">
              Discover style ideas, easy dinner recipes, home decor inspiration, and everything you need to build your ideal world.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mt-8 w-full sm:w-auto">
              <button
                onClick={onJoinFree}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#e60023] hover:bg-[#b6001c] text-white font-bold text-base shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 text-center flex items-center justify-center gap-2"
              >
                <span>Join pintrest for free</span>
              </button>

              <button
                onClick={onAlreadyHaveAccount}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#efefef] hover:bg-[#e2e2e2] text-[#111] font-bold text-base transition-all duration-200 active:scale-95 text-center"
              >
                I already have an account
              </button>
            </div>
          </div>

          {/* Right Column: Signature Pin Collage */}
          <div className="lg:col-span-7 relative w-full flex items-center justify-center">
            {/* Background subtle radial glow */}
            <div className="absolute w-[450px] h-[450px] bg-amber-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-[580px] w-full items-start">
              
              {/* Column 1: Top Flowers + Bottom Green Hoodie */}
              <div className="flex flex-col gap-3 md:gap-4 pt-6">
                {/* Yellow Flowers in Vase Pin */}
                <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-[#fff6e5]">
                  <img
                    src="/src/assets/images/hero_flowers_vase_1790614826410.jpg"
                    alt="Yellow flowers in sunlit ceramic vase"
                    className="w-full h-44 sm:h-52 md:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image fails to render
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-xl text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Morning blooms · 14k saves
                  </div>
                </div>

                {/* Lime Green Streetwear Pin */}
                <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-[#d8f3dc]">
                  <div className="w-full h-44 sm:h-56 md:h-64 bg-gradient-to-br from-[#b7e4c7] via-[#95d5b2] to-[#74c69d] relative flex flex-col justify-end p-4">
                    {/* SVG Graphic representation of streetwear aesthetic */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-90 p-3">
                      <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-md">
                        {/* Hoodie silhouette */}
                        <path
                          d="M60 50 Q100 30 140 50 L180 90 L160 120 L135 105 L135 220 L65 220 L65 105 L40 120 L20 90 Z"
                          fill="#88d49e"
                        />
                        <path
                          d="M80 50 Q100 70 120 50 Q100 35 80 50 Z"
                          fill="#2d6a4f"
                          opacity="0.3"
                        />
                        <circle cx="100" cy="30" r="18" fill="#ffd166" />
                        {/* Pocket */}
                        <rect x="75" y="160" width="50" height="40" rx="8" fill="#52b788" />
                      </svg>
                    </div>
                    <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-sm">
                      <span className="text-xs font-bold text-gray-900 block truncate">
                        Lime hoodie minimal fit
                      </span>
                      <span className="text-[10px] text-gray-500">Streetwear · 42k saves</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Big Central Silk Scarf Pin */}
              <div className="flex flex-col gap-3 md:gap-4 -mt-4">
                <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ring-1 ring-black/5 bg-[#ffe8d6]">
                  <img
                    src="/src/assets/images/hero_scarf_fashion_1790614838205.jpg"
                    alt="Fashion portrait wearing patterned silk headscarf and sunglasses"
                    className="w-full h-72 sm:h-84 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <span className="text-white font-bold text-sm">
                      Silk scarf & retro shades
                    </span>
                    <span className="text-white/80 text-xs">Editorial look · 89k saves</span>
                  </div>
                </div>

                {/* Mini decorative inspirational pill */}
                <div className="p-3.5 bg-gray-50 border border-gray-100 rounded-2xl shadow-sm flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-[#e60023] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-gray-800">Fresh daily inspo</p>
                    <p className="text-gray-500 text-[11px]">Curated for your aesthetic</p>
                  </div>
                </div>
              </div>

              {/* Column 3: Top Right Mug & Ceramic + Terracotta Bag */}
              <div className="flex flex-col gap-3 md:gap-4 pt-4">
                {/* Ceramic Mug / Aesthetic objects */}
                <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-[#ede0d4]">
                  <div className="w-full h-36 sm:h-44 md:h-48 bg-gradient-to-br from-[#ddb892] to-[#b08968] relative flex items-center justify-center p-3">
                    <svg viewBox="0 0 100 100" className="w-20 h-20 drop-shadow">
                      <path
                        d="M30 35 L70 35 L65 75 Q65 85 50 85 Q35 85 35 75 Z"
                        fill="#f8f9fa"
                      />
                      <path
                        d="M70 45 Q85 45 85 55 Q85 65 67 65"
                        fill="none"
                        stroke="#f8f9fa"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      {/* Gentle steam */}
                      <path
                        d="M45 25 Q50 20 45 15 M55 28 Q60 22 55 18"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        opacity="0.7"
                      />
                    </svg>
                    <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 bg-white/80 backdrop-blur-sm rounded-lg text-[10px] font-semibold text-gray-800 truncate">
                      Ceramic cup studio
                    </div>
                  </div>
                </div>

                {/* Terracotta Pleated Bag / Architectural Decor */}
                <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-[#f4a261]">
                  <img
                    src="/src/assets/images/hero_terracotta_decor_1790614850249.jpg"
                    alt="Terracotta sculptural pleated handbag"
                    className="w-full h-48 sm:h-60 md:h-68 object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                    <span className="text-white font-bold text-xs truncate">
                      Sculptural pleated bag
                    </span>
                    <span className="text-white/80 text-[10px]">Minimal luxury · 31k saves</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
