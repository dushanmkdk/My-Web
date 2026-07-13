"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slideshowImages = Array.from(
  { length: 13 },
  (_, i) => `/hero/slide_${i + 1}.jpg`
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
