import { useState } from "react";
import { useParams } from "react-router-dom";

import Section from "../components/Section/Section";
import Magnetic from "../components/Magnetic/Magnetic";
import SEO from "../components/SEO/SEO";

import { projects } from "../data/projects";

import styles from "./ProjectDetailPage.module.css";

function ProjectDetailPage() {
  const { slug } = useParams();

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

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
    <>
      <SEO title={project.title} description={project.description} />

      <Section>
        <div className={styles.container}>
          <div className={styles.meta}>
            <span className={styles.label}>Project</span>

            <span className={styles.year}>{project.year}</span>
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
              {project.github && (
                <Magnetic>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </Magnetic>
              )}

              {project.live && (
                <Magnetic>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Website
                  </a>
                </Magnetic>
              )}
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
                preload="metadata"
              >
                <source src={project.video} type="video/mp4" />
              </video>
            </div>
          )}

          {/* IMAGE GALLERY */}
          {project.images && (
            <div className={styles.gallery}>
              {project.images.map((image, index) => (
                <button
                  key={image}
                  className={styles.imageCard}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img src={image} alt={project.title} loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* LIGHTBOX */}
        {selectedImageIndex !== null && (
          <div
            className={styles.lightbox}
            onClick={() => setSelectedImageIndex(null)}
          >
            <button
              className={`${styles.arrow} ${styles.left}`}
              onClick={(e) => {
                e.stopPropagation();

                setSelectedImageIndex((prev) =>
                  prev === 0 ? project.images.length - 1 : prev! - 1,
                );
              }}
            >
              ←
            </button>

            <img
              src={project.images[selectedImageIndex]}
              alt="Preview"
              className={styles.lightboxImage}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className={`${styles.arrow} ${styles.right}`}
              onClick={(e) => {
                e.stopPropagation();

                setSelectedImageIndex((prev) =>
                  prev === project.images.length - 1 ? 0 : prev! + 1,
                );
              }}
            >
              →
            </button>
          </div>
        )}
      </Section>
    </>
  );
}

export default ProjectDetailPage;
