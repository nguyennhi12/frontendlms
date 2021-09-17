import React, { useState, useEffect } from "react";
import Navbar from "../../components/Guest/Navbar/Navbar";
import callApi from "../../api/apiService";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Redirect } from "react-router-dom";
import {Link} from "react-router-dom"
import Notification from "../../components/Notification/Notification";

function Login() {

  const [role, setRole] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  useEffect(() => {
   
    // if (sessionStorage.getItem("login")) {
    //   setLogin(true);
    // }
  });

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const btnLogin = (e) => {
    e.preventDefault();
    if (username !== "" && password !== "") {
      let data = {
        Username: username,
        Password: password,
      };
      callApi(`Authentication/login`, "POST", data)
        .then((res) => {
          console.log(res);
          if (res.data.data.token) {
            localStorage.setItem("accessToken", res.data.data.token);
            localStorage.setItem("role", res.data.data.role);
            localStorage.setItem("name", res.data.data.displayName);
            localStorage.setItem("username", res.data.data.userName);
            if(res.data.data.avatar==null){
              localStorage.setItem("avatar","https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg");

            }
            else{
            localStorage.setItem("avatar",res.data.data.avatar)
            }

            

            setRole(res.data.data.role);
        
            setNotify({
              isOpen: true,
              message: "login success",
              type: "success",
            });
          }
        })
        .catch((err) => {
          if(err.response.status===400)
          {
            if(err.response.data.message==="Sai username hoặc password")
            {
              setNotify({
                isOpen: true,
                message: "Sai username hoặc password",
                type: "error",
              });
            }
            else{   
                       setNotify({
                isOpen: true,
                message: "Bạn điền thiếu thông tin",
                type: "error",
              });
            }
            
          }
         
        });
    }
  };

  if (role) {
    switch (role) {
      case "TEACHER":
        return <Redirect to={{ pathname: "/teacher" }} />;
        break;
      case "INSTRUCTOR":
        return <Redirect to={{ pathname: "/instructor" }} />;
        break;
      case "STUDENT":
        return <Redirect to={{ pathname: "/student" }} />;
        break;
      case "CLASSADMIN":
        return <Redirect to={{ pathname: "/classadmin/quanlykhoahoc" }} />;
        break;
      case "SYSTEMADMIN":
        return <Redirect to={{ pathname: "/systemadmin/quanlytaikhoan" }} />;
        break;
    }

    console.log(localStorage.getItem("username"));
  }

  return (
    <div className="login-container">
      <Navbar />
      <div className="login-content">
        <div className="login-title">Sign In</div>
        <form className="login-form">
          <input
            type="text"
            placeholder="Username"
            onChange={changeUsername}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={changePassword}
            required
          />
          <Link to="/quenmatkhau" style={{textDecoration:'none',marginLeft:'200px',fontSize:'15px',marginTop:'10px'}}>
              <span>Quên mật khẩu ?</span>
          </Link>
          <button type="submit" className="login-btn" onClick={btnLogin}>
            Login
          </button>
        </form>
        <hr />
        <div className="login-other">
          <button type="submit" className="login-btn btn-google">
            {" "}
            <FcGoogle className="icon-google" />
            Sign in with Google
          </button>
          <button type="submit" className="login-btn btn-facebook">
            {" "}
            <FacebookIcon className="icon-facebook" />
            Sign in with Facebook
          </button>
        </div>
      </div>

      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
}

export default Login;
