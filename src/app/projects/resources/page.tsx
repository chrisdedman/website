"use client"

import React from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'
import { useState } from "react";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function Asteroid() {
  return (
    <div className="h-screen p-4 lg:p-8 mt-16 ">
      <Menu />
      <div className="p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          <a href="/projects" className="underline">Projects</a>{" > "}Resource Library
        </h5>
        <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
        <div>
          <address>By <a rel="author" href="/">Chris Dedman-Rollet</a></address>
          on <time dateTime="07-08-2024" title="July 8th, 2024">07-08-2024</time>
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
      <h6 className="mt-4 text-xl font-bold">Code Society Library Resources</h6>
      <p className="mt-4">
        This project is a web page that allows users to search for resources by category and keyword.
        The user can also add new resources to the library by adding to the GitHub <a className="underline" href="https://github.com/Code-Society-Lab/resources/blob/main/README.md" target="_blank">README</a> file, which then will be displayed on the webpage.
      </p>
      <p className="mt-4">
        The library is a collection of resources put together by the members of the <a className="underline" href="https://codesociety.xyz" target="_blank">Code Society</a> for
        various programming and software development subjects that the community have found useful.
        It&apos;s a great place to find books, articles, videos, and more to help you learn and
        grow as a programmer or scientist.
      </p>
      <p className="mt-4">
        The application is fully responsive and works on all devices. The user can easily search for resources on their desktop, tablet, or mobile device.
        It is hosted on GitHub Pages and the source code is available on GitHub. It does not require any database, the data is directly pulled from the README file in the repository.
        I am using DataTables to display the resources in a searchable and sortable table. The application is built using HTML, CSS, and JavaScript.
      </p>

      <a href="https://resources.codesociety.xyz/" target="_blank" rel="noreferrer noopener" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
        Check the webpage <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
      </a>

      <hr className="h-px my-8 mb-0 bg-black border-0 separator" />

      <div className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div key={0}>
            <img
              className="rounded-lg"
              src={"/screenshot.png"}
              alt={"Resource Page"}
              style={{ cursor: "pointer", maxWidth: "100%" }}
              onClick={() => enlargeImage("/screenshot.png")}
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
    </>
  )
}