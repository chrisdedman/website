import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Research - Computational BioPhysics',
  description: 'Computational biophysics research on coarse-grained molecular modeling tools.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
