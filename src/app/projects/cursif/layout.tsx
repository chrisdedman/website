import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Cursif',
  description: 'A collaborative, scriptable note-taking app built with a modern full-stack architecture.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
