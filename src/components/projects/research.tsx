"use client"

import Link from 'next/link';
import ProjectLayout from '@/components/project-layout';
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function Research() {
  return (
    <ProjectLayout>
      <h5 className="mb-2 text-2xl font tracking-tight">
        <Link href="/projects" className="underline">Achievements</Link>{" > "}Research - Computational BioPhysics
      </h5>
      <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
      <div>
        <Article />
      </div>
    </ProjectLayout>
  );
}

function Article() {
  return (
    <>
      <h6 className="mt-4 text-xl font-bold font">A tool for the automatic generation of interaction beads in a coarse-grained model of a macromolecule.</h6>
      <p className="mt-4">
        This tool, developed as part of a Research, Scholarship, and Creative Activities (RSCA) grant,
        is designed to provide a practical solution for overcoming the limitations of traditional multipole
        expansions in coarse-graining electrostatic potentials. It implements a novel distributed multipole
        expansion algorithm to accurately represent electrostatic potentials near the surfaces of biological molecules.
      </p>

      <p>
        This tool integrates automatic geometric partitioning methods with Octree-based spatial structures to efficiently model biological molecules.
        Its algorithms handle data parsing, merging partitions, and the iterative reduction of molecular complexity while preserving essential properties.
        Creating coarse-grained models significantly improve computational efficiency, enabling large-scale simulations of complex biophysical systems.
      </p>

      <a href="research/tool" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
        <strong>Get the Tool</strong> <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
      </a>

    </>
  )
} 
