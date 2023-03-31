import React from "react";
import Certificates from "../Components/Isolated/Certificates";
import Education from "../Components/Isolated/Education";

function Resume() {
  return (
    <div className="py-5">
      <div className="p-14 bg-[#252525] border-t-2 border-b-2 border-[#333333] px-5 lg:px-14">
        <h2 className="text-4xl font-bold">Resume</h2>
      </div>
      <div className="px-5 lg:px-14 py-10">
        <h3 className="font-bold text-2xl">Education</h3>
        <div className="flex w-[150px] mb-5">
          <div className="h-[2px] bg-[#007CED] w-[20%] rounded-l-xl"></div>
          <div className="h-[2px] bg-[#353535] w-[80%] rounded-r-xl"></div>
        </div>
        <Education />
        <Certificates />
      </div>
    </div>
  );
}

export default Resume;
