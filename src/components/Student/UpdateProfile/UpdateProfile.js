import { Avatar } from '@material-ui/core'
import React from 'react'
import './updateprofile.css'
import Img from '../../../images/avatar.png'
function UpdateProfile() {
    return (
        <div className="profile">
           
            <form className="content-wrap">
                 <h4>CẬP NHẬT THÔNG TIN CÁ NHÂN</h4>
                <input type ="text" className="content-text" placeholder="Tài khoản"/>
                <input type ="text" className="content-text" placeholder="Họ tên"/>
                <input type ="text" className="content-text" placeholder="Số điện thoại"/>
                <input type ="text" className="content-text" placeholder="Email"/>
                <input type ="text" className="content-text" placeholder="Role"/>
    
                   
                <div className="wrap-button">
                    <button className="button button-update">Update</button>
                    <button className="button button_changepass">Đổi mật khẩu</button>


                </div>
                
            </form>
            <div className="upload">
                <img src={Img} className="image"/>
                <button className="button-upload">UPLOAD IMAGE</button>
            </div>
           
        </div>
    )
}

export default UpdateProfile
