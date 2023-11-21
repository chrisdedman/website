import React from "react";

export default function Educations() {
  return (
    <div className="p-1 mt-6">
      <div className="p-0">
        <h5 className="mb-2 text-m font-bold tracking-tight">Educations</h5>
        <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
        <div className="mb-3 font-normal">
          <strong>California State University, Dominguez Hills</strong>
          <p className="text-sm font-light">Bachelor of Science, Computer Science</p>
          <p className="text-sm font-light italic">January 2023 - May 2025</p>
          <p className="text-sm font-light font-montez">
            As a student at California State University, Dominguez Hills, I am pursuing a Bachelor of Science degree in Computer Science.
            I am currently taking courses in Data Structures, Computer Organization, and Probability.
          </p>
        </div>

        <div className="mb-3 font-normal">
          <strong>El Camino College</strong>
          <p className="text-sm font-light">Certificate of Achievement, Computer Science</p>
          <p className="text-sm font-light italic">July 2021 - June 2023</p>
          <p className="text-sm font-light font-montez">
            As a student at El Camino College, I have completed several computer science courses,
            including Data Structures, Assembly Language, and Computer Architecture.
            I have also completed several general education courses, including English and Mathematics.
          </p>
        </div>
      </div>
    </div>
  );
}
