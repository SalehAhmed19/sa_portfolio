import React from "react";
import Banner from "../Components/Isolated/Banner";
import WhatIDo from "../Components/Isolated/WhatIDo";
import Testimonials from "../Components/Isolated/Testimonials";
import Graph from "../Components/Isolated/Graph";

const Home = () => {
  return (
    <div className="mx-5 lg:mx-14">
      <Banner />
      <WhatIDo />
      <Testimonials />
      <Graph />
    </div>
  );
};

export default Home;
