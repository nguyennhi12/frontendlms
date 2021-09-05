import React from "react";
import "./SuaTaiKhoan.css";

function SuaTaiKhoan() {
  const [items] = React.useState([
    {
      label: "Teacher",
      value: "Teacher",
    },
    { label: "Class Admin", value: "Class Admin" },
    { label: "Instructor", value: "Instructor" },
  ]);

  return (
    <div className="profile">
      <h5>SỬA TÀI KHOẢN</h5>
      <div className="content-wrap">
        <input className="content-text" placeholder="Tài khoản" disabled />
        <input className="content-text" placeholder="Mật khẩu" />
        <input className="content-text" placeholder="Email" disabled />
        <input className="content-text " placeholder="Số điện thoại" />

        <select className="content-text content-role">
          {items.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <div className="wrap-button">
          <button className="button button-update">Lưu</button>
          <button className="button button_changepass">Hủy</button>
        </div>
      </div>
    </div>
  );
}

export default SuaTaiKhoan;
