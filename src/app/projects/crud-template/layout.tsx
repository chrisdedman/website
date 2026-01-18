import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'CRUD Template',
  description: 'A Golang and PostgreSQL CRUD starter with a simple frontend.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
