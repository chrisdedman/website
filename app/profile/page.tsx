"use client"

import React from "react";
import Image from "next/image";
import Menu from '@/components/navigation'
import Experiences from "@/components/resume/experience";
import Educations from "@/components/resume/education";
import Honors from "@/components/resume/honors";
import Skills from "@/components/resume/skills";
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="h-screen p-8 lg:p-16 mt-16">
      <Menu />
      <AboutMe />
      <hr className="h-px my-8 bg-black border-0 dark:bg-white" />
      <p className="text-sm font-montez">resume</p>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/3 mb-4 lg:mb-0">
          <Educations />
        </div>
        <div className="lg:w-1/3 mb-4 lg:mb-0">
          <Experiences />
        </div>
        <div className="lg:w-1/3">
          <div className="lg:flex lg:flex-col">
            <Skills />
            <Honors />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function AboutMe() {
  return (
    <div className="p-6">
      <Image
        src="/me.jpg"
        alt="Picture of the author"
        width={300}
        height={300}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold font-montez tracking-tight">Computer Science Student</h5>
        <p className="mb-3 font-normal font-montez">
          My name is Christopher Dedman-Rollet! I am a computer science student currently pursuing a Bachelor of Science degree.
          I have a strong passion for programming and a deep interest in learning and exploring the field.
          I have experience with several languages, including Python, C/C++, Java, JavaScript, Elixir, and Golang.
          I have also learned the fundamentals of Assembly Language (MASM).
          In addition to my technical skills, I am also a quick learner, a critical thinker, and a problem-solver.
          I am eager to apply my knowledge and skills to real-world projects and to continue growing as a programmer.
          As a student, I have completed several programming-related courses and have consistently received high marks for my work.
          In addition, I have also completed several independent projects, including contributing to open-source projects.
          I am constantly seeking out opportunities to learn and grow, and I am
          looking for internship opportunities that will allow me to gain practical experience in the field.
        </p>
        <a href="mailto:cdedmanrollet1@toromail.csudh" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Email Me
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  )
}