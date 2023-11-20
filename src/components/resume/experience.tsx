import React from "react";

export default function Experiences() {
  return (
    <div className="p-6">
      <div className="p-5">
        <h5 className="mb-2 text-m font-bold tracking-tight">Experiences</h5>
        <div className="mb-3 font-normal">
          <strong>Uber</strong>
          <p className="text-sm font-light">Software Engineer Intern</p>
          <p className="text-sm font-light italic">June 2023 - September 2023</p>
          <p className="text-sm font-light font-montez">
            As a Software Engineer Intern at Uber, I led initiatives like load testing and
            deploying web services, enhancing Fusion.js' performance.
            I researched systematic approaches for analyzing web application performance,
            automated testing with Uber's Ballast tool, and contributed to significant cost savings.
            Proficient in tools like Typescript, JavaScript, JIRA, Docker, and CI/CD pipelines,
            I facilitated continuous service creation and played a crucial role in process improvement through comprehensive documentation.
          </p>
        </div>

        <div className="mb-3 font-normal">
          <strong>El Camino College</strong>
          <p className="text-sm font-light">Teacher Assistant / Tutor</p>
          <p className="text-sm font-light italic">June 2022 - January 2023</p>
          <p className="text-sm font-light font-montez">
            As a Teacher/Student Assistant for the computer science major at El Camino College,
            I provided valuable support in facilitating learning, assisting both teachers and students in their educational journey.</p>
        </div>

        <div className="mb-3 font-normal">
          <strong>NASA L'SPACE</strong>
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
    </div>
  );
}