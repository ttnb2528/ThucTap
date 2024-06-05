import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "~/assets/logo.png";

const Navbar = () => {
  const navigation = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    const u = localStorage.getItem("user");
    setUser(u);
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    navigation("/dangnhap");
  };
  return (
    <nav className="flex justify-between items-center mx-auto text-white py-2 container 2xl:px-[5%]">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="" className="w-20" />
        </Link>
        <span className="uppercase font-semibold text-1xl ml-5">
          Trường Bách nghệ Cần Thơ <br /> Quản lý đào tạo
        </span>
      </div>

      <div className="flex items-center">
        {user ? (
          <button className="outline-none border linear-150 p-2 rounded hover:bg-white hover:text-black">
            <div onClick={handleLogout}>Đăng xuất</div>
          </button>
        ) : (
          <button className="outline-none border linear-150 p-2 rounded hover:bg-white hover:text-black">
            <Link to="/dangnhap">Đăng nhập</Link>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
