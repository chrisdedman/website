"use client"

import React from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="h-screen p-8 lg:p-16 mt-16">
      <Menu />
      <div className="p-6">
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">Projects</h5>
          <p className="mb-3 font-normal">
            Coming Soon...
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}