"use client"

import React from "react";
import Link from 'next/link';
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import ImageGallery from '@/components/image-gallery';
import ProjectLayout from '@/components/project-layout';


export default function Asteroid() {
  return (
    <ProjectLayout>
      <h5 className="mb-2 text-2xl font tracking-tight">
        <Link href="/projects" className="underline">Projects</Link>{" > "}Near Earth Object, Daily Asteroid Tracker
      </h5>
      <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
      <div>
        <Article />
      </div>
    </ProjectLayout>
  );
}

function Article() {
  const images = [
    { src: '/neo1.png', alt: 'NEO Gallery Image 1', width: 800, height: 500 },
    { src: '/neo2.png', alt: 'NEO Gallery Image 2', width: 800, height: 500 },
    { src: '/neo3.png', alt: 'NEO Gallery Image 3', width: 800, height: 500 },
    { src: '/neo4.png', alt: 'NEO Gallery Image 4', width: 800, height: 500 },

  ];

  return (
    <>
      <p>This web app allows users to retrieve and display information about Near Earth Objects (NEOs). NEOs are asteroids and comets with orbits that come close to Earth&apos;s orbit.</p>
      <hr className="h-px my-8 mb-0 bg-black border-0 separator" />
      <h3>Key features of the app include:</h3>
      <div className="ml-4">
        <p>- Fetching daily NEO data.</p>
        <p>- Visualizing NEO data in an easy-to-read format.</p>
        <p>- Displaying information about NEOs, including:</p>
        <div className="ml-6">
          <p>- Retrieving Object IDs and Names</p>
          <p>- Determining Hazardous Status</p>
          <p>- Displaying Close Approach Dates</p>
          <p>- Tracking Current and Past Orbiting Bodies</p>
          <p>- Providing Maximum and Minimum Diameters (in meters and feet)</p>
          <p>- Showing Velocity (in km/h and miles/h)</p>
          <p>- Classifying Orbit Types with Descriptions</p>
          <p>- Displaying First and Last Observation Dates</p>
        </div>
      </div>
      <p>These features enable users to access, understand, and analyze essential information about Near-Earth Objects (NEOs) conveniently within the app.</p>

      <hr className="h-px my-8 mb-0 bg-black border-0 separator" />
      <p className="mt-4">
        It is hosted on vercel and the source code is available on GitHub.
        It does not require any database, the data is directly pulled from the NASA API.
        I am using DataTables to display the asteroids in a searchable and sortable table.
        The application is built using full-stack Python and the Flask framework.
      </p>

      <div className="">
        <a href="https://asteroid-tracking.vercel.app/" target="_blank" rel="noreferrer noopener" className="inline-flex items-center px-3 py-2 mr-10 mb-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
          Check the webpage  <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
        </a>

        <a href="https://github.com/chrisdedman/py-neo" target="_blank" rel="noreferrer noopener" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
          Check the code  <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
        </a>
      </div>

      <hr className="h-px my-8 mb-0 bg-black border-0 separator" />

      <div>
        <h3>NEO Gallery Images</h3>
        <ImageGallery
          images={images}
          gridClassName="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4"
        />
      </div>
    </>
  )
}
