import { motion } from "framer-motion";
import { Award, Rocket, ShieldCheck } from "lucide-react";
import SectionShell from "./SectionShell";

const icons = [Award, Rocket, ShieldCheck];

function WhyMeSection({ whyMe }) {
  return (
    <SectionShell
      id="why-me"
      eyebrow="Why Me"
      title="A clearer reason to hire me, not just scroll past me."
      description="This section turns the profile into evidence: outcomes, systems, and presentation quality."
      className="mt-24"
    >
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {whyMe.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8, rotateX: 2 }}
              className="glass-panel interactive-ring relative overflow-hidden rounded-[2rem] p-6"
            >
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-brand-500/15 via-cyan-400/10 to-transparent blur-2xl" />
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-brand-500 to-[#06b6d4] text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{item.body}</p>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}

export default WhyMeSection;
