import Section from "../Section/Section";

import styles from "./AboutSection.module.css";

function AboutSection() {
  return (
    <Section id="about">
      <div className={styles.container}>
        <div className={styles.left}>
          <p>ABOUT</p>

          <h2>
            Creating modern digital experiences
            with a focus on design, scalability,
            and performance.
          </h2>
        </div>

        <div className={styles.right}>
          <p>
            I'm a fullstack developer passionate
            about building modern web applications
            with clean architecture and intuitive
            user experiences.
          </p>

          <p>
            My focus is on React frontend
            development, scalable backend systems,
            and creating products that feel both
            functional and premium.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default AboutSection;