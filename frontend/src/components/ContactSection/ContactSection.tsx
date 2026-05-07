import Button from "../Button/Button";
import Section from "../Section/Section";

import styles from "./ContactSection.module.css";

function ContactSection() {
  return (
    <Section id="contact">
      <div className={styles.container}>
        <p>CONTACT</p>

        <h2>
          Interested in working together or
          building something great?
        </h2>

        <p className={styles.description}>
          Feel free to reach out for collaborations,
          freelance opportunities, or just to connect.
        </p>

        <div className={styles.actions}>
          <Button text="Get In Touch" />
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;