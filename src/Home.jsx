import React from "react";
import BannerCTA from "./Homeparts/BannerCTA";
import PodsToexplore from "./Homeparts/PodsToexplore";
import AboutUs from "./Homeparts/parts/AboutUs";
import Sliderr from "./Homeparts/parts/Slider";
import WhyPrivily from "./Homeparts/parts/WhyPrivily";
import Corporate from "./Homeparts/parts/Corporate";
import Rightplace from "./Homeparts/parts/Rightplace";
const Home = () => {
  return (
    <>
    <BannerCTA/>
    <PodsToexplore/>
    <Sliderr/>
    <AboutUs/>
    <WhyPrivily/>
    <Corporate/>
    <Rightplace/>
    </>
  );
};

export default Home;
