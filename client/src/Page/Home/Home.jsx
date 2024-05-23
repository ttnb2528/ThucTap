import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1 className="text-6xl text-center">This is Home Page</h1>
      <div className="text-center mt-5">
        <button className="border p-2 rounded bg-blue-600 text-white hover:bg-blue-500 outline-none transition-all duration-300">
          <Link to="/detail-page">Go to Detail Page</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
