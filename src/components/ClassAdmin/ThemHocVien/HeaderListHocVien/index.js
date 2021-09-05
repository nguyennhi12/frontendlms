import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container,  Nav} from 'react-bootstrap';

const HeaderListHocVien = ()=>(
    <Navbar collapseOnSelect expand="lg" bg="white" style={{borderBlock:'none'}}>
    <Container>
        <Navbar.Brand href="#home">Thêm học viên</Navbar.Brand>
        <Navbar.Collapse>
        <Nav class="navbar-collapse collapse w-100 order-3 dual-collapse2 ml-auto text-dark"  style={{width:'100%', color:'back'}}>
        <Nav.Link href="#deets" style={{ position:'absolute', right:'0%'}}> Cancle</Nav.Link> 
        <Nav.Link href="#deets" style={{ position:'absolute', right:'10%'}}> Danh sách học viên</Nav.Link> 
        <Nav.Link href="#deets" style={{ position:'absolute', right:'30%'}}> Số lượng: 30/40</Nav.Link>  
        <Nav.Link href="#deets" style={{ position:'absolute', right:'60%'}}> Mã lớp: CLC01</Nav.Link>                     
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
)

export default HeaderListHocVien;