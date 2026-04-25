import { Code2, Database, FileCode2, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import SectionShell from "./SectionShell";

const icons = {
  Languages: FileCode2,
  Frontend: Code2,
  Backend: Database,
  Tools: Wrench,
};

function SkillsSection({ skills }) {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="The skill section prioritizes signal over noise."
      description="Instead of dumping every technology into one block, the skills are grouped by how they contribute to actual frontend delivery."
      className="mt-24"
    >
      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {skills.map((group, index) => {
          const Icon = icons[group.title];

          return (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass-panel interactive-ring rounded-[2rem] p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-500 text-white dark:from-brand-500 dark:to-cyan-400">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{group.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{group.items.length} focused strengths</p>
                </div>
              </div>
              <div className="mt-8 grid gap-5">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{item.name}</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        {item.level}%
                      </span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 via-cyan-450 to-fuchsia-500 shadow-[0_0_20px_rgba(53,111,255,0.45)]"
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.06 }}
                      className="mt-2 h-px w-full bg-gradient-to-r from-brand-500/30 via-cyan-450/30 to-transparent"
                    />
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}

export default SkillsSection;
