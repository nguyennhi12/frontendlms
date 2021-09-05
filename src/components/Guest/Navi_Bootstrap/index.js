import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Logo from '../../../images/tmdb_logo.svg'

import {Navbar,Nav, NavItem, Button,Image} from 'react-bootstrap'
const Navi_Bootstrap = () =>(
    <Navbar  expand="lg" className='nav flex-column justify-content-start' fill variant="tabs" >  
            <Image className='rounded-circle' src={Logo} width="100" height="100" style={{backgroundColor:'white', marginBottom:'10%'}}></Image>
            <p class="mx-auto p-1  text-white text-center">Nguyễn Nhi</p>
            <Link to='/a' style={{textDecoration:'none', fontSize:'2.5vmax'}}><Button>TRANG CHỦ</Button></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"className='nav flex-column text-white' style={{marginTop:'15%'}}>
                <Link to='/a' style={{textDecoration:'none', fontSize:'1vmax'}}><NavItem class="nav-link active" >Quản Lý Khóa Học</NavItem></Link>
                <Link to='/a'style={{textDecoration:'none', fontSize:'1vmax',marginTop:'10%'}}><NavItem class="nav-link active">My Profile</NavItem></Link>
                <Link to='/a'style={{textDecoration:'none', fontSize:'1vmax',marginTop:'10%'}}><NavItem class="nav-link active">Ý kiến thảo luận</NavItem></Link> 
                <Link to='/a'style={{textDecoration:'none', fontSize:'1vmax',marginTop:'10%'}}><NavItem class="nav-link active">Logout</NavItem></Link>              
            </Nav>
            </Navbar.Collapse>
        
    </Navbar>
)

export default Navi_Bootstrap