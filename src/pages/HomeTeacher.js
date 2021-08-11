import React from 'react'
import Sidebar from '../components/Teacher/Sidebar'
import CardList from '../components/Guest/CardList'
import Topbar from '../components/Teacher/Topbar'
function HomeTeacher() {
    return (
        <div className="App" style={{width:'100vw', height:'100vh', display:'flex'}}>
            <Sidebar/>
            <div>
                <Topbar/>
                <CardList/>
            </div>
           

        </div>
    )
}

export default HomeTeacher
