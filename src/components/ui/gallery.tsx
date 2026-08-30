'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

export type GalleryImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

/**
 * Screenshot grid with a lightbox. Uses <dialog> so focus trapping, Escape and
 * inertness of the page behind come from the platform instead of hand-rolled
 * keyboard handling.
 */
export default function Gallery({
  images,
  columns = 2,
  caption,
}: {
  images: GalleryImage[];
  columns?: 1 | 2 | 3;
  caption?: string;
}) {
  const [active, setActive] = useState<GalleryImage | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
  }, [active]);

  const close = useCallback(() => setActive(null), []);

  const gridCols =
    columns === 1
      ? 'grid-cols-1'
      : columns === 3
        ? 'grid-cols-2 sm:grid-cols-3'
        : 'grid-cols-1 sm:grid-cols-2';

  return (
    <figure className="my-8">
      <div className={`grid gap-3 ${gridCols}`}>
        {images.map((image) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(image)}
            className="group block border border-rule bg-paper-raised transition-colors hover:border-ink"
            aria-label={`Enlarge: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width ?? 800}
              height={image.height ?? 500}
              sizes="(max-width: 640px) 100vw, 45vw"
              className="h-auto w-full"
            />
          </button>
        ))}
      </div>

      {caption ? <figcaption className="label mt-3">{caption}</figcaption> : null}

      <dialog
        ref={dialogRef}
        onClose={close}
        onClick={(event) => {
          // Clicks on the backdrop land on the dialog element itself.
          if (event.target === dialogRef.current) close();
        }}
        className="max-h-[90dvh] max-w-[92vw] bg-transparent p-0 backdrop:bg-black/80"
      >
        {active ? (
          <div className="relative">
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width ?? 1400}
              height={active.height ?? 900}
              sizes="92vw"
              className="h-auto max-h-[82dvh] w-auto border border-rule object-contain"
            />
            <button
              type="button"
              onClick={close}
              className="label mt-3 border border-rule bg-paper px-3 py-2 text-ink"
            >
              Close
            </button>
          </div>
        ) : null}
      </dialog>
    </figure>
  );
}
