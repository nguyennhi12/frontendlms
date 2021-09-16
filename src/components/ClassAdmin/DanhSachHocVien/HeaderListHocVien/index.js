import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container,  Nav} from 'react-bootstrap'
const HeaderListHocVien = ()=>(
    <Navbar collapseOnSelect expand="lg" bg="white" style={{borderBlock:'none'}}>
        <Container>
            <Navbar.Brand href="#home">All Students</Navbar.Brand>
            <Navbar.Collapse>
            <Nav class="navbar-collapse collapse w-100 order-3 dual-collapse2 ml-auto text-dark"  style={{width:'100%', color:'back'}}>
            
            <Nav.Link href="#deets" style={{ position:'absolute', right:'20%'}}> Cancel</Nav.Link>                     
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default HeaderListHocVien;