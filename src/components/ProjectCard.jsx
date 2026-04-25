import { ArrowUpRight, Github, Layers3 } from "lucide-react";
import { motion } from "framer-motion";

function ProjectCard({ project, onOpenProject, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-ambient backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-100 transition duration-500 group-hover:scale-105`} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/70 dark:to-slate-950/70" />
      <div className="absolute -right-16 top-10 h-32 w-32 rounded-full border border-white/40 bg-white/15 blur-2xl transition duration-500 group-hover:scale-125 dark:border-white/10 dark:bg-white/[0.04]" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">{project.category}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">{project.title}</h3>
          </div>
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
            <Layers3 className="h-5 w-5" />
          </span>
        </div>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-200">Problem</p>
        <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.problem}</p>
        <p className="mt-5 text-sm leading-7 text-slate-700 dark:text-slate-200">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/70 bg-white/80 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-950/50 dark:text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 grid gap-2">
          {project.features.slice(0, 2).map((item) => (
            <p key={item} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              <span className="mt-2 h-2 w-2 rounded-full bg-brand-500" />
              <span>{item}</span>
            </p>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.metrics.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200/80 bg-slate-950/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white dark:border-white/10 dark:bg-white/10"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onOpenProject(project)}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 dark:bg-white dark:text-slate-950"
          >
            View Details
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} GitHub`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/85 text-slate-800 transition hover:-translate-y-1 hover:text-brand-600 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-100"
              >
                <Github className="h-4 w-4" />
              </a>
            ) : null}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/85 text-slate-800 transition hover:-translate-y-1 hover:text-brand-600 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-100"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
