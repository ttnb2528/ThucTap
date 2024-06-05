import React from "react";
import { Link } from "react-router-dom";
import logo from "~/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center mx-auto text-white py-2">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="" className="w-20" />
        </Link>
        <span className="uppercase font-semibold text-1xl ml-5">
          Trường Bách nghệ Cần Thơ <br /> Quản lý đào tạo
        </span>
      </div>
      <div className="flex items-center">
        <button className="outline-none border linear-150 p-2 rounded hover:bg-white hover:text-black">
          <Link to="/dangnhap">Đăng nhập</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
