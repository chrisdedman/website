"use client"

import React, { useState } from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function Cursif() {
  return (
    <div className="min-h-screen flex-col p-4 lg:p-8 mt-16">
      <Menu />
      <div className="p-4 max-w-6xl mx-auto flex-grow">
        <h5 className="mb-2 text-2xl font tracking-tight">
          <a href="/projects" className="underline">Open Source Contributions</a>{" > "}Cursif
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
    { src: '/homepage.png', alt: 'Cursif Homepage' },
    { src: '/login.png', alt: 'Cursif Login Page' },
    { src: '/dashboard.png', alt: 'Cursif Notebook Dashboard' },
    { src: '/dashboard-page.png', alt: 'Cursif Dashboard Pages' },
    { src: '/markdown-editor.png', alt: 'Cursif Markdown Editor' },
    { src: '/update-notebook.png', alt: 'Cursif Update Notebook' },
    { src: '/create-notebook.png', alt: 'Cursif Create Notebook' },
    { src: '/navigation-page.png', alt: 'Cursif Navigation Pages' },
  ];

  const [enlargedImage, setEnlargedImage] = useState("");

  const enlargeImage = (src: string) => {
    setEnlargedImage(src);
  };

  return (
    <>
      <p>
        Cursif is yet another note-taking application that adds an exciting twist to your productivity.
        Unlike conventional tools, Cursif empowers you with scriptable notes, allowing you to craft personalized macros for streamlined note automation.
        Currently under heavy development, it&#39;s being crafted by the talented team at the Code Society Lab on discord.
      </p>
      <p>
        I&#39;ve been deeply involved in this endeavor since the summer of 2023, collaborating with an international group of developers.
        Our tech stack includes TypeScript with Next.js and Apollo for the frontend, and Elixir with Phoenix plus Absinthe, and PostgreSQL for the backend.
      </p>

      <p>
        As one of the primary full-stack developers on the project, my contributions include:
      </p>
      <hr className="h-px my-8 mb-0 bg-black border-0 separator" />
      <h3>Backend Contributions:</h3>
      <ul>
        <li>Developed functionality to create and manage macros, enhancing user productivity.</li>
        <li>Implemented features for creating and managing collaborators, fostering effective collaboration within the application.</li>
        <li>Designed systems to manage user information efficiently, ensuring data integrity and security.</li>
        <li>Implemented rate limiting on API responses, optimizing performance and resource management.</li>
        <li>Incorporated email validation for user registration, ensuring data accuracy and security.</li>
        <li>Developed password reset functionality to enhance user account security.</li>
      </ul>
      <hr className="h-px my-8 mb-0 bg-black border-0 separator" />
      <h3>Frontend Contributions:</h3>
      <ul>
        <li>Implemented notification and alert message systems to keep users informed about important events and updates.</li>
        <li>Designed and integrated a disclaimer banner to communicate the state of development to users.</li>
        <li>Implemented email address confirmation feature to enhance account security and user verification.</li>
        <li>Designed and developed the registration page to streamline the user onboarding process.</li>
        <li>Created the password reset page to provide users with a seamless experience for resetting their passwords.</li>
      </ul>
      <hr className="h-px my-8 mb-0 bg-black border-0 separator" />
      <p>
        I&#39;m excited to see this project through to completion and to share it with the world.
        You can expect to see more updates on Cursif as we continue to develop and refine the application.
      </p>
      <p>
        You can see more about the project and my work at the <a href="https://github.com/Code-Society-Lab/cursif" target="_blank" rel="noreferrer noopener">Cursif</a> GitHub repository.
        Stay tuned for updates!
      </p>

      <div className="">
        <a href="https://cursif.codesociety.xyz/" target="_blank" rel="noreferrer noopener" className="inline-flex items-center px-3 py-2 mr-10 mb-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
          Check the app  <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
        </a>

        <a href="https://github.com/Code-Society-Lab/cursif" target="_blank" rel="noreferrer noopener" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
          Check the repository <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
        </a>
      </div>


      <hr className="h-px my-8 mb-0 bg-black border-0 separator" />

      <div>
        <h3>Cursif Development Gallery Images</h3>
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