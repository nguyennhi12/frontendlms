import React from 'react'
import ProfileTeacher from './ProfileTeacher'
import Sidebar from '../SidebarTeacher/SidebarTeacher'
import SidebarTeacher from '../SidebarTeacher/SidebarTeacher'
function index() {
    return (
        <div style={{ display:'flex'}}>
            <Sidebar/>
            <div className="wrap" style={{width:'600px',height:'200px', marginLeft:'35%',marginTop:'2%'}}>
                 <ProfileTeacher/>
            </div>
          
        </div>
    )
}

export default index
