import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Code2, Terminal, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
          >
            <p>{portfolioData.personal.about}</p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or writing technical articles to share my knowledge with the community.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gray-900 dark:text-white">5+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">Projects Completed</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6"
          >
            <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-colors shadow-sm dark:shadow-none">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center mb-4 text-cyan-600 dark:text-cyan-400">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Frontend Development</h3>
              <p className="text-gray-600 dark:text-gray-500">Creating responsive, accessible, and performant user interfaces using React, Next.js, and modern CSS.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-colors shadow-sm dark:shadow-none">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Backend Architecture</h3>
              <p className="text-gray-600 dark:text-gray-500">Designing robust APIs and scalable database structures using Node.js, Python, and SQL/NoSQL databases.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
