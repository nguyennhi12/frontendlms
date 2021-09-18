import React, { useState, useEffect } from "react";

import {
  Wrapper,
  Image_Head,
  Review,
  Table,
  Course,
  Comment,
  Navigationbar,
} from "./InfoCourse.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import Thumb_Cmt from "../Thumb_Cmt";
import HeaderCourse from "../HeaderCourse";
import NoiDungCourse from "../NoiDungCourse";
import PopUpXacNhanDangKy from "../../Student/PopUp/PopUpXacNhanDangKy";
import Sidebar from "../../Student/SidebarStudent/Sidebar";
import { HookInfoCourse } from "../../../hook/HookInfoCourse";
import { Card } from "react-bootstrap";
function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}
const InfoCourse = () => {
  const id = GetURLParameter("idCourse");
  const { course, enable, eveluate, student, teacher } = HookInfoCourse({ id });
  const date = new Date(course.createdAt+'Z');
    console.log("hello",course.createdAt)
 
  return (
    <Wrapper>
      <Navigationbar>
        <Sidebar />
      </Navigationbar>

      <Image_Head>
        <HeaderCourse Course={course}></HeaderCourse>
      </Image_Head>

      <Review>
        <Card border="info" style={{ width: "28vmax" }}>
          {
            eveluate.totalPoint !== 'NaN' ?<h2 style={{ marginTop: "2%", color: "red" }}>
            Đánh giá {eveluate.totalPoint}/5   </h2>: <h2 style={{ marginTop: "2%" }}>
            Đánh giá 0/5
        
          </h2>
          }
       
          <Table className="table">
            <tr>
              <th>Ngày tạo: {date.toLocaleString({
                    timeZone: "Asia/Calcutta",
                })} </th>
             
              {/* <th>{results_infos.teacher}</th> */}
            </tr>
            <tr>
               <th>Giảng viên: {teacher.displayName}</th>
            </tr>
            <tr>
              <th>Thời lượng: {course.duration} ngày</th>
              <th>Zoom</th>
            </tr>
          </Table>
          <h3>STUDENT: {student}/40</h3>
          <PopUpXacNhanDangKy
            name={course.name}
            teacher={teacher.displayName}
            createdAt={course.createdAt}
            duration={course.duration}
            idCourse={id}
            enable={enable}
          ></PopUpXacNhanDangKy>
        </Card>
      </Review>
      <Course className="course">
        <NoiDungCourse noidung={course.description} />
      </Course>
      <Comment>
        <Thumb_Cmt id={id} />
      </Comment>
    </Wrapper>
  );
};

export default InfoCourse;
