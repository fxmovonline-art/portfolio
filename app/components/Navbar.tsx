"use client";

import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${inter.className} sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/70 backdrop-blur-md`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 md:px-16">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-bold tracking-tight text-white sm:text-2xl">
          Huzaifa Raheem
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="relative text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white
                  after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-0 after:bg-white
                  after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl border border-white/10 bg-white/5 md:hidden"
        >
          <span className={`block h-[1.5px] w-5 bg-white transition-all duration-300 origin-center ${isOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-white transition-all duration-300 origin-center ${isOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-64 border-t border-white/10" : "max-h-0"
        } bg-[#0a0a0a]/95 backdrop-blur-md`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-semibold text-white/70 transition-colors duration-200 hover:bg-red-500/10 hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
