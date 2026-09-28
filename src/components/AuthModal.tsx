import React, { useState } from "react";
import { X, Check } from "lucide-react";
import { PinterestLogo } from "./PinterestLogo";

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: "login" | "signup";
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode = "signup",
  onClose,
}) => {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Sync mode if initialMode changes while opened
  React.useEffect(() => {
    setMode(initialMode);
    setSubmitted(false);
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-[480px] bg-white rounded-3xl p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-500 hover:text-black hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {mode === "signup" ? "Welcome to Pinterest!" : "Welcome back!"}
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              {mode === "signup"
                ? "Your inspiration feed is ready for exploration."
                : "You are now logged in."}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center">
            {/* Pinterest Logo */}
            <PinterestLogo size={42} showWordmark={false} />

            <h2 className="text-2xl md:text-3xl font-bold text-[#111] mt-3">
              {mode === "signup" ? "Welcome to Pinterest" : "Welcome back to Pinterest"}
            </h2>
            <p className="text-sm text-gray-500 mt-1 mb-6">
              {mode === "signup"
                ? "Find new ideas to try"
                : "Enter your details to log into your account"}
            </p>

            <form onSubmit={handleSubmit} className="w-full space-y-3.5 text-left">
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
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1 ml-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === "signup" ? "Create a password" : "Enter your password"}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm placeholder:text-gray-400"
                />
                {mode === "signup" && (
                  <p className="text-[11px] text-gray-400 mt-1 ml-1">
                    Use 8 or more letters, numbers and symbols
                  </p>
                )}
              </div>

              {mode === "signup" && (
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1 ml-1">
                    Birthdate
                  </label>
                  <input
                    type="text"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    placeholder="dd/mm/yyyy"
                    className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm placeholder:text-gray-400"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#e60023] hover:bg-[#b6001c] text-white font-bold text-sm shadow-sm transition-all duration-200 mt-2"
              >
                {mode === "signup" ? "Continue" : "Log in"}
              </button>

              <div className="relative py-2 flex items-center justify-center">
                <div className="w-full border-t border-gray-200" />
                <span className="bg-white px-3 text-xs font-bold text-gray-500 absolute">
                  OR
                </span>
              </div>

              {/* Google Auth Button */}
              <button
                type="button"
                onClick={() => {
                  setSubmitted(true);
                  setTimeout(() => {
                    setSubmitted(false);
                    onClose();
                  }, 1500);
                }}
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

              <div className="pt-2 text-center text-xs text-gray-600 space-y-1">
                {mode === "signup" ? (
                  <p>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("login")}
                      className="font-bold text-black hover:underline"
                    >
                      Log in
                    </button>
                  </p>
                ) : (
                  <p>
                    Not on Pinterest yet?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("signup")}
                      className="font-bold text-black hover:underline"
                    >
                      Sign up
                    </button>
                  </p>
                )}
                <p>
                  Are you a business?{" "}
                  <a href="#business" className="font-bold text-black hover:underline">
                    Get started here
                  </a>
                </p>
              </div>

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
  );
};
