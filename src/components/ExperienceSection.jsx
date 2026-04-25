import { motion } from "framer-motion";
import SectionShell from "./SectionShell";

function ExperienceSection({ achievements }) {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Timeline-driven proof of progress."
      description="A quick timeline of projects, learning milestones, and frontend-focused progress."
      className="mt-24"
    >
      <div className="relative mt-12">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-brand-500 via-cyan-450 to-transparent md:block" />
        <div className="grid gap-6">
          {achievements.map((item, index) => (
            <motion.article
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass-panel interactive-ring relative rounded-[2rem] p-6 md:ml-14"
            >
              <div className="absolute -left-12 top-8 hidden h-6 w-6 rounded-full border-4 border-white bg-gradient-to-br from-brand-500 to-cyan-500 shadow-lg md:block dark:border-slate-975" />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex w-fit rounded-full bg-gradient-to-r from-brand-600 to-cyan-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white dark:from-brand-500 dark:to-cyan-400 dark:text-white">
                  {item.year}
                </span>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">{item.subtitle}</p>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{item.description}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-brand-500/40 via-cyan-450/40 to-transparent" />
            </motion.article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export default ExperienceSection;
