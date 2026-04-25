import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function SectionShell({ id, eyebrow, title, description, children, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`section-shell ${className}`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {(eyebrow || title || description) && (
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="inline-flex rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-brand-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-brand-200">
              {eyebrow}
            </p>
          ) : null}
          {title ? <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2> : null}
          {description ? <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{description}</p> : null}
        </div>
      )}
      {children}
    </motion.section>
  );
}

export default SectionShell;
