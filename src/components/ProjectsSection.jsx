import { motion } from "framer-motion";
import SectionShell from "./SectionShell";
import ProjectCard from "./ProjectCard";

function ProjectsSection({ projects, onOpenProject }) {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="The project section is built to do the heavy lifting."
      description="Selected work across portfolio systems, product UI, and responsive frontend execution."
      className="mt-24"
    >
      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} onOpenProject={onOpenProject} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}

export default ProjectsSection;
