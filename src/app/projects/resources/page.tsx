"use client"

import React from "react";
import Link from 'next/link';
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import ImageGallery from '@/components/image-gallery';
import ProjectLayout from '@/components/project-layout';


export default function Resource() {
  return (
    <ProjectLayout>
      <h5 className="mb-2 text-2xl font tracking-tight">
        <Link href="/projects" className="underline">Projects</Link>{" > "}Resource Library
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
    { src: '/screenshot.png', alt: 'Resource Page', width: 800, height: 500 },
  ];
  return (
    <>
      <h6 className="mt-4 text-xl font-bold font">Code Society Library Resources</h6>
      <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
      <p className="mt-4">
        This project is a web page that allows users to search for resources by category and keyword.
        The user can also add new resources to the library by adding to the GitHub <a className="underline" href="https://github.com/Code-Society-Lab/resources/blob/main/README.md" target="_blank" rel="noreferrer noopener">README</a> file, which then will be displayed on the webpage.
      </p>
      <p className="mt-4">
        The library is a collection of resources put together by the members of the <a className="underline" href="https://codesociety.xyz" target="_blank" rel="noreferrer noopener">Code Society</a> for
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

      <ImageGallery images={images} className="mt-4" />
    </>
  )
}
