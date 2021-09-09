import React from 'react'

import SortIcon from '@material-ui/icons/Sort';
import Filter1Icon from '@material-ui/icons/Filter1';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container,  Nav} from 'react-bootstrap';

const HeaderListHocVien = ()=>(
    <Navbar collapseOnSelect expand="lg" bg="white" style={{borderBlock:'none'}}>
    <Container>
        <Navbar.Brand href="#home">Quản lý điểm</Navbar.Brand>
        <Navbar.Collapse>
        <Nav class="navbar-collapse collapse w-100 order-3 dual-collapse2 ml-auto text-dark"  style={{width:'100%', color:'back'}}>
        <Nav.Link href="#deets" style={{ position:'absolute', right:'0%'}}> Cancle</Nav.Link> 
        <Navbar.Brand href="#home" style={{ position:'absolute', right:'30%'}}> Số lượng: 30/40</Navbar.Brand>     
        <Navbar.Brand href="#home" style={{ position:'absolute', right:'60%'}}> Mã lớp: CLC01</Navbar.Brand>
                             
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
)

export default HeaderListHocVien;