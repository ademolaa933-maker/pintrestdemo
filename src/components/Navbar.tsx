import React, { useState, useRef, useEffect } from "react";
import { Search, X, Menu, ArrowRight } from "lucide-react";
import { PinterestLogo } from "./PinterestLogo";
import { SEARCH_SUGGESTIONS } from "../data/mockData";

interface NavbarProps {
  onOpenAuth: (mode: "login" | "signup") => void;
  onSearchQuery?: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, onSearchQuery }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search suggestions on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectSuggestion = (suggestion: string) => {
    setSearchTerm(suggestion);
    setIsSearchFocused(false);
    if (onSearchQuery) onSearchQuery(suggestion);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() && onSearchQuery) {
      onSearchQuery(searchTerm.trim());
      setIsSearchFocused(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-shadow">
      <div className="max-w-[1536px] mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-3 md:gap-6">
        
        {/* Left: Brand & Explore */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex items-center group py-2">
            <PinterestLogo
              size={36}
              showWordmark={true}
              wordmarkClassName="text-[#e60023] font-bold text-xl tracking-tight hidden sm:inline-block ml-1"
            />
          </a>

          <a
            href="#explore"
            className="hidden sm:inline-flex items-center font-bold text-sm text-[#111] hover:bg-gray-100 px-4 py-2.5 rounded-full transition-colors"
          >
            Explore
          </a>
        </div>

        {/* Center: Search Bar */}
        <div
          ref={searchContainerRef}
          className="relative flex-1 max-w-2xl min-w-0"
        >
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <div className="relative flex items-center">
              <div className="absolute left-4 pointer-events-none text-gray-500">
                <Search className="w-4 h-4 text-gray-500" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Search for easy dinners, fashion, etc."
                className="w-full bg-[#efefef] hover:bg-[#e2e2e2] focus:bg-white text-gray-800 text-sm font-medium pl-11 pr-10 py-3 rounded-full border border-transparent focus:border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 transition-all duration-150 placeholder:text-gray-500 truncate"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3.5 p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </form>

          {/* Search Autocomplete Popover */}
          {isSearchFocused && (
            <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                Trending on Pinterest
              </div>
              <div className="mt-1 space-y-1">
                {SEARCH_SUGGESTIONS.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectSuggestion(item)}
                    className="w-full text-left px-3 py-2 rounded-xl text-sm font-medium text-gray-800 hover:bg-gray-100 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Search className="w-3.5 h-3.5 text-gray-400 group-hover:text-black" />
                      <span>{item}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Nav Links & Auth Buttons */}
        <div className="flex items-center gap-1.5 md:gap-2.5 shrink-0">
          <nav className="hidden xl:flex items-center gap-1 text-sm font-semibold text-[#111]">
            <a
              href="#about"
              className="px-3.5 py-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              About
            </a>
            <a
              href="#business"
              className="px-3.5 py-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              Businesses
            </a>
            <a
              href="#create"
              className="px-3.5 py-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              Create
            </a>
            <a
              href="#news"
              className="px-3.5 py-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              News
            </a>
          </nav>

          <button
            onClick={() => onOpenAuth("login")}
            className="px-4 md:px-5 py-2.5 rounded-full bg-[#e60023] hover:bg-[#b6001c] text-white font-bold text-sm tracking-tight transition-all duration-150 shadow-sm active:scale-95"
          >
            Log in
          </button>

          <button
            onClick={() => onOpenAuth("signup")}
            className="px-4 md:px-5 py-2.5 rounded-full bg-[#efefef] hover:bg-[#e2e2e2] text-[#111] font-bold text-sm tracking-tight transition-all duration-150 active:scale-95 whitespace-nowrap"
          >
            Sign up
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-full hover:bg-gray-100 text-gray-700 transition-colors ml-1"
            aria-label="Open navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-gray-100 bg-white px-6 py-4 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2 font-semibold text-gray-800 text-base">
            <a
              href="#explore"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-gray-50"
            >
              Explore
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-gray-50"
            >
              About
            </a>
            <a
              href="#business"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-gray-50"
            >
              Businesses
            </a>
            <a
              href="#create"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-gray-50"
            >
              Create
            </a>
            <a
              href="#news"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-gray-50"
            >
              News
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
