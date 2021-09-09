import React, { useState, useEffect, useCallback } from "react";
import "./forgotpassword.css";

import { Modal } from "react-bootstrap";
import MK from "../../../images/quenmatkhau.svg";
import { Image } from "react-bootstrap";
import Notification from "../../Notification/Notification";
import { green } from "@material-ui/core/colors";
const ForgotPassword = () => {
  const [email, setEmail] = useState(false);
  const [Errors, setError] = useState([]);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  useEffect(() => {
    if (sessionStorage.getItem("email")) {
      setEmail(true);
    }
  });
  const Forgot = useCallback(async () => {
    let item = { email };
    console.warn(item);

    let result = await fetch(
      "https://uy72xy9qjk.execute-api.ap-southeast-1.amazonaws.com/api/Authentication/ForgetPassword",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    try {
      result = await result.json();
      console.warn("result", result);
      if (result.statusCode === 400) {
        setNotify({
          isOpen: true,
          message: "Email chưa chính xác",
          type: "error",
        });
      }
      if (result.statusCode === 404) {
        setNotify({
          isOpen: true,
          message: "Email chưa chính xác",
          type: "error",
        });
      }
      if (result.success === true) {
        setNotify({
          isOpen: true,
          message: "Đã gửi xác nhận cho Email",
          type: "success",
        });
      }
    } catch (error) {}
  }, []);
  return (
    <form class="wrapper">
    <h3>Forgot Password </h3>
    <div className="content-forget">
    
        <Image
          src={MK}
          width="400"
          height="400"
          
          style={{ background: "#055031", marginLeft: "5%", marginTop: "0%" }}
        />

      <div className="contact-email">
        <p>Nhập email</p>
        <form class="" action="#">
          <div class="">
            <input
              type="text"
              class=""
              placeholder="Your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </form>
        <button
          style={{ marginTop: "5%", backgroundColor:'#2f86eb' }}
          onClick={Forgot}
          type="button"
          class="button"
        >
          Reset Password
        </button>
      </div>
    </div>

    <Notification notify ={notify} setNotify={setNotify}/>
  </form>
  );
};

export default ForgotPassword;
