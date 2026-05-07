import { motion } from "framer-motion";
import Section from "../Section/Section";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectsSection.module.css";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

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
            <Link to={`/projects/${project.slug}`}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.technologies}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export default ProjectsSection;
