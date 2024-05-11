import React from "react";

export default function Experiences() {
  return (
    <div className="p-1">
      <h5 className="mb-2 text-m font-bold tracking-tight">Experiences</h5>
      <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
      <div className="mb-3 font-normal">
        <strong>Uber</strong>
        <p className="text-sm font-light">UberSTAR Software Engineer Intern</p>
        <p className="text-sm font-light italic">June 2023 - September 2023</p>
        <p className="text-sm font-light font-montez">
          During my time as a UberSTAR Software Engineer Intern at Uber, I was responsible for leading initiatives such as load testing and deploying web services,
          with the goal of enhancing the performance of Fusion.js. The primary objective of these initiatives was to improve server throughput while maintaining a 300ms latency and 1% error rate for P99.
          I developed a consistent and repeatable way to measure and analyze the performance of web applications at Uber by creating hypotheses and testing them to identify signals.
          I conducted research on systematic approaches for analyzing web server performance based on the 4 Golden Signals: Latency, Traffic, Errors, and Saturation.
          I used Uber&apos;s Ballast tool for automated testing and contributed to significant cost savings. Additionally, I took the initiative to streamline the execution
          of Ballast tests directly from within Uber&apos;s development environment, simplifying the process and enhancing efficiency.
          I facilitated continuous service creation and played a crucial role in process improvement through comprehensive documentation.
        </p>
      </div>

      <div className="mb-3 font-normal">
        <strong>El Camino College</strong>
        <p className="text-sm font-light">Teacher Assistant / Tutor</p>
        <p className="text-sm font-light italic">June 2022 - January 2023</p>
        <p className="text-sm font-light font-montez">
          As a Teacher/Student Assistant for computer science major students at El Camino College,
          I provided valuable support in facilitating learning, assisting students in their educational journey.</p>
      </div>

      <div className="mb-3 font-normal">
        <strong>NASA L&#39;SPACE</strong>
        <p className="text-sm font-light">Proposal Writing & Evaluation Intern</p>
        <p className="text-sm font-light italic">May 2021 - July 2021</p>
        <p className="text-sm font-light font-montez">Worked with a team of student from different background. Learned to effectively write a concept proposal that turns innovative ideas into reality,
          and gained experience in the process of writing, reviewing, and scoring proposals through the lens of a NASA reviewer.</p>
      </div>

      <div className="mb-3 font-normal">
        <strong>Robert Half</strong>
        <p className="text-sm font-light">Operation IT Support Tech</p>
        <p className="text-sm font-light italic">October 2020 - September 2021</p>
        <p className="text-sm font-light font-montez">
          As a contractor with Robert Half, I played a crucial role in setting up and maintaining
          the Los Angeles County Voting Systems for multiple elections throughout 2020 and 2021.
          Additionally, I seized the opportunity to expertly de-rack and rack servers for T5 Data Center in El Segundo, CA.
        </p>
      </div>
    </div>
  );
}