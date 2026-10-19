import { SiteNav } from "./components/site-nav";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  MilestonesSection,
  ProjectsSection,
  SiteFooter,
  SkillsSection,
} from "./components/portfolio-sections";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteNav />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <MilestonesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
