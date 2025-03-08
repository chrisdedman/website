"use client"

import React from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function CodeAstra() {
  return (
    <div className="h-screen p-4 lg:p-8 mt-16 ">
      <Menu />
      <div className="p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          <a href="/projects" className="underline">Open Source Contributions</a>{" > "}Code Astra
        </h5>
        <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
        <div>
          <address>By <a rel="author" href="/">Chris Dedman Rollet</a></address>
          on <time dateTime="03-07-2024" title="March 7th, 2025">03-07-2025</time>
          <Article />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Article() {
  return (
    <>
      <h6 className="mt-4 text-xl font-bold">CodeAstra ~ Modern Code Editor</h6>
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