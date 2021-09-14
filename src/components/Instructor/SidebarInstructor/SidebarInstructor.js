import React from "react";
import "./SidebarInstructor.css";
import { SidebarData } from "./SidebarData";
import Avatar from "../../../images/avatar.png";
function SidebarInstructor() {
  return (
    <div className="sidebar-instructor">
      <div className="info">
        <div className="info-container">
          <img src={Avatar} className="info__img" />
        </div>
        <div className="info__name">{localStorage.getItem("username")}</div>
      </div>

      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              className="row"
              id={
                window.location.link === val.link || val.link === "/home"
                  ? "active"
                  : ""
              }
              key={key}
              onClick={()=>{
                        
                window.location.pathname = val.link
                if(val.link==="/"){
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("role")
                    localStorage.removeItem("name")
                    localStorage.removeItem("username")
                }
            
            }
                
            }
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SidebarInstructor;
