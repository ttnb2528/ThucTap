import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center mx-auto text-white">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-28" />
        <span className="uppercase font-semibold text-1xl ml-5">
          Trường Bách nghệ Cần Thơ <br /> Quản lý đào tạo
        </span>
      </div>
      <div className="flex items-center">
        <button className="outline-none border-none p-2">Đăng nhập </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0,0,256,256"
          style={{ fill: "#000000" }}
        >
          <g
            fill="#ffffff"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ "mixblend-mode": "norma" }}
          >
            <g transform="scale(10.66667,10.66667)">
              <path d="M7,5c-3.866,0 -7,3.134 -7,7c0,3.866 3.134,7 7,7c3.17067,0 5.84617,-2.10901 6.70703,-5h4.29297v3h4v-3h2v-4h-10.29297c-0.86086,-2.89099 -3.53636,-5 -6.70703,-5zM7,9c1.657,0 3,1.343 3,3c0,1.657 -1.343,3 -3,3c-1.657,0 -3,-1.343 -3,-3c0,-1.657 1.343,-3 3,-3z"></path>
            </g>
          </g>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
