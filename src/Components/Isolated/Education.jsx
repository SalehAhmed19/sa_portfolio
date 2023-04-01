import React from "react";
import { Zoom } from "react-reveal";

const Education = () => {
  return (
    <Zoom>
      <div className="mb-20">
        <h3 className="font-bold text-2xl">Education</h3>
        <div className="flex w-[150px] mb-5">
          <div className="h-[2px] bg-[#007CED] w-[20%] rounded-l-xl"></div>
          <div className="h-[2px] bg-[#353535] w-[80%] rounded-r-xl"></div>
        </div>
        <h3 className="font-bold text-xl">
          Institute of Information Technology Bogra - (IITB)
        </h3>
        <h5 className="text-[#C7C7C7]">
          Diploma in Computer Science & Engineering
        </h5>
        <h5 className="text-[#C7C7C7] text-sm">From 2019 - Current</h5>
      </div>
    </Zoom>
  );
};

export default Education;
