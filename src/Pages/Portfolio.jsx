import React from "react";
import ImgList from "../Components/Isolated/ImgList";

function Portfolio() {
  return (
    <div>
      <div className="p-14 bg-[#252525] border-t-2 border-b-2 border-[#333333] px-5 lg:px-14">
        <h2 className="text-4xl font-bold">Portfolio</h2>
      </div>
      <ImgList />
    </div>
  );
}

export default Portfolio;
