import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";
import { Code2, Terminal, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm uppercase tracking-[0.3em] font-black text-cyan-500">
                  A bit about me
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                  Building software that works for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    people
                  </span>
                </h3>
              </div>

              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                {portfolioData.personal.about}
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-4">
                <div className="space-y-1">
                  <div className="text-5xl font-black text-gray-900 dark:text-white tracking-tighter">
                    5<span className="text-cyan-500">+</span>
                  </div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black">
                    Years of Expertise
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-5xl font-black text-gray-900 dark:text-white tracking-tighter">
                    50<span className="text-blue-500">+</span>
                  </div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black">
                    Digital Products
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            {[
              {
                title: "Frontend Development",
                desc: "Building clean, fast interfaces that look and feel right on every screen.",
                icon: Code2,
                color: "cyan"
              },
              {
                title: "Backend Development",
                desc: "Designing reliable backends that power everything under the hood.",
                icon: Terminal,
                color: "blue"
              },
              {
                title: "Strategy",
                desc: "Combining technical skill with user needs to build products that make an impact.",
                icon: Cpu,
                color: "indigo"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-[2rem] glass-card hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl bg-${service.color}-500/10 flex items-center justify-center mb-6 text-${service.color}-500 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                  {service.title}
                </h4>
                <p className="text-lg text-gray-600 dark:text-gray-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
