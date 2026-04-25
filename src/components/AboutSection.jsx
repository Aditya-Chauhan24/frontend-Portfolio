import { motion } from "framer-motion";
import { BriefcaseBusiness, Focus, Sparkle } from "lucide-react";
import SectionShell from "./SectionShell";

const items = [
  { key: "domain", icon: Focus, label: "Domain Focus" },
  { key: "goals", icon: BriefcaseBusiness, label: "Current Goals" },
];

function AboutSection({ about }) {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="A concise introduction built around clarity, focus, and frontend execution."
      description={about.summary}
      className="mt-24"
    >
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          whileHover={{ y: -6 }}
          className="glass-panel interactive-ring rounded-[2rem] p-6"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500 text-white">
              <Sparkle className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">Interests</p>
              <p className="mt-1 text-lg font-semibold">What I keep improving</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {about.interests.map((item) => (
              <span
                key={item}
                className="accent-chip"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
        <div className="grid gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-panel interactive-ring rounded-[2rem] p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white dark:bg-white dark:text-slate-950">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">{item.label}</p>
                </div>
                <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">{about[item.key]}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

export default AboutSection;
