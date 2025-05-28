import React from "react";

export default function Educations() {
  return (
    <div className="p-1">
      <h5 className="mb-2 text-m font-bold tracking-tight">Educations</h5>
      <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
      <div className="mb-3 font-normal">
        <strong>California State University, Dominguez Hills</strong>
        <p className="text-sm font-light">Bachelor of Science, Computer Science (Graduated with Honor <b>Summa Cum Laude</b>)</p>
        <p className="text-sm font-light italic">January 2023 - May 2025</p>
        <p className="text-sm font-light font">
          As a student at California State University, Dominguez Hills, I have completed several computer science courses, 
          including Software Development in java, Data Structure, Design and Analysis of Algorithms, Database Management, 
          Operating System, Software Engineering, Computer Organisation, Finite Automata, and Security Engineering.
          I have also completed Probability & Statistics, and Physics 1 and 2 courses.
        </p>
      </div>

      <div className="mb-3 font-normal">
        <strong>El Camino College</strong>
        <p className="text-sm font-light">Certificate of Achievement with Honor, Computer Science</p>
        <p className="text-sm font-light italic">July 2021 - June 2023</p>
        <p className="text-sm font-light font">
          As a student at El Camino College, I have completed several computer science courses,
          including Data Structures and Algorithms, Assembly Language, and Intro to C++, Intro do Java.
          I have also completed several courses, including English, Calculus 1 & 2, Discret Mathemathics, and Cisco Network Engineering (CCNA).
        </p>
      </div>
    </div>
  );
}
