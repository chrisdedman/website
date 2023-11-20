"use client"
import React from "react";
import Menu from "@/components/navigation";
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

export default function Page() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Menu />
      <div className="text-center rocket-container">
        <RocketLaunchIcon className="w-8 h-8 rocket spin-on-hover" />
        <h1 className="text-5xl font-bold">Hi, This is</h1>
        <h1 className="text-5xl font-bold">Chris Dedman</h1>
        <div className="flex justify-center">
          <div className="w-64 h-1 bg-red-600 rounded mt- mb-4"></div>
        </div>
        <p className="text-2xl font-light mb-8">Computer Scientist Student</p>
      </div>
    </div>
  );
}