"use client";

import { useState } from "react";
import Image from "next/image";

type ProjectImageSliderProps = {
  images: string[];
  title: string;
};

export default function ProjectImageSlider({ images, title }: ProjectImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Previous screenshot"
        onClick={goToPrev}
        className="absolute -left-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-white/10 text-xl text-white/80 transition hover:bg-white/20 lg:flex"
      >
        ‹
      </button>

      <button
        type="button"
        aria-label="Next screenshot"
        onClick={goToNext}
        className="absolute -right-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-white/10 text-xl text-white/80 transition hover:bg-white/20 lg:flex"
      >
        ›
      </button>

      <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
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
