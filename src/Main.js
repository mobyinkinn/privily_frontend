import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Navbar from "./utils/Navbar";
import MainPods from "./PodsDetails/MainPods";
import Footer from "./utils/Footer"
const Main = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home id={"home"} />}></Route>
      <Route exact path="/PodsDetails" element={<MainPods />}></Route>
    </Routes>
    <Footer/>

    </>
  );
};

export default Main;
