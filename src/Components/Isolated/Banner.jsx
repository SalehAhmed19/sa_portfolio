import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img.jpg";
import Typewriter from "typewriter-effect";
import { Fade } from "react-reveal";

function Banner() {
  return (
    <div className="my-16">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:w-3/4 mx-auto">
        <Fade up>
          <img
            className="rounded-full w-[396px] border-[15px] border-[#444444] shadow-2xl"
            src={img}
            alt=""
          />
        </Fade>
        <Fade up>
          <div className="lg:ml-10">
            <div className="mb-4 text-[#1761B1]">
              <Typewriter
                options={{
                  strings: ["Frontend Developer", "React.Js Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <h1 className="font-bold text-6xl">Saleh Ahmed</h1>
            <p className="text-[#AAAAAA] my-5">
              As a frontend developer with expertise in the MERN stack, my
              portfolio showcases my ability to create dynamic and responsive
              web applications using modern web development technologies. With a
              strong focus on user experience, I have demonstrated my
              proficiency in implementing intuitive and visually appealing
              interfaces that enhance the overall user engagement. My projects
              demonstrate my ability to work with a wide range of tools and
              frameworks, including React, Redux, Node.js, Express.js, and
              MongoDB, among others. Through my portfolio, I aim to demonstrate
              my ability to develop high-quality web applications that meet the
              requirements of clients and users alike.
            </p>
            <button className="border-2 border-[#007CED] rounded-full py-2 px-6">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1irBJ59Mw7VAXhF4H-qyQybuK2TL8F54V/view?usp=sharing"
              >
                Download CV
              </a>
            </button>
            <Link to="/contact">
              <button className="border-2 border-[#D5D5D5] rounded-full py-2 px-6 ml-2">
                Contact
              </button>
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Banner;
