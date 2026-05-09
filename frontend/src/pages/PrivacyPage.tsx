import Section from "../components/Section/Section";
import SEO from "../components/SEO/SEO";

import styles from "./PrivacyPage.module.css";

function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for the portfolio website of Imke Paps."
      />

      <Section>
        <div className={styles.container}>
          <span className={styles.label}>LEGAL</span>

          <h1 className={styles.title}>Privacy Policy</h1>

          <p className={styles.intro}>
            This portfolio website respects your privacy and is designed to
            collect as little personal data as possible.
          </p>

          <div className={styles.card}>
            <h2>Data Collection</h2>

            <p>
              This website does not use advertising trackers, cookies for
              marketing purposes or third-party analytics services.
            </p>

            <p>
              No personal information is automatically collected while browsing
              this portfolio.
            </p>
          </div>

          <div className={styles.card}>
            <h2>External Links</h2>

            <p>
              This portfolio may contain links to external platforms such as
              GitHub or LinkedIn. Visiting those websites is subject to their
              own privacy policies and practices.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Contact</h2>

            <p>
              If you contact me through email or external platforms, your
              information will only be used to respond to your message and will
              never be shared with third parties.
            </p>
          </div>

          <p className={styles.footer}>Last updated — 2026</p>
        </div>
      </Section>
    </>
  );
}

export default PrivacyPage;
