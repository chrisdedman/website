"use client"

import React from "react";
import Link from 'next/link';
import ProjectLayout from '@/components/project-layout';
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function ResearchAI() {
  return (
    <ProjectLayout>
      <h5 className="mb-2 text-2xl font tracking-tight">
        <Link href="/projects" className="underline">Achievements</Link>{" > "}Research - AI/ML
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
      <h6 className="mt-4 text-xl font-bold font">Cancer Subtype Multi-Class Classification in Gene Expression Data</h6>
      <p className="mt-4">
        Info coming soon!
      </p>
    </>
  )
} 
