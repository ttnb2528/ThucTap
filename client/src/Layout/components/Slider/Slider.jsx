import React from "react";
import { Link } from "react-router-dom";
import { Collapse } from "antd";

// utils
import IconWrapper from "~/utils/IconWrapper/IconWrapper";

// icons
import { FaGraduationCap, FaSquareCheck } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { PiWarningCircleFill } from "react-icons/pi";

const Slider = () => {
  const items = [
    {
      key: "1",
      label: (
        <Link
          to="/dangkychitieutuyensinh"
          className="font-bold text-base flex items-center"
        >
          <IconWrapper icon={FaGraduationCap} />
          <span className="ml-2">Quản lý tuyển sinh</span>
        </Link>
      ),
      children: (
        <div className="ml-4 mt-2">
          <ul className="space-y-2 [&>li]:cursor-pointer">
            <li>
              <Link to="/dangkychitieutuyensinh" className="flex items-center">
                <IconWrapper icon={HiUserGroup} />
                <span className="ml-2">Đăng ký chỉ tiêu</span>
              </Link>
            </li>
            <li>
              <Link to="/quanlythontintuyensinh" className="flex items-center">
                <IconWrapper icon={PiWarningCircleFill} />
                <span className="ml-2">Quản lý thông tin tuyển sinh</span>
              </Link>
            </li>
            <li>
              <Link to='/xacnhannhaphoc' className="flex items-center">
                <IconWrapper icon={FaSquareCheck} />
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
      <Collapse
        key={items.key}
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
