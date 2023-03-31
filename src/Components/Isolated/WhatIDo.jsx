import React from "react";
import { MdDesignServices, MdDeveloperMode } from "react-icons/md";
import { AiOutlineApartment } from "react-icons/ai";
import { SiWebstorm } from "react-icons/si";
import { Fade } from "react-reveal";

function WhatIDo() {
  const data = [
    {
      _id: 1,
      title: "Web Design",
      des: "Web design is the process of creating visually appealing and user-friendly interfaces for websites. It involves a combination of graphic design, user experience design, and web development. A successful web design should engage users, provide a seamless experience, and effectively communicate the website's purpose and message.",
      icon: <MdDeveloperMode />,
    },
    {
      _id: 2,
      title: "Web Development",
      des: "Web development involves the creation of websites and web applications using programming languages and web technologies such as HTML, CSS, and JavaScript. It encompasses both front-end development (client-side) and back-end development (server-side) and involves database management, server configuration, and application deployment. A successful web development project requires a combination of technical expertise, creativity, and problem-solving skills.",
      icon: <SiWebstorm />,
    },
    {
      _id: 3,
      title: "Figma",
      des: "Figma is a cloud-based design tool used for creating user interfaces, prototypes, and design systems. It allows designers and teams to collaborate in real-time and provides a range of features for creating and sharing design assets. Figma has gained popularity among designers for its ease of use, versatility, and collaborative capabilities.",
      icon: <AiOutlineApartment />,
    },
    {
      _id: 4,
      title: "Illustration",
      des: "Illustration is the art of creating visual representations of ideas, concepts, and stories through drawing, painting, or digital media. It is used in a variety of fields, including advertising, publishing, and entertainment. A successful illustration should effectively communicate a message or emotion and capture the viewer's attention.",
      icon: <MdDesignServices />,
    },
  ];
  return (
    <div className="my-20">
      <h3 className="font-bold text-2xl">What I Do</h3>
      <div className="flex w-[140px]">
        <div className="h-[2px] bg-[#007CED] w-[20%] rounded-l-xl"></div>
        <div className="h-[2px] bg-[#353535] w-[80%] rounded-r-xl"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
        {data.map((d) => (
          <Fade down>
            <div key={d._id} className="flex">
              <div>
                <h3 className="text-[#007CED] text-3xl">{d.icon}</h3>
              </div>
              <div className="ml-5">
                <h3 className="font-bold">{d.title}</h3>
                <p className="text-sm">{d.des}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}

export default WhatIDo;
