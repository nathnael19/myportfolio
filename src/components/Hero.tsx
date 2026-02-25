import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentWord = portfolioData.personal.typingText[currentTextIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentTextIndex(
          (prev) => (prev + 1) % portfolioData.personal.typingText.length,
        );
      } else {
        setDisplayText(
          currentWord.substring(0, displayText.length + (isDeleting ? -1 : 1)),
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Mesh / Particles (Simulated with gradients) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium text-cyan-600 dark:text-cyan-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for new opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {portfolioData.personal.name}
            </span>
          </h1>

          <div className="h-12 flex items-center">
            <p className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400">
              I am a{" "}
              <span className="text-gray-900 dark:text-white">
                {displayText}
              </span>
              <span className="animate-pulse text-cyan-500 dark:text-cyan-400">
                |
              </span>
            </p>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-500 max-w-lg leading-relaxed">
            {portfolioData.personal.tagline}. I build scalable web applications
            and intuitive user interfaces with modern technologies.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Download className="w-4 h-4" />
              CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center lg:flex"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Abstract Developer Illustration / Avatar Placeholder */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 border border-gray-200 dark:border-white/10 backdrop-blur-3xl" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-400/30 to-blue-500/30 border border-gray-300 dark:border-white/20 backdrop-blur-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/public/profile.jpg"
                alt="Developer Avatar"
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-white/80 dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl flex items-center justify-center"
            >
              <div className="text-cyan-600 dark:text-cyan-400 font-mono text-sm font-bold">
                &lt;/&gt;
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-8 -left-8 w-28 h-28 bg-white/80 dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-full shadow-2xl flex items-center justify-center"
            >
              <div className="text-blue-600 dark:text-blue-400 font-sans text-xs font-bold tracking-widest uppercase">
                React
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
