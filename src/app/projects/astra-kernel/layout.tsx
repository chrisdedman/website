import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'AstraKernel',
  description: 'A minimal ARM kernel for QEMU focused on learning bare-metal systems programming.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
