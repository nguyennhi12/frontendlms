import React, { useState, useEffect } from "react";
import "./Chudethaoluan.css";
import Comment from "../Comment/Comment";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import callApi from "../../../../api/apiService";
import Navbar from "../../../Guest/Navbar/Navbar"
function Chudethaoluan() {
  const history = useHistory();
  const location = useLocation();
  const title = location.state.contentTitle;
  const image = location.state.image;
  const idForum = location.state.idForum;
  const content = location.state.content;
  const [listcommend,setListComment] = useState([])
  useEffect(() => {
    callApi(`Comment/getAllComment/${idForum}`, "GET").then((res) => {
      console.log(res.data.data);
      setListComment(res.data.data);
    });
  }, []);

  return (
    <>
      <Navbar/>
      <div className="discuss-content">
        
        <h3>Diễn đàn thảo luận</h3>
        <div className="forum_comment">

          <div className="discuss-wrap">
          <img src={image} style={{width:250,height:150}}/>
            <div className="discuss-title-main">

            <div className="discuss-wrap_title"> Chủ đề: {title}</div>
            <div className="discuss-wrap_content">{content}</div>
            </div>
        
          </div>
          <Comment idForum = {idForum} />
        </div>
      
      </div>
    </>
  );
}

export default Chudethaoluan;
