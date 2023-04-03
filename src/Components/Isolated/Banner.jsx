import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/SALOGO.png";
import Typewriter from "typewriter-effect";
import { Fade, Zoom } from "react-reveal";

function Banner() {
  return (
    <div className="my-16">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:w-3/4 mx-auto">
        <Zoom>
          <img className="w-[396px] p-5" src={img} alt="" />
        </Zoom>
        <Fade up>
          <div className="lg:ml-10">
            <div className="mb-4 text-[#007CED]">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "React.Js Developer",
                    "MERN Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <h1 className="font-bold text-6xl">Saleh Ahmed</h1>
            <p className="text-[#AAAAAA] my-5">
              As a web developer specializing in MERN Stack, I possess a keen
              eye for detail and a passion for creating visually stunning and
              highly functional user interfaces. With my strong proficiency in
              HTML, CSS, JavaScript, React, and Node.js, I am committed to
              delivering innovative solutions that exceed client expectations. I
              am always up-to-date with the latest trends and technologies in
              the industry to ensure that my work is always at the forefront of
              innovation.
            </p>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1irBJ59Mw7VAXhF4H-qyQybuK2TL8F54V/view?usp=sharing"
            >
              <button className="border-2 border-[#007CED] hover:bg-[#007CED] shadow-xl duration-200 rounded-full py-2 px-6">
                Download CV
              </button>
            </a>
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
