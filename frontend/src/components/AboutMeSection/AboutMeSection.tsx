import Section from "../Section/Section";
import styles from "./AboutMeSection.module.css";

const values = [
  {
    title: "Curiosity & Growth",
    text: "Naturally curious and driven by persistence. I'm always looking to understand how things work, explore new technologies, and continuously improve through hands-on learning.",
  },
  {
    title: "Creativity & UX",
    text: "I enjoy finding creative ways to turn complex ideas into refined digital experiences. Technology should not only solve a problem, but also feel unique, engaging, and intuitive.",
  },
  {
    title: "Performance & Craftsmanship",
    text: "Clean code, scalable architecture, and attention to detail are key. I focus on building efficient solutions that function smoothly and feel polished from start to finish.",
  },
  {
    title: "Problem Solving",
    text: "I enjoy breaking down complex challenges into practical, structured solutions. Whether it's a technical obstacle or an abstract concept, I tackle it with patience and focus.",
  },
  {
    title: "Leadership & Organization",
    text: "Built on a strong foundation of communication, planning, and teamwork developed through both technical roles and direct customer-facing experience.",
  },
  {
    title: "Client Focus & Ownership",
    text: "I take full initiative to ensure the final result reflects the client's vision, bringing technical expertise to deliver reliable, high-quality results that create real value.",
  },
  {
    title: "Reliability",
    text: "A project is only successful when everything works seamlessly. I focus on building robust, fully operational solutions that stand up to real-world use.",
  },
];

function AboutMeSection() {
  return (
    <Section id="aboutMe">
      <div className={styles.container}>
        <p className={styles.label}>A LITTLE MORE ABOUT ME</p>

        <div className={styles.heading}>
          <h2>
            Creating scalable digital experiences with
            <span> a curious mind.</span>
          </h2>
        </div>

        <div className={styles.content}>
          <div className={styles.intro}>
            <p>
              I'm Imke, a fullstack developer focused on building modern web
              applications with clean architecture, refined user interfaces, and
              high performance.
            </p>
          </div>

          <div className={styles.story}>
            <p>
              What drives me is the intersection of technology, design, and
              problem-solving. I enjoy understanding the bigger picture while
              refining the smallest details that make a product feel intentional
              and reliable.
            </p>

            <p>
              I'm curious by nature and don't stop once code simply works.
              I constantly question existing solutions, test new technologies,
              and push myself through ambitious projects and continuous learning.
            </p>

            <p>
              For me, development goes beyond writing code—it's about building
              thoughtful, functional, and meaningful solutions from start to finish.
            </p>
          </div>
        </div>

        <div className={styles.values}>
          {values.map((value) => (
            <article key={value.title} className={styles.value}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default AboutMeSection;