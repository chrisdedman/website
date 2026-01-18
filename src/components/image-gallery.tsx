'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type GalleryImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
  gridClassName?: string;
  itemClassName?: string;
  thumbWidth?: number;
  thumbHeight?: number;
  modalWidth?: number;
  modalHeight?: number;
  priorityFirst?: boolean;
}

const defaultGridClassName =
  'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4';

export default function ImageGallery({
  images,
  className,
  gridClassName = defaultGridClassName,
  itemClassName,
  thumbWidth = 800,
  thumbHeight = 500,
  modalWidth = 1200,
  modalHeight = 900,
  priorityFirst = false,
}: ImageGalleryProps) {
  const [enlargedImage, setEnlargedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!enlargedImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setEnlargedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enlargedImage]);

  return (
    <div className={className}>
      <div className={gridClassName}>
        {images.map((image, index) => {
          const isPriority = priorityFirst && index === 0;
          return (
          <div key={`${image.src}-${index}`} className={itemClassName}>
            <Image
              className="rounded-lg"
              src={image.src}
              alt={image.alt}
              width={image.width ?? thumbWidth}
              height={image.height ?? thumbHeight}
              loading={isPriority ? undefined : 'lazy'}
              priority={isPriority}
              style={{ cursor: 'pointer', maxWidth: '100%' }}
              onClick={() => setEnlargedImage(image)}
            />
          </div>
        )})}
      </div>

      {enlargedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setEnlargedImage(null)}
        >
          <Image
            src={enlargedImage.src}
            alt={enlargedImage.alt}
            width={enlargedImage.width ?? modalWidth}
            height={enlargedImage.height ?? modalHeight}
            className="max-w-full max-h-full"
          />
          <button
            type="button"
            className="absolute top-4 right-4 text-white"
            aria-label="Close image preview"
            onClick={(event) => {
              event.stopPropagation();
              setEnlargedImage(null);
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
