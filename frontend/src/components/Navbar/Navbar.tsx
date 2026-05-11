import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isStaticPage = location.pathname !== "/";
  /* ACTIVE SECTION */
  useEffect(() => {
    const sectionIds = [
      "home",
      "projects",
      "about",
      "skills",
      "experience",
      "contact",
    ];

    let ticking = false;

    const updateSection = () => {
      let current = "home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const top = section.offsetTop - 140;

        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          current = id;
        }
      });

      /* FORCE CONTACT AT PAGE BOTTOM */
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        current = "contact";
      }

      setActiveSection(current);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateSection);

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    updateSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
          <Link to="/" className={styles.logo}>
          <img className={styles.logoImage} src="/favicon.webp" alt="Imke Paps"/>
          <span>Imke Paps</span>
        </Link>

          <nav className={styles.links}>
            {isStaticPage ? (
              <Link to="/">Back Home</Link>
            ) : (
              <>
                <a
                  href="#home"
                  className={activeSection === "home" ? styles.activeLink : ""}
                >
                  Home
                </a>

                <a
                  href="#projects"
                  className={
                    activeSection === "projects" ? styles.activeLink : ""
                  }
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
                  className={
                    activeSection === "skills" ? styles.activeLink : ""
                  }
                >
                  Skills
                </a>
                <a
                  href="#experience"
                  className={
                    activeSection === "experience" ? styles.activeLink : ""
                  }
                >
                  Experience
                </a>

                <a
                  href="#contact"
                  className={
                    activeSection === "contact" ? styles.activeLink : ""
                  }
                >
                  Contact
                </a>
              </>
            )}
          </nav>

          <button
            className={`${styles.menuButton} ${isOpen ? styles.active : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
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
        {isStaticPage ? (
          <Link to="/" onClick={() => setIsOpen(false)}>
            Back Home
          </Link>
        ) : (
          <>
            <a
              href="#home"
              className={
                activeSection === "home" ? styles.activeMobileLink : ""
              }
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
              className={
                activeSection === "about" ? styles.activeMobileLink : ""
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </a>

            <a
              href="#skills"
              className={
                activeSection === "skills" ? styles.activeMobileLink : ""
              }
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#experience"
              className={
                activeSection === "experience" ? styles.activeMobileLink : ""
              }
              onClick={() => setIsOpen(false)}
            >
              Experience
            </a>

            <a
              href="#contact"
              className={
                activeSection === "contact" ? styles.activeMobileLink : ""
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </>
        )}
      </aside>
    </>
  );
}

export default Navbar;
