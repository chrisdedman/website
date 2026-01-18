export type ProjectMetadataEntry = {
  title: string;
  description: string;
};

export const projectMetadata: Record<string, ProjectMetadataEntry> = {
  'astra-kernel': {
    title: 'AstraKernel',
    description: 'A minimal ARM kernel for QEMU focused on learning bare-metal systems programming.',
  },
  'code-astra': {
    title: 'CodeAstra',
    description: 'A modern, extensible C++/Qt6 code editor with performance and usability in mind.',
  },
  cursif: {
    title: 'Cursif',
    description: 'A collaborative, scriptable note-taking app built with a modern full-stack architecture.',
  },
  matrixpy: {
    title: 'Matrix.py',
    description: 'A lightweight Python library to build Matrix bots with a clean, decorator-based API.',
  },
  capski: {
    title: 'Capski',
    description: 'A Rust CLI that transforms audio or video into karaoke-style videos with live subtitles.',
  },
  'astra-pulse': {
    title: 'AstraPulse',
    description: 'A minimalist desktop timer app designed for simplicity and focus.',
  },
  asteroid: {
    title: 'Near Earth Object Tracker',
    description: 'A web app that surfaces daily Near Earth Object data from NASA with clear, searchable views.',
  },
  resources: {
    title: 'Resource Library',
    description: 'A community-driven library of programming resources, searchable by category and keyword.',
  },
  'deep-work': {
    title: 'Deep Work Timer',
    description: 'A focus timer to support deep work sessions and track completed blocks.',
  },
  qrcode: {
    title: 'QR Code Generator',
    description: 'Generate QR codes quickly with a simple, no-frills interface.',
  },
  'crud-template': {
    title: 'CRUD Template',
    description: 'A Golang and PostgreSQL CRUD starter with a simple frontend.',
  },
  research: {
    title: 'Research - Computational BioPhysics',
    description: 'Computational biophysics research on coarse-grained molecular modeling tools.',
  },
  'research-ai': {
    title: 'Research - AI/ML',
    description: 'Research on multi-class classification of cancer subtypes using gene expression data.',
  },
};
