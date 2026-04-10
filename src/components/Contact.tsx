import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";
import { Mail, MapPin, Send } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        e.currentTarget.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setErrorMessage(
          data.message || "Something went wrong. Please try again.",
        );
      }
    } catch (err) {
      setErrorMessage(
        "Could not connect to the server. Please check your internet.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 mb-20 items-center text-center"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] font-black text-cyan-500 mb-2">
            Connection
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Touch
            </span>
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mt-4 font-medium">
            Have a project in mind or just want to say hi? I'm always open to 
            discussing new projects and creative opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {[
              {
                icon: Mail,
                title: "Email Me",
                value: portfolioData.personal.email,
                link: `mailto:${portfolioData.personal.email}`,
                color: "cyan"
              },
              {
                icon: MapPin,
                title: "Location",
                value: "Addis Abeba, Ethiopia",
                sub: "Remote available",
                color: "blue"
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] glass-card flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-500">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-500 shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                    {item.title}
                  </h4>
                  {item.link ? (
                    <a href={item.link} className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white hover:text-cyan-500 transition-colors break-words block">
                      {item.value}
                    </a>
                  ) : (
                    <div className="min-w-0">
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white break-words">
                        {item.value}
                      </div>
                      {item.sub && <div className="text-sm font-medium text-gray-500">{item.sub}</div>}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Decorative Social Prompt */}
            <div className="mt-auto p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">Let's build something great.</h4>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-medium">I'm currently available for freelance work and full-time positions.</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="h-full space-y-6 p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] glass-card shadow-2xl border-white/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-4">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-4">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-4">
                  How can I help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all font-medium resize-none"
                  placeholder="Drop a message..."
                />
              </div>

              {errorMessage && (
                <p className="text-sm text-red-500 font-bold px-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all duration-500 ${
                  isSubmitted
                    ? "bg-green-500/20 text-green-400 border border-green-500/50"
                    : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-[1.02] active:scale-95 shadow-2xl disabled:opacity-70"
                }`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                ) : isSubmitted ? (
                  "Inquiry Received!"
                ) : (
                  <>
                    Initiate Project
                    <Send className="w-4 h-4 translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
