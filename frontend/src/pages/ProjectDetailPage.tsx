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
        <div className={styles.notFound}>
          <h1>Project not found</h1>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <div className={styles.container}>
        <span className={styles.label}>
          Project
        </span>

        <h1 className={styles.title}>
          {project.title}
        </h1>

        <p className={styles.description}>
          {project.longDescription}
        </p>

        {/* TECH STACK */}
        {project.technologies && (
          <div className={styles.techStack}>
            {project.technologies.map(
              (tech) => (
                <span key={tech}>
                  {tech}
                </span>
              )
            )}
          </div>
        )}

        {/* IMAGE GALLERY */}
        {project.images && (
          <div className={styles.gallery}>
            {project.images.map(
              (image) => (
                <img
                  key={image}
                  src={image}
                  alt={project.title}
                />
              )
            )}
          </div>
        )}

        {/* VIDEO */}
        {project.video && (
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src={project.video}
              type="video/mp4"
            />
          </video>
        )}

        {/* ACTIONS */}
        {(project.github ||
          project.live) && (
          <div className={styles.actions}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </Section>
  );
}

export default ProjectDetailPage;