"use client"

import React from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="h-screen p-8 lg:p-16 mt-16">
      <Menu />
      <div className="p-6">
        <div className="p-1">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">Projects</h5>
          <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mt-8">
            <a href="/deep-work">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Deep Work Timer</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700">
              Deep Working is a technique that helps you focus on a single task for a set amount of time. This timer helps you do just that!
            </p>
            <div className="flex justify-center">
              <a href="/deep-work" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                Try it!
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}