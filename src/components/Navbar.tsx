// Header.tsx
import React from "react";
import { Home, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { getActiveSocialMediaLinks } from "@/constants/socialMedia";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "./ui/button";

export default function Header(): JSX.Element {
  const activeSocialLinks = getActiveSocialMediaLinks();
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // ----- color-aware classes: use old navbar dark mode tokens when theme === "dark"
  const containerCommon =
    "flex items-center pl-4 p-2 rounded-2xl border w-fit backdrop-blur-lg";
  const containerClasses = `${containerCommon} ${
    theme === "dark"
      ? "bg-background/80 border-border text-foreground shadow-lg"
      : "bg-white/80 border-zinc-200 text-zinc-700"
  }`;

  const dividerClasses = `w-px h-5 mx-4 ${
    theme === "dark" ? "bg-border" : "bg-zinc-200"
  }`;

  const iconButtonTextClass =
    theme === "dark" ? "text-foreground" : "text-zinc-700";

  // Floating wrapper used for both desktop and mobile (visibility toggled with responsive utilities)
  // const floatingWrapperBase =
  //   "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto px-4 py-3";
  // const desktopHeaderWrapper = `hidden sm:flex items-center justify-center ${floatingWrapperBase}`;
  // const mobileHeaderWrapper = `sm:hidden ${floatingWrapperBase}`;

  // safe-first-social helper
  const firstSocial =
    activeSocialLinks && activeSocialLinks.length > 0
      ? activeSocialLinks[0]
      : null;

  return (
    <>
      {/* Inline slideDown keyframes kept for consistency */}
      <style>
        {`
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-down { animation: slideDown 0.28s ease-out; }
      `}
      </style>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden sm:flex fixed top-10 inset-x-0 z-50 justify-center items-center"
      >
        <div className={containerClasses}>
          <button
            aria-label="Home"
            onClick={() => scrollToSection("home")}
            className={`hover:opacity-80 transition-opacity mx-auto flex items-center justify-center pl-2 ${iconButtonTextClass}`}
          >
            <Home className="w-[23px] h-[23px]" />
          </button>

          <div className={dividerClasses} />

          <div className="space-x-8 flex items-center">
            {activeSocialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="hover:opacity-80 transition-opacity"
                >
                  <Icon className="w-[23px] h-[23px]" />
                </a>
              );
            })}
          </div>

          <div className={dividerClasses} />

          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-xl p-2 inline-flex items-center justify-center hover:opacity-80 transition"
            >
              {theme === "light" ? (
                <Moon className="w-[23px] h-[23px]" />
              ) : (
                <Sun className="w-[23px] h-[23px]" />
              )}
            </button>

            {/* Reach Me button */}
            {Button ? (
              <Button
                className="ml-2 rounded-xl px-6 py-4"
                onClick={scrollToSection.bind(null, "contact")}
              >
                Contact Me
              </Button>
            ) : (
              <button
                className="ml-2 rounded-xl px-6 py-4 inline-flex items-center justify-center bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
                onClick={scrollToSection.bind(null, "contact")}
              >
                Contact Me
              </button>
            )}
          </div>
        </div>
      </motion.header>

      {/* Mobile Header (floating like old navbar) with Framer Motion */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sm:hidden fixed top-8 inset-x-0 z-50 flex justify-center"
      >
        <div
          className={`${containerClasses} justify-between flex-row items-center`}
          style={{ gap: 18 }}
        >
          {/* Left: Home */}
          <div className={`flex items-center gap-3 ${iconButtonTextClass}`}>
            <button
              aria-label="Home"
              onClick={() => scrollToSection("home")}
              className="hover:opacity-80 transition-opacity"
            >
              <Home className="w-6 h-6" />
            </button>
          </div>

          {/* Divider like PC */}
          {/* <div className={dividerClasses} /> */}

          {/* Center: first social icon only */}
          <div className="flex items-center">
            {firstSocial
              ? (() => {
                  const Icon = firstSocial.icon;
                  return (
                    <a
                      href={firstSocial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={firstSocial.name}
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })()
              : null}
          </div>

          {/* Divider like PC */}
          {/* <div className={dividerClasses} /> */}

          {/* Right: theme toggle + Reach Me button */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-md hover:opacity-80 transition"
            >
              {theme === "light" ? (
                <Moon className="w-6 h-6" />
              ) : (
                <Sun className="w-6 h-6" />
              )}
            </button>

            {Button ? (
              <Button
                className="ml-1 rounded-xl px-6 py-4"
                onClick={scrollToSection.bind(null, "contact")}
              >
                Contact Me
              </Button>
            ) : (
              <button
                className="ml-1 rounded-xl px-6 py-4 inline-flex items-center justify-center bg-zinc-900 text-white hover:bg-zinc-800 transition-colors text-sm"
                onClick={scrollToSection.bind(null, "contact")}
              >
                Contact Me
              </button>
            )}
          </div>
        </div>
      </motion.header>
    </>
  );
}
