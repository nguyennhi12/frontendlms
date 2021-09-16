import React,{useState,useEffect} from 'react'
import './thongtincanhan.css'
import Sidebar from '../SidebarTeacher/SidebarTeacher'
import callApi from '../../../api/apiService'
import Notification from '../../Notification/Notification'
function ProfileTeacher() {

    const [username,setUsername] = useState()
    const [name,setDname] = useState()
    const [email,setEmail] = useState()
    const [img,setImg] = useState()
    const [imgshow,setImageShow] = useState()
    const [address,setAddress] = useState()
    const [phone,setPhone] = useState()
    const [notify,setNotify]= useState({isOpen:false, message:'',type:''})
    const getDisplayName =(e)=>{
        setDname(e.target.value)
    }

    const getImg =(e)=>{
        setImg(e.target.files[0])
    }

    const getAddress =(e)=>{
        setAddress(e.target.value)
    }

    const getPhone =(e)=>{
        setPhone(e.target.value)
    }


    // const [user,setUser] = useState(localStorage.getItem("accessToken"));

    const getInfo = () =>{
        callApi(`Authentication/getUser`, "GET")
        .then((res) => {
       
            setEmail(res.data.data.email)
            setPhone (res.data.data.phone)
            setDname(res.data.data.displayName)
            setUsername(res.data.data.userName)
            setAddress(res.data.data.address)
            setImageShow(res.data.data.urlAvatar)
           
                      
        })
        .catch((err) => {
          console.log(err);
        });
    }
    useEffect(() => {
        getInfo()
    }, [])

    const updateInfo = (e) =>{
        e.preventDefault();

        let formdata = new FormData();
        formdata.append("DisplayName",name)
        formdata.append("PhoneNumber",phone)
        formdata.append("Address",address)
        formdata.append("avatar",img)
        

        callApi(`Authentication/updateUser`, "PUT",formdata)
        .then((res) => {
       
            setNotify({isOpen:true,message:'Lưu thành công thông tin',type:'success'})
             getInfo()
           
                      
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return (
            <>
          <div className="profilee">
            <h5 className="teacher__profile-title">CHI TIẾT PROFILE</h5>
            <div className="contentt-wrap">
                {
                    imgshow!=null &&<img src={imgshow} className="avatar_teacher"/>
                }
                {
                    imgshow==null && <span className="avatar_teacher">Chưa có Avatar</span>
                }
            
                {/* <input className="content-text"  placeholder="Tài khoản" value={username} disabled/> */}
                <input className="content-text"  placeholder="Họ tên" value={name} onChange={getDisplayName}/>
                           <input className="content-text"  placeholder=" Email" value={email} disabled/>
                <input className="content-text"  placeholder=" Phone" value={phone} onChange={getPhone}/>
                <input className="content-text"  placeholder=" Địa chỉ" value={address} onChange={getAddress}/>
                <input className="teacher__avatar-input" type="file" onChange={getImg} /> 
                <div className="teacher-wrapp-button">
                    <button className="buttonn button-update">Cập nhật</button>
                    <button className="buttonn button_changepass" onClick={updateInfo}>Lưu</button>
                </div>
                
            </div>
        </div>
        <Notification notify={notify} setNotify={setNotify} />
        </>
        
    )
}

export default ProfileTeacher
