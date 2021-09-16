import React, { useState, useEffect } from "react";
import SidebarTeacher from "../SidebarTeacher/SidebarTeacher";
import "./Chitietkhoahoc.css";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineClockCircle, AiOutlineBell } from "react-icons/ai";
import { FaPlaceOfWorship, FaCheck } from "react-icons/fa";
import callApi from "../../../api/apiService";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
function Chitietkhoahoc(props) {
  const [course, setCourse] = useState([]);
  const { idCourse } = useParams();
  const history = useHistory();

  useEffect(() => {
    // Update the document title using the browser API
    callApi(`Course/getInformationCourse/${idCourse}`, "GET").then((res) => {
      // console.log(res.data.data)
      setCourse(res.data.course);
    });
  }, []);
  return (
    <div className="wrap">
      <SidebarTeacher />
      <div className="wrap-contentt">
        <div classNameName="content">
          <span
            onClick={() => {
              history.goBack();
            }}
            style={{
              marginLeft: 0,
              marginTop: 10,
              display: "block",
              textDecoration: "none",
              color: "#98a0a5",
              cursor: "pointer",
              width: 150,
              height: 60,
              padding: 10,
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: "20px" }} />
            Quay lại
          </span>
          <h2 className="header-title">{course.name}</h2>

          <div className="content__learn">
            <div className="content__learn-info">{course.name}</div>
            <div className="content__learn-course">{course.description}</div>
            <div className="content__learn-get">Bạn đã học được gì</div>
            <div className="content__learn-get-info">
              {" "}
              <FaCheck
                style={{
                  color: "orange",
                  marginTop: "-5px",
                  marginRight: "5px",
                }}
              />{" "}
              Cách làm đúng đắn trong thực tế (best practice)
            </div>
            <div>
              {" "}
              <FaCheck
                style={{
                  color: "orange",
                  marginTop: "-5px",
                  marginRight: "5px",
                }}
              />
              Các thủ thuật, kinh nghiệm xây dựng UI, UX
            </div>
          </div>
        </div>
        <div classNameName="card-info">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
              className="card-image"
            />
            <div className="card-content">
              <div className="card-top">
                <h4 className="card-title">Khóa học {course.name}</h4>
                <span>
                  <AiOutlineBell
                    style={{ marginTop: "-5px", marginRight: "5px" }}
                  />
                  Trình độ cơ bản
                </span>
                <span>
                  {" "}
                  <BsFillPeopleFill
                    style={{ marginTop: "-5px", marginRight: "5px" }}
                  />{" "}
                  Số sinh viên trong lớp: 3
                </span>
                <span>
                  <AiOutlineClockCircle
                    style={{ marginTop: "-5px", marginRight: "5px" }}
                  />
                  Thời lượng: {course.duration} ngày
                </span>
                {/* <span><AiOutlineClockCircle style={{marginTop:'-5px', marginRight:'5px'}}/>Instructor: {course.instructor.displayName}</span>
                    <span><AiOutlineClockCircle style={{marginTop:'-5px', marginRight:'5px'}}/>Teacher: {course.teacher.displayName}</span> */}

                <span>
                  <FaPlaceOfWorship
                    style={{ marginTop: "-5px", marginRight: "5px" }}
                  />
                  Học mọi lúc mọi nơi
                </span>
              </div>
              <div className="card-bottom">
                <Link
                  to="/teacher/danhsachsinhvien"
                  style={{ textDecoration: "none" }}
                >
                  <button className="card-live">Xem danh sách sinh viên</button>
                </Link>

                <Link
                  to={{ pathname: "/danhsachbaikiemtra", state: idCourse }}
                  style={{ textDecoration: "none" }}
                >
                  <button
                    className="card-live"
                    // onClick={() => {
                    //   history.push("/teacher/danhsachbaiKT/", {
                    //     from: "Chitietkhoahoc",
                    //   });
                    // }}
                  >
                    Danh sách các bài kiểm tra
                  </button>
                </Link>

                <Link
                  to={`/chitietcourse_teachers?idCourse=${idCourse}`}
                  style={{ textDecoration: "none" }}
                >
                  <button className="card-live">Quản lý kế hoạch</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chitietkhoahoc;
