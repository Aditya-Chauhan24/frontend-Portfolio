import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function HeroSection({ hero }) {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFrameIndex((currentValue) => (currentValue + 1) % hero.introFrames.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, [hero.introFrames.length]);

  const getIcon = (label) => {
    if (label.includes("Download")) return Download;
    if (label.includes("Contact")) return Mail;
    return ArrowRight;
  };

  return (
    <section id="home" className="section-shell relative pt-14 sm:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/90 px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-brand-200"
          >
            <Sparkles className="h-4 w-4" />
            Frontend portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[0.95] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl"
          >
            {hero.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-5 text-lg font-semibold text-brand-700 dark:text-brand-200 sm:text-xl"
          >
            {hero.role}
          </motion.p>
          <motion.p
            key={hero.introFrames[frameIndex]}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 min-h-[2rem] text-base font-medium text-cyan-800 dark:text-cyan-300 sm:text-lg"
          >
            {hero.introFrames[frameIndex]}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg"
          >
            {hero.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <span className="accent-chip">Responsive systems</span>
            <span className="accent-chip">Motion-first UI</span>
            <span className="accent-chip">Recruiter-friendly clarity</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            {hero.ctas.map((item) => {
              const Icon = getIcon(item.label);

              return (
                <a
                  key={item.label}
                  href={item.href}
                  download={item.download}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                    item.variant === "primary"
                      ? "bg-brand-600 text-white shadow-glow hover:-translate-y-1 dark:bg-white dark:text-slate-950"
                      : item.variant === "secondary"
                        ? "border border-amber-200/80 bg-white text-slate-900 hover:-translate-y-1 hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-brand-400"
                        : "text-slate-700 hover:-translate-y-1 hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-300"
                  }`}
                >
                  {item.label}
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.44 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {hero.valuePoints.map((item) => (
              <span
                key={item}
                className="accent-chip"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -left-5 top-10 h-24 w-24 rounded-full bg-brand-400/25 blur-2xl dark:bg-brand-500/20" />
          <div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-cyan-450/25 blur-2xl dark:bg-cyan-450/20" />
          <div className="glass-panel interactive-ring relative overflow-hidden rounded-[2rem] p-6">
            <motion.div
              className="absolute inset-x-0 top-0 h-40 bg-gradient-to-r from-brand-500/16 via-cyan-450/14 to-fuchsia-500/12 blur-3xl"
              animate={{ x: ["-10%", "8%", "-10%"] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-600 dark:text-slate-400">
                  {hero.snapshot.label}
                </p>
                <p className="mt-2 max-w-md font-display text-2xl font-semibold">{hero.snapshot.title}</p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {hero.stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-amber-200/70 bg-white/90 p-4 dark:border-white/10 dark:bg-slate-950/60"
                >
                  <p className="font-display text-1xl font-semibold text-slate-950 dark:text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.label}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.75rem] bg-gradient-to-br from-brand-700 via-brand-600 to-cyan-700 p-5 text-white shadow-[0_22px_60px_rgba(31,86,245,0.28)] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] dark:text-white">
              <p className="text-base leading-7 opacity-90">{hero.snapshot.summary}</p>
              <div className="mt-4 grid gap-3">
                {hero.snapshot.highlights.map((item) => (
                  <p key={item} className="flex gap-3 text-sm leading-6 opacity-80">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300 dark:bg-brand-500" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
