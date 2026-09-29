import React from "react";
import { ArrowRight } from "lucide-react";

interface BusinessPageProps {
  onOpenAuth: (mode: "login" | "signup") => void;
  onButtonClick?: (context: string) => void;
}

export const BusinessPage: React.FC<BusinessPageProps> = ({
  onOpenAuth,
  onButtonClick,
}) => {
  const handleAction = (context: string) => {
    if (onButtonClick) {
      onButtonClick(context);
    } else {
      onOpenAuth("signup");
    }
  };

  const businessCards = [
    {
      id: "cars",
      title: "CARS",
      image: "/src/assets/images/car_orange_exotic_1790707428527.jpg",
      text: "A car is a motor vehicle designed to transport people from one place to another. It usually has four wheels, an engine or electric motor.",
    },
    {
      id: "homes",
      title: "HOMES",
      image: "/src/assets/images/home_luxury_villa_1790707390870.jpg",
      text: "A car is a motor vehicle designed to transport people from one place to another. It usually has four wheels, an engine or electric motor.",
    },
    {
      id: "clothes",
      title: "CLOTHES",
      image: "/src/assets/images/clothes_boutique_rack_1790707402681.jpg",
      text: "A car is a motor vehicle designed to transport people from one place to another. It usually has four wheels, an engine or electric motor.",
    },
    {
      id: "shoes",
      title: "SHOES",
      image: "/src/assets/images/shoes_artisan_display_1790707417289.jpg",
      text: "A car is a motor vehicle designed to transport people from one place to another. It usually has four wheels, an engine or electric motor.",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ---------------- SECTION 1: HERO (Our Busineses) ---------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#9b8791] via-[#b77468] to-[#ab5544] text-gray-900 pt-10 pb-16 md:pt-14 md:pb-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Top Row: Giant Title on Left, Copy on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 md:mb-16">
            <div className="lg:col-span-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#111] tracking-tight leading-[1.05]">
                Our <br />
                Busineses
              </h1>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-start">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#111] tracking-tight leading-snug">
                We Turn Ideas Into Visual Experiences.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-900/90 font-medium leading-relaxed max-w-xl">
                At pinterest Creative, we transform ideas into compelling visual experiences that help businesses communicate, connect, and grow.Buttons:
              </p>
            </div>
          </div>

          {/* 4 Category Cards: CARS, HOMES, CLOTHES, SHOES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessCards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleAction(`Business Category: ${card.title}`)}
                className="group cursor-pointer flex flex-col text-left transition-transform duration-200 hover:-translate-y-1"
              >
                {/* Image Box */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-md bg-black/10 border border-white/25">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors" />
                </div>

                {/* Card Title */}
                <h3 className="text-sm font-black text-[#111] mt-3 tracking-wider uppercase">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs text-gray-900/85 font-medium mt-1 leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: Your HOME ---------------- */}
      <section className="bg-gradient-to-b from-[#d2c9c2] via-[#c2b6ac] to-[#b7aba0] py-16 md:py-24 px-6 md:px-12 overflow-hidden border-t border-white/30">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Large Circular Villa Porthole */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start">
              <div
                onClick={() => handleAction("Your HOME - Luxury Villa Showcase")}
                className="group relative w-72 sm:w-84 md:w-96 aspect-square rounded-full overflow-hidden border-4 border-white/80 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer bg-neutral-800"
              >
                <img
                  src="/src/assets/images/home_luxury_villa_1790707390870.jpg"
                  alt="Modern luxury villa architectural exterior"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <span className="text-white text-xs font-bold bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full">
                    View Architecture
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Your HOME Heading, Description, & More Info Button */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none">
                <span className="text-white drop-shadow-sm block">Your</span>
                <span className="text-[#e60023] block mt-1">HOME</span>
              </h2>

              {/* Exact Description text from Screenshot & OCR */}
              <p className="mt-6 text-base sm:text-lg text-gray-900/90 font-medium leading-relaxed max-w-xl text-balance lg:text-left">
                A home can be a house, apartment, bungalow, duplex, villa, or other residential property. It is more than just a physical building it is a space where people create memories, build relationships, and enjoy their personal lives.
              </p>

              <button
                onClick={() => handleAction("Your HOME - More Info")}
                className="mt-8 px-9 py-4 rounded-full bg-[#e60023] hover:bg-[#b6001c] text-white font-bold text-base tracking-tight shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>More Info</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 3: About Our Cars (With Team Background Texture) ---------------- */}
      <section className="relative text-white py-20 md:py-28 px-6 md:px-12 overflow-hidden border-t border-neutral-900 bg-black">
        {/* Background Grayscale Agency Team Texture matching Screenshot */}
        <div className="absolute inset-0 opacity-25 mix-blend-luminosity pointer-events-none">
          <img
            src="/src/assets/images/agency_team_monochrome_1790709126070.jpg"
            alt="Agency team collaboration background"
            className="w-full h-full object-cover filter contrast-125"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/95 pointer-events-none" />

        {/* Ambient colored lighting */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

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

            {/* Right Column: 3 Circular Car Frames Stacked Vertically */}
            <div className="lg:col-span-5 flex flex-col items-center gap-7 sm:gap-8">
              {/* Circle 1: Silver Luxury Car */}
              <div
                onClick={() => handleAction("Silver Luxury Sedan")}
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
                onClick={() => handleAction("Cherry Red Supercar")}
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

      {/* ---------------- SECTION 4: Your CLOTHES ---------------- */}
      <section className="bg-gradient-to-b from-[#c5b5ae] via-[#b6a49c] to-[#a89289] py-16 md:py-24 px-6 md:px-12 overflow-hidden border-t border-white/20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Large Circular Clothing Boutique Porthole */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start">
              <div
                onClick={() => handleAction("Your CLOTHES - Fashion Rack Showcase")}
                className="group relative w-72 sm:w-84 md:w-96 aspect-square rounded-full overflow-hidden border-4 border-white/80 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer bg-neutral-800"
              >
                <img
                  src="/src/assets/images/clothes_boutique_rack_1790707402681.jpg"
                  alt="Vibrant clothing boutique showroom apparel racks"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <span className="text-white text-xs font-bold bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full">
                    Explore Apparel
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Heading, Paragraph, More Info Button */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none">
                <span className="text-white drop-shadow-sm block">Your</span>
                <span className="text-[#e60023] block mt-1">CLOTHES</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-gray-900/90 font-medium leading-relaxed max-w-xl text-balance lg:text-left">
                Cloth is a material made by weaving, knitting, or bonding fibers together. It is commonly used to make clothing, curtains, bedsheets, towels, bags, and other textile products.
              </p>

              <button
                onClick={() => handleAction("Your CLOTHES - More Info")}
                className="mt-8 px-9 py-4 rounded-full bg-[#e60023] hover:bg-[#b6001c] text-white font-bold text-base tracking-tight shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>More Info</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 5: Your SHOES ---------------- */}
      <section className="bg-[#0e0e11] text-white py-16 md:py-24 px-6 md:px-12 overflow-hidden border-t border-neutral-900">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Heading, Paragraph, More Info Button */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none">
                <span className="text-white drop-shadow-sm block">Your</span>
                <span className="text-[#e60023] block mt-1">SHOES</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-xl">
                Shoes are footwear designed to protect and support the feet while walking, running, working, or participating in different activities. They come in various styles, including sneakers, boots, sandals, formal shoes, sports shoes, and casual shoes.
              </p>

              <button
                onClick={() => handleAction("Your SHOES - More Info")}
                className="mt-8 px-9 py-4 rounded-full bg-[#e60023] hover:bg-[#b6001c] text-white font-bold text-base tracking-tight shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>More Info</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right: 2x2 Grid of Footwear Tiles */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="grid grid-cols-2 gap-3 max-w-[460px] w-full">
                {/* Tile 1: Leather Boots / Shoes display */}
                <div
                  onClick={() => handleAction("Artisan Leather Shoes")}
                  className="group relative rounded-xl overflow-hidden aspect-square bg-neutral-800 shadow-md cursor-pointer border border-neutral-700/60"
                >
                  <img
                    src="/src/assets/images/shoes_artisan_display_1790707417289.jpg"
                    alt="Artisan leather shoes"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </div>

                {/* Tile 2: Sneaker showcase */}
                <div
                  onClick={() => handleAction("Designer Sneakers")}
                  className="group relative rounded-xl overflow-hidden aspect-square bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-md cursor-pointer border border-neutral-700/60 flex items-center justify-center p-3"
                >
                  <div className="w-full h-full rounded-lg bg-gradient-to-br from-amber-950/40 to-neutral-900 flex flex-col items-center justify-center p-3 text-center">
                    <span className="text-4xl mb-2">👟</span>
                    <span className="text-xs font-bold text-gray-200">Sneaker Gallery</span>
                    <span className="text-[10px] text-gray-400">Street & Sport</span>
                  </div>
                </div>

                {/* Tile 3: Casual & Formal Footwear */}
                <div
                  onClick={() => handleAction("Formal & Casual Footwear")}
                  className="group relative rounded-xl overflow-hidden aspect-square bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-md cursor-pointer border border-neutral-700/60 flex items-center justify-center p-3"
                >
                  <div className="w-full h-full rounded-lg bg-gradient-to-br from-red-950/40 to-neutral-900 flex flex-col items-center justify-center p-3 text-center">
                    <span className="text-4xl mb-2">👞</span>
                    <span className="text-xs font-bold text-gray-200">Formal Classics</span>
                    <span className="text-[10px] text-gray-400">Handcrafted Leather</span>
                  </div>
                </div>

                {/* Tile 4: Shoe store shelves */}
                <div
                  onClick={() => handleAction("Retail Footwear Collection")}
                  className="group relative rounded-xl overflow-hidden aspect-square bg-neutral-800 shadow-md cursor-pointer border border-neutral-700/60"
                >
                  <img
                    src="/src/assets/images/shoes_artisan_display_1790707417289.jpg"
                    alt="Shoe collection retail display"
                    className="w-full h-full object-cover scale-125 group-hover:scale-135 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
