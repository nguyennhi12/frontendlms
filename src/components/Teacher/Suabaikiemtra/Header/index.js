import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap'


const Header = ()=>(
    <Navbar collapseOnSelect expand="lg" bg="white" style={{borderBlock:'none'}}>
    <Container>
        <Navbar.Brand href="#home">Sửa bài kiểm tra</Navbar.Brand>
        <Navbar.Collapse>
        <Nav class="navbar-collapse collapse w-100 order-3 dual-collapse2 ml-auto text-dark"  style={{width:'100%', color:'back'}}>
        
        
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
)

export default Header;