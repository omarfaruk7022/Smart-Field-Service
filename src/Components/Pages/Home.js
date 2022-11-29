import React from "react";
import About from "./About";
import Banner from "./Banner";
import Members from "./Members";
import Mission from "./Mission";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Mission />
      <About/>
      <Services/>
      <Members />
     
    </div>
  );
};

export default Home;
