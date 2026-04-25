# Frontend Portfolio

A recruiter-focused personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion. The site is designed to present frontend skills through stronger visual hierarchy, motion, and clearer project storytelling instead of a resume-style layout.

Live site: [adityachauhan.co.in](https://www.adityachauhan.co.in/)

## Overview

This project is a single-page portfolio experience for showcasing frontend work, skills, and contact details in a more polished and product-oriented format. The content is driven from a central data file so project cards, section copy, navigation, and profile details can be updated without rewriting component logic.

## Features

- Sticky navigation with active section tracking
- Light and dark theme persistence using local storage
- Motion-first hero section and animated page transitions
- Recruiter-focused project cards with modal-based project details
- Custom cursor and scroll progress indicator
- Responsive section layout for mobile and desktop
- Centralized portfolio content in `src/data/portfolio.js`

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion
- Lucide React

## Project Sections

- Hero
- About
- Why Me
- Projects
- Skills
- Experience
- Contact

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Create a production build:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

## Content Updates

Most portfolio content is managed from:

```text
src/data/portfolio.js
```

Use that file to update:

- Hero text and CTA buttons
- About and Why Me content
- Project cards and modal content
- Skills and achievements
- Contact and social links

Project thumbnails are read from each project's `thumbnail` field. For images placed in `public/images`, use paths like:

```js
thumbnail: "/images/Frontend-Portfolio.png"
```

## Folder Structure

```text
frontend-Portfolio/
├── public/
│   ├── images/
│   │   └── Frontend-Portfolio.png
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── AnimatedBackground.jsx
│   │   ├── ContactSection.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── SectionShell.jsx
│   │   ├── SkillsSection.jsx
│   │   └── WhyMeSection.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## Deployment

This project is configured for static frontend deployment and includes `vercel.json` for Vercel-based hosting.

To deploy a production-ready version:

```bash
npm run build
```

## Author

Aditya Chauhan  
Frontend Developer
