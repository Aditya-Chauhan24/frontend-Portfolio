import { Menu, MoonStar, SunMedium, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function Navbar({ navigation, activeSection, theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-[9999] px-4 pt-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-amber-200/80 bg-[#fffaf3]/80 px-4 py-3 shadow-ambient backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 via-brand-600 to-cyan-500 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(31,86,245,0.25)] dark:from-cyan-400 dark:via-brand-500 dark:to-fuchsia-500 dark:text-white">
            AC
          </span>
          <div className="hidden sm:block">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-slate-600 dark:text-slate-400">
              Frontend Portfolio
            </p>
            <p className="text-sm font-semibold text-slate-950 dark:text-slate-100">Aditya Chauhan</p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => {
            const target = item.href.replace("#", "");
            const isActive = activeSection === target;

            return (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -2 }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-gradient-to-r from-brand-600 to-cyan-500 text-white shadow-[0_10px_24px_rgba(31,86,245,0.22)] dark:from-brand-500 dark:to-cyan-400 dark:text-white"
                    : "text-slate-700 hover:bg-brand-50 hover:text-brand-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {item.label}
              </motion.a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-200/80 bg-white/90 text-slate-800 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:border-brand-400"
          >
            {theme === "dark" ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
          </button>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((currentValue) => !currentValue)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-200/80 bg-white/90 text-slate-800 transition hover:-translate-y-0.5 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-3 max-w-6xl rounded-[2rem] border border-amber-200/80 bg-[#fffaf3]/95 p-4 shadow-ambient backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90 lg:hidden"
          >
            <nav className="grid gap-2">
              {navigation.map((item) => (
                <a
                  key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-brand-600 hover:text-white dark:text-slate-200 dark:hover:bg-white dark:hover:text-slate-950"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
