'use client';

import React from 'react';
import Menu from '@/components/navigation';
import Footer from '@/components/footer';

interface ProjectLayoutProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function ProjectLayout({
  children,
  className = 'min-h-screen flex-col p-4 lg:p-8 mt-16',
  containerClassName = 'p-4 max-w-6xl mx-auto flex-grow',
}: ProjectLayoutProps) {
  return (
    <div className={className}>
      <Menu />
      <div className={containerClassName}>{children}</div>
      <Footer />
    </div>
  );
}
