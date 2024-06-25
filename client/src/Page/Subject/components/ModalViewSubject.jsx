import React from "react";

// Icons
import { GrLinkPrevious } from "react-icons/gr";

const ModalViewSubject = ({ handleHideViewModal, data }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-30 flex justify-center items-center">
      <div
        className="w-[40%] h-[30%] bg-white rounded-md relative overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex justify-between items-center my-3 text-2xl font-semibold">
          <span className="pl-3 cursor-pointer" onClick={handleHideViewModal}>
            <GrLinkPrevious />
          </span>
          <h1>Thông tin môn học</h1>
          <div></div>
        </div>

        <div className="dash"></div>

        <div className="mt-3 mb-5 grid md:grid-cols-2 gap-5 pl-4 pr-3">
          <div className="flex items-center gap-3">
            <label className="font-semibold">Mã môn: </label>
            <p>{data.code}</p>
          </div>

          <div className="flex items-center gap-3">
            <label className="font-semibold">Tên môn: </label>
            <p>{data.name}</p>
          </div>

          <div className="flex items-center gap-3">
            <label className="font-semibold">Ngành:</label>
            <p>{data.career.name}</p>
          </div>

          <div className="flex items-center gap-3">
            <label className="font-semibold">Loại:</label>
            <p>{data.type}</p>
          </div>
        </div>

        <div className="flex justify-center items-center mb-5">
          <button className="border bg-primary p-2 text-white rounded-lg" onClick={handleHideViewModal}>
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalViewSubject;
