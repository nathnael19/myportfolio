import { portfolioData } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#050505] py-8 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 dark:text-gray-500 text-sm">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-500">
          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
