import { useParams } from "react-router-dom";
import Section from "../components/Section/Section";
import { projects } from "../data/projects";
import { useState } from "react";
import styles from "./ProjectDetailPage.module.css";
import Magnetic from "../components/Magnetic/Magnetic";

function ProjectDetailPage() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = projects.find((p) => p.slug === slug);

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
        <div className={styles.meta}>
          <span className={styles.label}>
            Project
          </span>

          <span className={styles.year}>
            {project.year}
          </span>
        </div>

        <h1 className={styles.title}>{project.title}</h1>

        <p className={styles.description}>{project.longDescription}</p>

        {/* TECH STACK */}
        {project.technologies && (
          <div className={styles.techStack}>
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        )}

        {/* ACTIONS */}
        {(project.github || project.live) && (
          <div className={styles.actions}>
            <Magnetic>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </Magnetic>

            <Magnetic>
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  Website
                </a>
              )}
            </Magnetic>
          </div>
        )}

        {/* VIDEO */}
        {project.video && (
          <div className={styles.videoWrapper}>
            <video
              className={styles.video}
              autoPlay
              muted
              loop
              playsInline
              controls
              poster="/projects/maui/poster.png"
            >
              <source src={project.video} type="video/mp4" />
            </video>
          </div>
        )}

        {/* IMAGE GALLERY */}
        {project.images && (
          <div className={styles.gallery}>
            {project.images.map((image) => (
              <button
                key={image}
                className={styles.imageCard}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image} alt={project.title} />
              </button>
            ))}
          </div>
        )}
      </div>
      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Preview"
            className={styles.lightboxImage}
          />
        </div>
      )}
    </Section>
  );
}

export default ProjectDetailPage;
