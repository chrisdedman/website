import Callout from '@/components/ui/callout';
import Gallery from '@/components/ui/gallery';
import type { WorkMeta } from './types';

export const meta: WorkMeta = {
  slug: 'astra-kernel',
  title: 'AstraKernel',
  kind: 'open-source',
  year: '2025',
  role: 'Author, project lead',
  stack: ['C', 'ARM assembly', 'QEMU'],
  summary:
    'A minimal experimental kernel for ARM, booted on QEMU’s Versatile board with a Cortex-A8 override.',
  links: [
    { label: 'Repository', href: 'https://github.com/sandbox-science/AstraKernel' },
    { label: 'Doxygen docs', href: 'https://sandbox-science.github.io/AstraKernel/' },
    {
      label: 'Manual (PDF)',
      href: 'https://github.com/sandbox-science/AstraKernel/blob/main/doc/AstraKernelManual.pdf',
    },
  ],
};

export default function Body() {
  return (
    <>
      <pre aria-label="AstraKernel boot output">
        <code>{`========================================
  AstraKernel  v0.1.0
  Built Aug 27 2025 at 12:56:35
========================================

  CPU: Cortex-A8 @ 200MHz (simulated)
  RAM: 128MB SDRAM at 0x00000000

Welcome to your own little Astra world!
Type away, explore, have fun.`}</code>
      </pre>

      <p>
        AstraKernel is a minimal experimental kernel written in modern C and ARM assembly, designed
        to run on QEMU’s Versatile AB/PB board with a Cortex-A8 CPU override (<code>-cpu cortex-a8</code>).
        That setup keeps the simple Versatile peripheral map while enabling ARMv7-A features to
        experiment with. The purpose is educational: it shows the fundamental steps of bringing up a
        bare-metal system, from low-level bootstrapping through to higher-level interactive features.
      </p>

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

      <h2>Approach</h2>
      <p>
        Rather than recreating the complexity of a production operating system, the goal is to strip
        away unnecessary abstraction and present a clean, readable codebase for anyone interested in
        the bare-metal foundations of computing. Kernel bootstrapping, direct hardware
        communication, and basic user interaction are implemented plainly, so it stays legible.
      </p>
      <p>
        The design pushes on modularity and extensibility. Modern C practice is used throughout to
        keep the code maintainable and portable while remaining accessible to people new to kernel
        development, which means new features can be added without unpicking what is already there.
      </p>

      <h2>Documentation</h2>
      <p>
        I document the development process and design decisions as the project evolves, and built a
        GitHub Actions pipeline that generates the Doxygen documentation and publishes it to GitHub
        Pages on every change. Contributions, feedback, and suggestions are welcome.
      </p>

      <Gallery
        columns={2}
        caption="AstraKernel booted in QEMU, and its console commands."
        images={[
          { src: '/kernel1.png', alt: 'AstraKernel booted in QEMU', width: 800, height: 600 },
          { src: '/kernel2.png', alt: 'AstraKernel console commands', width: 800, height: 600 },
        ]}
      />
    </>
  );
}
