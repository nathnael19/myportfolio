import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 dark:bg-[#050505] relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 mb-16 items-center text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioData.skills.categories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-8 rounded-3xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 group shadow-sm dark:shadow-none"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.2 + skillIdx * 0.05,
                    }}
                    className="px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
