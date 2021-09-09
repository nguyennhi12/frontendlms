import React from 'react'
import SidebarTeacher from '../SidebarTeacher/SidebarTeacher'
import Comment from '../Forum/Comment/Comment'
import './index.css'
function index() {
    return (
        <div className="wrap-content">
            {/* <SidebarTeacher /> */}
            <div className="forum">
                <h4>Diễn đàn</h4>
                <Comment/>
                <Comment/>
                <Comment/>

             

              

            
            </div>
        </div>
    )
}

export default index
