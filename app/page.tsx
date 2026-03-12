"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .08 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.36 1.9-1.32 2.74-1.05 2.74-1.05.56 1.42.21 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.33 4.8-4.56 5.06.36.32.68.93.68 1.88 0 1.35-.01 2.43-.01 2.77 0 .27.18.6.69.5A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M6.94 8.5a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM5.45 9.8h2.98V19H5.45V9.8Zm4.75 0h2.86v1.26h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.62 2.05 3.62 4.73V19h-2.98v-4.24c0-1.01-.02-2.3-1.38-2.3-1.38 0-1.6 1.1-1.6 2.23V19H10.2V9.8Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.226 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163Zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038C23.986 15.668 24 15.259 24 12c0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://www.x.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    ),
  },
];

const projects = [
  {
    number: "01",
    title: "DevFlow",
    description:
      "A full-stack project management platform built for developer teams. Features real-time board updates, GitHub integration, role-based access control, and a clean dark-mode UI — all powered by Next.js and PostgreSQL via Prisma ORM.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    href: "#",
    image: "https://placehold.co/900x560/0f0202/ef4444?text=DevFlow",
  },
  {
    number: "02",
    title: "ShopSphere",
    description:
      "A high-performance e-commerce storefront with product filtering, cart management, Stripe payments, and an admin dashboard. Built with the MERN stack, optimised for Core Web Vitals and SEO.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    href: "#",
    image: "https://placehold.co/900x560/0f0202/ef4444?text=ShopSphere",
  },
  {
    number: "03",
    title: "ChatNova",
    description:
      "A real-time AI-assisted chat application with end-to-end encrypted rooms, typing indicators, file sharing, and an integrated GPT-powered assistant. Socket.IO on the backend with a sleek React frontend.",
    tags: ["React", "Socket.IO", "Express", "OpenAI API", "MongoDB"],
    href: "#",
    image: "https://placehold.co/900x560/0f0202/ef4444?text=ChatNova",
  },
];

const skillItems = [
  {
    label: "HTML",
    logo: "https://cdn.simpleicons.org/html5/ef4444",
  },
  {
    label: "CSS",
    logo: "https://cdn.simpleicons.org/css/ef4444",
  },
  {
    label: "JavaScript",
    logo: "https://cdn.simpleicons.org/javascript/ef4444",
  },
  {
    label: "TypeScript",
    logo: "https://cdn.simpleicons.org/typescript/ef4444",
  },
  {
    label: "ReactJS",
    logo: "https://cdn.simpleicons.org/react/ef4444",
  },
  {
    label: "Next.js",
    logo: "https://cdn.simpleicons.org/nextdotjs/ef4444",
  },
  {
    label: "Tailwind CSS",
    logo: "https://cdn.simpleicons.org/tailwindcss/ef4444",
  },
  {
    label: "Prisma ORM",
    logo: "https://cdn.simpleicons.org/prisma/ef4444",
  },
  {
    label: "MongoDB",
    logo: "https://cdn.simpleicons.org/mongodb/ef4444",
  },
];

