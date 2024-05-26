import React from "react";
import { Routes, Route } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import RegForTarget from "../../Components/RegForTarget/RegForTarget";

const HomePage = () => {
  return (
    <div className="flex">
      <Slider />
      <Routes>
        <Route path="/" element={<RegForTarget />} />
        <Route path="/dangkychitieutuyensinh" element={<RegForTarget />} />
      </Routes>
    </div>
  );
};

export default HomePage;
