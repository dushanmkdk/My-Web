"use client";

import Image from "next/image";
import { useState } from "react";

import { Icons } from "@/components/common/icons";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface GalleryGridProps {
  images: string[];
  alt: string;
  className?: string;
}

export function GalleryGrid({ images, alt, className }: GalleryGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  const showPrev = () =>
    setOpenIndex((i) =>
      i === null ? i : (i - 1 + images.length) % images.length
    );
  const showNext = () =>
    setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));

  return (
    <>
      <div className={cn("grid grid-cols-3 gap-2 sm:grid-cols-4", className)}>
        {images.map((img, index) => (
          <button
            key={img}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`View larger image ${index + 1} of ${images.length}`}
            className="relative aspect-square overflow-hidden rounded-md border bg-muted transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Image
              src={img}
              alt={alt}
              fill
              className="object-cover"
              sizes="(min-width: 640px) 25vw, 33vw"
            />
          </button>
        ))}
      </div>

      <Dialog
        open={openIndex !== null}
        onOpenChange={(open) => setOpenIndex(open ? openIndex : null)}
      >
        <DialogContent className="max-w-4xl w-[92vw] p-2 sm:p-4">
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          {openIndex !== null && (
            <div className="relative flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[openIndex]}
                alt={alt}
                className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain"
              />
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrev}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border bg-background p-2 text-foreground shadow-md hover:bg-accent"
                  >
                    <Icons.chevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border bg-background p-2 text-foreground shadow-md hover:bg-accent"
                  >
                    <Icons.chevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
