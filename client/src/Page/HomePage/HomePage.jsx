import React from "react";
import { Routes, Route } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import EnrollManagement from "../../Components/EnrollManagement/EnrollManagement";

const HomePage = () => {
  return (
    <div>
      <Slider />
      {/* <Routes>
        <Route path="/" element={<EnrollManagement />} />
        <Route path="/dangkychitieutuyensinh" element={<EnrollManagement />} />
      </Routes> */}
    </div>
  );
};

export default HomePage;
