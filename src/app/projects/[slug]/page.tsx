import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { projectMap, projects } from '@/lib/projects';
import { siteUrl } from '@/lib/seo';

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

  const projectUrl = `${siteUrl}/projects/${slug}`;

  return {
    title: entry.title,
    description: entry.description,
    alternates: {
      canonical: projectUrl,
    },
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
