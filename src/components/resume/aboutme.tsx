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
        Hi, I&#39;m Chris Dedman, a software engineer with experience building full-stack applications, internal tools, and backend systems. I earned my B.S. in Computer Science from California State University, Dominguez Hills in 2025 and I&#39;m currently pursuing an M.S. in Computer Science at California State University, Long Beach.
      </p>
      <p className="mb-3">
        I&#39;ve worked across web performance, data engineering, observability, and product development through internships at Uber and my current role at Profound. Outside of work, I contribute to open-source projects and enjoy building systems from the ground up, which has strengthened both my technical skill and curiosity as an engineer.
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
