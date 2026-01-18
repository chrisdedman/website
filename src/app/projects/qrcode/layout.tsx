import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'QR Code Generator',
  description: 'Generate QR codes quickly with a simple, no-frills interface.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
