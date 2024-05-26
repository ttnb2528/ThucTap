import React from "react";
import HomePage from "./Page/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <div className="bg-primary">
        <Navbar />
      </div>
      <HomePage />
    </div>
  );
};

export default App;
