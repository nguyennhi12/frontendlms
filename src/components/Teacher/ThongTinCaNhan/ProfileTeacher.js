import React,{useState,useEffect} from 'react'
import './thongtincanhan.css'
import Sidebar from '../SidebarTeacher/SidebarTeacher'
import callApi from '../../../api/apiService'
function ProfileTeacher() {

    const [username,setUsername] = useState()
    const [name,setNname] = useState()
    const [email,setEmail] = useState()
    const [phone,setPhone] = useState()
    const [address,setAddress] = useState()
    // const [user,setUser] = useState(localStorage.getItem("accessToken"));
    useEffect(() => {
        callApi(`Authentication/getUser`, "GET")
        .then((res) => {
       
            setEmail(res.data.data.email)
           
                      
        })
        .catch((err) => {
          console.log(err);
        });
    }, [])

    return (
    
          <div className="profilee">
            <h5>CHI TIẾT PROFILE</h5>
            <div className="contentt-wrap">
                <input className="content-text"  placeholder="Tài khoản" value={username}/>
                <input className="content-text"  placeholder="Họ tên" value={name}/>
                <input className="content-text"  placeholder=" Email" value={email}/>
                <input className="content-text"  placeholder=" Số điện thoại" value={phone}/>
                <input className="content-text"  placeholder=" Địa chỉ" value={address}/>
                
              
                <div className="wrapp-button">
                    <button className="buttonn button-update">Cập nhật</button>
                    <button className="buttonn button_changepass">Lưu</button>
                </div>
                
            </div>
        </div>
        
    )
}

export default ProfileTeacher
