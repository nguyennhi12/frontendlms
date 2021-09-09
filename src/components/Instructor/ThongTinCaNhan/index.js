import React from 'react'
import ProfileInstructor from './ProfileInstructor'
import SidebarInstructor from '../SidebarInstructor/SidebarInstructor'
function index() {
    return (
        <div style={{ display:'flex'}}>
            <SidebarInstructor/>
            <div className="wrap" style={{width:'600px',height:'200px', marginLeft:'40%',marginTop:'4%'}}>
                 <ProfileInstructor/>
            </div>
          
        </div>
    )
}

export default index
