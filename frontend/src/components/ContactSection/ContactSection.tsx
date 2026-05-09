import { useState } from "react";

import Button from "../Button/Button";
import ContactModal from "../ContactModal/ContactModal";
import Magnetic from "../Magnetic/Magnetic";
import Section from "../Section/Section";

import styles from "./ContactSection.module.css";

function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Section id="contact">
        <div className={styles.container}>
          <p>CONTACT</p>

          <h2>Interested in working together or building something great?</h2>

          <p className={styles.description}>
            Feel free to reach out for collaborations, freelance opportunities,
            or just to connect.
          </p>

          <div className={styles.actions}>
            <Magnetic>
              <div onClick={() => setIsModalOpen(true)}>
                <Button text="Get In Touch" />
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

export default ContactSection;
