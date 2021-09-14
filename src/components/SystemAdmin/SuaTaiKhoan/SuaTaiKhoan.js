import React, { useState, useEffect } from "react";
import "./SuaTaiKhoan.css";
import callApi from "../../../api/apiService";
import Notification from "../../Notification/Notification";
function SuaTaiKhoan(props) {
  const [items] = React.useState([
    {
      label: "Teacher",
      value: "Teacher",
    },
    { label: "Class Admin", value: "Class Admin" },
    { label: "Instructor", value: "Instructor" },
  ]);
  const [id,setId] = useState(props.idUser.toString())
  const [password, setPassword] = useState();
  const username = props.username
  const changePass = (e) => {
    setPassword(e.target.value);
  };
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const buttonSubmit = (e) => {
    e.preventDefault();
    if (password !== "") {
      let data = {
        id:id,
        NewPassword: password,
      };
      console.log(data)
      // var formdata = new FormData();
    
      // formdata.append("id", data.id);
      // formdata.append("NewPassword", data.NewPassword);
      callApi(`Authentication/updateAccountUser`, "PUT", data)
        .then((res) => {
          console.log(res);
          
            setNotify({isOpen:true,message:'Cập nhật mật khẩu thành công',type:'success'})
            window.location.reload();
        
      
        })
        .catch((err) => {
          console.log(err)
          if(err.response.data.message =="A bad request, you have made")
          setNotify({
            isOpen: true,
            message: "Không thể thay đổi mật khẩu",
            type: "error",
          });
        });
    }
  };
  

  return (
    <>
    <div className="wrap-profile">

    <div className="profile-edit">
      <h4 className="title">SỬA TÀI KHOẢN {props.info}</h4>
      {props.idUser=="" && <span style={{color:'red',marginLeft:10}}>Bạn chưa chọn tài khoản</span>}
      <div className="content-wrap">
        <input
          className="content-text"
          placeholder="Tài khoản"
          value={username}
          
         
        
        />
        <input
          className="content-text"
          placeholder="Mật khẩu"
          onChange={changePass}
        />
        
        
        {/* <select className="content-text content-role">
          {items.map((item) => (
            <option key={item.value} value={item.value} onChange={changeRole}>
              {item.label}
            </option>
          ))}
        </select> */}
        <div className="wrapp-button">
          <button className="button button-update" onClick={buttonSubmit}>Lưu</button>
          <button className="button button_changepass" onClick={props.handleClose}>Thoát</button>
        </div>
      </div>
    </div>
    </div>
    <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}

export default SuaTaiKhoan;
