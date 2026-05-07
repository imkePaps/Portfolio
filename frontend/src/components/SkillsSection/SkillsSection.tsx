import { useState } from "react";
import Section from "../Section/Section";

import styles from "./SkillsSection.module.css";

const skills = [
  "React",
  "JavaScript",
  ".NET",
  "C#",
  "REST APIs",
  "CSS Modules",
  "Responsive Design",
  "Git",
  "Three.js",
  "Creative Cloud",
  "Photoshop",
  "SQL",
  "HTML",
  "Laravel",
  "PHP",
];

function SkillsSection() {
  const [expanded, setExpanded] =
    useState(false);

  return (
    <Section id="skills">
      <div className={styles.header}>
        <p>SKILLS</p>

        <h2>Technologies & tools</h2>
      </div>

      <div
        className={`${styles.grid} ${
          expanded
            ? styles.expanded
            : ""
        }`}
      >
        {skills.map((skill) => (
          <div
            key={skill}
            className={styles.card}
          >
            {skill}
          </div>
        ))}
      </div>

      <button
        className={styles.toggle}
        onClick={() =>
          setExpanded(!expanded)
        }
      >
        {expanded
          ? "Show Less ↑"
          : "Show More ↓"}
      </button>
    </Section>
  );
}
export default SkillsSection;
