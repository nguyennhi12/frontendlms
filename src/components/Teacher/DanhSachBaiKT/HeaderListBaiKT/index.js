import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap'
import SortIcon from '@material-ui/icons/Sort';
import Filter1Icon from '@material-ui/icons/Filter1';
import AddIcon from '@material-ui/icons/Add';

const HeaderListBaiKT = ()=>(
    <Navbar collapseOnSelect expand="lg" bg="white" style={{borderBlock:'none'}}>
    <Container>
        <Navbar.Brand href="#home">All Tests</Navbar.Brand>
        <Navbar.Collapse>
        <Nav class="navbar-collapse collapse w-100 order-3 dual-collapse2 ml-auto text-dark"  style={{width:'100%', color:'back'}}>
        <Nav.Link href="#deets" style={{ position:'absolute', right:'2%'}}><Filter1Icon/>  Filter</Nav.Link>
        <Nav.Link href="#deets" style={{ position:'absolute', right:'12%'}}> <SortIcon />Sort</Nav.Link>
        <Nav.Link href="#deets" style={{ position:'absolute', right:'22%'}}> <AddIcon />Create New</Nav.Link>
        
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
)

export default HeaderListBaiKT;