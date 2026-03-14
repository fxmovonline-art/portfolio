"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type ProjectImageSliderProps = {
  images: string[];
  title: string;
};

export default function ProjectImageSlider({ images, title }: ProjectImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);

  const goToPrev = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const startX = touchStartXRef.current;
    const endX = event.changedTouches[0]?.clientX;
    touchStartXRef.current = null;

    if (startX === null || endX === undefined) return;

    const deltaX = endX - startX;
    const swipeThreshold = 40;

    if (deltaX > swipeThreshold) {
      goToPrev();
      return;
    }

    if (deltaX < -swipeThreshold) {
      goToNext();
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Previous screenshot"
        onClick={goToPrev}
        className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-lg text-white/90 transition hover:bg-black/55 lg:left-[-1rem] lg:h-10 lg:w-10 lg:bg-white/10 lg:text-xl lg:hover:bg-white/20"
      >
        ‹
      </button>

      <button
        type="button"
        aria-label="Next screenshot"
        onClick={goToNext}
        className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-lg text-white/90 transition hover:bg-black/55 lg:right-[-1rem] lg:h-10 lg:w-10 lg:bg-white/10 lg:text-xl lg:hover:bg-white/20"
      >
        ›
      </button>

      <div
        className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={images[activeIndex]}
          alt={`${title} project preview ${activeIndex + 1}`}
          width={1440}
          height={900}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      <div className="mt-5 flex justify-center gap-3">
        {images.map((_, index) => (
          <button
            key={`${title}-dot-${index}`}
            type="button"
            aria-label={`Go to screenshot ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              activeIndex === index ? "bg-black/70" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
