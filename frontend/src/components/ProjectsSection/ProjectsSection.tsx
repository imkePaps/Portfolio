import { motion } from "framer-motion";

import Section from "../Section/Section";
import ProjectCard from "../ProjectCard/ProjectCard";

import styles from "./ProjectsSection.module.css";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio built with React, Framer Motion, and scalable frontend architecture.",
    tech: ["React", "TypeScript", "Framer Motion"],
  },
  {
    title: "Business Dashboard",
    description:
      "Analytics dashboard with modern UI systems, reusable components, and API integrations.",
    tech: ["React", ".NET", "REST API"],
  },
  {
    title: "Creative Web Experience",
    description:
      "Interactive frontend experience focused on animations, visual polish, and performance.",
    tech: ["Three.js", "React", "CSS Modules"],
  },
];

function ProjectsSection() {
  return (
    <Section id="projects">
      <div className={styles.header}>
        <p>PROJECTS</p>

        <h2>Selected work</h2>

        <span className={styles.blur} />
      </div>

      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: {
                opacity: 0,
                y: 40,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export default ProjectsSection;
