import React from "react";

interface FooterProps {
  onNavigate?: (page: "home" | "about" | "business") => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-white pt-16 pb-12 px-6 md:px-12 border-t border-neutral-900">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-12">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 flex flex-col justify-between">
            <div>
              {/* Script / stylized wordmark */}
              <button
                onClick={() => onNavigate && onNavigate("home")}
                className="text-3xl font-extrabold tracking-tight text-white inline-block hover:opacity-80 transition-opacity text-left"
              >
                Pinterest
              </button>
              <p className="mt-3 text-sm text-neutral-400 max-w-sm">
                Discover recipes, home ideas, style inspiration, and other ideas to try.
              </p>
            </div>
            <div className="mt-8 text-xs text-neutral-500">
              © 2026 Pinterest
            </div>
          </div>

          {/* Column: Get the app */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
              Get the app
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400 font-medium">
              <li>
                <a
                  href="#ios"
                  className="hover:text-white transition-colors"
                >
                  iOS
                </a>
              </li>
              <li>
                <a
                  href="#android"
                  className="hover:text-white transition-colors"
                >
                  Android
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Quick links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
              Quick links
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400 font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate("home")}
                  className="hover:text-white transition-colors text-left"
                >
                  Explore
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate("about")}
                  className="hover:text-white transition-colors text-left"
                >
                  About us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate("business")}
                  className="hover:text-white transition-colors text-left"
                >
                  Businesses
                </button>
              </li>
              <li>
                <a
                  href="#shop"
                  className="hover:text-white transition-colors"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#help"
                  className="hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Policies */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
              Policies
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400 font-medium">
              <li>
                <a
                  href="#terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of services
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="#non-user"
                  className="hover:text-white transition-colors"
                >
                  Non-user notice
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};
