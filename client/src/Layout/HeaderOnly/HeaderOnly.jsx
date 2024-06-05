import React from "react";
import Navbar from "~/Layout/components/Navbar/Navbar";

const HeaderOnly = ({ children }) => {
  return (
    <div>
      <div className="bg-primary">
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default HeaderOnly;
