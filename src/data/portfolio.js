export const portfolioContent = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Why me", href: "#why-me" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    name: "Aditya Chauhan",
    role: "React Developer",
    tagline: "I build recruiter-ready interfaces with strong visual hierarchy, motion that supports UX, and clean frontend structure.",
    introFrames: [
      "React interfaces with product depth",
      "Motion systems that support UX",
      "Frontend work built to impress fast",
    ],
    valuePoints: [
      "Responsive, high-conviction UI",
      "Fast interaction design",
      "Clean, maintainable component systems",
    ],
    stats: [
      { label: "Projects", value: "04" },
      { label: "Core Stack", value: "React" },
      { label: "Focus", value: "UI Engineering" },
    ],
    snapshot: {
      label: "Profile",
      title: "Frontend-focused builder with a strong eye for structure and presentation.",
      summary:
        "I enjoy building interfaces that feel polished, stay responsive across devices, and communicate clearly under real content.",
      highlights: [
        "B.Tech Computer Science student",
        "Focused on React, Tailwind CSS, and modern UI systems",
        "Open to internships and frontend development roles",
      ],
    },
    ctas: [
      { label: "View Projects", href: "#projects", variant: "primary" },
      { label: "Download Resume", href: "/resume.pdf", variant: "secondary", download: true },
      { label: "Contact Me", href: "#contact", variant: "ghost" },
    ],
  },
  about: {
    summary:
      "I am a frontend-focused Computer Science student who enjoys turning ideas into clean, high-performing interfaces. My work is centered on responsive layout systems, interaction design, and UI that feels deliberate instead of generic.",
    domain: "React and UI Engineering",
    goals:
      "I am currently looking for internships and collaborative opportunities where I can contribute to modern React products, improve product thinking, and work on frontend systems with real user impact.",
    interests: ["Design-to-code execution", "Component architecture", "Performance-minded UI", "Micro-interactions"],
    whyMe: [
      {
        title: "Results-driven",
        body: "I translate projects into outcomes, not just screens, so recruiters can quickly see what changed and why it matters.",
      },
      {
        title: "Frontend systems",
        body: "I build reusable React structures with Tailwind and Framer Motion so the UI stays maintainable as the portfolio grows.",
      },
      {
        title: "Presentation quality",
        body: "I pay attention to spacing, hierarchy, motion, and color so the work reads as intentional and polished on first pass.",
      },
    ],
  },
  projects: [
    {
      title: "frontend-Portfolio",
      category: "Personal Portfolio Website",
      problem:
        "Most student portfolios look generic and fail to communicate frontend quality, interaction depth, or implementation discipline within the first few seconds.",
      description:
        "A premium single-page frontend portfolio built from scratch with motion, layered visuals, a recruiter-focused project section, and polished dark/light theming.",
      techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      features: [
        "Sticky navigation, animated hero, and theme persistence",
        "Interactive project modal with clean recruiter-focused content hierarchy",
        "Custom cursor, scroll progress, and responsive motion-first UI",
      ],
      metrics: ["Production-ready Vite build", "Responsive single-page architecture", "Motion-driven frontend UX"],
      github: "https://github.com/Aditya-Chauhan24/frontend-Portfolio",
      demo: null,
      accent: "from-brand-500/20 via-cyan-450/10 to-transparent",
    },
    {
      title: "Portfolio Workspace",
      category: "Full-Stack Portfolio Platform",
      problem:
        "A portfolio that mixes content, UI, and form handling too tightly becomes harder to evolve and harder to deploy cleanly across frontend and backend surfaces.",
      description:
        "A split frontend/backend portfolio workspace with a Vite frontend and Express API so content and contact handling can evolve independently.",
      techStack: ["React", "Vite", "Express", "Node.js"],
      features: [
        "Separated frontend and backend workspaces for cleaner architecture",
        "API-driven content and contact form flow",
        "Deployment-oriented setup for frontend and backend hosting",
      ],
      metrics: ["Decoupled content layer", "API-backed contact flow", "Workspace-based project structure"],
      github: "https://github.com/Aditya-Chauhan24/Portfolio",
      demo: null,
      accent: "from-fuchsia-500/20 via-brand-500/10 to-transparent",
    },
    {
      title: "Dashboard UI Concept",
      category: "Frontend Interface Exercise",
      problem:
        "Dashboards often become visually noisy, which makes scanning metrics, hierarchy, and action areas harder for users.",
      description:
        "A frontend-focused dashboard concept created to improve visual hierarchy, reusable card patterns, and information density without clutter.",
      techStack: ["React", "Tailwind CSS", "Figma to Code", "UI Systems"],
      features: [
        "Reusable dashboard cards and visual summaries",
        "Balanced spacing for dense, data-first layouts",
        "Consistent system for cards, panels, and filters",
      ],
      metrics: ["Design-system minded", "Dashboard hierarchy", "Reusable UI primitives"],
      github: null,
      demo: null,
      accent: "from-emerald-400/20 via-brand-400/10 to-transparent",
    },
    {
      title: "Landing Page System",
      category: "Responsive Marketing UI",
      problem:
        "Marketing pages often overuse repetitive sections and generic visual patterns, which weakens first impression and conversion clarity.",
      description:
        "A landing-page style frontend exercise centered on modular sections, bold hierarchy, and cleaner storytelling across desktop and mobile layouts.",
      techStack: ["React", "Responsive UI", "Design Systems", "CSS"],
      features: [
        "Modular section layout with stronger visual rhythm",
        "Responsive content structure for product storytelling",
        "Focused typography and CTA placement for better scanning",
      ],
      metrics: ["Responsive layout thinking", "Clear conversion flow", "Frontend presentation quality"],
      github: null,
      demo: null,
      accent: "from-sky-500/20 via-indigo-500/10 to-transparent",
    },
  ],
  skills: [
    {
      title: "Languages",
      items: [
        { name: "JavaScript", level: 88 },
        { name: "Python", level: 74 },
        { name: "C", level: 68 },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML5 / CSS3", level: 94 },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", level: 70 },
        { name: "Express", level: 66 },
        { name: "MongoDB", level: 64 },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git & GitHub", level: 85 },
        { name: "Postman", level: 72 },
        { name: "Figma to Code", level: 82 },
      ],
    },
  ],
  achievements: [
    {
      year: "2026",
      title: "frontend-Portfolio",
      subtitle: "React + Vite + Tailwind + Framer Motion",
      description:
        "Built a premium recruiter-focused portfolio with motion design, a reusable component system, and theme persistence.",
    },
    {
      year: "2025",
      title: "Portfolio Workspace",
      subtitle: "React frontend + Express backend",
      description:
        "Built a split frontend/backend portfolio setup to separate UI concerns from content delivery and contact handling.",
    },
    {
      year: "2024",
      title: "Hackathons and Collaborative Builds",
      subtitle: "Team-based product iteration",
      description:
        "Worked on collaborative product ideas, rapid prototyping, and presenting usable interfaces under constrained timelines.",
    },
    {
      year: "2023",
      title: "B.Tech in Computer Science",
      subtitle: "Pranveer Singh Institute of Technology",
      description:
        "Started focused learning around programming fundamentals, web development, and problem solving with a frontend-first direction.",
    },
  ],
  contact: {
    heading: "If you need a frontend developer who can combine clean execution with strong presentation, let’s talk.",
    description:
      "I am open to internships, freelance opportunities, and product-focused frontend roles where polish, clarity, and speed matter.",
    email: "2k23.cs2313432@gmail.com",
    note: "Send a message and I will get back to you as soon as possible.",
    social: {
      github: "https://github.com/Aditya-Chauhan24",
      linkedin: "https://www.linkedin.com/in/aditya-chauhan-2bba3a329/",
      email: "mailto:adityachauhanjhansi@gmail.com",
    },
  },
};
