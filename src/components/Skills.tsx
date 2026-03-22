import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 mb-20 items-center text-center"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] font-black text-cyan-500 mb-2">
            Abilities
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Proficiency
            </span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.categories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group p-10 rounded-[2.5rem] glass-card hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-cyan-500 transition-colors">
                  {category.name}
                </h4>
                <div className="text-xs font-black text-cyan-500/50 uppercase tracking-widest bg-cyan-500/5 px-3 py-1 rounded-full">
                  Skillset
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.1 + skillIdx * 0.05,
                    }}
                    className="px-5 py-2.5 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10 hover:shadow-xl hover:text-cyan-500 dark:hover:text-cyan-400 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
