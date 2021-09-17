import React from 'react'
import "./topbar.css"
import { NotificationsNone,Search } from '@material-ui/icons'
import Avatar from '../../../images/avatar.png'
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft"></div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <Search/>
                      
                    </div>
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconNoti"></span>
                        
                    </div>
                    <span className="space">|</span>
                    <div className="topbarInfo">
                        <span>Teacher</span>
                         <img src={localStorage.getItem("avatar")} alt="" className="topAvatar"/>
                    </div>
                  
                </div>

            </div>
        </div>
    )
}


