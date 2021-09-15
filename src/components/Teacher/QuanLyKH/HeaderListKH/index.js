import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container,  Nav} from 'react-bootstrap'
import AddIcon from '@material-ui/icons/Add';
import { HookgetOneResult } from '../../../../hook/HookOneRoadMap';
const HeaderListKH = ({idroadmap})=>{    
    const{results}= HookgetOneResult({idroadmap})
    console.log(results)
   
    return(
    <Navbar collapseOnSelect expand="lg" bg="white" style={{borderBlock:'none'}}>
    <Container>
        <Navbar.Brand href="#home">{results.title}</Navbar.Brand>
        <Navbar.Collapse>
        <Nav class="navbar-collapse collapse w-100 order-3 dual-collapse2 ml-auto text-dark"  style={{width:'100%', color:'back'}}>        
        <Nav.Link href={`/taokehoach?idcourse=${idroadmap}`} style={{ position:'absolute', right:'3%'}}> <AddIcon />Create New</Nav.Link>        
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
)}

export default HeaderListKH;