import { useState } from "react";

import Button from "../Button/Button";
import ContactModal from "../ContactModal/ContactModal";
import Magnetic from "../Magnetic/Magnetic";
import Section from "../Section/Section";

import styles from "./Hero.module.css";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Section id="home" className={styles.hero}>
        <div className={styles.content}>
          <p className={styles.subtitle}>FULLSTACK DEVELOPER</p>

          <h2 className={styles.title}>
            Building scalable digital products with modern frontend experiences
            and robust backend architecture.
          </h2>

          <p className={styles.description}>
            Fullstack developer focused on high-performance applications,
            intuitive user experiences and scalable software systems.
          </p>

          <div className={styles.actions}>
            <Magnetic>
              <a href="#projects">
                <Button text="View Projects" />
              </a>
            </Magnetic>

            <Magnetic>
              <div onClick={() => setIsModalOpen(true)}>
                <Button text="Get In Touch" variant="secondary" />
              </div>
            </Magnetic>
          </div>
        </div>
      </Section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default Hero;
