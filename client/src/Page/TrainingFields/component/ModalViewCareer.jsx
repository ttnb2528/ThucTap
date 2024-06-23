import React from "react";
import moment from "moment";

import { GrLinkPrevious } from "react-icons/gr";

const ModalViewCareer = ({ handleHideViewModal, data }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-30 flex justify-center items-center">
      <div
        className="w-[50%] h-[50%] bg-white rounded-md relative overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex justify-between items-center my-3 text-2xl font-semibold">
          <span className="pl-3 cursor-pointer" onClick={handleHideViewModal}>
            <GrLinkPrevious />
          </span>
          <h1>Thông tin ngành</h1>
          <div></div>
        </div>

        <div className="dash"></div>

        <h1 className="font-semibold text-lg p-3">Thông tin chung</h1>
        <div className="mt-3 grid md:grid-cols-2 gap-5 pl-4 pr-3">
          <div className="flex items-center gap-3">
            <label className="font-semibold">Mã ngành nghề:</label>
            <div>{data?.code}</div>
          </div>

          <div className="flex items-center gap-3">
            <label className="font-semibold">Tên ngành:</label>
            <div>{data?.name}</div>
          </div>

          <div className="flex items-center gap-3">
            <label className="font-semibold">Trình độ đào tạo:</label>
            <div>{data?.levelStraining}</div>
          </div>

          <div className="flex items-center gap-3">
            <label className="font-semibold">Thông tư:</label>
            <div>{data?.Circulars}</div>
          </div>

          <div className="flex items-center gap-3">
            <label className="font-semibold">Cấp quyết định:</label>
            <div>{data?.levelDecision}</div>
          </div>

          <div className="flex items-center gap-3">
            <label className="font-semibold">Số quyết định:</label>
            <div>{data?.numberDecision}</div>
          </div>

          <div className="flex items-center gap-3">
            <label className="font-semibold">Ngày quyết định:</label>
            <div>{data.dateDecision ? moment(data?.dateDecision).format("DD-MM-YYYY") : ""}</div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-5">
          <button
            className="border bg-primary p-2 text-white rounded-lg"
            onClick={handleHideViewModal}
          >
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalViewCareer;
