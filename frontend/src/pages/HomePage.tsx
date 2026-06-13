import Hero from "../components/Hero/Hero";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import AboutSection from "../components/AboutSection/AboutSection";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";

import FadeIn from "../components/FadeIn/FadeIn";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import SEO from "../components/SEO/SEO";

function HomePage() {
  return (
    <>
      <SEO
      title="Fullstack Developer"
      description="Portfolio van Imke Paps, fullstack developer gespecialiseerd in React, TypeScript en moderne web experiences."
      keywords={[
        "fullstack developer",
        "react developer",
        "typescript developer",
        "web developer belgium",
        "creative developer",
        "portfolio",
      ]}
    />
      <Hero />

      <FadeIn>
        <ProjectsSection />
      </FadeIn>

      <FadeIn delay={0.1}>
        <AboutSection />
      </FadeIn>

      <FadeIn delay={0.15}>
        <SkillsSection />
      </FadeIn>

      <FadeIn delay={0.2}>
        <ExperienceSection />
      </FadeIn>

      <FadeIn delay={0.2}>
        <ContactSection />
      </FadeIn>

      <Footer />
    </>
  );
}

export default HomePage;
