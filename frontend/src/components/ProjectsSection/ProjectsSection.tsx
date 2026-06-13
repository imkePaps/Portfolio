import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import Section from "../Section/Section";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectsSection.module.css";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

function ProjectsSection() {
  return (
    <Section id="projects">
      <div className={styles.header}>
        <p>PROJECTS</p>
        <h2>Selected work</h2>

        {/* navigation buttons */}
        <div className={styles.controls}>
          <button className={`swiper-prev ${styles.prev}`}>←</button>
          <button className={`swiper-next ${styles.next}`}>→</button>
        </div>

        <span className={styles.blur} />
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <Link to={`/projects/${project.slug}`}>
              <ProjectCard
                title={project.title}
                year={project.year}
                description={project.description}
                tech={project.technologies.slice(0, 3)}
                image={project.images?.[0]}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}

export default ProjectsSection;