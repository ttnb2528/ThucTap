import RegForTarget from "~/Page/RegForTarget/RegForTarget";
import ManageEnrollInfo from "~/Page/ManageEnrollInfo/ManageEnrollInfo";
import HeaderOnly from "~/Layout/HeaderOnly/HeaderOnly";
import Login from "~/Page/Login/Login";

const publicRoutes = [
  { path: "/", component: RegForTarget },
  { path: "/dangkychitieutuyensinh", component: RegForTarget },
  { path: "/quanlythontintuyensinh", component: ManageEnrollInfo },
  { path: "/dangnhap", component: Login, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
