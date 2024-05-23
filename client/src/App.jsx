import React from "react";
import Home from "./Page/Home/Home";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./Page/DetailPage/DetailPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail-page" element={<DetailPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
