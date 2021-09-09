import React,{useState} from 'react'
import SidebarSystem from '../SidebarSystem/SidebarSystem'
import TableManage from '../TableManage/TableManage'
import Topbar from '../Topbar/Topbar'
import './QuanLyTaiKhoan.css'
import ThemTaiKhoan from '../ThemTaiKhoan/ThemTaiKhoan'
function QuanLyTaikhoan() {
    const [isOpen,setOpen] = useState(false);
    const togglePopup = () =>{
        setOpen(!isOpen)
     }
    
    return (
        <>
        <div className="wrappermanager">
            <SidebarSystem/>
            <div className="contentmanager">
                <div className="header">
                    <div className="header-title" >Quản lý các tài khoản trong hệ thống</div>
                     <Topbar/>

                </div>
                <button className="header-btn_add" onClick={togglePopup}>Thêm tài khoản</button>
                <div className="table-data">
                    <TableManage/>
                </div>
            </div>
        
            
        </div>

        {
            isOpen && <ThemTaiKhoan handleClose={togglePopup}/>
        }
        </>
    )
}

export default  QuanLyTaikhoan
