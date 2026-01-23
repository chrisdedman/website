import type { Metadata } from 'next';
import Link from 'next/link';
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import ProjectLayout from '@/components/project-layout';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Open source contributions, personal projects, and research highlights from Chris Dedman.',
};

export default function Page() {
  return (
    <ProjectLayout>
        {
        /*
         ************************************
         * Open Source Contributions Section *
         *************************************
         */
         }
        <h5 className="mb-2 text-2xl font tracking-tight">Open Source Contributions</h5>
        <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-stretch">

          <div className="w-full">
            <div className="project-card max-w-sm h-full flex flex-col justify-between p-6 border rounded-lg">
              <Link href="/projects/astra-kernel">
                <h5 className="mb-2 text-2xl font-bold tracking-tight project-card-title text-center">AstraKernel</h5>
              </Link>
              <p className="mb-3 project-card-text">
                AstraKernel is a minimal experimental kernel written in modern C
                and ARM Assembly. Designed to run on QEMU&apos;s Versatile AB/PB board with a Cortex-A8 CPU override.
              </p>
              <div className="text-center">
                <Link href="/projects/astra-kernel" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Read More <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="project-card max-w-sm h-full flex flex-col justify-between p-6 border rounded-lg">
              <Link href="/projects/code-astra">
                <h5 className="mb-2 text-2xl font-bold tracking-tight project-card-title text-center">CodeAstra</h5>
              </Link>
              <p className="mb-3 project-card-text">
                CodeAstra is a fast, extensible, and lightweight C++/Qt6 code editor inspired by NeoVim and VSCode.
              </p>
              <div className="text-center">
                <Link href="/projects/code-astra" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Read More <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="project-card max-w-sm h-full flex flex-col justify-between p-6 border rounded-lg">
              <Link href="/projects/cursif">
                <h5 className="mb-2 text-2xl font-bold tracking-tight project-card-title text-center">Cursif</h5>
              </Link>
              <p className="mb-3 project-card-text">
                A collaborative, scriptable note taking application. Cursif is
                yet another note-taking application that adds an exciting twist
                to your productivity.
              </p>
              <div className="text-center">
                <Link href="/projects/cursif" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Read More <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="project-card max-w-sm h-full flex flex-col justify-between p-6 border rounded-lg">
              <Link href="/projects/matrixpy">
                <h5 className="mb-2 text-2xl font-bold tracking-tight project-card-title text-center">Matrix.py</h5>
              </Link>
              <p className="mb-3 project-card-text">
                Matrix.py is a lightweight and intuitive Python library to build bots
                on the Matrix protocol. It provides a clean, decorator-based API
                similar to popular event-driven frameworks, allowing developers to focus on behavior rather than boilerplate.
              </p>
              <div className="text-center">
                <Link href="/projects/matrixpy" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Read More <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="w-full">
            <div className="project-card max-w-sm h-full flex flex-col justify-between p-6 border rounded-lg">
              <Link href="/projects/capski">
                <h5 className="mb-2 text-2xl font-bold tracking-tight project-card-title text-center">Capski</h5>
              </Link>
              <p className="mb-3 project-card-text">
                Capski is a Rust-based command-line tool for creating karaoke-style videos with real-time subtitles.
              </p>
              <div className="text-center">
                <Link href="/projects/capski" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Read More <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {
        /*
         ********************
         * Projects Section *
         ********************
         */
         }
        <h5 className="mb-2 text-2xl font tracking-tight mt-4">Projects</h5>
        <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-stretch">
          <div className="w-full">
            <div className="project-card max-w-sm h-full flex flex-col justify-between p-6 border rounded-lg">
              <Link href="/projects/astra-pulse">
                <h5 className="mb-2 text-2xl font-bold tracking-tight project-card-title text-center">AstraPulse</h5>
              </Link>
              <p className="mb-3 project-card-text">
                A minimalist desktop native timer app designed for simplicity and ease of use.
              </p>
              <div className="text-center">
                <Link href="/projects/astra-pulse" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Read More <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="project-card max-w-sm h-full flex flex-col justify-between p-6 border rounded-lg">
              <Link href="/projects/asteroid">
                <h5 className="mb-2 text-2xl font-bold tracking-tight project-card-title text-center">Near Earth Object, Daily Tracker</h5>
              </Link>
              <p className="mb-3 project-card-text">
                This web app allows users to retrieve and display daily
                information about Near Earth Objects (NEOs). NEOs are asteroids
                and comets with orbits that come close to Earth&apos;s orbit.
              </p>
              <div className="text-center">
                <Link href="/projects/asteroid" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Read More <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="project-card max-w-sm h-full flex flex-col justify-between p-6 border rounded-lg">
              <Link href="/projects/resources">
                <h5 className="mb-2 text-2xl font-bold tracking-tight project-card-title text-center">Resource Library</h5>
              </Link>
              <p className="mb-3 project-card-text">
                This project is a web page that allows users to search for
                resources by category and keyword. The user can also add new
                resources to the library by adding to the GitHub README file,
                which then will be displayed on the webpage.
              </p>
              <div className="text-center">
                <Link href="/projects/resources" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Read More <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="project-card max-w-sm h-full flex flex-col justify-between p-6 border rounded-lg">
              <Link href="/projects/deep-work">
                <h5 className="mb-2 text-2xl font-bold tracking-tight project-card-title text-center">Deep Work Timer</h5>
              </Link>
              <p className="mb-3 project-card-text">
                Deep Working is a technique that helps you focus on a single
                task for a set amount of time. This timer helps you do just that!
              </p>
              <div className="text-center">
                <Link href="/projects/deep-work" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Try it! <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="project-card max-w-sm h-full flex flex-col justify-between p-6 border rounded-lg">
              <Link href="/projects/qrcode">
                <h5 className="mb-2 text-2xl font-bold tracking-tight project-card-title text-center">QR Code Generator</h5>
              </Link>
              <p className="mb-3 project-card-text">
                Make your own QR Code quickly and easily, with full visibility
                and no concealed data.
              </p>
              <div className="text-center">
                <Link href="/projects/qrcode" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Try it! <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="project-card max-w-sm h-full flex flex-col justify-between p-6 border rounded-lg">
              <Link href="/projects/crud-template">
                <h5 className="mb-2 text-2xl font-bold tracking-tight project-card-title text-center">CRUD Web Template</h5>
              </Link>
              <p className="mb-3 project-card-text">
                A boilerplate template for quickly setting up a full-stack web application using Go with backend APIs, database integration, and frontend setup.
              </p>
              <div className="text-center">
                <Link href="/projects/crud-template" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Try it! <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {
        /*
         ************************
         * Achievements Section *
         ************************
         */
         }
        <h5 className="mb-2 text-2xl tracking-tight mt-4">Achievements</h5>
        <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-stretch">
          <div className="w-full">
            <div className="project-card max-w-sm h-full flex flex-col justify-between p-6 border rounded-lg">
              <Link href="/projects/research">
                <h5 className="mb-2 text-2xl font-bold tracking-tight project-card-title text-center">Research - Computational BioPhysics</h5>
              </Link>
              <p className="mb-3 project-card-text">
                Contributed to the development of a computational tool for
                automating the geometric partitioning of biological molecules
                into coarse-grained models, enabling efficient simulations of
                complex molecular interactions. Focused on design and
                optimization of algorithm and software implementation in Java.
              </p>
              <div className="text-center">
                <Link href="/projects/research" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Learn more! <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="project-card max-w-sm h-full flex flex-col justify-between p-6 border rounded-lg">
              <Link href="/projects/research-ai">
                <h5 className="mb-2 text-2xl font-bold tracking-tight project-card-title text-center">Research - AI/ML</h5>
              </Link>
              <p className="mb-3 project-card-text">
                Classify cancer subtypes using gene expression data.
                Unsupervised learning techniques, such as clustering and
                dimensionality reduction, were used along with supervised
                models like Decision Trees and Random Forests on the TCGA
                Pan-Cancer dataset.
              </p>
              <div className="text-center">
                <Link href="/projects/research-ai" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Learn more! <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
    </ProjectLayout>
  );
}
