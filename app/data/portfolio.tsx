import type { ReactNode } from "react";

export type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  intro: string;
  features: string[];
  tags: string[];
  liveUrl: string;
  displayUrl: string;
  images: string[];
  timeline: string;
  role: string;
  outcome: string;
  testCredentials: {
    gmail: string;
    password: string;
  };
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/fxmovonline-art",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .08 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.36 1.9-1.32 2.74-1.05 2.74-1.05.56 1.42.21 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.33 4.8-4.56 5.06.36.32.68.93.68 1.88 0 1.35-.01 2.43-.01 2.77 0 .27.18.6.69.5A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/huzaifa-raheem-8628643b2/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M6.94 8.5a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM5.45 9.8h2.98V19H5.45V9.8Zm4.75 0h2.86v1.26h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.62 2.05 3.62 4.73V19h-2.98v-4.24c0-1.01-.02-2.3-1.38-2.3-1.38 0-1.6 1.1-1.6 2.23V19H10.2V9.8Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/14axp3EsSWH/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/huzaifaraheemawan?igsh=N2MwZTh6cHV6MG8%3D",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.226 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163Zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038C23.986 15.668 24 15.259 24 12c0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/just_Huzaifa_",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    ),
  },
];

const contactSocialOrder = ["GitHub", "LinkedIn", "X", "Instagram", "Facebook"];

export const contactSocialLinks = contactSocialOrder
  .map((label) => socialLinks.find((item) => item.label === label))
  .filter((item): item is SocialLink => Boolean(item));

export const projects: Project[] = [
  {
    slug: "rankiq",
    number: "01",
    title: "RankIQ",
    headline: "SEO operations platform built for faster analysis and sharper content decisions.",
    description:
      "A specialized toolkit designed for SEO professionals to automate technical tasks like schema markup generation and keyword analysis. Built to bridge technical SEO and web development, this app reflects strong SEO knowledge and data-driven product engineering.",
    intro:
      "RankIQ turns repetitive SEO work into a focused workflow. The product centers research, content planning, and technical checks in a single interface so teams can move from analysis to execution without bouncing between tools.",
    features: [
      "Automated schema markup generation for article and page templates.",
      "Keyword analysis flows designed around intent, difficulty, and ranking opportunity.",
      "Clean dashboard structure for fast navigation between research and implementation.",
      "Production-ready frontend with strong emphasis on clarity and technical trust.",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    liveUrl: "https://rank-iq.vercel.app",
    displayUrl: "rank-iq.vercel.app",
    images: ["/images/project1.png", "/images/project1a.png", "/images/project1b.png"],
    timeline: "2025",
    role: "Product Design + Full-Stack Development",
    outcome:
      "The result is a focused SEO product experience that communicates depth without becoming cluttered, combining technical utility with a polished interface.",
    testCredentials: {
      gmail: "test@gmail.com",
      password: "12345678",
    },
  },
  {
    slug: "ai-flashgen",
    number: "02",
    title: "AI-FlashGen",
    headline: "AI study workflow that turns dense notes into usable flashcards in seconds.",
    description:
      "An AI-powered educational SaaS tool that generates study flashcards from dense notes using OpenAI and Gemini APIs. Designed with modern UX principles, it helps learners build interactive study modules and highlights AI integration with responsive frontend execution.",
    intro:
      "AI-FlashGen was designed to remove the manual effort from preparing revision material. Users can paste or upload heavy notes, trigger AI generation, and immediately work with cleaner study cards organized for repeat learning.",
    features: [
      "Flashcard generation using modern LLM integrations for educational workflows.",
      "Responsive dashboard patterns that keep long-form content readable and actionable.",
      "SaaS-oriented UX with clear onboarding and conversion-friendly interaction points.",
      "Structured study modules that make dense information easier to review over time.",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    liveUrl: "https://ai-flashcards-red.vercel.app",
    displayUrl: "ai-flashcards-red.vercel.app",
    images: ["/images/project2.png", "/images/project2a.png", "/images/project2b.png"],
    timeline: "2025",
    role: "AI Integration + Frontend Engineering",
    outcome:
      "The product demonstrates how AI can be applied practically, with an interface that stays approachable even when the workflow is technically complex.",
    testCredentials: {
      gmail: "test@gmail.com",
      password: "12345678",
    },
  },
  {
    slug: "smartnotes-pro",
    number: "03",
    title: "SmartNotes Pro",
    headline: "Task and notes system built for structured work, secure data, and daily momentum.",
    description:
      "A full-stack task management application built with Next.js, Prisma, and PostgreSQL with secure authentication and real-time data handling. It helps users organize daily workflows through a clean, minimalist interface and demonstrates advanced CRUD and backend integration skills.",
    intro:
      "SmartNotes Pro focuses on practical organization. The experience is intentionally minimal, letting task creation, note management, and account-based persistence stay fast and dependable across sessions.",
    features: [
      "Authentication-aware workspace for protected personal productivity flows.",
      "Full CRUD architecture backed by Prisma and PostgreSQL.",
      "Minimal UI language that keeps priority on writing, planning, and execution.",
      "Reliable backend integration for persistent notes and task states.",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    liveUrl: "https://my-notes-app-real.vercel.app",
    displayUrl: "my-notes-app-real.vercel.app",
    images: ["/images/project3.png", "/images/project3a.png", "/images/project3b.png"],
    timeline: "2025",
    role: "Full-Stack Architecture + Backend Integration",
    outcome:
      "The finished product shows disciplined full-stack implementation: secure flows, clear information hierarchy, and a UI that stays efficient under real use.",
    testCredentials: {
      gmail: "test@gmail.com",
      password: "12345678",
    },
  },
];
