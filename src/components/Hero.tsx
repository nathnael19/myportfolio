import { motion } from "motion/react";
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
      className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background Mesh / Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0.4)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start gap-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-semibold text-cyan-600 dark:text-cyan-400 shadow-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Open for new projects
          </motion.div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 tracking-tight">
              Hey, I'm
            </h2>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 dark:text-white leading-[0.9]">
              {portfolioData.personal.name.split(" ")[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
                {portfolioData.personal.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
          </div>

          <div className="h-10 flex items-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
              A{" "}
              <span className="text-gray-900 dark:text-white border-b-4 border-cyan-500/30">
                {displayText}
              </span>
              <span className="animate-pulse text-cyan-500 font-light ml-1">
                |
              </span>
            </p>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed font-medium">
            {portfolioData.personal.tagline}. Specialized in building
            <span className="text-gray-900 dark:text-white mx-1">high-performance</span>
            web applications with a focus on
            <span className="text-gray-900 dark:text-white mx-1">premium user experience</span>.
          </p>

          <div className="flex flex-wrap items-center gap-5 mt-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-black font-bold text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              See my work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl glass-card text-gray-900 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
              >
                <Mail className="w-5 h-5" />
                Let's Talk
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                download="Resume.pdf"
                className="p-4 rounded-2xl glass-card text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all group"
                title="Download Resume"
              >
                <Download className="w-5 h-5 group-hover:bounce" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          <div className="relative w-full aspect-square max-w-[450px]">
            {/* Main Image Container */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 glass-card rotate-3 scale-105" />
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/profile.jpg"
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 sm:-top-10 sm:-right-6 px-4 py-2 sm:px-6 sm:py-4 glass-card rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col items-center z-20"
            >
              <span className="text-3xl font-bold text-cyan-500">5+</span>
              <span className="text-[10px] uppercase tracking-widest font-black text-gray-500 dark:text-gray-400">Years Exp.</span>
            </motion.div>

            {/* Tech Stack Floaties */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-6 p-4 sm:p-5 glass-card rounded-2xl sm:rounded-3xl shadow-2xl flex items-center gap-2 sm:gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <span className="text-blue-500 font-bold">R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold dark:text-white">Love React</span>
                <span className="text-[10px] text-gray-500">Frontend Focus</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
