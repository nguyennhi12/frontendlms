import React, { useState, useEffect } from "react";
import "./thongtincanhan.css";
import Notification from '../../Notification/Notification'
import Sidebar from "../SidebarInstructor/SidebarInstructor";
import callApi from "../../../api/apiService";
function ProfileInstructor() {
  const [username, setUsername] = useState();
  const [name, setDname] = useState();
  const [email, setEmail] = useState();
  const [img, setImg] = useState();
  const [imgshow, setImageShow] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const getDisplayName = (e) => {
    setDname(e.target.value);
  };

  const getImg = (e) => {
    setImg(e.target.files[0]);
  };

  const getAddress = (e) => {
    setAddress(e.target.value);
  };

  const getPhone = (e) => {
    setPhone(e.target.value);
  };

  const getInfo = () => {
    callApi(`Authentication/getUser`, "GET")
      .then((res) => {
        setEmail(res.data.data.email);
        setPhone(res.data.data.phone);
        setDname(res.data.data.displayName);
        setUsername(res.data.data.userName);
        setAddress(res.data.data.address);
        setImageShow(res.data.data.urlAvatar);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getInfo();
  }, []);

  const updateInfo = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    formdata.append("DisplayName", name);
    formdata.append("PhoneNumber", phone);
    formdata.append("Address", address);
    formdata.append("avatar", img);

    callApi(`Authentication/updateUser`, "PUT", formdata)
      .then((res) => {
        setNotify({
          isOpen: true,
          message: "Lưu thành công thông tin",
          type: "success",
        });
        getInfo();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
      <>
    <div className="profile-instructor">
      <h5 className="profile__intructor-title">CHI TIẾT PROFILE</h5>
      <div className="content-wrap">
        {imgshow != null && <img src={imgshow} className="avatar_instructor" />}
        {imgshow == null && (
          <span className="avatar_instructor">Chưa có Avatar</span>
        )}

        <input
          className="content-text"
          placeholder="Họ tên"
          value={name}
          onChange={getDisplayName}
        />
        <input
          className="content-text"
          placeholder=" Email"
          value={email}
          disabled
        />
        <input
          className="content-text"
          placeholder=" Phone"
          value={phone}
          onChange={getPhone}
        />
        <input
          className="content-text"
          placeholder=" Địa chỉ"
          value={address}
          onChange={getAddress}
        />
        <input
          className="teacher__avatar-input"
          type="file"
          onChange={getImg}
        />
        <div className="wrap-button-student">
          <button className="button button-update">Update</button>
          <button className="button button_changepass" onClick={updateInfo}>
            Lưu
          </button>
        </div>
      </div>
    </div>
    <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}

export default ProfileInstructor;
