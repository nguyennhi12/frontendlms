import React, { useState, useEffect, Component } from "react";
import Navbar from "../../components/Guest/Navbar/Navbar";
import callApi from "../../api/apiService";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Redirect } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import {Link} from "react-router-dom"
import Button from "@material-ui/core/Button";
import { TrendingUpRounded } from "@material-ui/icons";
import Notification from "../../components/Notification/Notification";

function Login() {

  const [login, setLogin] = useState(false);
  const [role, setRole] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errors, setError] = useState([]);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  useEffect(() => {
   
    if (sessionStorage.getItem("login")) {
      setLogin(true);
    }
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
            // alert("Đăng nhập thành công");

            // sessionStorage.setItem("login", true);
            localStorage.setItem("accessToken", res.data.data.token);
            localStorage.setItem("role", res.data.data.role);
            localStorage.setItem("name", res.data.data.displayName);
            // localStorage.setItem("email", res.data.data.email);
            // localStorage.setItem("phone", res.data.data.phoneNumber);
            // localStorage.setItem("address", res.data.data.address);
            setRole(res.data.data.role);
            setLogin(true);
            setNotify({
              isOpen: true,
              message: "login success",
              type: "success",
            });
          }
        })
        .catch((err) => {
          setNotify({
            isOpen: true,
            message: err.response.data.message,
            type: "error",
          });
          setError(err.response.data.errors);

          // console.log(err.response)
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
        return <Redirect to={{ pathname: "/classadmin" }} />;
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
