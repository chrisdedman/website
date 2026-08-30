import Callout from '@/components/ui/callout';
import Gallery from '@/components/ui/gallery';
import type { WorkMeta } from './types';

export const meta: WorkMeta = {
  slug: 'code-astra',
  title: 'CodeAstra',
  kind: 'open-source',
  year: '2025',
  role: 'Author, project lead',
  stack: ['C++', 'Qt6', 'CMake'],
  summary:
    'A fast, extensible code editor in C++/Qt6, built as a teaching vehicle for a student engineering team.',
  links: [{ label: 'Repository', href: 'https://github.com/sandbox-science/CodeAstra' }],
};

export default function Body() {
  return (
    <>
      <Gallery
        columns={1}
        images={[{ src: '/app_icon.png', alt: 'CodeAstra application icon', width: 300, height: 300 }]}
      />

      <Callout label="Sandbox Science">
        <p>
          This project is part of{' '}
          <a href="https://github.com/sandbox-science" target="_blank" rel="noreferrer noopener">
            Sandbox Science
          </a>
          , a collaborative playground I lead for programmers of all backgrounds to explore,
          experiment, and grow together.
        </p>
      </Callout>

      <p>
        CodeAstra is a modern, extensible, and lightweight code editor built with C++ and Qt6,
        designed for a fast and customisable development experience. Inspired by Neovim and VS Code,
        it provides efficient file navigation, syntax highlighting, and a plugin system, for
        developers who want speed, flexibility, and control. Planned work covers split views, an
        integrated terminal, customisable key bindings, and Git integration.
      </p>

      <h2>Why it exists</h2>
      <p>
        This project was born from wanting to help students at my university. As Open Source
        Coordinator for the Computing Alliance of Hispanic-Serving Institutions (CAHSI), I started it
        so club members could develop their software engineering and collaboration skills on
        something real. It also gave me the chance to lead a team of programmers while building
        something I care about.
      </p>
    </>
  );
}
