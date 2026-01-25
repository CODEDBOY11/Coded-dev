import Container from "../layout/Container";
import { projects } from "../../data/project";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-40">
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage}
              alt="Project preview"
              className="max-h-[85vh] w-[90%] max-w-5xl rounded-xl object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage(null);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Container>
        <h2 className="text-5xl font-extrabold mb-16">Selected Projects</h2>

        <div className="space-y-40">
          {projects.map((project) => (
            <div
              key={project.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <img
                src={project.image}
                className="rounded-2xl border border-white/10 cursor-pointer"
                onClick={() => setActiveImage(project.image)}
              />

              <div className="space-y-6">
                <p className="text-xs uppercase tracking-widest text-accent">
                  Case Study
                </p>

                <h3 className="text-3xl font-bold">{project.title}</h3>

                <p className="text-white/60">{project.tagline}</p>

                <p className="text-white/70">{project.description}</p>

                <div className="flex flex-wrap gap-4 text-sm text-white/50">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <p className="text-sm text-white/60">
                  <span className="text-white font-medium">Impact:</span>{" "}
                  {project.impact}
                </p>

                <div className="flex gap-6 pt-4">
                  <a className="text-accent font-medium" href={project.liveUrl}>
                    Live Project →
                  </a>
                  <a className="text-white/70" href={project.githubUrl}>
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
