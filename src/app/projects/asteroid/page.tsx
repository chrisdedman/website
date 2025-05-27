"use client"

import React, { useState } from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function Asteroid() {
  return (
    <div className="min-h-screen flex-col p-4 lg:p-8 mt-16">
      <Menu />
      <div className="p-4 max-w-6xl mx-auto flex-grow">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          <a href="/projects" className="underline">Projects</a>{" > "}Near Earth Object, Daily Asteroid Tracker
        </h5>
        <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
        <div>
          <Article />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Article() {
  const images = [
    { src: '/neo1.png', alt: 'NEO Gallery Image 1' },
    { src: '/neo2.png', alt: 'NEO Gallery Image 2' },
    { src: '/neo3.png', alt: 'NEO Gallery Image 3' },
    { src: '/neo4.png', alt: 'NEO Gallery Image 4' },

  ];

  const [enlargedImage, setEnlargedImage] = useState("");

  const enlargeImage = (src: string) => {
    setEnlargedImage(src);
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index}>
              <img
                className="rounded-lg"
                src={image.src}
                alt={image.alt}
                style={{ cursor: "pointer", maxWidth: "100%" }}
                onClick={() => enlargeImage(image.src)}
              />
            </div>
          ))}
        </div>

        {enlargedImage && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={() => setEnlargedImage("")}>
            <img src={enlargedImage} alt="Enlarged Image" className="max-w-full max-h-full" />
            <button className="absolute top-4 right-4 text-white" onClick={() => setEnlargedImage("")}>Close</button>
          </div>
        )}
      </div>
    </>
  )
}