import Section from "../Section/Section";

import styles from "./SkillsSection.module.css";

const skills = [
  "React",
  "TypeScript",
  ".NET",
  "C#",
  "REST APIs",
  "CSS Modules",
  "Responsive Design",
  "Git",
  "SQL",
  "Three.js",
];

function SkillsSection() {
  return (
    <Section id="skills">
      <div className={styles.header}>
        <p>SKILLS</p>

        <h2>Technologies & tools</h2>
      </div>

      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill} className={styles.card}>
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default SkillsSection;
