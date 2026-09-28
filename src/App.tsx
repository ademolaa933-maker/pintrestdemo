import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SoccerSeasonSection } from "./components/SoccerSeasonSection";
import { SkinToneFeatureSection } from "./components/SkinToneFeatureSection";
import { CollaborateFeatureSection } from "./components/CollaborateFeatureSection";
import { VisualSearchFeatureSection } from "./components/VisualSearchFeatureSection";
import { SignUpBannerSection } from "./components/SignUpBannerSection";
import { Footer } from "./components/Footer";
import { AuthModal } from "./components/AuthModal";
import { BoardIdea } from "./data/mockData";

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleOpenAuth = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleSearchQuery = (query: string) => {
    showToast(`Exploring ideas for "${query}"`);
    // Smooth scroll down to Soccer or Inspiration ideas
    const section = document.getElementById("explore-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectBoard = (board: BoardIdea) => {
    showToast(`Opened "${board.title}"`);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col text-[#111111] antialiased selection:bg-[#e60023] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenAuth={handleOpenAuth}
        onSearchQuery={handleSearchQuery}
      />

      {/* Main Page Layout matching user screenshot */}
      <main className="flex-1">
        {/* Hero Section: "Create the life you love on pintrest" */}
        <HeroSection
          onJoinFree={() => handleOpenAuth("signup")}
          onAlreadyHaveAccount={() => handleOpenAuth("login")}
        />

        {/* Section 2: Soccer Season & Winning Ideas */}
        <div id="explore-section">
          <SoccerSeasonSection onSelectBoard={handleSelectBoard} />
        </div>

        {/* Section 3: Feature Callout - Search by skin tone */}
        <SkinToneFeatureSection
          onJoinPinterest={() => handleOpenAuth("signup")}
        />

        {/* Section 4: Feature Callout - Collaborate with group boards */}
        <CollaborateFeatureSection
          onJoinPinterest={() => handleOpenAuth("signup")}
        />

        {/* Section 5: Feature Callout - Search visually with images */}
        <VisualSearchFeatureSection
          onJoinPinterest={() => handleOpenAuth("signup")}
        />

        {/* Section 6: Full Bleed Sign Up Section */}
        <SignUpBannerSection
          onOpenLogin={() => handleOpenAuth("login")}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Auth Modal (Log in / Sign up) */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
      />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#111] text-white px-5 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-2xl flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#e60023]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
