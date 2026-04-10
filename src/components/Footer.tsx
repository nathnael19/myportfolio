import { portfolioData } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="py-20 relative overflow-hidden border-t border-gray-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs">
                {portfolioData.personal.name.charAt(0)}
              </div>
              {portfolioData.personal.name.split(' ')[0]}
              <span className="text-cyan-500">.</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-medium text-center md:text-left max-w-xs">
              Building things for the web.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
              {['About', 'Projects', 'Skills', 'Experience'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 hover:text-cyan-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-widest">
                © {new Date().getFullYear()} {portfolioData.personal.name}
              </p>
              <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-800 hidden md:block" />
              <div className="flex items-center gap-6">
                <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-cyan-500 transition-colors">Privacy</a>
                <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-cyan-500 transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Mark */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
}
