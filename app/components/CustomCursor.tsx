"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isFinePointerRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updatePointerMode = () => {
      isFinePointerRef.current = mediaQuery.matches;
    };

    updatePointerMode();
    mediaQuery.addEventListener("change", updatePointerMode);

    return () => {
      mediaQuery.removeEventListener("change", updatePointerMode);
    };
  }, []);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    let raf: number;
    let mx = -100;
    let my = -100;

    const onMove = (e: MouseEvent) => {
      if (!isFinePointerRef.current) return;
      mx = e.clientX;
      my = e.clientY;
    };

    const loop = () => {
      if (el) {
        if (isFinePointerRef.current) {
          el.style.opacity = "1";
          el.style.transform = `translate(${mx}px, ${my}px)`;
        } else {
          el.style.opacity = "0";
        }
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0 will-change-transform"
      // offset so the tip of the arrow sits exactly at the pointer hotspot
      style={{ marginLeft: 0, marginTop: 0 }}
    >
      <svg
        width="28"
        height="32"
        viewBox="0 0 28 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer white fill */}
        <path
          d="M2 2L26 15L15 18L10 30L2 2Z"
          fill="white"
          stroke="black"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
