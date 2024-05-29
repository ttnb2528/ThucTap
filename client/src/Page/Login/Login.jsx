import React from "react";
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
                className="form-control form-control-lg w-full p-2 border border-gray-300 rounded"
                placeholder="Nhập địa chỉ email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="password">
                Mật khẩu
              </label>
              <input
                type="password"
                id="password"
                className="form-control form-control-lg w-full p-2 border border-gray-300 rounded"
                placeholder="Nhập mật khẩu"
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
              >
                Đăng nhập
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
