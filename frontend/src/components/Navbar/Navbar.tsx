import { useEffect, useState } from "react";

import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const [isScrolled, setIsScrolled] = useState(false);

  /* ACTIVE SECTION */
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  /* SCROLL ATMOSPHERE */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.container}>
          <h1 className={styles.logo}>Imke</h1>

          <nav className={styles.links}>
            <a
              href="#home"
              className={activeSection === "home" ? styles.activeLink : ""}
            >
              Home
            </a>

            <a
              href="#projects"
              className={activeSection === "projects" ? styles.activeLink : ""}
            >
              Projects
            </a>

            <a
              href="#about"
              className={activeSection === "about" ? styles.activeLink : ""}
            >
              About
            </a>

            <a
              href="#skills"
              className={activeSection === "skills" ? styles.activeLink : ""}
            >
              Skills
            </a>

            <a
              href="#contact"
              className={activeSection === "contact" ? styles.activeLink : ""}
            >
              Contact
            </a>
          </nav>

          <button
            className={`${styles.menuButton} ${isOpen ? styles.active : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`${styles.mobileMenu} ${
          isOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <a
          href="#home"
          className={activeSection === "home" ? styles.activeMobileLink : ""}
          onClick={() => setIsOpen(false)}
        >
          Home
        </a>

        <a
          href="#projects"
          className={
            activeSection === "projects" ? styles.activeMobileLink : ""
          }
          onClick={() => setIsOpen(false)}
        >
          Projects
        </a>

        <a
          href="#about"
          className={activeSection === "about" ? styles.activeMobileLink : ""}
          onClick={() => setIsOpen(false)}
        >
          About
        </a>

        <a
          href="#skills"
          className={activeSection === "skills" ? styles.activeMobileLink : ""}
          onClick={() => setIsOpen(false)}
        >
          Skills
        </a>

        <a
          href="#contact"
          className={activeSection === "contact" ? styles.activeMobileLink : ""}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </aside>
    </>
  );
}

export default Navbar;
