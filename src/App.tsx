import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SoccerSeasonSection } from "./components/SoccerSeasonSection";
import { SkinToneFeatureSection } from "./components/SkinToneFeatureSection";
import { CollaborateFeatureSection } from "./components/CollaborateFeatureSection";
import { VisualSearchFeatureSection } from "./components/VisualSearchFeatureSection";
import { SignUpBannerSection } from "./components/SignUpBannerSection";
import { AboutPage } from "./components/AboutPage";
import { Footer } from "./components/Footer";
import { AuthModal } from "./components/AuthModal";
import { BoardIdea } from "./data/mockData";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about">(() => {
    if (typeof window !== "undefined" && window.location.hash === "#about") {
      return "about";
    }
    return "home";
  });
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#about") {
        setCurrentPage("about");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash === "#home" || hash === "#explore" || hash === "") {
        setCurrentPage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (page: "home" | "about") => {
    setCurrentPage(page);
    window.location.hash = page === "about" ? "#about" : "#home";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    if (currentPage !== "home") {
      setCurrentPage("home");
    }
    setTimeout(() => {
      const section = document.getElementById("explore-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleSelectBoard = (board: BoardIdea) => {
    showToast(`Opened "${board.title}"`);
  };

  const handleAboutButtonClick = (context: string) => {
    showToast(`${context} selected!`);
    handleOpenAuth("signup");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col text-[#111111] antialiased selection:bg-[#e60023] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenAuth={handleOpenAuth}
        onSearchQuery={handleSearchQuery}
      />

      {/* Main Page Layout */}
      <main className="flex-1">
        {currentPage === "about" ? (
          /* Exact About Page Design */
          <AboutPage
            onOpenAuth={handleOpenAuth}
            onExploreClick={() => navigateTo("home")}
            onButtonClick={handleAboutButtonClick}
          />
        ) : (
          /* Home Landing Page Layout */
          <>
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
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

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
