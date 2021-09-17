import React, {useState, useEffect, useCallback} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Logo from '../../../images/tmdb_logo.svg'
import PropTypes from 'prop-types'
import {Navbar,Nav,Button,Image} from 'react-bootstrap'
import ThumbNav from './ThumbNav'
import {User} from '../../../configs/User'

const NavbarCourse =  ({results}) =>{
    if(results.length==0){
        return null
    }else{
        console.log(results)
    }
    var role;

    {
      if(localStorage.getItem("role")!=null){
          role = localStorage.getItem("role").toLowerCase()
      }
      else{
        role=""
      }
    }
  
    return(
        <Navbar   expand="lg" className='nav flex-column justify-content-start' fill variant="tabs" >  
            <Image className='rounded-circle' src={localStorage.getItem("avatar")} width="70" height="70" style={{backgroundColor:'white', marginBottom:'10%'}}></Image>
            <p class="mx-auto p-1  text-white text-center">{User.displayName}</p>
            <Link to={`/${role}`} style={{textDecoration:'none', fontSize:'2.5vmax'}}><Button  >TRANG CHỦ</Button></Link>
            <Navbar.Brand className='nav text-white' >Danh mục khóa học</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"className='nav flex-column text-white' style={{marginTop:'15%'}}>
                {results.map(title =>(                    
                    <ThumbNav
                        idCourse={title.idCourse}
                        key={title.id}
                        title={title.title}
                        titleId={title.id}
                        clickable={true}
                    ></ThumbNav>))}                 
            </Nav>
            </Navbar.Collapse>
        
        </Navbar>

    )
    
}
NavbarCourse.propTypes={
    Titles: PropTypes.array,
    
}
export default NavbarCourse;