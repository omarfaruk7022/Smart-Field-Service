import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Members from "./Members";
import Mission from "./Mission";
import Reviews from "./Reviews";
import Services from "./Services";

const Home = () => {
  return (
    <div className="sm:mr-0">
      <Banner />
      <Mission />
      <About />
      <Services />
      <Members />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
