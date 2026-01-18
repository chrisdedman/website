import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Near Earth Object Tracker',
  description: 'A web app that surfaces daily Near Earth Object data from NASA with clear, searchable views.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
