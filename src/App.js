import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomeGuest/Home";
import HomeTeacher from "./pages/HomeTeacher/HomeTeacher";
import Login from "./pages/Login/Login";
import QuenMatKhau from "./components/Guest/Forgotpassword/ForgotPassword";
import Register from "./pages/Register";
import InfoCourse from "./components/Guest/InfoCourse";
import ListCourse from "./components/Guest/ListCourse";
import { HomeStudent } from "./pages/HomeStudent/HomeStudent";
import Rating from "./components/Student/Rating/StudentRating";
import ProfileStudent from "./components/Student/Profile/ProfileStudent";
import UpdateProfile from "./components/Student/UpdateProfile/UpdateProfile";
import quanlykhoahoc from "./components/Student/CourseManager";
import ChangePassword from "./components/Student/ChangePassword";
import Danhsachsinhvien from "./components/Teacher/Danhsachsinhvien";
import Themkhoahoc from "./components/Instructor/Themkhoahoc";
import Suakhoahoc from "./components/Instructor/Suakhoahoc";
import ChiTietCourse from "./components/Student/ChiTietCourse";
import ChiTietAssignment from "./components/Student/ChiTietAssignment";
import CapNhatTTCaNhan from "./components/Student/CapNhatTTCaNhan";
import DeXuatMentor from "./components/Teacher/DeXuatMenTor";
import QuanLyDiem from "./components/Teacher/QuanLyDiem";
import DanhSachBaiKT from "./components/Teacher/DanhSachBaiKT";
import ThongTinSV from "./components/Teacher/ThongTinSV";
import ProfileTeacher from "./components/Teacher/ThongTinCaNhan/";
import Chitietkhoahoc from "./components/Teacher/ChiTietKhoaHoc/Chitietkhoahoc";
import Comment from "./components/Teacher/Forum";
import { HomeSystemAdmin } from "./pages/HomeSystemAdmin/HomeSystemAdmin";
import QuanLyTaikhoan from "./components/SystemAdmin/QuanLyTaiKhoan/QuanLyTaiKhoan";
import ThemTaiKhoan from "./components/SystemAdmin/ThemTaiKhoan/ThemTaiKhoan";
import HomeInstructor from "./pages/HomeInstructor/HomeInstructor";
import NotFound from "./pages/Error/NotFound";
import QuanLyKhoaHoc from "./components/ClassAdmin/QuanLyKhoaHoc";
import HomeClassAdmin from "./pages/HomeClassAdmin/HomeClassAdmin";

import DropdownList from "./components/DropdownList/DropdownList";

import ProfileInstructor from "./components/Instructor/ThongTinCaNhan/";

import QuanLyKH from "./components/Teacher/QuanLyKH";
import TaoKH from "./components/Teacher/TaoKH";
import SuaKH from "./components/Teacher/SuaKH";
import QuanLyKH_Class_Admin from "./components/ClassAdmin/QuanLyKhoaHoc/";
import DanhSachHocVien from "./components/ClassAdmin/DanhSachHocVien";
import ThemHocVien from "./components/ClassAdmin/ThemHocVien";
import XemBaiLam from "./components/ClassAdmin/XemBaiLam";
import ChiTietCourseTeacher from "./components/Teacher/ChiTietCourse";

import Taobaikiemtra from "./components/Teacher/Taobaikiemtra";
import Suabaikiemtra from "./components/Teacher/Suabaikiemtra";
import Tonghopdiendan from "./components/ClassAdmin/Tonghopdiendan";
import Chitietdiendan from "./components/ClassAdmin/Chitietdiendan";
import ThemMentor from "./components/ClassAdmin/ThemMentor";
import Danhsachkhoachamdiem from "./components/Mentor/Danhsachkhoachamdiem";
import Chitietkhoachamdiem from "./components/Mentor/Chitietkhoachamdiem";
import Danhsachbailamcuahocvien from "./components/Mentor/Danhsachbailamcuahocvien";
import TaoAssignments from "./components/Teacher/TaoAssignments";
import ChinhsuaAssignments from "./components/Teacher/ChinhsuaAssignments";
import Doimatkhaukhiquen from "./components/Student/ChangePasswordForgot";

