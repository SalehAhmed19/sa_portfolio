import React from "react";
import img from "../../assets/img.jpg";

function Banner() {
  return (
    <div className="my-24">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:w-2/3 mx-auto">
        <img
          className="rounded-full w-[396px] border-[15px] border-[#444444] shadow-2xl"
          src={img}
          alt=""
        />
        <div className="lg:ml-10">
          <p className="text-[#AAAAAA] my-5">Frontend Developer</p>
          <h1 className="font-bold text-6xl">Saleh Ahmed</h1>
          <p className="text-[#AAAAAA] my-5">
            Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
            convallis, risus non condimentum gravida, odio mauris ullamcorper
            felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna,
            a placerat sapien pretium eu.
          </p>
          <button
            download
            className="border-2 border-[#007CED] rounded-full py-2 px-6"
          >
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1irBJ59Mw7VAXhF4H-qyQybuK2TL8F54V/view?usp=sharing"
            >
              Download CV
            </a>
          </button>
          <button className="border-2 border-[#D5D5D5] rounded-full py-2 px-6 ml-2">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
