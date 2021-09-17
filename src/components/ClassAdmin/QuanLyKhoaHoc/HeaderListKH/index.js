import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container,  Nav} from 'react-bootstrap'
import SortIcon from '@material-ui/icons/Sort';
import Filter1Icon from '@material-ui/icons/Filter1';
const HeaderListKH = ()=>(
    <Navbar collapseOnSelect expand="lg" bg="white" style={{borderBlock:'none'}}>
    <Container>
        <Navbar.Brand href="#home">All Courses</Navbar.Brand>
        <Navbar.Collapse>        
    </Navbar.Collapse>
    </Container>
    </Navbar>
)

export default HeaderListKH;