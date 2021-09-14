import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap'
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const HeaderChiTietCourse = ()=>(
    <Navbar collapseOnSelect expand="lg" bg="black" style={{borderBlock:'none', color: 'white'}}>
    <Container>
       
        <Navbar.Collapse style={{marginTop:'1%', marginBottom:'1%'}}>
        <Nav class="navbar-collapse collapse w-100 order-3 dual-collapse2 ml-auto text-dark"  style={{width:'100%', color:'back'}}>
        <Nav.Link href="/danhsachhocvien" style={{ position:'absolute', left:'2%', color: 'white', fontSize:'1.2vmax'}}><PeopleIcon/> List Student</Nav.Link>
        <Nav.Link href="/quanlydiem" style={{ position:'absolute', left:'25%', color: 'white'}}><AssignmentIcon/> List Score </Nav.Link>
        <Nav.Link href="/danhsachbaiKT" style={{ position:'absolute', left:'48%', color: 'white'}}> <AssignmentTurnedInIcon />List Test</Nav.Link>
        <Nav.Link href="/quanlykehoach" style={{ position:'absolute', right:'22%',color: 'white'}}> <ScheduleIcon />Plant</Nav.Link>
        <Nav.Link href="/dexuatmentor" style={{ position:'absolute', right:'5%',color: 'white'}}> <ThumbUpIcon />Mentor</Nav.Link>
        
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
)

export default HeaderChiTietCourse;