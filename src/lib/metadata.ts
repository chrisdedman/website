import type { Metadata } from 'next';

import { site } from '@/content/site';

/**
 * Per-page share metadata.
 *
 * Next.js merges `metadata` objects shallowly, one top-level key at a time: a
 * page that sets its own `openGraph` replaces the layout's whole `openGraph`
 * object, images and all, and a page that sets none inherits the layout's
 * title verbatim. So every page builds its complete `openGraph` and `twitter`
 * blocks here from the same inputs, and nothing is left to inheritance.
 */
export function share({
  title,
  description,
  path = '',
  type = 'website',
}: {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
}): Pick<Metadata, 'openGraph' | 'twitter'> {
  const url = `${site.url}${path}`;
  const images = [{ url: site.image, width: 1200, height: 630, alt: site.name }];

  return {
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: 'en_US',
      type,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images.map((image) => image.url),
    },
  };
}
