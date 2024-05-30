// Layouts
import HeaderOnly from "~/Layout/HeaderOnly/HeaderOnly";

// pages
import RegForTarget from "~/Page/RegForTarget/RegForTarget";
import ManageEnrollInfo from "~/Page/ManageEnrollInfo/ManageEnrollInfo";
import AdmissionConfirm from "~/Page/AdmissionConfirm/AdmissionConfirm";
import Admission from "~/Page/Admission/Admission";
import Classification from "~/Page/Classification/Classification";
import ChangeClass from "~/Page/ChangeClass/ChangeClass";
import ChangeIndustry from "~/Page/ChangeIndustry/ChangeIndustry";
import UpdateInfoStudent from "~/Page/UpdateInfoStudent/UpdateInfoStudent";
import Login from "~/Page/Login/Login";

const publicRoutes = [
  { path: "/", component: RegForTarget },
  { path: "/dangkychitieutuyensinh", component: RegForTarget },
  { path: "/quanlythontintuyensinh", component: ManageEnrollInfo },
  { path: "/xacnhannhaphoc", component: AdmissionConfirm },
  { path: "/nhaptruong", component: Admission },
  { path: "/phanlop", component: Classification },
  { path: "/chuyenlop", component: ChangeClass },
  { path: "/chuyennganh", component: ChangeIndustry },
  { path: "/capnhatlylichsinhvien", component: UpdateInfoStudent },
  { path: "/dangnhap", component: Login, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
