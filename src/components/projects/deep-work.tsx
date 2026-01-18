"use client"
import Link from 'next/link';
import MyTimer from '@/components/timer/timer';
import ProjectLayout from '@/components/project-layout';

export default function Page() {
  return (
    <ProjectLayout>
      <h5 className="mb-2 text-2xl font tracking-tight">
        <Link href="/projects" className="underline">Projects</Link>{" > "}Deep Work
      </h5>
      <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
      <MyTimer />
    </ProjectLayout>
  );
}
