import React,{useState} from 'react'
import SidebarSystem from '../SidebarSystem/SidebarSystem'
import TableManage from '../TableManage/TableManage'
import Topbar from '../Topbar/Topbar'
import './QuanLyTaiKhoan.css'
import ThemTaiKhoan from '../ThemTaiKhoan/ThemTaiKhoan'
import Notification from '../../Notification/Notification'

function QuanLyTaikhoan() {
    const [isOpenTeacher,setOpenTeacher] = useState(false);
 
    const [isOpenInstructor,setOpenInstructor] = useState(false);
    const [isOpenClassAdmin,setOpenClassAdmin] = useState(false);
    const [role,setRole] = useState()
    const [info,setInfo]= useState()
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
      });

    
    const togglePopupTeacher = () =>{
        setOpenTeacher(!isOpenTeacher)
        setRole('registerTeacher');
        setInfo('TEACHER')
     }

     const togglePopupInstructor = () =>{
        setOpenTeacher(!isOpenInstructor)
        setRole('registerInstructor');
        setInfo('INSTRUCTOR')
     }
    
     const togglePopupClassAdmin = () =>{
        setOpenTeacher(!isOpenClassAdmin)
        setRole('registerClassAdmin');
        setInfo('CLASS ADMIN')
     }

    
    //  const togglePopupTeacher = () =>{
    //      setOpen(!isOpenTeacher)
    //   }
    //   const [isOpenTeacher,setOpen] = useState(false);
    // const togglePopupTeacher = () =>{
    //     setOpen(!isOpenTeacher)
    //  }
    
    return (
        <>
        <div className="wrappermanager">
            <SidebarSystem/>
            <div className="contentmanager">
                <div className="header">
                    <div className="header-title" >Quản lý các tài khoản trong hệ thống</div>
                     <Topbar/>

                </div>
                <div className="wrapbutton">
                    <button className="header-btn_add" onClick={togglePopupTeacher}>Thêm tài khoản Teacher</button>
                    <button className="header-btn_add" onClick={togglePopupInstructor}>Thêm tài khoản Instructor</button>
                    <button className="header-btn_add" onClick={togglePopupClassAdmin}>Thêm tài khoản Class Admin</button>
                </div>
                
                <div className="table-data">
                    <TableManage/>
                </div>
            </div>
        
            
        </div>

        {
            isOpenTeacher && <ThemTaiKhoan handleClose={togglePopupTeacher} role={role} info={info}/>
        }
        {
            isOpenInstructor && <ThemTaiKhoan handleClose={togglePopupInstructor} role={role} info={info} />
        }
        {
            isOpenClassAdmin && <ThemTaiKhoan handleClose={togglePopupClassAdmin} role={role} info={info}/>
        }
        
        </>
    )
}

export default  QuanLyTaikhoan
