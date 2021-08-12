import React from 'react'
import CardList from '../components/Guest/Card/CardList'

import Footer from '../components/Guest/Footer/Footer'
import Navbar from '../components/Guest/Navbar/Navbar'

function Home() {
 
    return (
        
        <>
        <Navbar/>
        <h2 style={{margin:'40px 0 40px 60px '}} >Danh sách các khóa học</h2>
        <CardList/>
           <Footer/>
        </>
    )
}

export default Home
