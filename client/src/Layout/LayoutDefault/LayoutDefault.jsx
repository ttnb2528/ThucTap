import React from "react";

import Navbar from "~/Layout/components/Navbar/Navbar";
import Slider from "~/Layout/components/Slider/Slider";

const LayoutDefault = ({ children }) => {
  return (
    <div>
      <div className="bg-primary">
        <Navbar />
      </div>
      <div className="flex">
        <Slider />

        {children}  
      </div>
    </div>
  );
};

export default LayoutDefault;
