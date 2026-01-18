import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'AstraPulse',
  description: 'A minimalist desktop timer app designed for simplicity and focus.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
