import React from "react";
import Certificates from "../Components/Isolated/Certificates";
import Education from "../Components/Isolated/Education";
import Skills from "../Components/Isolated/Skills";

function Resume() {
  return (
    <div className="pb-5">
      <div className="p-14 bg-[#252525] border-t-2 border-b-2 border-[#333333] px-5 lg:px-14">
        <h2 className="text-4xl font-bold">Resume</h2>
      </div>
      <div className="px-5 lg:px-14 py-10">
        <Education />
        <Certificates />
        <Skills />
      </div>
    </div>
  );
}

export default Resume;
