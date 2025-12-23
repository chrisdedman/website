"use client"

import React from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'
import { useState } from "react";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import Image from "next/image";


export default function AstraPulse() {
  return (
    <div className="min-h-screen flex-col p-4 lg:p-8 mt-16">
      <Menu />
      <div className="p-4 max-w-6xl mx-auto flex-grow">
        <h5 className="mb-2 text-2xl font tracking-tight">
          <a href="/projects" className="underline">Projects</a>{" > "}AstraPulse
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
  const [enlargedImage, setEnlargedImage] = useState("");

  const enlargeImage = (src: string) => {
    setEnlargedImage(src);
  };

  return (
    <>
      <div className="flex justify-center items-center mt-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div key={0} className="flex justify-center items-center">
              <Image
                className="rounded-lg"
                src={"/astra_pulse_logo.png"}
                width={300}
                height={300}
                alt={"AstraPulse Logo"}
                style={{ cursor: "pointer", maxWidth: "100%" }}
                onClick={() => enlargeImage("/astra_pulse_logo.png")}
              />
            </div>
          </div>
      
        {enlargedImage && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={() => setEnlargedImage("")}>
              <Image src={enlargedImage} alt="Enlarged Image" className="max-w-full max-h-full" />
              <button className="absolute top-4 right-4 text-white" onClick={() => setEnlargedImage("")}>Close</button>
            </div>
          )}
      </div>

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
