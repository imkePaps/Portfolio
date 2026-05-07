import { useParams } from "react-router-dom";

import Section from "../components/Section/Section";

import { projects } from "../data/projects";

import styles from "./ProjectDetailPage.module.css";

function ProjectDetailPage() {
  const { slug } = useParams();

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return (
      <Section>
        <h1>Project not found</h1>
      </Section>
    );
  }

  return (
    <Section>
      <div className={styles.container}>
        <span className={styles.label}>
          PROJECT
        </span>

        <h1>{project.title}</h1>

        <p className={styles.description}>
          {project.longDescription}
        </p>

        <div className={styles.techStack}>
          {project.technologies.map(
            (tech) => (
              <span key={tech}>
                {tech}
              </span>
            )
          )}
        </div>

        <div className={styles.actions}>
          <a
            href={project.github}
            target="_blank"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
          >
            Live Demo
          </a>
        </div>
      </div>
    </Section>
  );
}

export default ProjectDetailPage;