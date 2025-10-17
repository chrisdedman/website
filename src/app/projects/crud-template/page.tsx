"use client"

import React, { useState } from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function Crud() {
  return (
    <div className="min-h-screen flex-col p-4 lg:p-8 mt-16">
      <Menu />
      <div className="p-4 max-w-6xl mx-auto flex-grow">
        <h5 className="mb-2 text-2xl font tracking-tight">
          <a href="/projects" className="underline">Projects</a>{" > "}CRUD Template with Golang
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
    { src: '/dashboard_crud.png', alt: 'Dashboard CRUD Image' },
    { src: '/login_crud.png', alt: 'Login CRUD Image' },
    { src: '/register_crud.png', alt: 'Register CRUD Image' },
    { src: '/homepage_crud.png', alt: 'Homepage CRUD Image' },

  ];

  const [enlargedImage, setEnlargedImage] = useState("");

  const enlargeImage = (src: string) => {
    setEnlargedImage(src);
  };

  return (
    <>
      <h6 className="mt-4 text-xl font-bold font">Golang Template Web Application</h6>
      <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
      <p>
        A simple web application built with Golang and PostgreSQL. The application is a simple CRUD application that allows users to create, read, update, and delete users from a PostgreSQL database. A simple frontend is also included in the project to demonstrate the functionality of the application.
      </p>
      <p className="mt-4">
        The application is built using the following technologies:
      </p>
      <div className="ml-4">
        <p>- Golang</p>
        <p>- PostgreSQL</p>
        <p>- HTML/CSS/JavaScript</p>
      </div>

      <p className="mt-4">
        The application is structured in a way that makes it easy to understand and modify.
      </p>

      <div className="">
        <a href="https://github.com/chrisdedman/Golang-Web-App" target="_blank" rel="noreferrer noopener" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
          Get the Template  <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
        </a>
      </div>

      <hr className="h-px my-8 mb-0 bg-black border-0 separator" />

      <div>
        <h3>Template Gallery Images</h3>
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