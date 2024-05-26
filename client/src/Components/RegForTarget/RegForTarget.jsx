import React from "react";
import { Table } from "antd";
const RegForTarget = () => {
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Trình độ đào tạo",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Thông tư",
      dataIndex: "circulars",
      key: "circulars",
    },
    {
      title: "Ngành nghề đào tạo",
      dataIndex: "career",
      key: "career",
    },
    {
      title: "CTĐKHĐ(người)",
      dataIndex: "ctdkhd",
      key: "ctdkhd",
    },
    {
      title: "TXĐCT(người)",
      dataIndex: "txdct",
      key: "txdct",
    },
    {
      title: "Năm đăng ký",
      dataIndex: "regYear",
      key: "regYear",
    },
    {
      title: "Thao tác",
      dataIndex: "operation",
      key: "operation",
    },
  ];
  const data = [
    {
      stt: "1",
      level: "Cao đẳng",
      circulars: 10,
      career: "Tin học văn phòng",
      ctdkhd: 20,
      txdct: 20,
      regYear: 2024,
    },
    {
      stt: "2",
      level: "Cao đẳng",
      circulars: 10,
      career: "Tài chính",
      ctdkhd: 20,
      txdct: 20,
      regYear: 2024,
    },
    {
      stt: "3",
      level: "Cao đẳng",
      circulars: 10,
      career: "Du lịch",
      ctdkhd: 20,
      txdct: 20,
      regYear: 2024,
    },
  ];
  return (
    <div className="flex-1">
      <div className="flex items-center ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          width="24"
          height="24"
        >
          <path
            d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 
                  304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 
                  8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 
                  17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 
                  128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"
          />
        </svg>
        <h1 className="p-2 uppercase text-xl font-semibold">
          <span>Đăng ký chỉ tiêu hoạt động, tuyển sinh</span>
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
              <option value="du lịch">Du lịch</option>
              <option value="kế toán">Kế toán</option>
              <option value="tin học">Tin học</option>
            </select>
          </div>

          <div className="flex flex-col justify-center">
            <label htmlFor="dateCreated">Ngày tạo</label>
            <input id="dateCreated" type="text" placeholder="Chọn ngày tạo" />
          </div>
        </div>

        <div className="flex flex-col basis-2/12 justify-end items-center">
          <div></div>
          <button className="w-32 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">
            Tìm Kiếm
          </button>
        </div>
      </div>
      <div className="dash"></div>
      <div className="result-table m-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold">Kết quả tìm kiếm 0/0 bản ghi</h1>
          </div>

          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Lưu tất cả
            </button>
          </div>
        </div>

        <div className="mt-3">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
};

export default RegForTarget;
