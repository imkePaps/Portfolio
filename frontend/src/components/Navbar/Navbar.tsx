import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  const isStaticPage = location.pathname !== "/";

  /* -------------------------------- */
  /* ACTIVE SECTION TRACKING */
  /* -------------------------------- */
  useEffect(() => {
    if (isStaticPage) return;

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

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight * 0.35 &&
          rect.bottom >= window.innerHeight * 0.35
        ) {
          current = id;
          break;
        }
      }

      setActiveSection(current);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateSection();
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateSection);
    window.addEventListener("load", updateSection);

    const timeout1 = setTimeout(updateSection, 100);
    const timeout2 = setTimeout(updateSection, 500);

    updateSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateSection);
      window.removeEventListener("load", updateSection);

      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [isStaticPage]);

  /* -------------------------------- */
  /* NAVBAR BACKGROUND */
  /* -------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* -------------------------------- */
  /* CLOSE MOBILE MENU ON ROUTE CHANGE */
  /* -------------------------------- */
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <img
              className={styles.logoImage}
              src="/favicon.webp"
              alt="Imke Paps"
            />

            <span className={styles.logoText}>Imke Paps</span>
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

      {/* OVERLAY */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* MOBILE MENU */}
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
