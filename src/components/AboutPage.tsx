import React from "react";
import { ShoppingCart, ShoppingBag, Percent, Tag, ArrowRight, Sparkles } from "lucide-react";

interface AboutPageProps {
  onOpenAuth: (mode: "login" | "signup") => void;
  onExploreClick: () => void;
  onButtonClick?: (context: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenAuth,
  onExploreClick,
  onButtonClick,
}) => {
  const handleAction = (context: string) => {
    if (onButtonClick) {
      onButtonClick(context);
    } else {
      onOpenAuth("signup");
    }
  };

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ---------------- SECTION 1: ABOUT US HERO (Periwinkle / Lavender) ---------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#8f9ad4] via-[#9aa4db] to-[#98a2d8] text-gray-900 pt-10 pb-16 md:pt-14 md:pb-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Top Giant Centered Heading */}
          <h1 className="text-center text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#111] tracking-tight mb-12 md:mb-16">
            About us
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading and Description */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111] tracking-tight leading-snug">
                We Turn Ideas Into Visual Experiences.
              </h2>

              <p className="mt-5 text-base sm:text-lg text-gray-900/90 font-medium leading-relaxed max-w-xl">
                At pinterest Creative, we transform ideas into compelling visual experiences that help businesses communicate, connect, and grow.Buttons:
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleAction("Get Started with Pinterest Creative")}
                  className="px-6 py-3 rounded-full bg-[#111] hover:bg-gray-800 text-white font-bold text-sm transition-all duration-150 shadow-md active:scale-95"
                >
                  Get Started
                </button>
                <button
                  onClick={() => handleAction("View Portfolio")}
                  className="px-6 py-3 rounded-full bg-white/80 hover:bg-white text-gray-900 font-bold text-sm transition-all duration-150 shadow-sm border border-white/60 active:scale-95"
                >
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Right Column: 3 Cards (2 Top Side-by-Side + 1 Wide Bottom Banner) */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {/* Top Row: 2 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1: Architectural Office with ABOUT US banner */}
                <div className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-amber-50 border border-white/40">
                  <img
                    src="/src/assets/images/about_office_stairs_1790701375461.jpg"
                    alt="Creative agency workspace"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* ABOUT US Overlay Banner matching design */}
                  <div className="absolute inset-0 bg-black/35 flex items-center justify-center p-3">
                    <span className="text-white font-extrabold text-xl sm:text-2xl tracking-[0.2em] uppercase drop-shadow-md border-b-2 border-white pb-1">
                      ABOUT US
                    </span>
                  </div>
                </div>

                {/* Card 2: Modern Architectural Studio with ABOUT US banner */}
                <div className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-100 border border-white/40">
                  <div className="w-full h-full bg-gradient-to-br from-[#7986cb] via-[#5c6bc0] to-[#3f51b5] flex flex-col justify-between p-4 relative">
                    {/* Interior architectural lines */}
                    <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full opacity-60">
                      <line x1="20" y1="130" x2="100" y2="40" stroke="#fff" strokeWidth="3" />
                      <line x1="60" y1="130" x2="140" y2="40" stroke="#fff" strokeWidth="3" />
                      <line x1="100" y1="130" x2="180" y2="40" stroke="#fff" strokeWidth="3" />
                      <line x1="10" y1="85" x2="190" y2="85" stroke="#fbc02d" strokeWidth="2" strokeDasharray="4 4" />
                      <circle cx="150" cy="50" r="25" fill="#fcd34d" opacity="0.8" />
                    </svg>
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                        Creative Studio
                      </span>
                    </div>
                    {/* Banner Overlay */}
                    <div className="relative z-10 text-center my-auto">
                      <span className="text-white font-extrabold text-xl sm:text-2xl tracking-[0.2em] uppercase drop-shadow-md border-b-2 border-white pb-1">
                        ABOUT US
                      </span>
                    </div>
                    <div className="relative z-10 text-right text-[11px] text-white/80 font-medium">
                      Est. 2026
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row: E-commerce "BIG DEALS. BIGGER SAVINGS!" Banner Card */}
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-100 p-5 relative group">
                {/* Header ribbon banner */}
                <div className="bg-[#0b1b3d] text-white text-center py-2 px-4 rounded-xl font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>BIG DEALS. BIGGER SAVINGS!</span>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>

                {/* Banner Content */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mt-4">
                  {/* Left: 50% OFF Badge */}
                  <div className="sm:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="bg-[#00c9a7] text-[#052e25] px-3 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider mb-1">
                      UP TO
                    </div>
                    <div className="flex items-baseline gap-1 text-[#0b1b3d]">
                      <span className="text-5xl font-black tracking-tighter leading-none">50</span>
                      <span className="text-3xl font-extrabold leading-none">%</span>
                      <span className="text-xl font-black tracking-tight ml-1 text-cyan-700 leading-none">OFF</span>
                    </div>
                    <span className="text-xs font-black uppercase text-gray-800 tracking-wide mt-1">
                      SITEWIDE
                    </span>
                    <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded mt-1.5">
                      LIMITED TIME ONLY!
                    </span>
                  </div>

                  {/* Right: Graphic of Shopping Cart, Bag & Gift */}
                  <div className="sm:col-span-7 flex items-center justify-center gap-3">
                    {/* Shopping Cart Icon Box */}
                    <div className="w-16 h-16 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 shadow-sm">
                      <ShoppingCart className="w-8 h-8" />
                    </div>

                    {/* Dark shopping bag with Pinterest spark */}
                    <div className="w-16 h-20 bg-slate-900 rounded-xl flex flex-col items-center justify-center text-white relative shadow-md p-2">
                      <div className="w-6 h-3 border-2 border-white rounded-t-full -mt-4 mb-2" />
                      <ShoppingBag className="w-5 h-5 text-cyan-400" />
                      <span className="text-[9px] font-bold mt-1 text-cyan-200">SHOP</span>
                    </div>

                    {/* % Discount coupon badge */}
                    <div className="w-12 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex flex-col items-center justify-center text-white font-bold shadow-md transform rotate-6">
                      <Percent className="w-5 h-5" />
                      <span className="text-[8px] font-black uppercase">SAVE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: ABOUT OUR COMPANY (Warm Neutral Tone) ---------------- */}
      <section className="bg-gradient-to-b from-[#e3ded8] via-[#ebe6e1] to-[#ded9d2] text-gray-900 py-20 md:py-28 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Main Title: About Our Company (with Company in red) */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111] tracking-tight leading-tight">
            About Our <span className="text-[#e60023]">Company</span>
          </h2>

          {/* Subtitle */}
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#111] mt-5 tracking-tight">
            We Create. We Connect. We Make Brands Stand Out.
          </h3>

          {/* Body Paragraphs */}
          <div className="mt-8 space-y-6 text-base sm:text-lg text-gray-800 font-normal leading-relaxed text-balance">
            <p>
              At Pinterest, we believe great design is more than making something look beautiful — it is about telling a story, creating an experience, and helping brands connect with the people who matter most.
            </p>

            <p>
              We are a creative design company focused on helping businesses, organizations, entrepreneurs, and individuals bring their ideas to life through thoughtful, strategic, and visually compelling design. From brand identity and graphic design to social media visuals and digital content, we create designs that communicate clearly, capture attention, and leave a lasting impression.
            </p>
          </div>

          {/* Red Pill Action Button: Click me */}
          <button
            onClick={() => handleAction("About Our Company - Click me")}
            className="mt-10 px-9 py-4 rounded-full bg-[#e60023] hover:bg-[#b6001c] text-white font-extrabold text-base tracking-tight shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
          >
            Click me
          </button>

        </div>
      </section>

      {/* ---------------- SECTION 3: ABOUT OUR CARS (Dark Black Mode with 3 Circle Cars) ---------------- */}
      <section className="relative bg-[#000000] text-white py-20 md:py-28 px-6 md:px-12 overflow-hidden border-t border-neutral-900">
        
        {/* Subtle background ambient glow */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-neutral-800/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading, Paragraphs, Red Button */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
                About <br />
                <span className="text-[#e60023]">Our Cars</span>
              </h2>

              <div className="mt-8 space-y-6 text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
                <p>
                  Explore a wide selection of stylish, reliable, and high-performance vehicles designed to match every lifestyle. From luxury cars to practical everyday vehicles, we make it easier to find a car that delivers comfort, quality, and confidence on every journey.
                </p>

                <p>
                  Experience the perfect combination of performance, technology, comfort, and style. Our collection features carefully selected vehicles built to give you an enjoyable driving experience while meeting your needs and preferences.
                </p>
              </div>

              {/* Red Pill Action Button: Click me */}
              <button
                onClick={() => handleAction("About Our Cars - Click me")}
                className="mt-10 px-9 py-4 rounded-full bg-[#e60023] hover:bg-[#b6001c] text-white font-extrabold text-base tracking-tight shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
              >
                Click me
              </button>
            </div>

            {/* Right Column: 3 Circular Car Porhole Frames Stacked Vertically */}
            <div className="lg:col-span-5 flex flex-col items-center gap-7 sm:gap-8">
              
              {/* Circle 1: Silver Luxury Car */}
              <div
                onClick={() => handleAction("Silver Luxury Sports Sedan")}
                className="group relative w-56 sm:w-64 md:w-72 aspect-square rounded-full overflow-hidden border-4 border-gray-700/60 shadow-2xl hover:border-gray-300 transition-all duration-300 hover:scale-105 cursor-pointer bg-neutral-900"
              >
                <img
                  src="/src/assets/images/car_silver_luxury_1790701332588.jpg"
                  alt="Silver luxury sports sedan"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-white text-xs font-bold bg-black/70 backdrop-blur-md px-3 py-1 rounded-full">
                    Luxury Sedan
                  </span>
                </div>
              </div>

              {/* Circle 2: Cherry Red Exotic Supercar */}
              <div
                onClick={() => handleAction("Cherry Red Supercar Coupe")}
                className="group relative w-56 sm:w-64 md:w-72 aspect-square rounded-full overflow-hidden border-4 border-[#e60023]/70 shadow-2xl hover:border-[#e60023] transition-all duration-300 hover:scale-105 cursor-pointer bg-neutral-900"
              >
                <img
                  src="/src/assets/images/car_red_supercar_1790701345942.jpg"
                  alt="Cherry red exotic performance supercar"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-white text-xs font-bold bg-red-900/80 backdrop-blur-md px-3 py-1 rounded-full">
                    Exotic Supercar
                  </span>
                </div>
              </div>

              {/* Circle 3: White GT Coupe Performance Car */}
              <div
                onClick={() => handleAction("White GT Performance Supercar")}
                className="group relative w-56 sm:w-64 md:w-72 aspect-square rounded-full overflow-hidden border-4 border-gray-700/60 shadow-2xl hover:border-white transition-all duration-300 hover:scale-105 cursor-pointer bg-neutral-900"
              >
                <img
                  src="/src/assets/images/car_white_gt_1790701362519.jpg"
                  alt="White high performance supercar"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-white text-xs font-bold bg-black/70 backdrop-blur-md px-3 py-1 rounded-full">
                    Track GT
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
