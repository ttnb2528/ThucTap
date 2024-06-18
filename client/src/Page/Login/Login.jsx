import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { API_LOGIN } from "../../API/Auth/login.api.js";
// import {
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBBtn,
//   MDBIcon,
//   MDBInput,
//   MDBCheckbox,
// } from "mdb-react-ui-kit";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // console.clear();
    console.log(form);

    const result = await API_LOGIN(form);
    console.log(result);
    if (result.status === 200) {
      if (
        result.data.status === 200 &&
        (result.data.data.role === "10" || result.data.data.role === "1")
      ) {
        localStorage.setItem("user", JSON.stringify(result.data.data));
        window.location = "/";
        return;
      }

      if (result.data.status === 300) {
        console.log(result.data.message);
        toast.error("Email hoặc mật khẩu không chính xác");
        return;
      }

      if (result.data.status === 400) {
        console.log(result.data.message);
        toast.warn("Email và mật khẩu không được để trống");
        return;
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-20">
      <h1 className="text-5xl mb-4 font-semibold">Đăng nhập</h1>
      <div className="flex flex-col md:flex-row items-center w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="w-full h-auto"
            alt="Sample image"
          />
        </div>
        <div className="w-full p-4">
          <form>
            <div className="mb-4">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control form-control-lg w-full p-2 border border-gray-300 rounded"
                placeholder="Nhập địa chỉ email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="password">
                Mật khẩu
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control form-control-lg w-full p-2 border border-gray-300 rounded"
                placeholder="Nhập mật khẩu"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="form-check">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                />
                <label className="form-check-label" htmlFor="form2Example3">
                  Nhớ tôi
                </label>
              </div>
              <a href="#!" className="text-gray-600">
                Quên mật khẩu?
              </a>
            </div>

            <div className="text-center md:text-left mt-4 pt-2">
              <button
                type="button"
                className="bg-blue-600 text-white px-10 py-2 rounded-lg"
                onClick={handleSubmit}
              >
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
