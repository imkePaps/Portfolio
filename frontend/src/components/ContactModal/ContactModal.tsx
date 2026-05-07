import { motion, AnimatePresence } from "framer-motion";

import styles from "./ContactModal.module.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function ContactModal({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <button className={styles.close} onClick={onClose}>
              ✕
            </button>

            <div className={styles.avatar} />

            <h2>Imke Paps</h2>

            <p className={styles.role}>FullStack Developer</p>

            <div className={styles.info}>
              <a href="mailto:imke.paps@hotmail.com">imke.paps@hotmail.com</a>

              <a href="tel:+32498154838">+32 498 15 48 38</a>
            </div>

            <div className={styles.actions}>
              <a href="https://github.com/imkePaps" target="_blank">
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/imke-p-b93241200/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactModal;
