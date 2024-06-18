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
import ScientificResearch from "~/Page/ScientificResearch/ScientificResearch";
import CommendReward from "~/Page/CommendReward/CommendReward";
import Discipline from "~/Page/Discipline/Discipline";
import SkillsExam from "~/Page/SkillsExam/SkillsExam";
import AcademicManagement from "~/Page/AcademicManagement/AcademicManagement";
import GraduateStudentManagement from "~/Page/GraduateStudentManagement/GraduateStudentManagement";
import PostGraduateStudentManagement from "~/Page/PostGraduateStudentManagement/PostGraduateStudentManagement";
import StaffRecords from "~/Page/StaffRecords/StaffRecords";
import TeacherProfile from "~/Page/TeacherProfile/TeacherProfile";
import ClassroomFacilities from "~/Page/ClassroomFacilities/ClassroomFacilities";
import EquipmentFacilities from "~/Page/EquipmentFacilities/EquipmentFacilities";
import GeneralInformation from "~/Page/GeneralInformation/GeneralInformation";
import IdRegulations from "~/Page/IdRegulations/IdRegulations";
import TrainingFields from "~/Page/TrainingFields/TrainingFields";
import Departments from "~/Page/Departments/Departments";
import Course from "~/Page/Course/Course";
import ClassCourse from "~/Page/ClassCourse/ClassCourse";
import FormDiscipline from "~/Page/FormDiscipline/FormDiscipline";
import FormReward from "~/Page/FormReward/FormReward";
import ScienceResearchTopic from "~/Page/ScienceResearchTopic/ScienceResearchTopic";
import AffiliatedUnits from "~/Page/AffiliatedUnits/AffiliatedUnits";
import SkillsExamInformation from "~/Page/SkillsExamInformation/SkillsExamInformation";
import AcademicClass from "~/Page/AcademicClass/AcademicClass";
import FinancialReport from "~/Page/FinancialReport/FinancialReport";
import StatisticReport from "~/Page/StatisticReport/StatisticReport";
import HomePage from "~/Page/HomePage/HomePage.jsx";
import Login from "~/Page/Login/Login";
import Teaching from "~/Page/Teaching/Teaching.jsx";

const publicRoutes = [
  { path: "/", component: Login, layout: HeaderOnly },
  { path: "/dangnhap", component: Login, layout: HeaderOnly },
];

const privateRoutes = [
  { path: "/", component: HomePage },
  { path: "/dangkychitieutuyensinh", component: RegForTarget },
  { path: "/quanlythontintuyensinh", component: ManageEnrollInfo },
  { path: "/xacnhannhaphoc", component: AdmissionConfirm },
  { path: "/nhaptruong", component: Admission },
  { path: "/phanlop", component: Classification },
  { path: "/chuyenlop", component: ChangeClass },
  { path: "/chuyennganh", component: ChangeIndustry },
  { path: "/capnhatlylichsinhvien", component: UpdateInfoStudent },
  { path: "/nghiencuukhoahoc", component: ScientificResearch },
  { path: "/khenthuong", component: CommendReward },
  { path: "/kyluat", component: Discipline },
  { path: "/quanlyhocsinhtotnghiep", component: GraduateStudentManagement },
  {
    path: "/quanlyhocsinhsautotnghiep",
    component: PostGraduateStudentManagement,
  },
  { path: "/hosocanbo", component: StaffRecords },
  { path: "/hosonhagiao", component: TeacherProfile },
  { path: "/kythikynangnghe", component: SkillsExam },
  { path: "/quanlyhocvu", component: AcademicManagement },
  { path: "/qlcsvc_phonghoc", component: ClassroomFacilities },
  { path: "/qlcsvc_thietbi", component: EquipmentFacilities },
  { path: "/thongtinchung", component: GeneralInformation },
  { path: "/quydinhdanhma", component: IdRegulations },
  { path: "/nganhnghedaotao", component: TrainingFields },
  { path: "/khoa", component: Departments },
  { path: "/khoahoc", component: Course },
  { path: "/lopkhoahoc", component: ClassCourse },
  { path: "/hinhthuckyluat", component: FormDiscipline },
  { path: "/hinhthuckhenthuong", component: FormReward },
  { path: "/detainghiencuukhoahoc", component: ScienceResearchTopic },
  { path: "/donvitructhuoc", component: AffiliatedUnits },
  { path: "/kythikynangnghe", component: SkillsExamInformation },
  { path: "/lophocvu", component: AcademicClass },
  { path: "/baocaotaichinh", component: FinancialReport },
  { path: "/baocaothongke", component: StatisticReport },
  { path: "/dangnhap", component: Login, layout: HeaderOnly },

  { path: "/tietgiangday", component: Teaching },
];

export { publicRoutes, privateRoutes };
