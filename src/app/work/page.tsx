"use client"

import React from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function Page() {
  return (
    <div className="h-screen p-8 lg:p-16 mt-16">
      <Menu />
      <div className="flex items-center justify-center">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
          <a href="/work/uber">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Uber ~ Software Engineering</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700">
            First summer internship as a software engineer with Uber and Growth Platform/DOCTOM Team.
          </p>
          <a href="/work/uber" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
            Read more <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}