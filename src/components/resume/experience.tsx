import React from "react";

export default function Experiences() {
  return (
    <div className="p-4">
      <h5 className="mb-2 text-m tracking-tight">Experiences</h5>
      <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
      <div className="mb-3">
        <strong>Uber</strong>
        <p className="text-sm">Software/Data Engineering Intern</p>
        <p className="text-sm font-light italic">May 2024 - August 2024</p>
        <p className="text-sm font-light">
          During my second Software Engineering internship at Uber on the AdTech team, I focused on data engineering project. I designed and implemented a new SQL table to centralize duplicated metadata storage, eliminating redundancy across multiple tables and improving codebase efficiency by 30%. I developed and optimized Python scripts to automate CI pipelines, merging data from multiple sources into the centralized table and increasing data aggregation speed by 50%. This involved designing the database schema, writing SQL queries, and performing rigorous data validation to ensure data accuracy and reliability. Additionally, I implemented sensors to establish data dependencies, maintaining integrity and consistency across data sources. Throughout the project, I maintained proactive communication with stakeholders, staying aligned with evolving requirements and demonstrating a detail-oriented approach across the data lifecycle.
        </p>
        <p className="text-sm">UberSTAR Software Engineering Intern</p>
        <p className="text-sm font-light italic">June 2023 - September 2023</p>
        <p className="text-sm font-light">
          During my Software Engineering Internship at Uber on the DOTCOM team, I led initiatives to load test and deploy web services with the goal of optimizing Fusion.js performance. My work focused on improving server throughput while maintaining a 300ms latency and 1% P99 error rate. I developed a consistent, repeatable methodology to measure and analyze web application performance, forming hypotheses and testing them to extract meaningful signals. I conducted research on systematic approaches to server performance analysis using the Four Golden Signals: Latency, Traffic, Errors, and Saturation. Leveraging Uber&apos;s Ballast tool, I automated performance testing, contributing to substantial cost savings, and streamlined test execution directly within the development environment, improving efficiency by 150%. Additionally, I facilitated continuous service creation and drove process improvements through comprehensive documentation.
        </p>
      </div>

      <div className="mb-3">
        <strong>El Camino College</strong>
        <p className="text-sm">Teacher Assistant / Tutor</p>
        <p className="text-sm font-light italic">June 2022 - January 2023</p>
        <p className="text-sm font-light">
          As a Teacher/Student Assistant for computer science major students at El Camino College,
          I provided valuable support in facilitating learning, assisting students in their educational journey.</p>
      </div>

      <div className="mb-3">
        <strong>NASA L&#39;SPACE</strong>
        <p className="text-sm">Proposal Writing & Evaluation Intern</p>
        <p className="text-sm font-light italic">May 2021 - July 2021</p>
        <p className="text-sm font-light">Worked with a team of student from different background. Learned to effectively write a concept proposal that turns innovative ideas into reality,
          and gained experience in the process of writing, reviewing, and scoring proposals through the lens of a NASA reviewer.</p>
      </div>

      <div className="mb-3">
        <strong>Robert Half</strong>
        <p className="text-sm">Operation IT Support Tech</p>
        <p className="text-sm font-light italic">October 2020 - September 2021</p>
        <p className="text-sm font-light">
          As a contractor with Robert Half, I played a crucial role in setting up and maintaining
          the Los Angeles County Voting Systems for multiple elections throughout 2020 and 2021.
          Additionally, I seized the opportunity to expertly de-rack and rack servers for T5 Data Center in El Segundo, CA.
        </p>
      </div>

      <div className="mb-3">
        <strong>Others</strong>
        <p className="text-sm">French Military / Butcher</p>
        <p className="text-sm font-light italic">August 2008 - December 2019</p>
        <p className="text-sm font-light">
          I have held various positions throughout my career before 2020, including serving in the French Military, and working as a butcher in France and Belgium.
          These experiences have helped me develop a strong work ethic, problem-solving skills, and the ability to work effectively in a team in high-pressure environments.
        </p>
      </div>
    </div>
  );
}