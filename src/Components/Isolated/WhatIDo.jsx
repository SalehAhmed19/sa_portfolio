import React from "react";
import { MdDesignServices, MdDeveloperMode } from "react-icons/md";
import { AiOutlineApartment } from "react-icons/ai";
import { SiWebstorm } from "react-icons/si";

function WhatIDo() {
  const data = [
    {
      _id: 1,
      title: "Web Design",
      des: "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
      icon: <MdDeveloperMode />,
    },
    {
      _id: 2,
      title: "Web Development",
      des: "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
      icon: <SiWebstorm />,
    },
    {
      _id: 3,
      title: "Figma",
      des: "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
      icon: <AiOutlineApartment />,
    },
    {
      _id: 4,
      title: "Illustration",
      des: "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
      icon: <MdDesignServices />,
    },
  ];
  return (
    <div className="mb-10">
      <h3 className="font-bold text-2xl">What I Do</h3>
      <div className="flex w-[140px]">
        <div className="h-[2px] bg-[#007CED] w-[20%] rounded-l-xl"></div>
        <div className="h-[2px] bg-[#353535] w-[80%] rounded-r-xl"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
        {data.map((d) => (
          <div key={d._id} className="flex">
            <div>
              <h3 className="text-[#007CED] text-3xl">{d.icon}</h3>
            </div>
            <div className="ml-5">
              <h3>{d.title}</h3>
              <p>{d.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatIDo;
