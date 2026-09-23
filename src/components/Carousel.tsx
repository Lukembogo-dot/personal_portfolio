"use client";

import { useState } from "react";

export default function Carousel({
  slug,
  images,
}: {
  slug: string;
  images: { filename: string; originalName: string }[];
}) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  function go(delta: number) {
    setIndex((i) => (i + delta + images.length) % images.length);
  }

  return (
    <div className="w-full">
      <div className="relative rounded-lg overflow-hidden border border-[var(--line)] bg-[var(--bg-raised)] aspect-[16/10]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/api/images/${slug}/${encodeURIComponent(images[index].filename)}`}
          alt={images[index].originalName}
          className="w-full h-full object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--bg)]/80 text-[var(--fg)] hover:text-[var(--accent)]"
            >
              ←
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--bg)]/80 text-[var(--fg)] hover:text-[var(--accent)]"
            >
              →
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-2 justify-center">
          {images.map((img, i) => (
            <button
              key={img.filename}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === index ? "bg-[var(--accent)]" : "bg-[var(--line)]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}