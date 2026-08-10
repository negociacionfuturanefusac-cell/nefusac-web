"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductImage } from "@/lib/products";

export default function Gallery({
  images,
  name,
}: {
  images: ProductImage[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const current = images[active];

  if (!current) {
    return (
      <div className="aspect-square rounded-xl bg-mist flex items-center justify-center text-steel">
        Sin imágenes
      </div>
    );
  }

  return (
    <div>
      <div className="relative aspect-square rounded-xl bg-mist overflow-hidden border border-line">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt ?? `${name} — foto ${active + 1}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto thin-scroll pb-1">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              aria-label={`Ver foto ${i + 1}`}
              onClick={() => setActive(i)}
              className={`relative h-16 w-16 shrink-0 rounded-lg overflow-hidden border-2 ${
                i === active ? "border-brand" : "border-transparent"
              }`}
            >
              <Image
                src={img.src}
                alt=""
                fill
                sizes="64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
