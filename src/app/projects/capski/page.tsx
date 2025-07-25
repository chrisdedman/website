"use client"

import React from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'
import { useState } from "react";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function CapSki() {
  return (
    <div className="min-h-screen flex-col p-4 lg:p-8 mt-16">
      <Menu />
      <div className="p-4 max-w-6xl mx-auto flex-grow">
        <h5 className="mb-2 text-2xl font tracking-tight">
          <a href="/projects" className="underline">Open Source Contributions</a>{" > "}Capski
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
              <img
                className="rounded-lg"
                src={"/capski_logo.png"}
                alt={"Capski Logo"}
                style={{ cursor: "pointer", maxWidth: "100%" }}
                onClick={() => enlargeImage("/capski_logo.png")}
              />
            </div>
          </div>
      
        {enlargedImage && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={() => setEnlargedImage("")}>
              <img src={enlargedImage} alt="Enlarged Image" className="max-w-full max-h-full" />
              <button className="absolute top-4 right-4 text-white" onClick={() => setEnlargedImage("")}>Close</button>
            </div>
          )}
      </div>

      <h6 className="mt-4 text-xl font-bold font">Capski ~ Audio-to-Karaoke Video Tool</h6>
      <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />

      <p className="mt-4">
      	Capski is a command-line tool written in Rust that transforms audio or video files into stylized 
        karaoke-style videos with real-time subtitles. The tool supports transcription, translation, 
        and subtitle rendering with custom styling, making it ideal for content creators and educators.
      </p>

      <div className="mb-6">
          <h3>Tech Stack</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
            <li>Rust</li>
            <li>whisper-rs</li>
            <li>FFmpeg for video processing</li>
            <li>Advanced SubStation Alpha (ASS) for subtitles</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3>Key Features</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
            <li>Converts WAV/MP3/MP4 into karaoke-style videos</li>
            <li>Whisper-based transcription with real-time timing</li>
            <li>Optional English translation between multiple languages</li>
            <li>Styled subtitles via JSON config</li>
            <li>Burn subtitles directly into video using FFmpeg</li>
            <li>Simple, ergonomic CLI with helpful flags</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3>What I Did</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
            <li>Designed the CLI and modular Rust architecture</li>
            <li>Integrated Whisper and FFmpeg</li>
            <li>Implemented ASS subtitle formatting and rendering</li>
            <li>Built translation and real-time word highlighting</li>
            <li>Wrote engineering requirement documentation</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3>Challenges</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
            <li>Learning Rust</li>
            <li>Handling real-time word-level timestamping</li>
            <li>Subtitle syncing and overlay with FFmpeg</li>
            <li>Keeping the CLI intuitive for non-technical users</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3>Demo</h3>
          <video
            controls
            className="w-full rounded-lg shadow-lg"
            src="/capski_demo.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>

      <p className="mt-4">
        The project is open source and licensed under the <a href="https://github.com/sandbox-science/transcriber/blob/main/LICENSE" className="underline" target="_blank" rel="noreferrer noopener">GNU General Public License v3.0</a>.
      </p>

      
      <div className="">
        <a href="https://docs.google.com/document/d/1xfLcfE5BA1i_wjUSHHJYuA4zneVqrm4rEg2bf_YeltQ/edit?usp=sharing" target="_blank" rel="noreferrer noopener" className="inline-flex items-center px-3 py-2 mr-10 mb-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
          Capski Engineering Requirement Documentation  <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
        </a>

        <a href="https://github.com/sandbox-science/transcriber" target="_blank" rel="noreferrer noopener" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
          Capski Repository <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
      	</a>
      </div>
    </>
  )
}
