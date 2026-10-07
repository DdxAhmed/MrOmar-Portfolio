import { useEffect, useState } from "react";
import { sections, experiences, projects, skills, achievements, socials } from "./data/portfolioData";
import { ScrollProgressBar } from "./components/common/ScrollProgressBar";
import { Toast } from "./components/common/Toast";
import { Preloader } from "./components/common/Preloader";
import { Header } from "./components/layout/Header";
import { LeftRailGuide } from "./components/layout/LeftRailGuide";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { MarqueeBanner } from "./components/sections/MarqueeBanner";
import { AboutSection } from "./components/sections/AboutSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { LearningSection } from "./components/sections/LearningSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProofSection } from "./components/sections/ProofSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Scroll Progress listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const current = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, current)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for Active Section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.1, 0.3] },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Copy email with feedback toast
  const handleCopyEmail = () => {
    const email = "omarrmohamedd05@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setToastMessage("Email copied to clipboard! 📋");
      setTimeout(() => setToastMessage(null), 3000);
    });
  };

  return (
    <>
      <Preloader />

      <ScrollProgressBar progress={scrollProgress} />

      <Header sections={sections} activeSection={activeSection} />

      <LeftRailGuide sections={sections} activeSection={activeSection} />

      <HeroSection />

      <MarqueeBanner />

      <AboutSection />

      <ExperienceSection experiences={experiences} />

      <LearningSection />

      <SkillsSection skills={skills} />

      <ProofSection achievements={achievements} />

      <ProjectsSection projects={projects} />

      <ContactSection socials={socials} onCopyEmail={handleCopyEmail} />

      <Footer />

      <Toast message={toastMessage} />
    </>
  );
}

export default App;
