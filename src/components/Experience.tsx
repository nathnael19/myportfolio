import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-[#050505] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 mb-16 items-center text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-600/50 to-transparent transform -translate-x-1/2" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-[#0a0a0a] border-2 border-cyan-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  <Briefcase className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 transition-colors duration-300 group shadow-sm dark:shadow-none">
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wider mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-400 mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-500 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
