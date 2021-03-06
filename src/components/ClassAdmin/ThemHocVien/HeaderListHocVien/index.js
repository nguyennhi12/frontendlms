import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container,  Nav} from 'react-bootstrap';
import { HookInfoCourse } from '../../../../hook/HookInfoCourse';
const HeaderListHocVien = ({id})=>{
    const{course, student}=HookInfoCourse({id})
    console.log(student)
    return(
        <Navbar collapseOnSelect expand="lg" bg="white" style={{borderBlock:'none'}}>
        <Container>
            <Navbar.Brand style={{color:'#055031', fontSize:'2vmax'}}>Thêm học viên</Navbar.Brand>
            <Navbar.Collapse>
            <Nav class="navbar-collapse collapse w-100 order-3 dual-collapse2 ml-auto text-dark"  style={{width:'100%', color:'back'}}>
            <Nav.Link href="#deets" style={{ position:'absolute', right:'0%', fontSize:'1.2vmax', backgroundColor:'#2BA621', color:'white', borderRadius:'5px'}}> Quay về</Nav.Link> 
            <Nav.Link href={`/danhsachhocvien?idcourse=${course.id}`} style={{ position:'absolute', right:'15%', fontSize:'1.2vmax', backgroundColor:'#2BA621', color:'white',borderRadius:'5px'}}> Danh sách học viên</Nav.Link> 
            <Nav.Item href="#deets" style={{ position:'absolute', right:'40%',color:'#055031', fontSize:'1.2vmax'}}> Số lượng: {student}/40</Nav.Item>  
            <Nav.Item  style={{ position:'absolute', right:'60%', color:'#055031', fontSize:'1.2vmax'}}> Khóa học : {course.name}</Nav.Item>                     
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
)}

export default HeaderListHocVien;