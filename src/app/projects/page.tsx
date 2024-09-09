"use client"

import React from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function Page() {
  return (
    <div className="h-screen p-4 lg:p-8 mt-16">
      <Menu />

      <div className="p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">Projects</h5>
        <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

          <div className="lg:w-100 mb-4 lg:mb-0">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mt-8">
              <a href="/projects/astroid">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Near Earth Object, Daily Tracker</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                This web app allows users to retrieve and display daily information about Near Earth Objects (NEOs). NEOs are asteroids and comets with orbits that come close to Earth&apos;s orbit.
              </p>
              <a href="/projects/asteroid" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                Read More <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
              </a>
            </div>
          </div>

          <div className="lg:w-100 mb-4 lg:mb-0">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mt-8">
              <a href="/projects/resources">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Resource Library</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                This project is a web page that allows users to search for resources by category and keyword. The user can also add new resources to the library by adding to the GitHub README file, which then will be displayed on the webpage.
              </p>
              <a href="/projects/resources" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                Read More <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
              </a>
            </div>
          </div>

          <div className="lg:w-100 mb-4 lg:mb-12">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mt-8">
              <a href="/projects/cursif">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Cursif</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                A collaborative, scriptable note taking application. Cursif is yet another note-taking application that adds an exciting twist to your productivity.
              </p>
              <a href="/projects/cursif" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                Read More <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
              </a>
            </div>
          </div>

          <div className="lg:w-100 mb-4 lg:mb-16">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mt-8">
              <a href="/projects/deep-work">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Deep Work Timer</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                Deep Working is a technique that helps you focus on a single task for a set amount of time. This timer helps you do just that!
              </p>
              <a href="/projects/deep-work" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                Try it! <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
              </a>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}