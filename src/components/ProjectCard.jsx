import { ArrowUpRight, Github, Layers3 } from "lucide-react";
import { motion } from "framer-motion";

function ProjectCard({ project, onOpenProject, index }) {
  const hasActiveDemo = project.demo?.active && project.demo?.href;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
      className="glass-panel interactive-ring group relative overflow-hidden rounded-[2rem] p-6"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-100 transition duration-500 group-hover:scale-105`} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/35 to-[#fff3e6]/85 dark:via-transparent dark:to-slate-950/70" />
      <div className="absolute -right-16 top-10 h-32 w-32 rounded-full border border-white/50 bg-white/25 blur-2xl transition duration-500 group-hover:scale-125 dark:border-white/10 dark:bg-white/[0.04]" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:text-slate-400">{project.category}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">{project.title}</h3>
          </div>
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white dark:bg-white dark:text-slate-950">
            <Layers3 className="h-5 w-5" />
          </span>
        </div>

        <div className="mt-6 overflow-hidden rounded-[1.6rem] border border-white/60 bg-white/70 p-2 shadow-sm dark:border-white/10 dark:bg-slate-950/50">
          <div className="relative overflow-hidden rounded-[1.2rem]">
            <img
              src={project.thumbnail}
              alt={`${project.title} project thumbnail`}
              className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>

        <p className="mt-6 text-sm leading-7 text-slate-800 dark:text-slate-200">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-amber-200/80 bg-white/95 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-950/50 dark:text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>

        
        <div className="mt-6 flex flex-wrap gap-2">
          {project.metrics.map((item) => (
            <span
              key={item}
              className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-800 dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {hasActiveDemo ? (
              <a
                href={project.demo.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 dark:from-brand-500 dark:to-cyan-400 dark:text-white"
              >
                Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-slate-300/80 bg-slate-200/80 px-5 py-3 text-sm font-semibold text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
              >
                Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </button>
            )}
            <button
              type="button"
              onClick={() => onOpenProject(project)}
              className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-1 hover:text-brand-600 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-100"
            >
              View Details
              <ArrowUpRight className="h-4 w-4" />
            </button>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} GitHub`}
                className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-1 hover:text-brand-600 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-100"
              >
                GitHub
                <Github className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
