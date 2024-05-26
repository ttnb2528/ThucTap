import React from "react";
import { Routes, Route } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import RegForTarget from "../../Components/RegForTarget/RegForTarget";
import ManageEnrollInfo from "../../Components/ManageEnrollInfo/ManageEnrollInfo";

const HomePage = () => {
  return (
    <div className="flex">
      <Slider />
      <Routes>
        <Route path="/" element={<RegForTarget />} />
        <Route path="/dangkychitieutuyensinh" element={<RegForTarget />} />
        <Route path="/quanlythontintuyensinh" element={<ManageEnrollInfo />} />
      </Routes>
    </div>
  );
};

export default HomePage;
