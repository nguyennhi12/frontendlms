import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataThemkhoahoc from "./DataThemkhoahoc";

import {
  WrapperAdd,
  ThemKHLayout,
  Signup,
  Signup_classic,
  Signup_connect,
  Form,
  Datatkh,
} from "./Themkhoahoc.styles";
import Select from "react-select";
import callApi from "../../../api/apiService";
import DropdownList from "../../DropdownList/DropdownList";
import Notification from "../../Notification/Notification";

export default function Themkhoahoc(props) {
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState();
  const [idTeacher, setIdTeacher] = useState();
  const [idClassAdmin, setIdClassAdmin] = useState();
  const [duration, setDuration] = useState();
  const [url, setUrl] = useState();
  const [teacher, setData] = useState([]);
  const [classadmin, setDataClassAdmin] = useState([]);
   const [notify,setNotify]= useState({isOpen:false, message:'',type:''})
  // Get data
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
      let data = {
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

      {
        console.log(formdata);
      }
      callApi(`Course/createCourse`, "POST", formdata)
        .then((res) => {
          console.log(res);

            setNotify({isOpen:true,message:'Lưu thành công khóa học',type:'success'})
            window.location.reload();
         
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
    <WrapperAdd>
      <ThemKHLayout>
        <Signup>
          <h4>Thêm khóa học</h4>
          <span className="close" onClick={props.handleClose}>
            x
          </span>
          <Signup_connect>
            <Form>
              <fieldset className="username">
                <input
                  type="text"
                  placeholder="Tên khóa học"
                  value={name}
                  onChange={changeNname}
                />
              </fieldset>
              <fieldset className="username">
                <input
                  type="text"
                  style={{ width: "270px", height: "400px" }}
                  placeholder="Nội dung"
                  value={description}
                  onChange={changeDescription}
                />
              </fieldset>

              <fieldset className="username wrapdate">
                <input type="text" onChange={changeDuration} value={duration} placeholder="Duration"/>
              </fieldset>
            </Form>
            <Link >
              <button className="btn" onClick={props.handleClose}>Hủy</button>
            </Link>
          </Signup_connect>
          <Signup_classic>
            <Form>
              <fieldset className="xacnhan">
                <DropdownList
                  title="Teacher"
                  data={teacher}
                  getData={getIdTeacher}
                />
              </fieldset>

              <fieldset className="xacnhan">
                <DropdownList
                  title="Class Admin"
                  data={classadmin}
                  getData={getIdClassAdmin}
                />
              </fieldset>
              {/* {console.log(idTeacher)}

              {console.log(idClassAdmin)} */}
              <input type="file" placeholder="Hình ảnh" onChange={changeUrl} />

              <button type="submit" className="btn" onClick={buttonSubmit}>
                Lưu
              </button>
            </Form>
          </Signup_classic>
        </Signup>
      </ThemKHLayout>
    </WrapperAdd>
    <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}
