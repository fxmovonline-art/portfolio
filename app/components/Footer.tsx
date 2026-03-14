import Link from "next/link";
import { contactSocialLinks } from "../data/portfolio";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-red-500/20 bg-[#07090d] pb-10 pt-18 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(239,68,68,0.16),transparent_34%),radial-gradient(circle_at_80%_100%,rgba(185,28,28,0.18),transparent_36%),linear-gradient(180deg,rgba(10,10,10,0)_0%,rgba(8,9,13,0.96)_45%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm lg:flex lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.34em] text-red-300/75">Build Something Sharp</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Need a product experience that looks refined and performs with intent?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-300/78 sm:text-lg">
              I design and build modern web products with strong UX, structured frontend systems, and clean full-stack execution.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 lg:mt-0 lg:justify-end">
            <Link
              href="/#contact"
              className="rounded-2xl bg-gradient-to-r from-red-600 to-red-500 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_16px_32px_rgba(220,38,38,0.28)]"
            >
              Start a Project
            </Link>
            <Link
              href="/#projects"
              className="rounded-2xl border border-white/14 bg-white/[0.04] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white/90 transition hover:border-red-400/40 hover:text-white"
            >
              Explore Work
            </Link>
          </div>
        </div>

        <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              <span className="inline-block h-3 w-3 rounded-full bg-red-500 shadow-[0_0_14px_rgba(239,68,68,0.8)]" />
              Huzaifa Raheem
            </Link>
            <p className="mt-4 max-w-md text-base leading-8 text-slate-300/72">
              Full-stack developer crafting high-performance interfaces, thoughtful product systems, and digital experiences built to last.
            </p>
            <a
              href="mailto:huzaifaraheem2001@gmail.com"
              className="mt-5 inline-flex text-sm font-semibold text-red-300 transition hover:text-white"
            >
              huzaifaraheem2001@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.28em] text-red-300/85">Navigation</h3>
            <div className="mt-5 flex flex-col gap-3 text-slate-300/78">
              {footerLinks.map((item) => (
                <Link key={item.label} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.28em] text-red-300/85">Social</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {contactSocialLinks.map((item) => (
                <a
                  key={`footer-${item.label}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] text-white/90 transition hover:border-red-400/45 hover:bg-red-500/10 hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <a
              href="#top"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300/75 transition hover:text-white"
            >
              Back to Top
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M11.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06L12.75 7.81V19a.75.75 0 0 1-1.5 0V7.81l-4.72 4.72a.75.75 0 0 1-1.06-1.06l6-6Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-sm text-slate-400">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>© {currentYear} Huzaifa Raheem. Crafted with precision.</span>
            <span>Next.js Portfolio • Detail pages for selected work</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
