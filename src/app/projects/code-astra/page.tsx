"use client"

import React from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'
import { useState } from "react";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function CodeAstra() {
  return (
    <div className="min-h-screen flex-col p-4 lg:p-8 mt-16">
      <Menu />
      <div className="p-4 max-w-6xl mx-auto flex-grow">
        <h5 className="mb-2 text-2xl font tracking-tight">
          <a href="/projects" className="underline">Open Source Contributions</a>{" > "}Code Astra
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
      <div className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div key={0} className="flex justify-center items-center">
            <img
              className="rounded-lg"
              src={"/app_icon.png"}
              alt={"CodeAstra Logo"}
              style={{ cursor: "pointer", maxWidth: "100%" }}
              onClick={() => enlargeImage("/app_icon.png")}
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
      <h6 className="mt-4 text-xl font-bold font">CodeAstra ~ Modern Code Editor</h6>
      <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
      <aside
        className="bg-blue-200 border border-blue-300 rounded-lg p-4 my-4 max-w-2xl mx-auto prose"
        aria-labelledby="sandbox-science-callout"
      >
        <p id="sandbox-science-callout">
          This project is part of{' '}
          <a
            href="https://github.com/sandbox-science"
            target="_blank"
            rel="noreferrer noopener"
            className="text-blue-500 hover:underline"
          >
            Sandbox Science <span className="sr-only">(opens in a new tab)</span>
          </a>
          , a collaborative playground which I lead for programmers of all backgrounds to explore, experiment, and grow together.
        </p>
      </aside>

      <p className="mt-4">
        CodeAstra is a modern, extensible, and lightweight code editor built using C++ and Qt6,
        designed to offer a fast, customizable, and feature-rich development experience.
        Inspired by NeoVim and VSCode, it will provide efficient file navigation, syntax highlighting,
        and a powerful plugin system, making it an ideal choice for developers who need speed,
        flexibility, and control. With a focus on performance and usability, the editor will
        support split views, an integrated terminal, customizable key bindings, and seamless
        Git integration, catering to both beginners and power users.
      </p>
      <p className="mt-4">
        This project was born from my desire to help students at my university.
        As the Open Source Coordinator for the Computer Alliance of Hispanic-Serving Institutions (CAHSI),
        I created this project to help club members develop their software engineering skills and improve
        their collaboration abilities. Additionally, this project is giving me the opportunity to lead
        a team of programmers while building something meaningful to me.
      </p>

      <a href="https://github.com/sandbox-science/CodeAstra" target="_blank" rel="noreferrer noopener" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
        Get CodeAstra <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
      </a>
    </>
  )
}
