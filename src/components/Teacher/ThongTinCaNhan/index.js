import React from 'react'
import ProfileTeacher from './ProfileTeacher'
import Sidebar from '../../Student/SidebarStudent/Sidebar'
import SidebarTeacher from '../SidebarTeacher/SidebarTeacher'
function index() {
    return (
        <div style={{ display:'flex'}}>
            <SidebarTeacher/>
            <div className="wrap" style={{width:'600px',height:'200px', marginLeft:'25%',marginTop:'4%'}}>
                 <ProfileTeacher/>
            </div>
          
        </div>
    )
}

export default index
