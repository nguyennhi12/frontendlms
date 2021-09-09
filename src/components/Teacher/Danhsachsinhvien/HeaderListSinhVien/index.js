import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap'
import SortIcon from '@material-ui/icons/Sort';
import Filter1Icon from '@material-ui/icons/Filter1';

const HeaderListSinhVien = ()=>(
    <Navbar collapseOnSelect expand="lg" bg="white" style={{borderBlock:'none'}}>
    <Container>
        <Navbar.Brand href="#home" >Danh sách sinh viên</Navbar.Brand>
        <Navbar.Collapse>
        <Nav class="navbar-collapse collapse w-100 order-3 dual-collapse2 ml-auto text-dark"  style={{width:'100%', color:'back'}}>
        
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
)

export default HeaderListSinhVien;