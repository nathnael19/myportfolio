import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolio";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useState, useMemo } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const INITIAL_VISIBLE_COUNT = 6;

  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    portfolioData.projects.forEach((project) => {
      project.tech.forEach((t) => techs.add(t));
    });
    return ["All", ...Array.from(techs)].sort();
  }, []);

  const filteredProjects = useMemo(() => {
    let projects = portfolioData.projects;
    if (filter !== "All") {
      projects = projects.filter((project) => project.tech.includes(filter));
    }
    return projects;
  }, [filter]);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 mb-20 items-center text-center"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] font-black text-cyan-500 mb-2">
            Showcase
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Projects
            </span>
          </h3>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => {
                setFilter(tech);
                setShowAll(false);
              }}
              className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 ${filter === tech
                  ? "bg-cyan-500 text-white shadow-xl shadow-cyan-500/20"
                  : "glass-card text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white"
                }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="group relative rounded-[2.5rem] overflow-hidden glass-card hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-700 hover:-translate-y-3 shadow-2xl"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Floating Link Icons on Hover */}
                  <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-2xl glass-card text-white hover:bg-white/20 transition-all"
                      title="View Source"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-2xl glass-card text-white hover:bg-white/20 transition-all"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="p-10 relative">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 rounded-xl bg-cyan-500/10 text-[10px] font-black uppercase tracking-widest text-cyan-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight group-hover:text-cyan-500 transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 line-clamp-2 font-medium">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-white/10">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-cyan-500 hover:text-cyan-400 transition-all"
                    >
                      View Project
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More/Less Button */}
        {filteredProjects.length > INITIAL_VISIBLE_COUNT && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-20"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-[2rem] glass-card text-gray-900 dark:text-white font-black uppercase tracking-widest text-xs hover:bg-cyan-500 hover:text-white hover:border-cyan-500 dark:hover:bg-cyan-500 dark:hover:border-cyan-500 transition-all duration-500 shadow-2xl"
            >
              {showAll ? "Show Less" : "Explore More"}
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </button>
          </motion.div>
        )}
      </div>

      {/* Decorative Background Element */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
