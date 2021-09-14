import React, { useEffect, useState } from "react";

import {
  Wrapper,
  Image_Head,
  Course,
  Navigationbar,
  HeaderList,
} from "./QuanLyDiem.styles";

import { HookListChuDe } from "../../../hook/HookListChuDe";
import SidebarTeacher from "../SidebarTeacher/SidebarTeacher";
import Topbar from "../Topbar/Topbar";
import HeaderListSinhVien from "./HeaderListSinhVien";
import TableSinhVien from "./TableSinhVien";
import callApi from "../../../api/apiService";

const QuanLyDiem = (props) => {
  const [scoreList, setScoreList] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    let data = {
      idCourse: props.idCourse,
      idAssignment: props.idAssignment,
      UrlSubmit: props.UrlSubmit,
    };

    var formdata = new FormData();
    formdata.append("idCourse", data.idCourse);
    formdata.append("idAssignment", data.idAssignment);
    formdata.append("UrlSubmit", data.UrlSubmit);

    callApi(
        `StudentScores/getStudentScoreOfCourses?pageNumber=1&pageSize=3`,"GET",formdata
    ).then((res) => {
      setScoreList(res);
      console.log(scoreList)
    });
  }, []);

  const students = [
    { username: "Huy Bui", name: "Bùi Đức Huy", diem: "null" },
    { username: "Nhi Nguyễn", name: "Nguyễn Thị Yến Nhi", diem: "10" },
    { username: "Huy Bui", name: "Bùi Đức Huy", diem: "9.0" },
    { username: "Nhi Nguyễn", name: "Nguyễn Thị Yến Nhi", diem: "9.0" },
    { username: "Huy Bui", name: "Bùi Đức Huy", diem: "9.8" },
  ];
  return (
    <Wrapper>
      <Image_Head>
        <Topbar />
      </Image_Head>
      {/* <Navigationbar><Sidebar></Sidebar> </Navigationbar>   */}
      <SidebarTeacher />
      <HeaderList>
        <HeaderListSinhVien />
      </HeaderList>
      <Course>
        <TableSinhVien students={students}></TableSinhVien>
      </Course>
    </Wrapper>
  );
};

export default QuanLyDiem;
