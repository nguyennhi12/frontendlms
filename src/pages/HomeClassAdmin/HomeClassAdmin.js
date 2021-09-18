import React from 'react'
import CardList from '../../components/Guest/Card/CardList'
import Sidebar from '../../components/ClassAdmin/SidebarClassAdmin/SidebarClassAdmin'
import {BsSearch} from 'react-icons/bs'
import './homeclassadmin.css'
export default function HomeClassAdmin() {

    const logout =() =>{
        localStorage.removeItem("accessToken");
        sessionStorage.removeItem("login");
        alert("Đăng xuất thành công")
    }
    return (
        <div className="homeclassadmin">
          
            <Sidebar/>
            <div className="classadmin-content">
{/*             
                <div className="classadmin-wrapp-input">
                    
                     <input type="text" placeholder="Tìm kiếm" className="classadmin-search"/>
 
                </div> */}
                {/* <CardList /> */}
            </div>
        </div>
    )
}



