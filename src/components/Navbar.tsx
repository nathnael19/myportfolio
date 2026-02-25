import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Twitter, Sun, Moon } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {portfolioData.personal.name.split(" ")[0]}
          </span>
          .dev
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 border-l border-gray-200 dark:border-white/10 pl-6">
            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={toggleTheme}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors ml-2"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-[#0a0a0a] border-l border-gray-200 dark:border-white/5 z-50 md:hidden flex flex-col shadow-2xl"
            >
              <div className="p-6 flex items-center justify-between border-b border-gray-200 dark:border-white/5">
                <span className="font-bold text-lg dark:text-white">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 block transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col gap-6">
                  <div className="flex items-center gap-6">
                    <a
                      href={portfolioData.personal.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={portfolioData.personal.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      toggleTheme();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300 font-medium"
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="w-5 h-5" /> Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="w-5 h-5" /> Dark Mode
                      </>
                    )}
                  </button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
