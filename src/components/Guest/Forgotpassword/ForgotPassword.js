import React, { useState, useCallback } from "react";
import "./forgotpassword.css";
import Forgetpassword from '../../../configs/Authentication';
import { Modal } from "react-bootstrap";
import MK from "../../../images/quenmatkhau.svg";
import { Image } from "react-bootstrap";
import Notification from "../../Notification/Notification";
import { green } from "@material-ui/core/colors";
import { Email } from "@material-ui/icons";
import Navbar from "../../Guest/Navbar/Navbar"
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [Errors, setError] = useState([]);
  const [err_text, seterr_text]= useState('');
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });


  const Forgot = async () => {
    var Email={email}
    console.log(Email);
    const result = await Forgetpassword.Forgetpassword(Email)

    console.log("heelo",result)
    
      if (result.statusCode == 400) {
        setError(result.errors)
        seterr_text(result.message)
        console.log(Errors)        
        console.log(err_text);
        console.log(result.statusCode)

        setNotify({
          isOpen: true,
          message: "Email chưa chính xác",
          type: "error",
        });
      }
      if (result.statusCode == 404) {
        setError(result.errors)
        seterr_text(result.message)
        console.log(Errors)        
        console.log(err_text);
        console.log(result.statusCode)
        setNotify({
          isOpen: true,
          message: "Email chưa chính xác",
          type: "error",
        });
      }
      if (result.success == true) {
        console.log('hello')
        console.log(result);
        setNotify({
          isOpen: true,
          message: "Đã gửi xác nhận cho Email",
          type: "success",
        });
      }
  
  };
  return (
    <>
    <Navbar/>
    <form class="wrapper">
    <h3>Quên mật khẩu</h3>
    <div className="content-forget">
    
        <Image
          src={MK}
          width="400"
          height="400"
          
          style={{ background: "#055031", marginLeft: "5%", marginTop: "0%" }}
        />

      <div className="contact-email">
        <p>Nhập email</p>
        <form >
          <div>
            <input
              type="text"
              placeholder="Nhập email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </form>
        
        <button
          style={{ marginTop: "5%", backgroundColor:'#eb7d51' }}
          onClick={Forgot}
          type="button"
          class="button"
        >
          Đặt lại mật khẩu
        </button>
      </div>
    </div>

    <Notification notify ={notify} setNotify={setNotify}/>
  </form>
  </>
  );
};

export default ForgotPassword;
