import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Matrix.py',
  description: 'A lightweight Python library to build Matrix bots with a clean, decorator-based API.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
