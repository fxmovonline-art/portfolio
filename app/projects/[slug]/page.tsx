import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/portfolio";
import ProjectImageSlider from "../../components/ProjectImageSlider";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Huzaifa Raheem",
    };
  }

  return {
    title: `${project.title} | Huzaifa Raheem`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="top" className="relative min-h-screen overflow-hidden bg-[#081018] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(220,38,38,0.17),transparent_24%),radial-gradient(circle_at_75%_15%,rgba(255,255,255,0.06),transparent_18%),linear-gradient(180deg,#091219_0%,#071016_48%,#070b11_100%)]" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-14 sm:px-10 lg:pb-24 lg:pt-18">
        <div className="mb-10 flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-300/75">
          <Link href="/" className="transition hover:text-white">
            home
          </Link>
          <span>/</span>
          <Link href="/#projects" className="transition hover:text-white">
            projects
          </Link>
          <span>/</span>
          <span className="text-white">{project.title.toLowerCase()}</span>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full border border-red-500/25 bg-red-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.35em] text-red-300/85">
              Case Study {project.number}
            </span>
            <h1 className="mt-7 text-5xl font-extrabold leading-[0.95] tracking-tight text-red-500 sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="mt-4 text-2xl font-semibold leading-snug text-white sm:text-3xl">
              {project.headline}
            </p>
            <p className="mt-6 text-lg leading-9 text-slate-300/78">
              {project.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#ff4637] px-7 py-4 text-sm font-black uppercase tracking-[0.1em] text-white shadow-[0_14px_30px_rgba(255,70,55,0.28)]"
              >
                Visit Site
              </a>
              <Link
                href="/#projects"
                className="rounded-2xl border border-white/14 bg-white/[0.04] px-7 py-4 text-sm font-black uppercase tracking-[0.1em] text-white/90 transition hover:border-red-400/45 hover:text-white"
              >
                Back to Projects
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/12 bg-white/[0.03] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.42)] backdrop-blur-sm sm:p-6 lg:p-8">
            <ProjectImageSlider images={project.images} title={project.title} />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-sm sm:p-10">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{project.title} - Huzaifa Raheem Portfolio</h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-slate-300/78">
              <div>
                <p className="mb-2 text-2xl font-bold text-white">Introduction:</p>
                <p>{project.intro}</p>
              </div>

              <div>
                <p className="mb-3 text-2xl font-bold text-white">Features:</p>
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-red-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-3 text-2xl font-bold text-white">Technologies Used:</p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-red-400/25 bg-red-500/10 p-5">
                <p className="mb-3 text-xl font-bold text-white">Project Test Credentials:</p>
                <p className="text-base leading-8 text-slate-100/95">
                  If anyone wants to test this project, use:
                </p>
                <p className="mt-2 text-base leading-8 text-slate-100/95">gmail: {project.testCredentials.gmail}</p>
                <p className="text-base leading-8 text-slate-100/95">Password: {project.testCredentials.password}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-red-500/18 bg-gradient-to-br from-[#1a0a0b]/90 to-[#0d1319]/90 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.38)]">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-red-300/75">Project Outcome</p>
              <p className="mt-5 text-xl leading-9 text-white/90">{project.outcome}</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-red-300/75">Quick Facts</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">Project</p>
                  <p className="mt-2 text-xl font-bold text-white">{project.title}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">Live URL</p>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-xl font-bold text-white transition hover:text-red-300"
                  >
                    {project.displayUrl}
                  </a>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">Focus</p>
                  <p className="mt-2 text-xl font-bold text-white">UX, Structure, Performance</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">Delivery</p>
                  <p className="mt-2 text-xl font-bold text-white">Responsive Web Product</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
