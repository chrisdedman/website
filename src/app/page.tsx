import React from "react";
import Menu from "@/components/navigation";
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

export default function Page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Menu />

      <div className="text-center rocket-container">
        <RocketLaunchIcon className="w-8 h-8 rocket spin-on-hover" />
        <h1 className="text-5xl font-bold">Hi, This is</h1>
        <h1 className="text-5xl font-bold">Chris Dedman</h1>
        <div className="flex justify-center">
          <div className="w-64 h-1 bg-red-600 rounded mt- mb-4"></div>
        </div>
        <p className="text-2xl font-light mb-8">Computer Scientist Student</p>
      </div>

      <div className="flex flex-wrap justify-center">
        <CategoryCard title="Profile" />
        <CategoryCard title="Work" />
        <CategoryCard title="Projects" />
      </div>

      <div className="flex flex-wrap justify-center">
        <p>
          <b>Latest Blog Article</b>: 
          <a href="/blog/articles/semaphore" className="underline">semaphore.h Library</a>
        </p>
      </div>
    </div>
  );
}

const CategoryCard = ({ title }: { title: string }) => (
  <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
    <a href={title.toLowerCase()} className=" hover:underline">{title}</a>
  </span>
);