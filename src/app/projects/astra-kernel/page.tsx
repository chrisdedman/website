"use client"

import React from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'
import { useState } from "react";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function AstraKernel() {
  return (
    <div className="min-h-screen flex-col p-4 lg:p-8 mt-16">
      <Menu />
      <div className="p-4 max-w-6xl mx-auto flex-grow">
        <h5 className="mb-2 text-2xl font tracking-tight">
          <a href="/projects" className="underline">Open Source Contributions</a>{" > "}Astra Kernel
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
    { src: '/kernel1.png', alt: 'AstraKernel Booted in QEMU' },
    { src: '/kernel2.png', alt: 'AstraKernel Console Commands' },
  ];

  const [enlargedImage, setEnlargedImage] = useState("");

  const enlargeImage = (src: string) => {
    setEnlargedImage(src);
  };

  return (
    <>
      <pre className="bg-gray-400 text-white p-4 rounded-lg mt-4">
        <code>
          {`========================================
  AstraKernel  v0.1.0
  Built May 15 2025 at 22:58:58
========================================

  CPU: ARM926EJ-S @ 200MHz (simulated)
  RAM: 128MB SDRAM at 0x00000000

Welcome to your own little Astra world!
Type away, explore, have fun.`}
        </code>
      </pre>
      <h6 className="mt-4 text-xl font-bold font">AstraKernel ~ A minimal ARM kernel for QEMU</h6>
      <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />

      <aside
        className="bg-blue-300 border border-blue-300 rounded-lg p-4 my-4 max-w-2xl mx-auto prose"
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
        AstraKernel is a minimal experimental kernel written in modern C and ARM Assembly.
        Designed to run on QEMU&#39;s VersatilePB (ARM926EJ-S) emulated platform,
        AstraKernel is intended to provide a clear and approachable introduction
        to the fundamental concepts of operating system design and kernel development.
        This project also reflects my personal journey in learning about kernel design
        and development, as well as systems programming.
      </p>
      <p className="mt-4">
        This project was developed with a focus on clarity, simplicity, and educational value. Rather
        than attempting to recreate the complexity of established operating systems, the goal of this kernel is
        to strip away unnecessary abstractions and present a clean, understandable codebase for anyone
        interested in the &quot;bare metal&quot; foundations of computing.
      </p>
      <p className="mt-4">
        Through the implementation of kernel bootstrapping, direct hardware communication, and
        basic user interaction, AstraKernel demonstrates how fundamental OS components come together.
        The project showcases how modern C best practices can be utilized in a systems programming
        context to create code that is maintainable, portable, and robust, while still being accessible to
        those new to kernel development. The design of this kernel emphasizes modularity and extensibility,
        allowing developers to easily add new features or modify existing ones. This makes it ideal for
        educational purposes, as it provides a clear structure that can be followed and built upon.
      </p>
      <p className="mt-4">
        It is my hope that AstraKernel will not only serve as a foundation for those wishing to understand
        kernel development, but also inspire curiosity and confidence in exploring lower-level aspects of
        computer systems. The project is open source and available on GitHub, where you can find the source code, documentation,
        and instructions for building and running the kernel in QEMU.
      </p>
      <p className="mt-4">
        Alongside this project, I am documenting the development process and design decisions made 
        throughout the creation of AstraKernel. This documentation is a work in 
        progress and may be updated as the project evolves. I welcome contributions, 
        feedback, and suggestions for improvement. You can find the latest documentation
        on <a href="https://github.com/sandbox-science/AstraKernel/blob/main/doc/AstraKernelManual.pdf" target="_blank" rel="noreferrer noopener" className="text-blue-500 hover:underline">GitHub</a>.
      </p>

      <a href="https://github.com/sandbox-science/AstraKernel" target="_blank" rel="noreferrer noopener" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
        Get AstraKernel <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
      </a>
      <hr className="h-px my-8 mb-0 bg-black border-0 separator" />
      <div>
        <h3>AstraKernel Development Gallery Images</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
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
