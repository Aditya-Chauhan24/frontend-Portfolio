function createProjectThumbnail({ eyebrow, title, subtitle, colors }) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 720" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colors[0]}" />
          <stop offset="100%" stop-color="${colors[1]}" />
        </linearGradient>
        <linearGradient id="panel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.92)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0.68)" />
        </linearGradient>
      </defs>
      <rect width="1200" height="720" rx="48" fill="url(#bg)" />
      <circle cx="1040" cy="110" r="120" fill="rgba(255,255,255,0.12)" />
      <circle cx="180" cy="620" r="160" fill="rgba(15,23,42,0.12)" />
      <rect x="72" y="72" width="1056" height="576" rx="36" fill="rgba(15,23,42,0.18)" />
      <rect x="108" y="110" width="984" height="500" rx="28" fill="url(#panel)" />
      <rect x="144" y="146" width="220" height="34" rx="17" fill="rgba(37,99,235,0.14)" />
      <text x="172" y="168" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#1d4ed8" letter-spacing="2">${eyebrow}</text>
      <text x="144" y="246" font-family="Arial, sans-serif" font-size="58" font-weight="700" fill="#0f172a">${title}</text>
      <text x="144" y="298" font-family="Arial, sans-serif" font-size="26" font-weight="500" fill="#334155">${subtitle}</text>
      <rect x="144" y="354" width="420" height="150" rx="24" fill="rgba(15,23,42,0.92)" />
      <rect x="600" y="354" width="208" height="150" rx="24" fill="rgba(255,255,255,0.9)" />
      <rect x="844" y="354" width="208" height="150" rx="24" fill="rgba(255,255,255,0.9)" />
      <rect x="144" y="538" width="180" height="28" rx="14" fill="rgba(37,99,235,0.18)" />
      <rect x="344" y="538" width="180" height="28" rx="14" fill="rgba(6,182,212,0.18)" />
      <rect x="544" y="538" width="180" height="28" rx="14" fill="rgba(236,72,153,0.16)" />
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

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
      { label: "Production-grade Projects", value: "4+" },
      { label: "Reusable Components", value: "14+" },
      { label: "Lighthouse Performance", value: "95+" },
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
      valueProposition: "A recruiter-focused portfolio that sells frontend skill through structure, motion, and presentation quality in the first few seconds.",
      summary:
        "A premium single-page portfolio built from scratch with layered visuals, theme persistence, interactive sections, and a stronger storytelling system for project credibility.",
      techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      features: [
        "Sticky navigation, animated hero, and theme persistence",
        "Interactive project modal with clean recruiter-focused content hierarchy",
        "Custom cursor, scroll progress, and responsive motion-first UI",
      ],
      role: "Owned the full design-to-code workflow: UI direction, component architecture, responsive implementation, motion system, and content hierarchy.",
      status: "Live and iterating",
      timeline: "2026",
      architecture:
        "Structured as a Vite + React single-page application with reusable section shells, theme persistence through local storage, and motion layers separated into focused components for maintainability.",
      challenges: [
        "Avoiding a generic portfolio layout while keeping the experience readable for recruiters",
        "Balancing animation richness with performance and mobile responsiveness",
        "Creating project storytelling that feels product-oriented instead of resume-like",
      ],
      metrics: ["Production-ready Vite build", "Responsive single-page architecture", "Motion-driven frontend UX"],
      github: "https://github.com/Aditya-Chauhan24/frontend-Portfolio",
      demo: {
        active: true,
        href: "https://www.adityachauhan.co.in/",
      },
      accent: "from-brand-500/20 via-cyan-450/10 to-transparent",
      thumbnail: "/images/Frontend-Portfolio.png",
      visual: {
        label: "Hero Visual",
        kicker: "Portfolio System",
        headline: "Structured sections, richer theming, and recruiter-first storytelling.",
        supportingText: "The hero card mirrors a polished landing experience rather than a typical student portfolio page.",
        stats: [
          { value: "7", label: "Sections" },
          { value: "2", label: "Themes" },
        ],
      },
    },
    {
      title: "Portfolio Workspace",
      category: "Full-Stack Portfolio Platform",
      valueProposition: "A split frontend/backend portfolio workspace that keeps UI delivery independent from content and contact handling.",
      summary:
        "A workspace-based portfolio platform with a Vite frontend and Express API, designed to make deployment, content evolution, and form handling cleaner over time.",
      techStack: ["React", "Vite", "Express", "Node.js"],
      features: [
        "Separated frontend and backend workspaces for cleaner architecture",
        "API-driven content and contact form flow",
        "Deployment-oriented setup for frontend and backend hosting",
      ],
      role: "Designed the workspace split, implemented the frontend structure, and integrated the API-driven contact/content flow.",
      status: "Built and documented",
      timeline: "2025",
      architecture:
        "Separated into frontend and backend workspaces so the UI can ship independently while API routes handle content and communication concerns behind a clean boundary.",
      challenges: [
        "Keeping the project simple enough for a portfolio while still showing real separation of concerns",
        "Designing an API-backed contact flow without over-engineering the stack",
        "Making deployment paths clear for both client and server surfaces",
      ],
      metrics: ["Decoupled content layer", "API-backed contact flow", "Workspace-based project structure"],
      github: "https://github.com/Aditya-Chauhan24/Portfolio",
      demo: {
        active: false,
        href: "",
      },
      accent: "from-fuchsia-500/20 via-brand-500/10 to-transparent",
      thumbnail: createProjectThumbnail({
        eyebrow: "Workspace",
        title: "Portfolio Workspace",
        subtitle: "Frontend and API split cleanly",
        colors: ["#a855f7", "#356fff"],
      }),
      visual: {
        label: "System View",
        kicker: "Workspace Split",
        headline: "Frontend and backend surfaces separated for cleaner scaling.",
        supportingText: "The visual focuses on project boundaries, content flow, and backend-backed interactions.",
        stats: [
          { value: "2", label: "Apps" },
          { value: "API", label: "Contact Flow" },
        ],
      },
    },
    {
      title: "Dashboard UI Concept",
      category: "Frontend Interface Exercise",
      valueProposition: "A cleaner dashboard concept built to improve scanability, card consistency, and dense information hierarchy.",
      summary:
        "A frontend UI exercise focused on reusable dashboard modules, stronger spacing discipline, and information density without visual clutter.",
      techStack: ["React", "Tailwind CSS", "Figma to Code", "UI Systems"],
      features: [
        "Reusable dashboard cards and visual summaries",
        "Balanced spacing for dense, data-first layouts",
        "Consistent system for cards, panels, and filters",
      ],
      role: "Handled visual hierarchy, reusable card composition, layout implementation, and component-level UI consistency.",
      status: "Concept build",
      timeline: "2025",
      architecture:
        "Built around reusable dashboard cards, summary panels, and a repeatable surface system that can scale into a larger admin interface.",
      challenges: [
        "Reducing visual noise while keeping a data-heavy interface expressive",
        "Establishing clear card hierarchy without relying on excessive decoration",
        "Maintaining consistency across panels, summaries, and action areas",
      ],
      metrics: ["Design-system minded", "Dashboard hierarchy", "Reusable UI primitives"],
      github: null,
      demo: {
        active: false,
        href: "",
      },
      accent: "from-emerald-400/20 via-brand-400/10 to-transparent",
      thumbnail: createProjectThumbnail({
        eyebrow: "Dashboard",
        title: "Dashboard UI",
        subtitle: "Scan-friendly metrics and cards",
        colors: ["#10b981", "#38bdf8"],
      }),
      visual: {
        label: "Dashboard Preview",
        kicker: "UI Hierarchy",
        headline: "Dense information blocks with calmer scanning behavior.",
        supportingText: "A concept-driven visual focused on cards, filters, and summary modules.",
        stats: [
          { value: "12+", label: "UI Blocks" },
          { value: "Dense", label: "Layout Mode" },
        ],
      },
    },
    {
      title: "Landing Page System",
      category: "Responsive Marketing UI",
      valueProposition: "A modular landing page system designed for better first impression, scanning flow, and CTA clarity.",
      summary:
        "A marketing-style frontend exercise centered on modular storytelling sections, responsive rhythm, and clearer visual conversion paths.",
      techStack: ["React", "Responsive UI", "Design Systems", "CSS"],
      features: [
        "Modular section layout with stronger visual rhythm",
        "Responsive content structure for product storytelling",
        "Focused typography and CTA placement for better scanning",
      ],
      role: "Defined the section system, responsive layout rules, and presentation layer for content-first storytelling.",
      status: "UI exercise",
      timeline: "2024",
      architecture:
        "Organized as a modular page system with repeatable section patterns, responsive layout rules, and consistent CTA placement to support storytelling.",
      challenges: [
        "Avoiding repetitive landing-page patterns while keeping the flow familiar",
        "Creating clear visual rhythm across desktop and mobile breakpoints",
        "Balancing strong typography with readable supporting content",
      ],
      metrics: ["Responsive layout thinking", "Clear conversion flow", "Frontend presentation quality"],
      github: null,
      demo: {
        active: false,
        href: "",
      },
      accent: "from-sky-500/20 via-indigo-500/10 to-transparent",
      thumbnail: createProjectThumbnail({
        eyebrow: "Landing Page",
        title: "Marketing System",
        subtitle: "Responsive storytelling layout",
        colors: ["#0ea5e9", "#6366f1"],
      }),
      visual: {
        label: "Landing Page Mock",
        kicker: "Story Flow",
        headline: "Modular sections arranged for stronger conversion rhythm.",
        supportingText: "The composition highlights CTA placement, typography, and visual pacing across breakpoints.",
        stats: [
          { value: "Mobile", label: "Responsive" },
          { value: "CTA", label: "Optimized" },
        ],
      },
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
    email: "adityachauhanjhansi@gmail.com",
    note: "Send a message and I will get back to you as soon as possible.",
    social: {
      github: "https://github.com/Aditya-Chauhan24",
      linkedin: "https://www.linkedin.com/in/aditya-chauhan-2bba3a329/",
      email: "mailto:adityachauhanjhansi@gmail.com",
    },
  },
};
