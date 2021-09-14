import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Logo from '../../../../images/tmdb_logo.svg'
import PropTypes from 'prop-types'
import {Navbar,Nav,Button,Image} from 'react-bootstrap'
import { HookListChuDe } from '../../../../hook/HookListChuDe';
import ThumbNav from './ThumbNav'

const NavbarCourse = () =>{

    const {state}=HookListChuDe();  
    
    return(
        <Navbar  expand="lg" className='nav flex-column justify-content-start' fill variant="tabs" >  
            <Image className='rounded-circle' src={Logo} width="100" height="100" style={{backgroundColor:'white', marginBottom:'10%'}}></Image>
            <p class="mx-auto p-1  text-white text-center">Nguyễn Nhi</p>
            <Link to='/a' style={{textDecoration:'none', fontSize:'2.5vmax'}}><Button>TRANG CHỦ</Button></Link>
            <Navbar.Brand className='nav text-white' >Danh mục khóa học</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"className='nav flex-column text-white' style={{marginTop:'15%'}}>
                {state.Titles.map(title =>(                    
                    <ThumbNav
                        key={title.id}
                        title={title.title}
                        titleId={title.id}
                        clickable={true}
                    ></ThumbNav>
                    
                ))}                 
            </Nav>
            </Navbar.Collapse>
        
        </Navbar>

    )
    
}
NavbarCourse.propTypes={
    Titles: PropTypes.array,
    
}
export default NavbarCourse;