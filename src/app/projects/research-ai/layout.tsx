import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Research - AI/ML',
  description: 'Research on multi-class classification of cancer subtypes using gene expression data.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
