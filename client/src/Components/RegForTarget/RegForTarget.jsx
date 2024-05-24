import React from "react";
import Button from "@mui/material/Button";

const RegForTarget = () => {
  return (
    <div className="flex-1">
      <div>
        <h1 className="p-2 uppercase text-xl font-semibold">
          Đăng ký chỉ tiêu hoạt động, tuyển sinh
        </h1>
      </div>
      <div className="dash"></div>
      <div className="search m-4 mb-5 flex justify-between gap-5">
        <div className="search-input basis-10/12 grid grid-cols-5 gap-5">
          <div className="flex flex-col justify-center">
            <label htmlFor="yearOfReg">Năm đăng ký*</label>
            <input id="yearOfReg" type="text" placeholder="Năm đăng ký" />
          </div>

          <div className="flex flex-col justify-center">
            <label htmlFor="level">Trình độ đào tạo</label>
            <select name="level" id="level">
              <option selected>Chọn trình độ đào tạo</option>
              <option value="sơ cấp">Sơ cấp</option>
              <option value="trung cấp">Trung cấp</option>
            </select>
          </div>

          <div className="flex flex-col justify-center">
            <label htmlFor="career">Ngành nghề</label>
            <select name="career" id="career">
              <option selected>Chọn ngành nghề</option>
              <option value="du lịch">Sơ cấp</option>
              <option value="kế toán">Trung cấp</option>
              <option value="tin học">Trung cấp</option>
            </select>
          </div>

          <div className="flex flex-col justify-center">
            <label htmlFor="dateCreated">Ngày tạo</label>
            <input id="dateCreated" type="text" placeholder="Năm đăng ký" />
          </div>
        </div>

        <div className="flex flex-col basis-2/12 justify-end items-center">
          <div></div>
          <Button variant="contained" className="w-32">Tìm Kiếm</Button>
        </div>
      </div>
      <div className="dash"></div>
      <div className="table"></div>
    </div>
  );
};

export default RegForTarget;
