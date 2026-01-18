import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Capski',
  description: 'A Rust CLI that transforms audio or video into karaoke-style videos with live subtitles.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
