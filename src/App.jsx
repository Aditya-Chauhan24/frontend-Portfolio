import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedBackground from "./components/AnimatedBackground";
import ContactSection from "./components/ContactSection";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ScrollProgress from "./components/ScrollProgress";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import WhyMeSection from "./components/WhyMeSection";
import { portfolioContent } from "./data/portfolio";

const ProjectModal = lazy(() => import("./components/ProjectModal"));

const STORAGE_KEY = "portfolio-theme";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [activeProject, setActiveProject] = useState(null);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const sectionIds = portfolioContent.navigation.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = activeProject ? "hidden" : previousOverflow || "";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  const themeValue = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((currentValue) => (currentValue === "dark" ? "light" : "dark")),
    }),
    [theme]
  );

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#f4f7fb] text-slate-950 transition-colors duration-500 dark:bg-slate-975 dark:text-slate-50">
      <AnimatedBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar
        navigation={portfolioContent.navigation}
        activeSection={activeSection}
        theme={themeValue.theme}
        onToggleTheme={themeValue.toggleTheme}
      />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <HeroSection hero={portfolioContent.hero} />
        <AboutSection about={portfolioContent.about} />
        <WhyMeSection whyMe={portfolioContent.about.whyMe} />
        <ProjectsSection projects={portfolioContent.projects} onOpenProject={setActiveProject} />
        <SkillsSection skills={portfolioContent.skills} />
        <ExperienceSection achievements={portfolioContent.achievements} />
        <ContactSection contact={portfolioContent.contact} />
      </motion.main>
      <Footer navigation={portfolioContent.navigation} social={portfolioContent.contact.social} />
      <AnimatePresence>
        {activeProject ? (
          <Suspense fallback={null}>
            <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
          </Suspense>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
