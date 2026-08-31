import Section from "../Section/Section";

import styles from "./AboutMeSection.module.css";

const values = [
  {
    title: "Curiosity",
    text: "I'm naturally curious and always want to understand how and why things work. That curiosity pushes me to explore new technologies, ask better questions and keep learning along the way.",
  },

  {
    title: "Creativity",
    text: "I enjoy looking beyond the obvious and finding creative ways to turn ideas into digital experiences. I believe technology should not only solve a problem, but also create something that feels unique and engaging.",
  },

  {
    title: "Growth",
    text: "Every project is an opportunity to learn something new, challenge myself and become better at what I do. I'm always looking for ways to improve my skills, my approach and the quality of what I build.",
  },

  {
    title: "Performance",
    text: "I care about creating experiences that work efficiently and smoothly, not just ones that look good. Clean code, thoughtful architecture and performance are important to me because a great experience should feel effortless to use.",
  },

  {
    title: "Craftsmanship",
    text: "I pay attention to the details that bring a digital experience together, from the way something functions to how it looks and feels. My goal is to create work that feels polished, intentional and something both the client and I can be proud of.",
  },

  {
    title: "Client Focus",
    text: "I want the final result to reflect what the client actually had in mind, while also bringing my own technical and creative perspective to the table. Understanding the goal behind a project helps me build something that is not only functional, but genuinely useful and valuable.",
  },

  {
    title: "Reliability",
    text: "For me, a project is only successful when everything works as it should. I care about building reliable, fully operational solutions that can be trusted in the real world, not just something that looks good in a demo.",
  },

  {
    title: "Problem Solving",
    text: "I enjoy breaking down complex problems and finding practical solutions that make sense. Whether it's a technical challenge or figuring out how to turn an idea into reality, I approach problems with patience, structure and persistence.",
  },
];

function AboutMeSection() {
  return (
    <Section id="about-me">
      <div className={styles.container}>
        <p className={styles.label}>A LITTLE MORE ABOUT ME</p>

        <div className={styles.heading}>
          <h2>
            Behind the code is
            <span> a curious mind.</span>
          </h2>
        </div>

        <div className={styles.content}>
          <div className={styles.intro}>
            <p>
              I'm Imke, a fullstack developer who genuinely enjoys figuring
              things out, learning new things and turning ideas into something
              tangible.
            </p>
          </div>

          <div className={styles.story}>
            <p>
              What drives me is the combination of technology, creativity and
              problem-solving. I like understanding the bigger picture, but I
              also enjoy getting lost in the details that make a product feel
              polished and intentional.
            </p>

            <p>
              I'm not someone who wants to stop learning once something works.
              I'm curious by nature, and that curiosity pushes me to explore
              new technologies, question existing solutions and continuously
              improve the way I build.
            </p>

            <p>
              For me, development is not just about writing code. It's about
              creating something useful, thoughtful and meaningful and
              enjoying the process along the way.
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

