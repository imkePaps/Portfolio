import Section from "../Section/Section";

import styles from "./ExperienceSection.module.css";

const experiences = [
  {
    year: "2024 - 2026",

    role: "Fullstack Development Student",

    company: "PXL Hasselt",

    description:
      "Focused on fullstack development, scalable systems and modern web technologies through hands-on projects and software engineering studies.",

    tech: ["React", "Vite", ".NET", "HTML", "CSS", "SQL"],
  },

  {
    year: "2025 - 2026",

    role: "Frontend Developer Intern",

    company: "Internship Hamofa Brand Builders",

    description:
      "Focused on interactive frontend development, reusable component systems and animation-driven interfaces using modern technologies, while also building backend systems, administrative tools and custom integrations.",

    tech: ["Laravel", "Php", "Blade", "Git"],
  },
  {
    year: "2023 - 2024",

    role: "Web Design & Digital Media Study",

    company: "CVO",

    description:
      "Built foundations in UI design, responsive web development and digital content creation.",

    tech: ["HTML", "CSS", "Adobe Creative Cloud", "Photoshop"],
  },
  {
    year: "2023 - 2024",

    role: "Customer Service & Administration",

    company: "Aquacare",

    description:
      "Developed strong communication, planning and organizational skills in a fast-paced customer-focused environment.",

    tech: ["Customer Support", "Planning", "Administration"],
  },

  {
    year: "2023",

    role: "Assistant Manager",

    company: "LASE",

    description:
      "Supported operations, event organization and team coordination while contributing to marketing and internal processes.",

    tech: ["Leadership", "Marketing", "Organization"],
  },

  {
    year: "2022",

    role: "Payroll Assistant",

    company: "Liantis",

    description:
      "Handled administrative workflows, payroll-related processing and professional client communication.",

    tech: ["Administration", "Communication", "Payroll", "Social legislation"],
  },

  {
    year: "2020 - 2021",

    role: "Team Coach Student",

    company: "Syntra",

    description:
      "Guided and supported youth teams while strengthening leadership, communication and coaching skills.",

    tech: ["Leadership", "Coaching", "Communication"],
  },
];

function ExperienceSection() {
  return (
    <Section id="experience">
      <div className={styles.header}>
        <p>EXPERIENCE</p>

        <h2>Professional journey</h2>

        <p className={styles.description}>
          A selection of professional work and continuous learning.
        </p>
      </div>

      <div className={styles.timeline}>
        {experiences.map((item) => (
          <div key={item.year + item.role} className={styles.item}>
            <div className={styles.left}>
              <span className={styles.year}>{item.year}</span>

              <span className={styles.dot} />
            </div>

            <div className={styles.content}>
              <span className={styles.company}>{item.company}</span>

              <h3>{item.role}</h3>

              <p>{item.description}</p>

              <div className={styles.tech}>
                {item.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default ExperienceSection;