import QuanLyKhoaHocStudent from "./components/Student/QuanLyKhoaHoc/QuanLyKhoaHoc";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/teacher" exact component={HomeTeacher} />
        <Route
          path="/teacher/course/:idCourse"
          exact
          component={Chitietkhoahoc}
        />
        <Route path="/dangnhap" exact component={Login} />
        <Route path="/quenmatkhau" exact component={QuenMatKhau} />
        <Route path="/dangky" exact component={Register} />
        <Route
          path="/student/thongtinkhoahoc/:idCourse"
          exact
          component={InfoCourse}
        />
        <Route path="/danhsachkhoahoc" exact component={ListCourse} />
        <Route path="/student" exact component={HomeStudent} />
        <Route path="/rating" exact component={Rating} />
        <Route path="/student/profile" exact component={ProfileStudent} />
        <Route path="/student/updateprofile" exact component={UpdateProfile} />
        <Route path="/quanlykhoahocstudent" exact component={quanlykhoahoc} />

        <Route path="/chitietkhoahoc" exact component={ChiTietCourse} />
        <Route path="/chitietass" exact component={ChiTietAssignment} />
        <Route
          path="/capnhatthongtincanhan"
          exact
          component={CapNhatTTCaNhan}
        />
        <Route path="/teacher/dexuatmentor" exact component={DeXuatMentor} />
        <Route path="/quanlydiem" exact component={QuanLyDiem} />
        <Route path="/teacher/danhsachbaiKT" exact component={DanhSachBaiKT} />
        <Route path="/thongtinsinhvien" exact component={ThongTinSV} />
        <Route path="/instructor/themkhoahoc" exact component={Themkhoahoc} />
        <Route path="/doimatkhau" exact component={ChangePassword} />
        <Route
          path="/teacher/danhsachsinhvien"
          exact
          component={Danhsachsinhvien}
        />
        <Route path="/suakhoahoc" exact component={Suakhoahoc} />
        <Route
          path="/teacher/profileteacher"
          exact
          component={ProfileTeacher}
        />

        <Route path="/diendan" exact component={Comment} />

        <Route path="/systemadmin" exact component={HomeSystemAdmin} />

        <Route
          path="/systemadmin/quanlytaikhoan"
          exact
          component={QuanLyTaikhoan}
        />

        <Route path="/classadmin" exact component={HomeClassAdmin} />
        <Route
          path="/classadmin/quanlykhoahoc"
          exact
          component={QuanLyKhoaHoc}
        />

        <Route path="/instructor" exact component={HomeInstructor} />
        <Route
          path="/instructor/profileinstructor"
          exact
          component={ProfileInstructor}
        />

        <Route path="/error" exact component={NotFound} />

        <Route
          path="/systemadmin/quanlytaikhoan/them"
          exact
          component={ThemTaiKhoan}
        />

        <Route path="/teacher/quanlykehoach" exact component={QuanLyKH} />
        <Route path="/taokehoach" exact component={TaoKH} />
        <Route path="/suakehoach" exact component={SuaKH} />
        <Route
          path="/quanlykhoahoc_classAdmin"
          exact
          component={QuanLyKH_Class_Admin}
        />
        <Route path="/danhsachhocvien" exact component={DanhSachHocVien} />
        <Route path="/themhocvien" exact component={ThemHocVien} />
        <Route path="/xembailam" exact component={XemBaiLam} />
        <Route
          path="/chitietcourse_teachers"
          exact
          component={ChiTietCourseTeacher}
        />

        <Route path="/taobaikiemtra" exact component={Taobaikiemtra} />
        <Route path="/suabaikiemtra" exact component={Suabaikiemtra} />
        <Route path="/tonghopdiendan" exact component={Tonghopdiendan} />
        <Route path="/chitietdiendan" exact component={Chitietdiendan} />
        <Route path="/themMentor" exact component={ThemMentor} />
        <Route
          path="/danhsachkhoachamdiem"
          exact
          component={Danhsachkhoachamdiem}
        />
        <Route
          path="/chitietkhoachamdiem"
          exact
          component={Chitietkhoachamdiem}
        />
        <Route
          path="/danhsachbailamcuahocvien"
          exact
          component={Danhsachbailamcuahocvien}
        />
        <Route path="/taoassignment" exact component={TaoAssignments} />
        <Route
          path="/chinhsuaassignment"
          exact
          component={ChinhsuaAssignments}
        />
        <Route path="/doimatkhaukhiquen" exact component={Doimatkhaukhiquen} />

        <Route
          path="/student/quanlykhoahoc"
          exact
          component={QuanLyKhoaHocStudent}
        />
      </Switch>
    </Router>
  );
}

export default App;
