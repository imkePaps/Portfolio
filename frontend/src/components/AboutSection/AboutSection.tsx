import Section from "../Section/Section";

import styles from "./AboutSection.module.css";

const pillars = [
  {
    title: "Attention to Detail",

    description:
      "I care deeply about creating polished and reliable products, always refining the smallest details to improve both functionality and user experience.",
  },

  {
    title: "Driven by Challenges",

    description:
      "I enjoy solving complex problems and continuously pushing myself to grow through new technologies, ambitious projects and hands-on learning.",
  },

  {
    title: "Leadership & Organization",

    description:
      "Strong foundation in communication, planning and team-oriented environments developed through both technical and customer-facing roles.",
  },

  {
    title: "Communication & Collaboration",

    description:
      "Experienced in working with teams, customers and stakeholders to translate ideas into structured and effective solutions.",
  },
  {
    title: "Continuous Growth",

    description:
      "Driven by curiosity and persistence, always looking to improve through new challenges, modern technologies and hands-on experience.",
  },
  {
    title: "Ownership",

    description:
      "Motivated to take initiative, refine ideas and stay committed to delivering high-quality results from start to finish.",
  },
];

function AboutSection() {
  return (
    <Section id="about">
      <div className={styles.container}>
        <p className={styles.label}>ABOUT</p>

        <h2 className={styles.title}>
          Creating scalable digital experiences with a focus on performance,
          clean architecture and refined user interfaces.
        </h2>

        <div className={styles.text}>
          <p>
            I'm a fullstack developer passionate about creating modern web
            applications that combine robust backend systems with intuitive and
            polished frontend experiences.
          </p>

          <p>
            My expertise spans React frontend engineering, scalable backend
            development and building maintainable digital products focused on
            performance, reliability and long-term scalability.
          </p>
        </div>

        <div className={styles.cards}>
          {pillars.map((pillar) => (
            <div key={pillar.title} className={styles.card}>
              <span className={styles.glow} />

              <h3>{pillar.title}</h3>

              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default AboutSection;
