import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Resource Library',
  description: 'A community-driven library of programming resources, searchable by category and keyword.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
