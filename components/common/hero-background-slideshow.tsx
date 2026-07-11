"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { experiences } from "@/config/experience";
import { Projects } from "@/config/projects";

const isPhoto = (src: string) => /\.(jpe?g|png|webp)$/i.test(src);

// Excluded: generic svg placeholders, and photos that don't work well as a
// full-bleed background (near-duplicate content, or overexposed/bright tops
// that don't get muted enough by the overlay - see components using this).
const excludedImages = new Set([
  "/projects/wind-loading-paper.jpg",
  "/projects/barrier-island.jpg",
  "/projects/physical-modelling-2d.jpg",
  "/projects/physical-modelling-3d.jpg",
  "/experience/maga-site.jpg",
  "/experience/lhi-basin-model.jpg",
]);

const extraImages = ["/hero/2.jpg", "/hero/3.jpg"];

// Some source photos have aspect ratios far from the others (e.g. near-square
// or tall crops), which makes object-cover zoom them in much more than the
// rest and breaks the "same visual size" look of the slideshow. Swap those
// in for pre-cropped ~3:2 versions that match the rest of the set instead.
const aspectRatioOverrides: Record<string, string> = {
  "/experience/lanka.jpg": "/hero/lanka-wide.jpg",
  "/experience/research-assistantship.jpg": "/hero/research-assistantship-wide.jpg",
};

const projectImages = Projects.flatMap((project) => [
  project.companyLogoImg,
  ...project.pagesInfoArr.flatMap((page) => page.imgArr),
]);

const experienceImages = experiences.flatMap((experience) => [
  experience.coverImage,
  ...(experience.images ?? []),
]);

const configImages = [...projectImages, ...experienceImages]
  .filter((src): src is string => Boolean(src))
  .filter(isPhoto)
  .filter((src) => !excludedImages.has(src))
  .map((src) => aspectRatioOverrides[src] ?? src);

// Interleave the extra images with the rest so they aren't all stacked at
// the tail end of a long cycle.
function interleave<T>(...lists: T[][]): T[] {
  const max = Math.max(...lists.map((list) => list.length));
  const result: T[] = [];
  for (let i = 0; i < max; i++) {
    for (const list of lists) {
      if (i < list.length) result.push(list[i]);
    }
  }
  return result;
}

const slideshowImages = Array.from(
  new Set(interleave(configImages, extraImages))
);

const SLIDE_DURATION_MS = 2500;
const FADE_DURATION_MS = 1000;

// Two permanent layers that swap which one is "active" (visible) each tick.
// The layers themselves are never unmounted, so the CSS opacity transition
// always has a stable start/end state to animate between - no remount jank,
// no requestAnimationFrame timing races, and every index (including the
// wrap back to 0) is treated identically.
export function HeroBackgroundSlideshow() {
  const [layerSrcs, setLayerSrcs] = useState<[string, string]>([
    slideshowImages[0],
    slideshowImages[1 % slideshowImages.length],
  ]);
  const [activeLayer, setActiveLayer] = useState<0 | 1>(0);
  const activeLayerRef = useRef<0 | 1>(0);
  const nextIndexRef = useRef(2 % slideshowImages.length);

  useEffect(() => {
    if (slideshowImages.length <= 1) return;
    const id = setInterval(() => {
      const inactiveLayer = activeLayerRef.current === 0 ? 1 : 0;
      const nextSrc = slideshowImages[nextIndexRef.current];

      setLayerSrcs((prev) => {
        const updated: [string, string] = [...prev];
        updated[inactiveLayer] = nextSrc;
        return updated;
      });
      setActiveLayer(inactiveLayer);

      activeLayerRef.current = inactiveLayer;
      nextIndexRef.current = (nextIndexRef.current + 1) % slideshowImages.length;
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {layerSrcs.map((src, i) => (
        <Image
          key={`layer-${i}`}
          src={src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover transition-opacity ease-in-out"
          style={{
            transitionDuration: `${FADE_DURATION_MS}ms`,
            opacity: i === activeLayer ? 0.75 : 0,
          }}
          aria-hidden="true"
        />
      ))}
    </>
  );
}
