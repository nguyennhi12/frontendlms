import React from 'react'



import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Image} from 'react-bootstrap';
import Avatar from '../../../../images/avatar.png'
const HeaderListHocVien = ()=>(
    <Navbar collapseOnSelect expand="lg" bg="white" style={{borderBlock:'none'}}>
    <Container>
        
         
        <Navbar.Brand href="#home"><img style={{width:'50px',height:'50px'}}src={Avatar} className="info__img"/>Bùi Đức Huy</Navbar.Brand>
        <Navbar.Collapse>
        <Nav class="navbar-collapse collapse w-100 order-3 dual-collapse2 ml-auto text-dark"  style={{width:'100%', color:'back'}}>
        <Nav.Link href="#deets" style={{ position:'absolute', right:'0%'}}> Hủy</Nav.Link> 
        <Navbar.Brand href="#home" style={{ position:'absolute', right:'30%'}}> Số lượng: 3</Navbar.Brand>     
        <Navbar.Brand href="#home" style={{ position:'absolute', right:'60%'}}> Mã lớp: CLC01</Navbar.Brand>
                             
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
)

export default HeaderListHocVien;