export default function Home() {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [roleWord, setRoleWord] = useState("Developer");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleWord((currentWord) => (currentWord === "Developer" ? "Engineer" : "Developer"));
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  const handleCardMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const rotateY = ((mouseX / rect.width) * 2 - 1) * 6;
    const rotateX = -(((mouseY / rect.height) * 2 - 1) * 6);

    setTilt({ rotateX, rotateY });
  };

  const resetTilt = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <main className={`${inter.className} relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white`}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_38%,rgba(122,10,18,0.52),transparent_45%),linear-gradient(180deg,#0a0a0a_0%,#090909_70%,#070707_100%)]" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 text-center sm:space-y-7 lg:text-left"
          >
            <span className="inline-flex rounded-full border border-red-500/25 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-red-300/90">
              Welcome
            </span>

            <h1 className="text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
              <span className="block text-white">Building</span>
              <span className="block bg-gradient-to-b from-white via-red-400 to-red-800 bg-clip-text text-transparent">
                with
              </span>
              <span className="block bg-gradient-to-b from-red-300 to-red-900 bg-clip-text text-transparent">
                Intention
              </span>
            </h1>

            <p className="max-w-xl text-xl leading-10 text-slate-300/85">
              I&apos;m <span className="font-semibold text-white">Huzaifa Raheem</span>, a professional full-stack{" "}
              <span className="inline-flex h-[1.15em] min-w-[8.2rem] items-center overflow-hidden align-baseline">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleWord}
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="inline-block font-semibold text-white"
                  >
                    {roleWord}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              dedicated to building high-performance, user-centric web applications.
            </p>

            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-white/90 transition hover:border-red-400/45 hover:text-white sm:h-14 sm:w-14"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-2 lg:justify-start">
              <button
                type="button"
                className="rounded-2xl bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_12px_28px_rgba(220,38,38,0.35)]"
              >
                LET&apos;S COLLABORATE
              </button>
              <button
                type="button"
                className="rounded-2xl border border-white/18 bg-white/[0.03] px-8 py-4 text-sm font-black uppercase tracking-[0.08em] text-white"
              >
                GET RESUME
              </button>
            </div>
          </motion.div>

          <div className="[perspective:1200px]">
            <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetTilt}
            whileHover={{ scale: 1.015 }}
            style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformStyle: "preserve-3d" }}
            transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-black/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-md"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-sm font-medium text-slate-400">Portfolio.ts</span>
            </div>

            <pre className="overflow-x-auto px-4 py-5 text-[12px] leading-6 text-slate-300 sm:px-6 sm:text-[14px] sm:leading-7 lg:px-7 lg:text-[17px] lg:leading-8">
              <code>
                <span className="text-slate-500">const</span> <span className="text-red-400">developer</span> = {"{"}
                {"\n"}  <span className="text-slate-300">name</span>: <span className="text-rose-300">&apos;Huzaifa Raheem&apos;</span>,
                {"\n"}  <span className="text-slate-300">focus</span>: <span className="text-rose-300">&apos;Fullstack Mastery&apos;</span>,
                {"\n"}  <span className="text-slate-300">skills</span>: [
                {"\n"}    <span className="text-rose-300">&apos;NextJS&apos;</span>, <span className="text-rose-300">&apos;ReactJS&apos;</span>, <span className="text-rose-300">&apos;Tailwind CSS&apos;</span>,
                {"\n"}    <span className="text-rose-300">&apos;Prisma ORM&apos;</span>, <span className="text-rose-300">&apos;SEO&apos;</span>
                {"\n"}  ],
                {"\n"}  <span className="text-slate-300">passionate</span>: <span className="text-red-300">true</span>,
                {"\n"}  <span className="text-slate-300">motto</span>: <span className="text-rose-300">&quot;Build with Purpose&quot;</span>
                {"\n"}{"};"}
                {"\n"}
                {"\n"}<span className="text-red-400">developer</span>.showcase();
              </code>
            </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 sm:px-10 lg:pb-28 lg:pt-8">
        {/* Top badge */}
        <div className="mb-8 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-red-500/40 bg-red-500/15 text-red-400">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12Zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8Z" />
            </svg>
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-red-400">Discovery</span>
        </div>

        {/* Heading */}
        <h2 className="mb-14 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-white">About </span>
          <span className="bg-gradient-to-r from-red-400 to-red-700 bg-clip-text text-transparent">The Architect</span>
        </h2>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative border-l-2 border-red-600/70 pl-8"
          >
            <p className="text-lg font-semibold italic leading-9 text-slate-300/90">
              I&apos;m a Full-Stack Developer dedicated to engineering high-performance digital experiences.
              With a solid foundation in Computer Science, I specialize in building scalable applications
              using the MERN stack and Next.js. I bridge the gap between clean, optimized code and
              search engine visibility to ensure every project is not just built, but discovered.
            </p>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="flex w-full justify-center lg:justify-end"
          >
            <div className="group relative h-[320px] w-full max-w-[340px] overflow-hidden rounded-3xl border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.6)] sm:h-[380px] lg:h-[420px]">
              <Image
                src="/Images/image1.jpg"
                alt="Huzaifa Raheem"
                fill
                className="object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0"
                sizes="(max-width: 1023px) 340px, 340px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="relative overflow-hidden pb-24 pt-2 sm:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.2),transparent_58%),linear-gradient(180deg,rgba(30,6,7,0.5)_0%,rgba(10,10,10,0.3)_70%,rgba(10,10,10,0)_100%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <h2 className="mb-8 text-center text-4xl font-extrabold uppercase tracking-[0.08em] text-white sm:mb-10 sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-red-200 via-red-400 to-red-700 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="skills-marquee-mask rounded-2xl border border-red-500/20 bg-[#170708]/45 px-0 py-6 backdrop-blur-sm">
            <div className="skills-marquee-track">
              {[...skillItems, ...skillItems].map((item, index) => (
                <article
                  key={`${item.label}-${index}`}
                  className="mx-3 flex h-20 min-w-[240px] items-center gap-5 rounded-2xl border border-red-400/15 bg-gradient-to-b from-[#2b0b0c]/85 to-[#170708]/80 px-5"
                >
                  <img
                    src={item.logo}
                    alt={`${item.label} logo`}
                    className="h-9 w-9 object-contain"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-lg font-extrabold uppercase tracking-wide text-red-100">{item.label}</p>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red-300/55">Technology</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects Section ── */}
      <section id="projects" className="relative overflow-hidden pb-20 pt-4 sm:pb-28 sm:pt-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,rgba(122,10,18,0.3),transparent_50%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          {/* Section heading */}
          <div className="mb-14 flex items-center gap-4 sm:mb-18">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-red-500/40 bg-red-500/15 text-red-400">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M3 3h7v7H3V3Zm0 11h7v7H3v-7Zm11-11h7v7h-7V3Zm0 11h7v7h-7v-7Z" />
              </svg>
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-red-400">Work</span>
          </div>
          <h2 className="mb-16 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-white">Selected </span>
            <span className="bg-gradient-to-r from-red-400 to-red-700 bg-clip-text text-transparent">Projects</span>
          </h2>

          {/* Project list */}
          <div className="flex flex-col gap-24 sm:gap-32">
            {projects.map((project, i) => {
              const isEven = i % 2 !== 0;
              return (
                <motion.div
                  key={project.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className={`flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text side */}
                  <div className="flex w-full flex-col gap-6 lg:w-1/2">
                    <div className="flex items-center gap-5">
                      <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-red-600/60 bg-[#1a0405] text-xl font-black text-white sm:h-16 sm:w-16 sm:text-2xl">
                        {project.number}
                      </span>
                      <div className="h-[1.5px] flex-1 bg-gradient-to-r from-red-600/70 to-transparent" />
                    </div>

                    <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="text-base leading-8 text-slate-300/80 sm:text-lg">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-red-500/25 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-2 inline-flex w-fit items-center gap-2 rounded-2xl border border-red-500/30 bg-red-500/10 px-6 py-3 text-sm font-bold uppercase tracking-widest text-red-300 transition hover:border-red-400/60 hover:bg-red-500/20 hover:text-white"
                    >
                      View Project
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                        <path d="M13.22 19.03a.75.75 0 0 1 0-1.06l5.47-5.47H4.75a.75.75 0 0 1 0-1.5h13.94l-5.47-5.47a.75.75 0 1 1 1.06-1.06l6.75 6.75a.75.75 0 0 1 0 1.06l-6.75 6.75a.75.75 0 0 1-1.06 0Z" />
                      </svg>
                    </a>
                  </div>

                  {/* Browser mockup side */}
                  <div className="w-full lg:w-1/2">
                    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111] shadow-[0_24px_70px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-[1.02]">
                      {/* Browser chrome */}
                      <div className="flex items-center justify-between border-b border-white/10 bg-[#0d0d0d] px-4 py-2.5">
                        <div className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <div className="flex h-5 flex-1 mx-4 items-center rounded bg-white/5 px-3">
                          <span className="truncate text-[11px] text-slate-500">https://{project.title.toLowerCase()}.vercel.app</span>
                        </div>
                        <div className="w-12" />
                      </div>
                      {/* Screenshot */}
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          className="w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold tracking-widest text-white backdrop-blur-sm">
                            Tap to see
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
