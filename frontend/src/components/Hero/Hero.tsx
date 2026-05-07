import Button from "../Button/Button";
import Section from "../Section/Section";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <Section className={styles.heroSection} id="home">
      <div className={styles.hero}>
        <p className={styles.subtitle}>
          FULLSTACK DEVELOPER
        </p>

        <h1 className={styles.title}>
          Building modern web experiences with{" "}
          <span>React</span> & .NET
        </h1>

        <p className={styles.description}>
          Portfolio focused on frontend experiences,
          scalable architecture, and modern
          fullstack development.
        </p>

        <div className={styles.actions}>
          <Button text="View Projects" />

          <Button
            text="Contact Me"
            variant="secondary"
          />
        </div>
      </div>
    </Section>
  );
}

export default Hero;