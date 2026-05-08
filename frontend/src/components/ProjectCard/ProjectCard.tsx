import { useRef, useState } from "react";
import styles from "./ProjectCard.module.css";

type Props = {
  title: string;
  description: string;
  year: string;
  tech: string[];
  image?: string;
};

function ProjectCard({ title, description, year, tech, image }: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
    `;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);

    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
    `;
  };

  return (
    <article
      ref={cardRef}
      className={styles.card}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.glow} />

      <div className={styles.image}>
        {image && <img src={image} alt={title} />}
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>

        <p className={styles.year}>
          {year}
        </p>

        <div className={styles.description}>
          <p className={expanded ? styles.expanded : ""}>{description}</p>

          {description.length > 120 && (
            <button
              className={styles.readMore}
              onClick={(e) => {
                e.preventDefault();

                setExpanded(!expanded);
              }}
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>

        <div className={styles.tech}>
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
