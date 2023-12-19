import React from "react";
import BannerCTA from "./Homeparts/BannerCTA";
import PodsToexplore from "./Homeparts/PodsToexplore";
import AboutUs from "./Homeparts/parts/AboutUs";
import Sliderr from "./Homeparts/parts/Slider";
import WhyPrivily from "./Homeparts/parts/WhyPrivily";
import Corporate from "./Homeparts/parts/Corporate";
import Rightplace from "./Homeparts/parts/Rightplace";
import Reasons from "./Homeparts/parts/Reasons";
import SearchField from "./Homeparts/parts/SearchField";
const Home = () => {
  return (
    <>
    <SearchField/>
      <BannerCTA />
      <PodsToexplore />
      <Sliderr />
      <AboutUs />
      <WhyPrivily />
      <Corporate />
      <Rightplace />
      <Reasons />
    </>
  );
};

export default Home;
