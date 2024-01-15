"use client"

import React from "react";
import Menu from '@/components/navigation';
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="h-screen p-8 lg:p-16 mt-16">
      <Menu />
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-1">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blog</h5>
          <hr className="h-px my-8 bg-black border-0 mt-0" />
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <p>Thank you for your interest in reading my articles. You can find what I wrote here, enjoy!</p>

            {/* TO-DO: Transfer previous article to this website */}
            
            {/* <h3>- General</h3>
            <span className="block mb-4">
              <a href="/blog/articles">Embrace your difficulties to make it your strength!</a>
            </span>
            <span className="block mb-4">
              <a href="/blog/articles">Pseudocode & Flowchart in Programming!</a>
            </span>
            <span className="block mb-4">
              <a href="/blog/articles">Numbering System: Decimal ~ Hexadecimal ~ Binary</a>
            </span>

            <h3>- C++ Journey</h3>
            <span className="block mb-4">
              <a href="/blog/articles">Preprocessor Directives in C++</a>
            </span>
            <span className="block mb-4">
              <a href="/blog/articles">C++ Template</a>
            </span>
            <span className="block mb-4">
              <a href="/blog/articles">C++ Recursion</a>
            </span>

            <h3>- Python Journey</h3>
            <span className="block mb-4">
              <a href="/blog/articles">The raise of programming</a>
            </span> */}

            <h3>- Introduction to Programming</h3>
            <span className="block mb-4">
              <a href="/blog/articles/programming-part-one">Intro to Programming (Part I)</a>
            </span>
            <span className="block mb-4">
              <a href="/blog/articles/programming-part-two">Intro to Programming (Part II) Choosing a Programming Language</a>
            </span>

            <h3>- Embedded Systems Development Journey</h3>
            <span className="block mb-4">
              <a href="/blog/articles/pthread">&lt;pthread.h&gt; Library</a>
            </span>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
