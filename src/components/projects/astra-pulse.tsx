"use client"

import Link from 'next/link';
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import ImageGallery from '@/components/image-gallery';
import ProjectLayout from '@/components/project-layout';


export default function AstraPulse() {
  return (
    <ProjectLayout>
      <h5 className="mb-2 text-2xl font tracking-tight">
        <Link href="/projects" className="underline">Projects</Link>{" > "}AstraPulse
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
    { src: '/astra_pulse_logo.png', alt: 'AstraPulse Logo', width: 300, height: 300 },
  ];

  return (
    <>
      <ImageGallery
        images={images}
        className="mt-8 mb-8"
        itemClassName="flex justify-center items-center"
      />

      <h6 className="mt-4 text-xl font-bold font">AstraPulse ~ A minimalist timer app</h6>
      <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />

      <p className="mt-4">
      	A minimalist timer app designed for simplicity and ease of use. You can start a timer and forget about the app, but it won’t forget you. When the timer reaches zero, the app will emit a background sound to alert you that the time is up. You can focus on your work instead of constantly checking when your next break is.
      </p>

      <div className="mb-6">
          <h3>Tech Stack</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
            <li>Rust</li>
            <li>Cargo</li>
            <li>Tauri</li>
            <li>Svelte</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3>Key Features</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
            <li>Minimalist design</li>
            <li>Background sound alert when the timer reaches zero</li>
            <li>Simple and intuitive user interface</li>
            <li>No distractions, just a timer</li>
            <li>Preset and customizable timer duration</li>
            <li>Lightweight and fast performance</li>
            <li>Open-source and free to use</li>
          </ul>
        </div>


      <p className="mt-4">
        The project is open source and licensed under the <a href="https://github.com/sandbox-science/astrapulse/blob/main/LICENSE" className="underline" target="_blank" rel="noreferrer noopener">GNU General Public License v3.0</a>.
      </p>

      
      <div className="">
        <a href="https://github.com/sandbox-science/astrapulse" target="_blank" rel="noreferrer noopener" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
          AstraPulse Repository <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
      	</a>
      </div>
    </>
  )
}
