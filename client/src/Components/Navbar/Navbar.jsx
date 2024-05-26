import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center mx-auto text-white">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-28" />
        <span className="uppercase font-semibold text-1xl">
          Trường Bách nghệ Cần Thơ <br /> Quản lý đào tạo
        </span>
      </div>
      <div>
        <button className="outline-none border-none p-2">Đăng nhập</button>
      </div>
    </nav>
  );
};

export default Navbar;
