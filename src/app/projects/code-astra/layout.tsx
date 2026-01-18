import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'CodeAstra',
  description: 'A modern, extensible C++/Qt6 code editor with performance and usability in mind.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
