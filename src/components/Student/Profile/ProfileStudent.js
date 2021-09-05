import React from 'react'
import './profilestudent.css'
function ProfileStudent() {
    return (
        <div className="profile">
            <h3>CHI TIẾT PROFILE</h3>
            <div className="content-wrap">
                <div className="content-text">
                    Tài khoản
                </div>
                <div className="content-text">
                    Họ tên
                </div>
                <div className="content-text">
                    Số điện thoại
                </div>
                <div className="content-text">
                    Email
                </div>
                <div className="content-text">
                    Role
                </div>
                <div className="wrap-button">
                    <button className="button button-update">Update</button>
                    <button className="button button_changepass">Đổi mật khẩu</button>


                </div>
                
            </div>
        </div>
    )
}

export default ProfileStudent
