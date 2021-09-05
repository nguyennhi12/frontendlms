import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataSuakhoahoc from "./DataSuakhoahoc";

import {
  WrapperAdd,
  SuaKHLayout,
  Signup,
  Signup_classic,
  Signup_connect,
  Form,
  Datatkh,
} from "./Suakhoahoc.styles";
import callApi from "../../../api/apiService";
import DropdownList from "../../DropdownList/DropdownList";
import Notification from "../../Notification/Notification";

export default function Suakhoahoc(props) {
  const [name, setName] = useState(props.courseinfo.name);
  const [description, setDescription] = useState(props.courseinfo.description);
  const [idTeacher, setIdTeacher] = useState(props.courseinfo.idTeacher);
  const [idClassAdmin, setIdClassAdmin] = useState(
    props.courseinfo.idClassAdmin
  );
  const [duration, setDuration] = useState(props.courseinfo.duration);
  const [url, setUrl] = useState();
  const [teacher, setData] = useState([]);
  const [classadmin, setDataClassAdmin] = useState([]);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const getIdTeacher = (data) => {
    setIdTeacher(data);
  };

  const getIdClassAdmin = (data) => {
    setIdClassAdmin(data);
  };

  const changeNname = (e) => {
    setName(e.target.value);
  };

  const changeUrl = (e) => {
    setUrl(e.target.files[0]);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const changeDuration = (e) => {
    setDuration(e.target.value);
  };

  useEffect(() => {
    handleIdTeacher("");
    handleIdClassAdmin("");
  }, []);

  const handleIdTeacher = async (val) => {
    {
      callApi(
        `Authentication/getAllUser?searchRole=TEACHER&searchName=${val}&pageSize=20&pageNumber=1`,
        "GET"
      )
        .then((res) => {
          console.log(res);
          if (res.data.statusCode == 200) {
            setData(res.data.data);
          } else {
            alert("Fail");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleIdClassAdmin = async (val) => {
    {
      callApi(
        `Authentication/getAllUser?searchRole=CLASSADMIN&searchName=${val}&pageSize=20&pageNumber=1`,
        "GET"
      )
        .then((res) => {
          console.log(res);
          if (res.data.statusCode == 200) {
            setDataClassAdmin(res.data.data);
          } else {
            alert("Fail");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const buttonSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && description !== "") {
      const data = {
        idTeacher: idTeacher,
        idClassAdmin: idClassAdmin,
        name: name,
        description: description,
        duration: duration,
        URLImage: url,
      };

      var formdata = new FormData();
      formdata.append("idTeacher", data.idTeacher);
      formdata.append("idClassAdmin", data.idClassAdmin);
      formdata.append("name", data.name);
      formdata.append("description", data.description);
      formdata.append("duration", data.duration);
      formdata.append("URLImage", data.URLImage);

      var val = props.courseid;

      callApi(`Course/updateCourse/${val}`, "PUT", formdata)
        .then((res) => {
          console.log(res);
          // if(res.data.success=='true'){
           
          // }
            if(res.status==200){
              setNotify({
                isOpen: true,
                message: `${res.data.message}`,
                type: "success",
              })
            }
             
         
        })
        .catch((err) => {
          setNotify({
            isOpen: true,
            message: "Lỗi",
            type: "error",
          });
          console.log(err);
        });
    }
  };

  return (
    <>
      <WrapperAdd>
        <SuaKHLayout>
          <Signup>
            <h4>Sửa khóa học</h4>
            <span className="close" onClick={props.handleClose}>
              x
            </span>
            <Signup_connect>
              <Form>
                <fieldset className="username">
                  <input
                    type="text"
                    placeholder="Tên khóa học"
                    onChange={changeNname}
                    value={name}
                  />
                </fieldset>
                <fieldset className="username">
                  <input
                    type="text"
                    style={{ width: "270px", height: "400px" }}
                    placeholder="Nội dung"
                    onChange={changeDescription}
                    value={description}
                  />
                </fieldset>

                <fieldset className="username wrapdate">
                  <input
                    type="text"
                    onChange={changeDuration}
                    placeholder="duration"
                    value={duration}
                    required
                  />
                </fieldset>
              </Form>
              <Link >
                <button type="submit" className="btn" onClick={props.handleClose}>
                  Hủy
                </button>
              </Link>
            </Signup_connect>
            <Signup_classic>
              <Form>
                <fieldset className="xacnhan">
                  <DropdownList
                    title="Teacher"
                    data={teacher}
                    getData={getIdTeacher}
                    value={idTeacher}
                  />
                </fieldset>

                <fieldset className="xacnhan">
                  <DropdownList
                    title="Class Admin"
                    data={classadmin}
                    getData={getIdClassAdmin}
                    value={idClassAdmin}
                  />
                </fieldset>

                {/* <span>{props.courseinfo.idInstructor}</span> */}

                <input
                  type="file"
                  placeholder="Hình ảnh"
                  onChange={changeUrl}
                />

                <button type="submit" className="btn" onClick={buttonSubmit}>
                  Lưu
                </button>
              </Form>
            </Signup_classic>
          </Signup>
        </SuaKHLayout>
      </WrapperAdd>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}
