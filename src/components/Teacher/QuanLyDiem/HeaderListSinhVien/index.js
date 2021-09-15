import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap'
import { HookInfoCourse } from '../../../../hook/HookInfoCourse';
const HeaderListSinhVien = ({id})=>{
    console.log(id)
    const{course}=HookInfoCourse({id})
    
    return(
    <Navbar collapseOnSelect expand="lg" bg="white" style={{borderBlock:'none'}}>
    <Container>
        <Navbar.Brand style={{fontSize:'1.6vmax'}}>Khóa học : {course.name}</Navbar.Brand>
        <Navbar.Collapse>
        <Nav class="navbar-collapse collapse w-100 order-3 dual-collapse2 ml-auto text-dark"  style={{width:'100%', color:'back'}}>        
        
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
)}

export default HeaderListSinhVien;