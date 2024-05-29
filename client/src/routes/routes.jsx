import RegForTarget from "~/Page/RegForTarget/RegForTarget";
import ManageEnrollInfo from "~/Page/ManageEnrollInfo/ManageEnrollInfo";
import AdmissionConfirm from "~/Page/AdmissionConfirm/AdmissionConfirm";
import HeaderOnly from "~/Layout/HeaderOnly/HeaderOnly";
import Login from "~/Page/Login/Login";

const publicRoutes = [
  { path: "/", component: RegForTarget },
  { path: "/dangkychitieutuyensinh", component: RegForTarget },
  { path: "/quanlythontintuyensinh", component: ManageEnrollInfo },
  { path: "/xacnhannhaphoc", component: AdmissionConfirm },
  { path: "/dangnhap", component: Login, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
