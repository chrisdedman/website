import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Macromolecule Coarse-Graining Tool',
  description: 'Documentation and downloads for the macromolecule coarse-graining research tool.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
