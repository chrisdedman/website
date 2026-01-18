import dynamic from 'next/dynamic';

export type ProjectEntry = {
  slug: string;
  title: string;
  description: string;
  Component: React.ComponentType;
};

export const projects: ProjectEntry[] = [
  {
    slug: 'astra-kernel',
    title: 'AstraKernel',
    description: 'A minimal ARM kernel for QEMU focused on learning bare-metal systems programming.',
    Component: dynamic(() => import('@/components/projects/astra-kernel')),
  },
  {
    slug: 'code-astra',
    title: 'CodeAstra',
    description: 'A modern, extensible C++/Qt6 code editor with performance and usability in mind.',
    Component: dynamic(() => import('@/components/projects/code-astra')),
  },
  {
    slug: 'cursif',
    title: 'Cursif',
    description: 'A collaborative, scriptable note-taking app built with a modern full-stack architecture.',
    Component: dynamic(() => import('@/components/projects/cursif')),
  },
  {
    slug: 'matrixpy',
    title: 'Matrix.py',
    description: 'A lightweight Python library to build Matrix bots with a clean, decorator-based API.',
    Component: dynamic(() => import('@/components/projects/matrixpy')),
  },
  {
    slug: 'capski',
    title: 'Capski',
    description: 'A Rust CLI that transforms audio or video into karaoke-style videos with live subtitles.',
    Component: dynamic(() => import('@/components/projects/capski')),
  },
  {
    slug: 'astra-pulse',
    title: 'AstraPulse',
    description: 'A minimalist desktop timer app designed for simplicity and focus.',
    Component: dynamic(() => import('@/components/projects/astra-pulse')),
  },
  {
    slug: 'asteroid',
    title: 'Near Earth Object Tracker',
    description: 'A web app that surfaces daily Near Earth Object data from NASA with clear, searchable views.',
    Component: dynamic(() => import('@/components/projects/asteroid')),
  },
  {
    slug: 'resources',
    title: 'Resource Library',
    description: 'A community-driven library of programming resources, searchable by category and keyword.',
    Component: dynamic(() => import('@/components/projects/resources')),
  },
  {
    slug: 'deep-work',
    title: 'Deep Work Timer',
    description: 'A focus timer to support deep work sessions and track completed blocks.',
    Component: dynamic(() => import('@/components/projects/deep-work')),
  },
  {
    slug: 'qrcode',
    title: 'QR Code Generator',
    description: 'Generate QR codes quickly with a simple, no-frills interface.',
    Component: dynamic(() => import('@/components/projects/qrcode')),
  },
  {
    slug: 'crud-template',
    title: 'CRUD Template',
    description: 'A Golang and PostgreSQL CRUD starter with a simple frontend.',
    Component: dynamic(() => import('@/components/projects/crud-template')),
  },
  {
    slug: 'research',
    title: 'Research - Computational BioPhysics',
    description: 'Computational biophysics research on coarse-grained molecular modeling tools.',
    Component: dynamic(() => import('@/components/projects/research')),
  },
  {
    slug: 'research-ai',
    title: 'Research - AI/ML',
    description: 'Research on multi-class classification of cancer subtypes using gene expression data.',
    Component: dynamic(() => import('@/components/projects/research-ai')),
  },
];

export const projectMap = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
);
