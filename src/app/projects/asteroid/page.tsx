"use client"

import React from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'

export default function Asteroid() {
  return (
    <div className="h-screen p-4 lg:p-8 mt-16 ">
      <Menu />
      <div className="p-4 border border-gray-200 rounded-lg shadow">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">Near Earth Object Tracker</h5>
        <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
        <div>
          <address>By <a rel="author" href="/">Chris Dedman-Rollet</a></address>
          on <time dateTime="03-07-2024" title="March 7th, 2024">03-07-2024</time>
          <Article />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Article() {
  return (
    <>

    </>
  )
}