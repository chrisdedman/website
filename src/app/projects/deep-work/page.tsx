"use client"
import React from "react";
import Menu from "@/components/navigation";
import MyTimer from '@/components/timer/timer';
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen flex-col p-4 lg:p-8 mt-16">
      <Menu />
      <div className="p-4 max-w-6xl mx-auto flex-grow">
        <h5 className="mb-2 text-2xl font tracking-tight">
          <a href="/projects" className="underline">Projects</a>{" > "}Deep Work
        </h5>
        <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
        <MyTimer />
      </div>
      <Footer />
    </div>
  );
}