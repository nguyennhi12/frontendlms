import React from "react";

import {
  Wrapper,
  Image_Head,
  Info,
  Assiment,
} from "./ChiTietAssignment.styles";

import HeaderCourse from "../../Guest/HeaderCourse";
import { HookgetOneStudentCourse } from "../../../hook/HookgetOneStudentCourse";
import NoiDungChiTietAss from "./NoiDungChiTietAss";
import { Image, Button } from "react-bootstrap";
import Logo from "../../../images/tmdb_logo.svg";
import { HookChiTietAss } from "../../../hook/HookChiTietAss";
import { User } from "../../../configs/User";
import { useHistory } from "react-router-dom";
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

const ChiTietAssignment = () => {
  //const { state } = this.props.location
  const history = useHistory();
  var idassignment = GetURLParameter("id_ass");
  var id_ass = GetURLParameter("id_ass");
  var idroadmapcontent = GetURLParameter("id_roadmapcontent");
  var idcourse = GetURLParameter("id_course");
  var submited = GetURLParameter("submited");
  var idstudent = GetURLParameter("idstudent");

  const { chitietass } = HookChiTietAss({ idroadmapcontent, id_ass });
  var positionass = 1;
  var student = { idassignment, idcourse, idstudent, positionass };
  const { assigment } = HookgetOneStudentCourse({ student });
  console.log(assigment);
  const Ass = {
    name: chitietass.title,
    urlImage:
      "https://scr.vn/wp-content/uploads/2020/07/Background-c%C3%A2y-c%E1%BB%8F-m%C3%A0u-t%E1%BB%91i-scaled.jpg",
  };
  return (
    <Wrapper>
      <Image_Head>
        <HeaderCourse Course={Ass}></HeaderCourse>
      </Image_Head>
      <Info>
        <Image
          className="rounded-circle "
          src={Logo}
          width="100"
          height="100"
          style={{
            backgroundColor: "black",
            marginBottom: "10%",
            position: "absolute",
            left: "50%",
            marginTop: "5%",
          }}
        ></Image>

        <strong
          className="me-auto"
          style={{
            marginBottom: "10%",
            position: "absolute",
            left: "52%",
            marginTop: "30%",
          }}
        >
          {User.displayName}
        </strong>

        <div
          style={{
            marginBottom: "10%",
            position: "absolute",
            left: "40%",
            marginTop: "43%",
          }}
        >
          <h6>Bắt đầu: {new Date(chitietass.start).toDateString()}</h6>
          <h6>Kết thúc {new Date(chitietass.finish).toDateString()}</h6>
        </div>
        <Button
          variant="primary"
          style={{
            marginBottom: "10%",
            position: "absolute",
            left: "48%",
            marginTop: "60%",
            width: "30%",
            background: "#055031",
          }}
          onClick={() => {
            history.goBack();
          }}
        >
          Trở về
        </Button>
      </Info>
      <Assiment>
        <NoiDungChiTietAss
          title={chitietass}
          idCourse={idcourse}
          submited={submited}
          idstudent={idstudent}
          assigment={assigment}
        ></NoiDungChiTietAss>
      </Assiment>
    </Wrapper>
  );
};

export default ChiTietAssignment;
