import React from "react";
import { Link } from "react-router-dom";
import { Collapse } from "antd";

const Slider = () => {
  const items = [
    {
      key: "1",
      label: (
        <Link
          to="/dangkychitieutuyensinh"
          className="font-bold text-base flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            width="24"
            height="24"
          >
            <path
              d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 
            20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 
            453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 
            329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 
            20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 
            15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 
            192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
            />
          </svg>
          <span className="ml-2">Quản lý tuyển sinh</span>
        </Link>
      ),
      children: (
        <div className="ml-4 mt-2">
          <ul className="space-y-2 [&>li]:cursor-pointer">
            <li>
              <Link to="/dangkychitieutuyensinh" className="flex items-center">
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
                <span className="ml-2">Đăng ký chỉ tiêu</span>
              </Link>
            </li>
            <li>
              <Link to="/quanlythontintuyensinh" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width={20}
                  height={20}
                >
                  <path
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 
                  24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                  />
                </svg>
                <span className="ml-2">Quản lý thông tin tuyển sinh</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width={20}
                  height={20}
                >
                  <path
                    d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 
                  64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 
                  0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
                <span className="ml-2">Xác nhận nhập học</span>
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
    {
      key: "2",
      label: <p className="font-bold text-base">Quản lý HSSV</p>,
      children: (
        <div className="ml-4 mt-2">
          <ul className="space-y-2 [&>li]:cursor-pointer">
            <li>Nhập trường</li>
            <li>Phân lớp</li>
            <li>Chuyển ngành</li>
            <li>Chuyển lớp</li>
            <li>Cập nhật lý lịch sinh viên</li>
            <li>Nghiên cứu khoa học</li>
            <li>Khen thưởng</li>
            <li>Kỷ luật</li>
            <li>Kỳ thi kỹ năng nghề</li>
          </ul>
        </div>
      ),
    },
    {
      key: "3",
      label: <p className="font-bold text-base">Quản lý đào tạo</p>,
      children: (
        <div className="ml-4 mt-2">
          <ul className="space-y-2 [&>li]:cursor-pointer">
            <li>Quản lý học vụ</li>
            <li>Quản lý HSSV tốt nghiệp</li>
            <li>Quản lý HSSV sau tốt nghiệp</li>
          </ul>
        </div>
      ),
    },
    {
      key: "4",
      label: <p className="font-bold text-base">Quản lý cán bộ nhà giáo</p>,
      children: (
        <div className="ml-4 mt-2">
          <ul className="space-y-2 [&>li]:cursor-pointer">
            <li>Hồ sơ cán bộ quản lý</li>
            <li>Hồ sơ nhà giáo</li>
          </ul>
        </div>
      ),
    },
    {
      key: "5",
      label: <p className="font-bold text-base">Quản lý cơ sở vật chất</p>,
      children: (
        <div className="ml-4 mt-2">
          <ul className="space-y-2 [&>li]:cursor-pointer">
            <li>Phòng học</li>
            <li>Trang thiết bị</li>
          </ul>
        </div>
      ),
    },
    {
      key: "6",
      label: <p className="font-bold text-base">Thiết lập chung</p>,
      children: (
        <div className="ml-4 mt-2">
          <ul className="space-y-2 [&>li]:cursor-pointer">
            <li>Thông tin chung CSGDNN</li>
            <li>Quy định đánh mã</li>
            <li>Ngành nghề đào tạo</li>
            <li>Khoa, Phòng ban</li>
            <li>Khóa học</li>
            <li>Lớp Khóa học</li>
            <li>hình thức kỷ thuật</li>
            <li>Hình thức khen thưởng</li>
            <li>Đề tài nghiên cứu khoa học</li>
            <li>Đơn vị trực thuộc</li>
            <li>Thông tin kỳ thi kỹ năng nghề</li>
            <li>Lý do học vụ</li>
          </ul>
        </div>
      ),
    },
    {
      key: "7",
      label: <p className="font-bold text-base">Báo cáo thống kê</p>,
      children: "",
    },
    {
      key: "8",
      label: <p className="font-bold text-base">Quản lý báo cáo tài chính</p>,
      children: (
        <div className="ml-4 mt-2">
          <ul className="space-y-2 [&>li]:cursor-pointer">
            <li>Báo cáo tài chính</li>
          </ul>
        </div>
      ),
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="slider basis-2/6 flex flex-col pt-8 w-full max-w-[300px] h-auto min-h-[100vh] bg-neutral-100">
      {/* <div className="flex flex-col justify-center mx-4 py-1.5 px-2.5 text-base rounded cursor-pointer">
        <p className="font-bold text-base">Quản lý tuyển sinh</p>
        <div className="ml-4 mt-2 hidden">
          <ul className="space-y-2 [&>li]:cursor-pointer">
            <li>Đăng ký chỉ tiêu</li>
            <li>Quản lý thông tin tuyển sinh</li>
            <li>Xác nhận nhập học</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center mx-4 py-1.5 px-2.5 text-base rounded cursor-pointer">
        <p className="font-bold text-base">Quản lý HSSV</p>
        <div className="ml-4 mt-2">
          <ul className="space-y-2 [&>li]:cursor-pointer">
            <li>Đăng ký chỉ tiêu</li>
            <li>Quản lý thông tin tuyển sinh</li>
            <li>Xác nhận nhập học</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center mx-4 py-1.5 px-2.5 text-base rounded cursor-pointer">
        <p className="font-bold text-base">Quản lý đào tạo</p>
        <div className="ml-4 mt-2">
          <ul className="space-y-2 [&>li]:cursor-pointer">
            <li>Đăng ký chỉ tiêu</li>
            <li>Quản lý thông tin tuyển sinh</li>
            <li>Xác nhận nhập học</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center mx-4 py-1.5 px-2.5 text-base rounded cursor-pointer">
        <p className="font-bold text-base">Quản lý cán bộ nhà giáo</p>
        <div className="ml-4 mt-2">
          <ul className="space-y-2 [&>li]:cursor-pointer">
            <li>Đăng ký chỉ tiêu</li>
            <li>Quản lý thông tin tuyển sinh</li>
            <li>Xác nhận nhập học</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center mx-4 py-1.5 px-2.5 text-base rounded cursor-pointer">
        <p className="font-bold text-base">Quản lý cơ sở vật chất</p>
        <div className="ml-4 mt-2">
          <ul className="space-y-2 [&>li]:cursor-pointer">
            <li>Đăng ký chỉ tiêu</li>
            <li>Quản lý thông tin tuyển sinh</li>
            <li>Xác nhận nhập học</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center mx-4 py-1.5 px-2.5 text-base rounded cursor-pointer">
        <p className="font-bold text-base">Thiết lập chung</p>
        <div className="ml-4 mt-2">
          <ul className="space-y-2 [&>li]:cursor-pointer">
            <li>Đăng ký chỉ tiêu</li>
            <li>Quản lý thông tin tuyển sinh</li>
            <li>Xác nhận nhập học</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center mx-4 py-1.5 px-2.5 text-base rounded cursor-pointer">
        <p className="font-bold text-base">Báo cáo thống kê</p>
        <div className="ml-4 mt-2">
          <ul className="space-y-2 [&>li]:cursor-pointer">
            <li>Đăng ký chỉ tiêu</li>
            <li>Quản lý thông tin tuyển sinh</li>
            <li>Xác nhận nhập học</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center mx-4 py-1.5 px-2.5 text-base rounded cursor-pointer">
        <p className="font-bold text-base">Quản lý báo cáo tài chính</p>
        <div className="ml-4 mt-2">
          <ul className="space-y-2 [&>li]:cursor-pointer">
            <li>Đăng ký chỉ tiêu</li>
            <li>Quản lý thông tin tuyển sinh</li>
            <li>Xác nhận nhập học</li>
          </ul>
        </div>
      </div> */}
      <Collapse
        onChange={onChange}
        items={items}
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={() => {
          return;
        }}
        style={{
          background: "none",
        }}
      />
      ;
    </div>
  );
};

export default Slider;
