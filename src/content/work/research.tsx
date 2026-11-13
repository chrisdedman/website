import ActionLink from '@/components/ui/action-link';
import type { WorkMeta } from './types';

export const meta: WorkMeta = {
  slug: 'research',
  title: 'Coarse-Graining Macromolecules',
  kind: 'research',
  year: '2024',
  role: 'Researcher (RSCA grant)',
  stack: ['Java', 'Octrees', 'Computational biophysics'],
  summary:
    'A tool that automatically generates interaction beads for coarse-grained models of biological molecules.',
};

export default function Body() {
  return (
    <>
      <p>
        Developed under a Research, Scholarship, and Creative Activities (RSCA) grant, this tool
        addresses the limitations of traditional multipole expansions when coarse-graining
        electrostatic potentials. It implements a distributed multipole expansion algorithm that
        represents electrostatic potentials accurately near the surfaces of biological molecules.
      </p>
      <p>
        It combines automatic geometric partitioning with Octree spatial structures to model those
        molecules efficiently. The algorithms handle data parsing, partition merging, and the
        iterative reduction of molecular complexity while preserving the properties that matter.
        Coarse-grained models built this way improve computational efficiency substantially, which
        is what makes large-scale simulation of complex biophysical systems tractable.
      </p>

      <p>
        <ActionLink href="/work/research/tool">Documentation and download</ActionLink>
      </p>
    </>
  );
}
