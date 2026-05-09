import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Imke Paps — Built with React</p>
      <Link to="/privacy">Privacy Policy</Link>
    </footer>
  );
}

export default Footer;
