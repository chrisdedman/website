import React from "react";
import Image from "next/image";
import Menu from "@/components/navigation";
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

export default function Page() {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        WebkitBackgroundSize: "2000px"
      }}
    >

      <Menu />

      <div className="relative bottom-2">
        <Image
          className="rounded-lg"
          src="/me_engine.jpeg"
          alt="Picture of the author"
          width={600}
          height={600}
        />
        <div className="absolute top-0 left-0 text-center w-full">
          <div className="rocket-container">
            <RocketLaunchIcon className="w-8 h-8 rocket spin-on-hover" />
            <h5 className="text-3xl lg:text-5xl font-bold text-gray-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Hi, I am</h5>
            <h5 className="text-3xl lg:text-5xl font-bold text-gray-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Chris Dedman</h5>
            <div className="flex justify-center">
              <div className="w-64 h-1 bg-red-600 rounded mt- mb-4"></div>
            </div>
            <p className="text-2xl lg:text-3xl font-light mt-32 lg:mt-64 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Aspiring Software Engineer</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <CategoryCard title="Profile" />
        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
          <a href="https://astranebula.gitbook.io/" className=" hover:underline">Blog</a>
        </span>
        <CategoryCard title="Projects" />
      </div>

      <div className="flex flex-wrap justify-center ">
        <p className="text-white text-xl font-bold drop-shadow-md bg-black bg-opacity-50 p-1">
          Latest Blog Article: <a href="https://astranebula.gitbook.io/blog/computer-science/graph-theory" className="underline">Graph Theory</a>
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