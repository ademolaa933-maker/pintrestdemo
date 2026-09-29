import React, { useState } from "react";
import { PinterestLogo } from "./PinterestLogo";
import { Check } from "lucide-react";

interface SignUpBannerSectionProps {
  onOpenLogin: () => void;
  onNavigateBusiness?: () => void;
}

export const SignUpBannerSection: React.FC<SignUpBannerSectionProps> = ({
  onOpenLogin,
  onNavigateBusiness,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setEmail("");
      setPassword("");
      setBirthday("");
    }, 3000);
  };

  // Curated aesthetic items for the background mosaic collage
  const collageItems = [
    { title: "Belgian Waffles", bg: "from-amber-200 to-amber-400", emoji: "🧇", category: "Breakfast" },
    { title: "Berry Tart", bg: "from-rose-200 to-rose-400", emoji: "🫐", category: "Baking" },
    { title: "Avocado Toast", bg: "from-emerald-200 to-emerald-400", emoji: "🥑", category: "Recipes" },
    { title: "Matcha Latte", bg: "from-lime-200 to-green-400", emoji: "🍵", category: "Drinks" },
    { title: "Fresh Croissant", bg: "from-amber-100 to-amber-300", emoji: "🥐", category: "Pastry" },
    { title: "Golden retriever pup", bg: "from-amber-200 to-orange-300", emoji: "🐶", category: "Pets" },
    { title: "Pasta al Limone", bg: "from-yellow-200 to-yellow-400", emoji: "🍝", category: "Dinner" },
    { title: "Succulent Garden", bg: "from-teal-200 to-teal-400", emoji: "🪴", category: "Home" },
    { title: "Strawberry Cake", bg: "from-pink-200 to-pink-400", emoji: "🍰", category: "Dessert" },
    { title: "Artisan Sourdough", bg: "from-stone-300 to-amber-200", emoji: "🥖", category: "Baking" },
    { title: "Morning Espresso", bg: "from-stone-400 to-amber-800", emoji: "☕", category: "Coffee" },
    { title: "Warm cinnamon rolls", bg: "from-orange-200 to-amber-400", emoji: "🧁", category: "Bake" },
  ];

  return (
    <section className="relative overflow-hidden bg-neutral-900 py-16 lg:py-24 border-t border-gray-100">
      
      {/* Background Masonry Mosaic Wall with Scrim */}
      <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 p-4 opacity-35 filter blur-[0.5px]">
        {collageItems.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-2xl bg-gradient-to-br ${item.bg} aspect-[3/4] flex flex-col justify-between p-3.5 shadow-md`}
          >
            <span className="text-xs font-semibold text-black/60">{item.category}</span>
            <div className="text-4xl sm:text-5xl self-center my-auto drop-shadow-sm">{item.emoji}</div>
            <span className="text-xs font-bold text-black/80 truncate">{item.title}</span>
          </div>
        ))}
      </div>

      {/* Dark overlay scrim for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] drop-shadow-md text-balance">
              Sign up to get <br />
              your ideas
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 font-normal max-w-lg leading-relaxed">
              Explore thousands of recipes, style inspirations, home makeovers, and creative projects saved by millions every day.
            </p>
          </div>

          {/* Right: Iconic Pinterest Sign Up Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[440px] bg-white rounded-3xl p-8 sm:p-10 shadow-2xl relative border border-gray-100">
              
              {isSuccess ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Welcome to Pinterest!
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">
                    Your account has been created. Start saving your favorite ideas now!
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center text-center">
                  {/* Pinterest Logo */}
                  <PinterestLogo size={44} showWordmark={false} />

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111] mt-3">
                    Welcome to Pinterest
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 mb-6">
                    Join Pinterest for free to discover more ideas
                  </p>

                  <form onSubmit={handleSubmit} className="w-full space-y-3.5 text-left">
                    {/* Email Input */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1 ml-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm placeholder:text-gray-400 bg-white"
                      />
                    </div>

                    {/* Password Input */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1 ml-1">
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a password"
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm placeholder:text-gray-400 bg-white"
                      />
                      <p className="text-[11px] text-gray-400 mt-1 ml-1">
                        Use 8 or more letters, numbers and symbols
                      </p>
                    </div>

                    {/* Birthday Input */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1 ml-1">
                        Birthdate
                      </label>
                      <input
                        type="text"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        placeholder="Enter your birthday (dd/mm/yyyy)"
                        className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm placeholder:text-gray-400 bg-white"
                      />
                    </div>

                    {/* Continue Button */}
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#e60023] hover:bg-[#b6001c] text-white font-bold text-sm tracking-tight shadow-sm hover:shadow transition-all duration-150 active:scale-95 mt-2"
                    >
                      Continue
                    </button>

                    {/* Divider */}
                    <div className="relative py-2 flex items-center justify-center">
                      <div className="w-full border-t border-gray-200" />
                      <span className="bg-white px-3 text-xs font-bold text-gray-500 absolute">
                        OR
                      </span>
                    </div>

                    {/* Continue with Google */}
                    <button
                      type="button"
                      onClick={() => setIsSuccess(true)}
                      className="w-full py-3 px-4 rounded-full border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold text-sm flex items-center justify-center gap-3 transition-colors"
                    >
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17Z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.94 0 12s.45 3.84 1.25 5.42l4.03-3.15Z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
                        />
                      </svg>
                      Continue with Google
                    </button>

                    {/* Secondary helper links */}
                    <div className="pt-2 text-center text-xs text-gray-600 space-y-1">
                      <p>
                        Already have an account?{" "}
                        <button
                          type="button"
                          onClick={onOpenLogin}
                          className="font-bold text-black hover:underline"
                        >
                          Log in
                        </button>
                      </p>
                      <p>
                        Are you a business?{" "}
                        <button
                          type="button"
                          onClick={() => {
                            if (onNavigateBusiness) onNavigateBusiness();
                          }}
                          className="font-bold text-black hover:underline cursor-pointer"
                        >
                          Get started here
                        </button>
                      </p>
                    </div>

                    {/* Disclaimer */}
                    <p className="text-[11px] text-gray-400 text-center leading-tight pt-2">
                      By continuing, you agree to Pinterest&apos;s{" "}
                      <a href="#terms" className="underline hover:text-gray-600">
                        Terms of Service
                      </a>{" "}
                      and acknowledge you&apos;ve read our{" "}
                      <a href="#privacy" className="underline hover:text-gray-600">
                        Privacy Policy
                      </a>
                      . Notice at collection.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
