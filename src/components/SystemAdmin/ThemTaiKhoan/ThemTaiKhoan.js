import React, { useState, useEffect } from "react";
import "./ThemTaiKhoan.css";
import callApi from "../../../api/apiService";
import { TrainRounded, TrendingUpOutlined } from "@material-ui/icons";
import Notification from "../../Notification/Notification";
function ThemTaiKhoan(props) {
  const [items] = React.useState([
    {
      label: "Teacher",
      value: "Teacher",
    },
    { label: "Class Admin", value: "Class Admin" },
    { label: "Instructor", value: "Instructor" },
  ]);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [place, setPlace] = useState();
  const [name, setName] = useState();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
 

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };
  const changePass = (e) => {
    setPassword(e.target.value);
  };
  const changeMail = (e) => {
    setEmail(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const changePlace = (e) => {
    setPlace(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };

  const buttonSubmit = (e) => {
    e.preventDefault();
    if (username !== "" && password !== "") {
      let data = {
        Email:email,
        UserName: username,
        DisplayName:name,
        PhoneNumber:phone,
        Address:place,
        Password: password,
      };
      
      var formdata = new FormData();
      formdata.append("Email", data.idTeacher);
      formdata.append("UserName", data.idClassAdmin);
      formdata.append("DisplayName", data.name);
      formdata.append("PhoneNumber", data.description);
      formdata.append("Address", data.duration);
      formdata.append("Password", data.Password);
      callApi(`Authentication/${props.role}`, "POST", data)
        .then((res) => {
          console.log(res);
          
            setNotify({isOpen:true,message:'T???o th??nh c??ng t??i kho???n',type:'success'})
            window.location.reload()
        
      
        })
        .catch((err) => {
          console.log(err)
          if(err.response.data.message =="A bad request, you have made")
          setNotify({
            isOpen: true,
            message: "Email ho???c Username ???? ???????c s??? d???ng",
            type: "error",
          });
        });
    }
  };

  return (
    <>
    <div className="wrap-profile-add">

    <div className="profile">
      <h6 className="title">TH??M T??I KHO???N {props.info}</h6>
      <div className="content-wrap">
        <input
          className="content-text"
          placeholder="T??i kho???n"
          onChange={changeUsername}
        />
        <input
          className="content-text"
          placeholder="M???t kh???u"
          onChange={changePass}
        />
        <input
          className="content-text"
          placeholder="T??n"
          onChange={changeName}
        />
        <input
          className="content-text"
          placeholder="Email"
          onChange={changeMail}
        />
        <input
          className="content-text "
          placeholder="S??? ??i???n tho???i"
          onChange={changePhone}
        />
        <input
          className="content-text "
          placeholder="?????a ch???"
          onChange={changePlace}
        />

        {/* <select className="content-text content-role">
          {items.map((item) => (
            <option key={item.value} value={item.value} onChange={changeRole}>
              {item.label}
            </option>
          ))}
        </select> */}
        <div className="wrapp-button">
          <button className="button button-update" onClick={buttonSubmit} style={{backgroundColor:'#2BA621'}}>L??u</button>
          <button className="button button_changepass" onClick={props.handleClose} style={{backgroundColor:'#DD1D1D'}}>Tho??t</button>
        </div>
      </div>
    </div>
    </div>
    <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}

export default ThemTaiKhoan;
