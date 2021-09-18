import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Modal, Button } from "react-bootstrap";
import Authentication from "../../configs/Authentication";
import Notification from "../../components/Notification/Notification";

//style
import {
  Signup,
  Signup_classic,
  Signup_connect,
  Form,
  Layout_Register,
} from "./Register.styles";
import Navbar from "../../components/Guest/Navbar/Navbar";

const Register = () => {
  const [DisplayName, sethoten] = useState("");
  const [Email, setemail] = useState("");
  const [PhoneNumber, setsdt] = useState("");
  const [UserName, setusename] = useState("");
  const [Password, setpassword] = useState("");
  const [nhaplaipw, setnhaplaipw] = useState("");
  const Address = "Thủ Đức";
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Errors, setError] = useState([]);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  async function onClick() {
    if (Password == nhaplaipw) {
      let person = {
        Email,
        UserName,
        DisplayName,
        PhoneNumber,
        Address,
        Password,
      };
      const result = await Authentication.Register(person);
      if(result.successcode==true){
        setNotify({isOpen:true,message:"Bạn đã đăng ký thành công",type:'success'})
        }
      if (result.statusCode == 400) {
        setError(result.errors);
        console.warn(Errors);
        console.log(result.statusCode);
        result.errors.map((error) =>
          setNotify({ isOpen: true, message: error, type: "error" })
        );
        handleShow();
      }
    } else {
      setError(["RePassword is invalid!!"]);
      setNotify({
        isOpen: true,
        message: "RePassword is invalid!!",
        type: "error",
      });
    }
  }

  return (
    <Layout_Register>
      <Navbar />
      <Signup>
        <Signup_connect>
          <h1 style={{ color: "#fff" }}>Tạo tài khoản</h1>

          <Link to="/">
            <a
              className="btn btn-social btn-facebook"
              style={{ color: "#fff" }}
            >
              <FacebookIcon></FacebookIcon>
              <i className="fa fa-facebook"></i> Đăng nhập bằng Facebook
            </a>
          </Link>
          <Link to="/">
            <a className="btn btn-social btn-google" style={{ color: "#fff" }}>
              <FcGoogle />
              <i className="fa fa-google"></i>Đăng nhập bằng Google
            </a>
          </Link>

          <Link to="/dangnhap">
            <p style={{ color: "#fff" }} className="DangNhap">
              Bạn đã có tài khoản? Đăng nhập ngay
            </p>
          </Link>
        </Signup_connect>

        <Signup_classic>
          <h2>Hoặc đăng ký bằng</h2>
          <Form>
            <fieldset className="hoten">
              <input
                type="text"
                placeholder="Họ và tên"
                onChange={(e) => sethoten(e.target.value)}
              />
            </fieldset>

            <fieldset className="email">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
              />
            </fieldset>

            <fieldset className="sdt">
              <input
                type="text"
                placeholder="Số điện thoại"
                onChange={(e) => setsdt(e.target.value)}
              />
            </fieldset>

            <fieldset className="username">
              <input
                type="text"
                placeholder="Tên tài khoản"
                onChange={(e) => setusename(e.target.value)}
              />
            </fieldset>

            <fieldset className="password">
              <input
                type="password"
                placeholder="Mật khẩu"
                onChange={(e) => setpassword(e.target.value)}
              />
            </fieldset>

            <fieldset className="XNPS">
              <input
                type="password"
                placeholder="Xác nhận mật khẩu"
                onChange={(e) => setnhaplaipw(e.target.value)}
              />
            </fieldset>
            <Link>
              <button type="submit" className="btn" onClick={onClick}>
                ĐĂNG KÝ
              </button>
            </Link>
          </Form>
        </Signup_classic>
      </Signup>
      <Notification notify={notify} setNotify={setNotify} />
    </Layout_Register>
  );
};

export default Register;
