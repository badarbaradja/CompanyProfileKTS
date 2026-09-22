"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Photo } from "@/content/photos";

interface PhotoGalleryProps {
  photos: Photo[];
  className?: string;
}

/**
 * Asymmetric bento-style photo grid (1 large + several small tiles) per
 * DESIGN.md — not a uniform card grid. Optional lightbox: Esc to close,
 * focus-trapped, no new dependency.
 */
export function PhotoGallery({ photos, className }: PhotoGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (photos.length === 0) return null;

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-[130px] sm:auto-rows-[150px]",
          className
        )}
      >
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`View larger: ${photo.alt}`}
            className={cn(
              "group relative overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-border)]",
              i === 0 && "col-span-2 row-span-2"
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={i === 0 ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 640px) 25vw, 50vw"}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          photo={photos[openIndex]}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
}

function Lightbox({ photo, onClose }: { photo: Photo; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>("button");
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-10"
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-150"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <div
        className="relative max-h-full max-w-4xl w-full aspect-[4/3]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="90vw"
          className="object-contain"
        />
      </div>

      {photo.caption && (
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-widest text-white/70">
          {photo.caption}
        </p>
      )}
    </div>
  );
}
