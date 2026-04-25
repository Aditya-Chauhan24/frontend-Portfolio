import { ExternalLink, Github, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, y: 26, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.97 }}
        transition={{ duration: 0.28 }}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0a1020] p-6 text-white shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-200">{project.category}</p>
            <h3 className="mt-3 font-display text-3xl font-semibold">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Problem Statement</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.problem}</p>
            </div>
            <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Key Features</p>
              <div className="mt-4 grid gap-3">
                {project.features.map((item) => (
                  <p key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-400" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Tech Stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Highlights</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.metrics.map((item) => (
                  <span key={item} className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-950">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1"
                >
                  GitHub
                  <Github className="h-4 w-4" />
                </a>
              ) : null}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
                >
                  Live Demo
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
              {!project.github && !project.demo ? (
                <p className="text-sm text-slate-400">Public repository or live deployment not linked yet.</p>
              ) : null}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectModal;
