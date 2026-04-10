import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
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
            Career
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            Where I've{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Been
            </span>
          </h3>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/50 via-blue-600/50 to-transparent transform -translate-x-1/2 rounded-full" />

          <div className="space-y-16">
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 top-10 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-3xl bg-slate-900 dark:bg-white border-4 border-cyan-500 flex items-center justify-center z-10 shadow-2xl group transition-all duration-500">
                  <Briefcase className="w-6 h-6 text-white dark:text-slate-900 group-hover:scale-110 transition-transform" />
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 pl-20 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-20 text-left md:text-right"
                      : "md:pl-20 text-left"
                  }`}
                >
                  <div className="p-10 rounded-[2.5rem] glass-card hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-500 group shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
                      <Briefcase className="w-24 h-24" />
                    </div>
                    
                    <span className="inline-block px-5 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-500 text-[10px] font-black uppercase tracking-widest mb-6 border border-cyan-500/20">
                      {exp.period}
                    </span>
                    <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight group-hover:text-cyan-500 transition-colors">
                      {exp.role}
                    </h4>
                    <h5 className="text-xl font-bold text-gray-700 dark:text-gray-400 mb-6 flex items-center gap-2 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors">
                      {idx % 2 !== 0 && <span className="w-2 h-2 rounded-full bg-cyan-500" />}
                      {exp.company}
                      {idx % 2 === 0 && <span className="w-2 h-2 rounded-full bg-cyan-500" />}
                    </h5>
                    <p className="text-lg text-gray-600 dark:text-gray-500 leading-relaxed font-medium">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
