import React from "react";
import Banner from "../Components/Isolated/Banner";
import WhatIDo from "../Components/Isolated/WhatIDo";
import Testimonials from "../Components/Isolated/Testimonials";

const Home = () => {
  return (
    <div className="mx-5 lg:mx-14">
      <Banner />
      <WhatIDo />
      <Testimonials />
    </div>
  );
};

export default Home;
