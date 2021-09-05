import React from 'react'
import CardList from '../../components/Guest/Card/CardList'
import Sidebar from '../../components/Student/SidebarStudent/Sidebar'
import {BsSearch} from 'react-icons/bs'
import './homestudent.css'
export const HomeStudent = () => {
    return (
        <div className="homestudent">
          
            <Sidebar/>
            <div className="content">
            
                <div className="wrapper-input">
                    
                     <input type="text" placeholder="Tìm kiếm" className="search"/>
 
                </div>
                <CardList />
            </div>
        </div>
    )
}
