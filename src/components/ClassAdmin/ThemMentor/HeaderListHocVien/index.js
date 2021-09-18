import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container,  Nav} from 'react-bootstrap';
import { HookInfoCourse } from '../../../../hook/HookInfoCourse';
import { useLocation } from "react-router-dom";
const HeaderListHocVien = ({id})=>{
    const{course, student}=HookInfoCourse({id})
    console.log(course)
 
 
   
    return(
        <Navbar collapseOnSelect expand="lg" bg="white" style={{borderBlock:'none'}}>
        <Container>
          
            <Navbar.Brand style={{color:'#055031', fontSize:'2vmax'}}>Thêm Mentor</Navbar.Brand>
            <Navbar.Collapse>
            <Nav class="navbar-collapse collapse w-100 order-3 dual-collapse2 ml-auto text-dark"  style={{width:'100%', color:'back'}}>
            <Nav.Link href="#deets" style={{ position:'absolute', right:'0%', fontSize:'1.2vmax', backgroundColor:'#2BA621', color:'white', borderRadius:'5px'}}> Quay về</Nav.Link>            
            <Nav.Item href="#deets" style={{ position:'absolute', right:'30%',color:'#055031', fontSize:'1.2vmax'}}> Số lượng: {student}/1</Nav.Item>  
            <Nav.Item  style={{ position:'absolute', right:'50%', color:'#055031', fontSize:'1.2vmax'}}> Khóa học : {course.name}</Nav.Item>                     
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
)}

export default HeaderListHocVien;