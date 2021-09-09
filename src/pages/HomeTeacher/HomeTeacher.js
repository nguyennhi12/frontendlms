import React from 'react'
import SidebarTeacher from '../../components/Teacher/SidebarTeacher/SidebarTeacher'
import CardList from '../../components/Guest/Card/CardList'
import Topbar from '../../components/Teacher/Topbar/Topbar'
import './HomeTeacher.css'
function HomeTeacher() {
    return (
        <div style={{ display:'flex'}}>
            
            <SidebarTeacher/>
            <div className="content">
                <Topbar/>
           
                     <CardList />
             
               
            </div>
           

        </div>
    )
}

export default HomeTeacher
