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
      <h5 className="mb-2 text-2xl font-bold tracking-tight flex justify-center">Aspiring Software Engineer</h5>
      <p className="mb-3">
        My name is Christopher Dedman Rollet! I recently graduated (May 2025) with a Bachelor of Science in
        Computer Science, and I&apos;m proud to be a first-generation college graduate. I bring a strong passion
        for programming and a deep curiosity for learning new technologies.
      </p>
      <p className="mb-3">
        I&#39;ve gained hands-on experience in Python, C, C++, Java, JavaScript, Elixir, and Go, and I&#39;ve studied the fundamentals of Assembly
        Language (MASM). My current focus is on embedded systems software engineering and low-level programming (using C and ARM Assembly).
      </p>
      <p className="mb-3">
        Beyond my technical skills, I&#39;m also a quick learner, a critical thinker, and a problem-solver.
        As a student, I excelled in my coursework and took on independent projects, including contributions
        to open-source initiatives, that helped me refine my abilities.
      </p>
      <p className="mb-3">
        Now that I&#39;ve graduated, I&#39;m eager to apply my skills to real-world challenges and am actively seeking an entry-level software engineering
        role where I can continue to grow and make an impact.
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
