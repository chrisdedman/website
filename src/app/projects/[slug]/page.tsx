import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { projectMap, projects } from '@/lib/projects';

type ProjectParams = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectParams): Promise<Metadata | undefined> {
  const { slug } = await params;
  const entry = projectMap[slug];
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
  const entry = projectMap[slug];
  if (!entry) {
    notFound();
  }

  const ProjectComponent = entry.Component;
  return <ProjectComponent />;
}
