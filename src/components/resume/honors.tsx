import React from "react";

export default function Honors() {
  return (
    <div className="p-1">
      <div className="p-0">
        <h5 className="mb-2 text-m font-bold tracking-tight">Honors & Awards</h5>
        <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
        <div className="mb-3 font-normal">
          <strong>National Society of Leadership & Success (NSLS)</strong>
          <p className="text-sm font-light">FOL 101-1 Certificate</p>
          <p className="text-sm font-light italic">October 2023 - Present</p>
        </div>

        <div className="mb-3 font-normal">
          <strong>Dean&#39;s List</strong>
          <p className="text-sm font-light">El Camino College</p>
          <p className="text-sm font-light italic">Fall 2021 throught Fall 2022 Semesters</p>
          <p className="text-sm font-light font-montez">
            To qualify for this honor a student must, in any one semester,
            complete twelve or more units with a grade-point average (GPA) of 3.5 or higher out of 4.0.
          </p>
        </div>
      </div>
    </div>
  )
}