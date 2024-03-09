"use client"

import React from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function Cursif() {
  return (
    <div className="h-screen p-8 lg:p-16 mt-16 ">
      <Menu />
      <div className="p-6 border border-gray-200 rounded-lg shadow">
        <div className="p-1">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">Cursif ~ In Development</h5>
          <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
          <div>
            <address>By <a rel="author" href="/">Chris Dedman-Rollet</a></address>
            on <time dateTime="03-08-2024" title="March 8th, 2024">03-08-2024</time>
            <Article />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Article() {
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
      <a href="https://github.com/Code-Society-Lab/cursif" target="_blank" rel="noreferrer noopener" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
        Check the repository <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
      </a>
    </>
  )
}