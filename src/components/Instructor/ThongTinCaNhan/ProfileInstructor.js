import React,{useState,useEffect} from 'react'
import './thongtincanhan.css'
import Sidebar from '../SidebarInstructor/SidebarInstructor'
function ProfileInstructor() {

    const [name, setName] = useState('C++');
    const [description, setDescription] = useState();
    const [idTeacher, setIdTeacher] = useState();
    const [idClassAdmin, setIdClassAdmin] = useState();
    const [duration,setDuration] = useState();
    return (
    
          <div className="profile-instructor">
            <h5>CHI TIẾT PROFILE</h5>
            <div className="content-wrap">
                <input className="content-text" placeholder=" Tài khoản"/>
                <input className="content-text" placeholder=" Họ tên"/>
                <input className="content-text" placeholder="Số điện thoại"/>
                <input className="content-text" placeholder="Email" disabled/>
              
                <div className="wrap-button">
                    <button className="button button-update">Update</button>
                    <button className="button button_changepass">Đổi mật khẩu</button>


                </div>
                
            </div>
        </div>
        
    )
}

export default ProfileInstructor
