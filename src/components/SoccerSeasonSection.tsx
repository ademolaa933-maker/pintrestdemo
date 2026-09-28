import React, { useState } from "react";
import { ChevronRight, Heart, Share2, Bookmark, Check } from "lucide-react";
import { WINNING_IDEAS, BoardIdea } from "../data/mockData";

interface SoccerSeasonSectionProps {
  onSelectBoard?: (board: BoardIdea) => void;
}

export const SoccerSeasonSection: React.FC<SoccerSeasonSectionProps> = ({
  onSelectBoard,
}) => {
  const [savedBoards, setSavedBoards] = useState<Record<string, boolean>>({});
  const [selectedBoardModal, setSelectedBoardModal] = useState<BoardIdea | null>(null);

  const toggleSave = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSavedBoards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCardClick = (board: BoardIdea) => {
    if (onSelectBoard) onSelectBoard(board);
    setSelectedBoardModal(board);
  };

  return (
    <section className="bg-white py-14 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] tracking-tight">
            Step into soccer season
          </h2>
          <p className="mt-2 text-base text-gray-600 font-normal">
            Flex your fandom and score fresh inspiration for every match.
          </p>
        </div>

        {/* Featured Main Banner Card */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-black aspect-[16/9] sm:aspect-[21/9] max-h-[460px] shadow-lg group">
          <img
            src="/src/assets/images/soccer_night_stadium_1790614861123.jpg"
            alt="Soccer stadium match pitch under bright night floodlights"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Stadium mood subtle details */}
          <div className="absolute top-6 left-6 flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wide border border-white/20">
              Matchday Inspiration
            </span>
          </div>

          {/* Floating Pill on Bottom Center matching screenshot */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-3.5 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-2xl border border-gray-200 hover:scale-105 transition-transform duration-200 cursor-pointer">
              {/* Mini Food Thumbnail */}
              <div className="w-10 h-10 rounded-full overflow-hidden bg-amber-100 shrink-0 border border-amber-300 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-8 h-8">
                  {/* Nachos / Game day snack illustration */}
                  <polygon points="12,28 28,28 20,12" fill="#f59e0b" />
                  <circle cx="20" cy="22" r="3" fill="#ef4444" />
                  <circle cx="16" cy="24" r="2" fill="#10b981" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-gray-950 leading-tight">
                  Game day food
                </h4>
                <p className="text-xs text-gray-500 font-medium">
                  25 Pins
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* More Winning Ideas Sub-section */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#111]">
              More winning ideas
            </h3>
            <button
              onClick={() => setSelectedBoardModal(WINNING_IDEAS[0])}
              className="text-sm font-bold text-[#111] hover:underline flex items-center gap-1 group py-1"
            >
              <span>See all</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* 4 Board Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WINNING_IDEAS.map((board) => {
              const isSaved = !!savedBoards[board.id];
              return (
                <div
                  key={board.id}
                  onClick={() => handleCardClick(board)}
                  className="group cursor-pointer flex flex-col"
                >
                  {/* Pinterest Classic Board Preview: 1 large left + 2 stacked right */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#f0f0f0] p-1 flex gap-1 shadow-sm group-hover:shadow-md transition-shadow">
                    
                    {/* Main Left Image (65% width) */}
                    <div className="w-[66%] h-full rounded-xl overflow-hidden bg-gray-200 relative">
                      {board.id === "blokette" && (
                        <div className="w-full h-full bg-gradient-to-br from-[#c7d2fe] via-[#e0e7ff] to-[#fbcfe8] flex items-center justify-center p-3 relative">
                          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow">
                            {/* Stylized blokette model in soccer jersey */}
                            <circle cx="50" cy="30" r="16" fill="#fcd34d" />
                            <path d="M25 54 L75 54 L65 110 L35 110 Z" fill="#2563eb" />
                            <polygon points="40,54 50,70 60,54" fill="#ffffff" />
                            <rect x="42" y="76" width="16" height="20" rx="3" fill="#ffffff" opacity="0.9" />
                            <text x="47" y="90" fontSize="12" fontWeight="bold" fill="#2563eb">7</text>
                            {/* Ribbons / Blokette hair bow */}
                            <path d="M35 18 Q50 14 65 18 Q50 26 35 18" fill="#ec4899" />
                          </svg>
                        </div>
                      )}

                      {board.id === "manicures" && (
                        <div className="w-full h-full bg-gradient-to-br from-[#fed7aa] via-[#fecdd3] to-[#e9d5ff] flex items-center justify-center p-3 relative">
                          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow">
                            {/* Nail Art Hand silhouette */}
                            <rect x="25" y="40" width="10" height="40" rx="5" fill="#fbcfe8" />
                            <rect x="38" y="30" width="10" height="50" rx="5" fill="#f43f5e" />
                            <rect x="51" y="26" width="10" height="54" rx="5" fill="#3b82f6" />
                            <rect x="64" y="34" width="10" height="46" rx="5" fill="#10b981" />
                            {/* Nail accents */}
                            <circle cx="43" cy="36" r="2.5" fill="#ffffff" />
                            <circle cx="56" cy="32" r="2.5" fill="#ffffff" />
                          </svg>
                        </div>
                      )}

                      {board.id === "dips" && (
                        <div className="w-full h-full bg-gradient-to-br from-[#fef08a] via-[#fed7aa] to-[#fca5a5] flex items-center justify-center p-3 relative">
                          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow">
                            {/* Ceramic Bowl of salsa/guacamole with chips */}
                            <ellipse cx="50" cy="70" rx="35" ry="25" fill="#15803d" />
                            <ellipse cx="50" cy="65" rx="32" ry="18" fill="#22c55e" />
                            <circle cx="44" cy="62" r="4" fill="#dc2626" />
                            <circle cx="56" cy="66" r="3.5" fill="#dc2626" />
                            <polygon points="25,48 40,65 30,70" fill="#f59e0b" />
                            <polygon points="65,45 55,62 70,66" fill="#f59e0b" />
                          </svg>
                        </div>
                      )}

                      {board.id === "jerseys" && (
                        <div className="w-full h-full bg-gradient-to-br from-[#bae6fd] via-[#7dd3fc] to-[#0284c7] flex items-center justify-center p-3 relative">
                          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow">
                            {/* Retro soccer kit collar */}
                            <path d="M20 40 L80 40 L70 105 L30 105 Z" fill="#0369a1" />
                            {/* Vintage stripes */}
                            <rect x="38" y="40" width="8" height="65" fill="#ffffff" />
                            <rect x="54" y="40" width="8" height="65" fill="#ffffff" />
                            <polygon points="40,40 50,56 60,40" fill="#fbbf24" />
                            {/* Collar */}
                            <path d="M30 40 L50 25 L70 40" fill="#ffffff" />
                          </svg>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Stacked Right Column (34% width, 2 images) */}
                    <div className="w-[34%] h-full flex flex-col gap-1">
                      {/* Top thumbnail */}
                      <div className="h-1/2 rounded-xl bg-gray-200 overflow-hidden relative flex items-center justify-center p-1.5">
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-xl">
                            {board.id === "blokette" && "👟"}
                            {board.id === "manicures" && "✨"}
                            {board.id === "dips" && "🥑"}
                            {board.id === "jerseys" && "⚽"}
                          </span>
                        </div>
                      </div>

                      {/* Bottom thumbnail */}
                      <div className="h-1/2 rounded-xl bg-gray-200 overflow-hidden relative flex items-center justify-center p-1.5">
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-xl">
                            {board.id === "blokette" && "🎀"}
                            {board.id === "manicures" && "💅"}
                            {board.id === "dips" && "🥨"}
                            {board.id === "jerseys" && "🧢"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Pin Save Button */}
                    <button
                      onClick={(e) => toggleSave(e, board.id)}
                      className={`absolute top-3 right-3 px-3.5 py-1.5 rounded-full font-bold text-xs tracking-tight shadow-md transition-all duration-150 ${
                        isSaved
                          ? "bg-black text-white"
                          : "bg-[#e60023] hover:bg-[#b6001c] text-white opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {isSaved ? "Saved" : "Save"}
                    </button>
                  </div>

                  {/* Board Information */}
                  <div className="mt-3 px-1 text-left">
                    <h4 className="text-base font-bold text-[#111] group-hover:underline line-clamp-2 leading-snug">
                      {board.title}
                    </h4>

                    {/* Category pill with + 1 badge matching screenshot */}
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        {board.category}
                      </span>
                      {board.categoryBadgeExtra && (
                        <span className="text-xs text-gray-400 font-medium">
                          {board.categoryBadgeExtra}
                        </span>
                      )}
                    </div>

                    {/* Metadata: pins count and time ago */}
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                      <span>{board.pinsCount} Pins</span>
                      <span>-</span>
                      <span>{board.timeAgo}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Board Detail Preview Modal */}
      {selectedBoardModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedBoardModal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                  Featured Pinterest Board
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">
                  {selectedBoardModal.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {selectedBoardModal.category} · {selectedBoardModal.pinsCount} Pins · Active {selectedBoardModal.timeAgo}
                </p>
              </div>
              <button
                onClick={() => setSelectedBoardModal(null)}
                className="p-2 rounded-full text-gray-400 hover:text-black hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group p-2 flex items-center justify-center border border-gray-200"
                >
                  <span className="text-3xl">
                    {selectedBoardModal.id === "blokette" && ["👟", "⚽", "🎀", "👕", "🕶️", "🧢"][i - 1]}
                    {selectedBoardModal.id === "manicures" && ["💅", "✨", "💎", "🎨", "⚽", "🌟"][i - 1]}
                    {selectedBoardModal.id === "dips" && ["🥑", "🧀", "🥨", "🍅", "🌮", "🌶️"][i - 1]}
                    {selectedBoardModal.id === "jerseys" && ["⚽", "👕", "🏆", "🧣", "👟", "⭐"][i - 1]}
                  </span>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-bold">View Pin</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => setSelectedBoardModal(null)}
                className="px-5 py-2.5 rounded-full text-sm font-bold text-gray-600 hover:bg-gray-100"
              >
                Close
              </button>
              <button
                onClick={(e) => {
                  toggleSave(e, selectedBoardModal.id);
                  setSelectedBoardModal(null);
                }}
                className="px-6 py-2.5 rounded-full bg-[#e60023] hover:bg-[#b6001c] text-white font-bold text-sm shadow-sm"
              >
                {savedBoards[selectedBoardModal.id] ? "Saved in Profile" : "Save Board"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
