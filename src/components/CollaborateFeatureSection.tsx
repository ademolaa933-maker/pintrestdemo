import React from "react";
import { Users, Plus, Check } from "lucide-react";

interface CollaborateFeatureSectionProps {
  onJoinPinterest: () => void;
}

export const CollaborateFeatureSection: React.FC<CollaborateFeatureSectionProps> = ({
  onJoinPinterest,
}) => {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & Action */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-start justify-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111] tracking-tight leading-tight">
              Collaborate with group boards
            </h3>

            <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed text-balance">
              Visualize your ideas with others, using a Pinterest account.
            </p>

            <button
              onClick={onJoinPinterest}
              className="mt-8 px-7 py-3.5 rounded-full bg-[#e60023] hover:bg-[#b6001c] text-white font-bold text-base shadow-sm hover:shadow transition-all duration-150 active:scale-95"
            >
              Join Pinterest
            </button>
          </div>

          {/* Right Column: Group Board Mockup Card */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-[500px] bg-[#f2ede4] rounded-3xl p-6 sm:p-8 shadow-sm border border-[#e5ded3]">
              
              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-[#d9cdbe] aspect-[4/3] group">
                
                {/* Earthy Space Interior Graphic */}
                <div className="w-full h-full bg-gradient-to-br from-[#d4c3b3] via-[#bfa895] to-[#a38c78] relative p-6 flex flex-col justify-between">
                  {/* Subtle architectural lines representing mid-century credenza and decor */}
                  <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full object-cover">
                    {/* Wall background gradient */}
                    <rect width="400" height="300" fill="#dfd3c3" />
                    {/* Hardwood flooring */}
                    <rect y="210" width="400" height="90" fill="#936d52" />
                    <line x1="0" y1="230" x2="400" y2="230" stroke="#7e5c43" strokeWidth="1" />
                    <line x1="0" y1="260" x2="400" y2="260" stroke="#7e5c43" strokeWidth="1" />
                    
                    {/* Mid-century wooden credenza */}
                    <rect x="70" y="140" width="220" height="85" rx="4" fill="#a07855" stroke="#775135" strokeWidth="2" />
                    {/* Credenza legs */}
                    <line x1="90" y1="225" x2="80" y2="250" stroke="#4a3525" strokeWidth="4" strokeLinecap="round" />
                    <line x1="270" y1="225" x2="280" y2="250" stroke="#4a3525" strokeWidth="4" strokeLinecap="round" />
                    {/* Cabinet Slats */}
                    <line x1="140" y1="140" x2="140" y2="225" stroke="#775135" strokeWidth="2" />
                    <line x1="210" y1="140" x2="210" y2="225" stroke="#775135" strokeWidth="2" />
                    <circle cx="130" cy="180" r="3" fill="#2d2013" />
                    <circle cx="150" cy="180" r="3" fill="#2d2013" />
                    <circle cx="200" cy="180" r="3" fill="#2d2013" />
                    <circle cx="220" cy="180" r="3" fill="#2d2013" />

                    {/* Ceramic Table Lamp */}
                    <path d="M100 140 Q110 110 110 95 L85 95 Q85 110 95 140 Z" fill="#eee1d3" />
                    <polygon points="75,95 120,95 110,65 85,65" fill="#fcf9f2" stroke="#d5c7b3" strokeWidth="1" />

                    {/* Fiddle leaf fig plant in clay pot */}
                    <path d="M295 240 L345 240 L340 180 L300 180 Z" fill="#c46d4e" />
                    {/* Leaves */}
                    <path d="M320 180 Q300 140 280 130 Q310 110 325 150 Z" fill="#386641" />
                    <path d="M320 160 Q340 120 370 125 Q350 150 325 165 Z" fill="#6a994e" />
                    <path d="M320 140 Q315 80 330 70 Q345 95 325 130 Z" fill="#386641" />

                    {/* Gallery framed art on wall */}
                    <rect x="150" y="30" width="80" height="95" fill="#ffffff" stroke="#333333" strokeWidth="3" />
                    <circle cx="190" cy="70" r="22" fill="#d4a373" />
                    <path d="M165 95 Q190 60 215 95 Z" fill="#588157" />
                  </svg>

                  {/* Top status indicator */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full text-xs font-bold text-gray-800 flex items-center gap-1.5 shadow-sm">
                      <Users className="w-3.5 h-3.5 text-[#e60023]" />
                      <span>Shared Board</span>
                    </span>
                  </div>

                  {/* Bottom Info Pill and Collaborators Stack */}
                  <div className="relative z-10 flex items-end justify-between">
                    <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-md border border-white/60">
                      <h4 className="text-sm font-bold text-gray-900 leading-tight">
                        Earthy space inspo
                      </h4>
                      <p className="text-xs text-gray-500 font-medium">
                        80 Pins
                      </p>
                    </div>

                    {/* Collaborator Avatars (Overlapping stack matching screenshot) */}
                    <div className="flex items-center -space-x-2 bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-md border border-white/60">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-amber-400 text-amber-950 font-bold text-xs flex items-center justify-center">
                        M
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-rose-400 text-rose-950 font-bold text-xs flex items-center justify-center">
                        S
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-teal-400 text-teal-950 font-bold text-xs flex items-center justify-center">
                        L
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-800 text-white font-bold text-[10px] flex items-center justify-center">
                        +3
                      </div>
                    </div>
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
