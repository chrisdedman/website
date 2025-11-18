import React from "react";
import Image from "next/image";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function AboutMe() {
  return (
    <div className="p-4">
      <div className="mb-3 font-normal flex justify-center">
        <Image
          className="rounded-full"
          src="/me.jpg"
          alt="Picture of the author"
          width={300}
          height={300}
        />
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight flex justify-center">Software Engineer</h5>
      <p className="mb-3">
        Hi, I&#39;m Chris Dedman, a software engineer passionate about building software and exploring how computers work at every level. I earned my Bachelor of Science in Computer Science from California State University, Dominguez Hills in 2025 and am currently pursuing my Master of Science in Computer Science at California State University, Long Beach.
      </p>
      <p className="mb-3">
        During undergrad, I had the opportunity to intern twice at Uber. My first project involved improving the company&#39;s internal web framework, Fusion.JS, through load testing and performance comparisons. In my second internship, I designed and implemented a new SQL table to centralize metadata within a pipeline, reducing redundant processes and streamlining data access.
      </p>
      <p className="mb-3">
        Beyond my internships, I served as the open-source coordinator for my campus club. I shared my industry experience with club members, encouraged contributions to open-source projects I created, and organized workshops on tools like Git, GitHub, and Docker. The purpose was to give students practical experience, build portfolios, and understand the importance of collaborative software development.
      </p>
      <p className="mb-3">
        Open-source development is a big part of my life. I contribute to multiple projects and maintain my own, including a kernel built from scratch in modern C and ARM assembly to run on the QEMU simulator. This project helps me explore low-level computing concepts and deepen my understanding of how software interacts with hardware. I also use my open-source projects to give other students hands-on experience with real-world software engineering practices.
      </p>
      <p className="mb-3">
        I&#39;m always looking for opportunities to learn, collaborate, and build software that not only solves problems but also helps others to grow as developers.
      </p>

      <a
        href="mailto:chrisdedman@proton.me"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Email Me <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
      </a>
    </div>
  );
}
