import React, { useState, useEffect } from "react";
import "./ThemTaiKhoan.css";
import callApi from "../../../api/apiService";
import { TrainRounded, TrendingUpOutlined } from "@material-ui/icons";
function ThemTaiKhoan() {
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

  const [isOpen,setOpen] = useState(true);
  const togglePopup = () =>{
      setOpen(!isOpen)
   }

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
      callApi(`Authentication/registerTeacher`, "POST", data)
        .then((res) => {
          console.log(res);
          if (res.data.success=='true') {
            alert("Tạo thành công tài khoản");

            // sessionStorage.setItem("login", true);
            // localStorage.setItem(
            //   "accessToken",
            //   JSON.stringify(res.data.data.token)
            // );
          
          } else {
            alert("Fail");
          }
        })
        .catch((err) => {
          console.log(err)
          // setNotify({isOpen:true,message:'Error',type:'error'})
        });
    }
  };

  return (
    <div className="wrap-profile" open={isOpen}>

    <div className="profile">
      <h5>THÊM TÀI KHOẢN</h5>
      <div className="content-wrap">
        <input
          className="content-text"
          placeholder="Tài khoản"
          onChange={changeUsername}
        />
        <input
          className="content-text"
          placeholder="Mật khẩu"
          onChange={changePass}
        />
        <input
          className="content-text"
          placeholder="Tên"
          onChange={changeName}
        />
        <input
          className="content-text"
          placeholder="Email"
          onChange={changeMail}
        />
        <input
          className="content-text "
          placeholder="Số điện thoại"
          onChange={changePhone}
        />
        <input
          className="content-text "
          placeholder="Địa chỉ"
          onChange={changePlace}
        />

        {/* <select className="content-text content-role">
          {items.map((item) => (
            <option key={item.value} value={item.value} onChange={changeRole}>
              {item.label}
            </option>
          ))}
        </select> */}
        <div className="wrap-button">
          <button className="button button-update" onClick={buttonSubmit}>Lưu</button>
          <button className="button button_changepass" onClick={togglePopup}>Hủy</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ThemTaiKhoan;
