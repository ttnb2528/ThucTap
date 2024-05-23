import React from "react";
import { Link } from "react-router-dom";

const DetailPage = () => {
  return (
    <div className="detail-page">
      <h1 className="text-center text-6xl">This is Detail Page</h1>
      <div className="text-center mt-5">
        <button className="border p-2 rounded bg-blue-600 text-white hover:bg-blue-500 outline-none transition-all duration-300">
          <Link to={-1}>Go back</Link>
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
