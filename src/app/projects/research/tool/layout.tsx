import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Macromolecule Coarse-Graining Tool',
  description: 'Documentation and downloads for the macromolecule coarse-graining research tool.',
  alternates: {
    canonical: `${siteUrl}/projects/research/tool`,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
