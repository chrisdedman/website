"use client"

import React from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function Page() {
  return (
    <div className="min-h-screen flex-col p-4 lg:p-8 mt-16">
      <Menu />
      <div className="p-4 max-w-6xl mx-auto flex-grow">
        <h5 className="mb-2 text-2xl font tracking-tight">Open Source Contributions</h5>
        <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 items-stretch">
          <div className="w-full lg:w-100 mb-4 lg:mb-0">
            <div className="max-w-sm h-full flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow mt-8">
              <a href="/projects/cursif">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Cursif</h5>
              </a>
              <p className="mb-3 text-gray-700">
                A collaborative, scriptable note taking application. Cursif is
                yet another note-taking application that adds an exciting twist
                to your productivity.
              </p>
              <div className="text-center">
                <a href="/projects/cursif" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Read More <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-100 mb-4 lg:mb-0">
            <div className="max-w-sm h-full flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow mt-8">
              <a href="/projects/code-astra">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">CodeAstra</h5>
              </a>
              <p className="mb-3 text-gray-700">
                CodeAstra is a fast, extensible, and lightweight C++/Qt6 code editor inspired by NeoVim and VSCode.
              </p>
              <div className="text-center">
                <a href="/projects/code-astra" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Read More <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-100 mb-4 lg:mb-0">
            <div className="max-w-sm h-full flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow mt-8">
              <a href="/projects/astra-kernel">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">AstraKernel</h5>
              </a>
              <p className="mb-3 text-gray-700">
                AstraKernel is a minimal experimental kernel written in modern C
                and ARM Assembly. Designed to run on QEMU&#39;s VersatilePB
                (ARM926EJ-S) emulated platform.
              </p>
              <div className="text-center">
                <a href="/projects/astra-kernel" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Read More <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-100 mb-16 lg:mb-12">
            <div className="max-w-sm h-full flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow mt-8">
              <a href="/projects/matrixpy">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Matrix.py</h5>
              </a>
              <p className="mb-3 text-gray-700">
                Matrix.py is a lightweight and intuitive Python library to build bots
                on the Matrix protocol. It provides a clean, decorator-based API
                similar to popular event-driven frameworks, allowing developers to focus on behavior rather than boilerplate.
              </p>
              <div className="text-center">
                <a href="/projects/matrixpy" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Read More <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <h5 className="mb-2 text-2xl font tracking-tight">Projects</h5>
        <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 items-stretch">
          <div className="w-full lg:w-100 mb-4 lg:mb-0">
            <div className="max-w-sm h-full flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow mt-8">
              <a href="/projects/asteroid">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Near Earth Object, Daily Tracker</h5>
              </a>
              <p className="mb-3 text-gray-700">
                This web app allows users to retrieve and display daily
                information about Near Earth Objects (NEOs). NEOs are asteroids
                and comets with orbits that come close to Earth&apos;s orbit.
              </p>
              <div className="text-center">
                <a href="/projects/asteroid" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Read More <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-100 mb-4 lg:mb-0">
            <div className="max-w-sm h-full flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow mt-8">
              <a href="/projects/resources">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Resource Library</h5>
              </a>
              <p className="mb-3 text-gray-700">
                This project is a web page that allows users to search for
                resources by category and keyword. The user can also add new
                resources to the library by adding to the GitHub README file,
                which then will be displayed on the webpage.
              </p>
              <div className="text-center">
                <a href="/projects/resources" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Read More <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-100 mb-4 lg:mb-0">
            <div className="max-w-sm h-full flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow mt-8">
              <a href="/projects/deep-work">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Deep Work Timer</h5>
              </a>
              <p className="mb-3 text-gray-700">
                Deep Working is a technique that helps you focus on a single
                task for a set amount of time. This timer helps you do just that!
              </p>
              <div className="text-center">
                <a href="/projects/deep-work" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Try it! <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-100 mb-16 lg:mb-12">
            <div className="max-w-sm h-full flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow mt-8">
              <a href="/projects/qrcode">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">QR Code Generator</h5>
              </a>
              <p className="mb-3 text-gray-700">
                Make your own QR Code quickly and easily, with full visibility
                and no concealed data.
              </p>
              <div className="text-center">
                <a href="/projects/qrcode" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Try it! <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <h5 className="mb-2 text-2xl tracking-tight">Achievements</h5>
        <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 items-stretch">
          <div className="w-full lg:w-100 mb-4 lg:mb-8">
            <div className="max-w-sm h-full flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow mt-8">
              <a href="/projects/research">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Research - Computational BioPhysics</h5>
              </a>
              <p className="mb-3 text-gray-700">
                Contributed to the development of a computational tool for
                automating the geometric partitioning of biological molecules
                into coarse-grained models, enabling efficient simulations of
                complex molecular interactions. Focused on design and
                optimization of algorithm and software implementation in Java.
              </p>
              <div className="text-center">
                <a href="/projects/research" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Learn more! <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-100 mb-4 lg:mb-8">
            <div className="max-w-sm h-full flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow mt-8">
              <a href="/projects/research-ai">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Research - AI/ML</h5>
              </a>
              <p className="mb-3 text-gray-700">
                Classify cancer subtypes using gene expression data.
                Unsupervised learning techniques, such as clustering and
                dimensionality reduction, were used along with supervised
                models like Decision Trees and Random Forests on the TCGA
                Pan-Cancer dataset.
              </p>
              <div className="text-center">
                <a href="/projects/research-ai" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Learn more! <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}