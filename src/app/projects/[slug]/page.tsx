import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { projectComponents } from '@/lib/project-components';
import { projectMetadata } from '@/lib/project-metadata';

type ProjectParams = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(projectMetadata).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectParams): Promise<Metadata | undefined> {
  const { slug } = await params;
  const entry = projectMetadata[slug];
  if (!entry) {
    return undefined;
  }

  return {
    title: entry.title,
    description: entry.description,
  };
}

export default async function ProjectPage({ params }: ProjectParams) {
  const { slug } = await params;
  const ProjectComponent = projectComponents[slug];
  if (!ProjectComponent) {
    notFound();
  }

  return <ProjectComponent />;
}
