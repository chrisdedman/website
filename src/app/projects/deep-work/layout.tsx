import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Deep Work Timer',
  description: 'A focus timer to support deep work sessions and track completed blocks.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
