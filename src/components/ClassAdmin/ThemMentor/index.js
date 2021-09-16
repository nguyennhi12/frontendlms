import React, {useState, useEffect} from 'react'
import { Wrapper, Course, Navigationbar,HeaderList} from './ThemMentor.styles';
import Sidebar from '../SidebarClassAdmin/SidebarClassAdmin'
import TableKH from './TableSV'
import {Navbar, Container,  Nav} from 'react-bootstrap'
import  MentorCourses  from '../../../configs/MentorCourse';
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

const ThemMentor = () =>{
    const [Result, setResult]= useState([]);
    const [Status, setStatus] = useState('ALL');
    const [check, setcheck]= useState(false);
    var idCourse= 'abec2983-de4a-426c-82bb-603de47c8832';
    idCourse = GetURLParameter('idcourse');
    const List = (async(event)=>
    {
        setStatus (event.target.getAttribute('status'));
        setcheck(false);
    }
    )
    useEffect(()=>{ 
        try{
            if(check==false){
            async function getliststudent(){
            var status = {idCourse,Status}
            const result = await MentorCourses.getlistMentorCourse(status);
            if(result.data!=null){
                setResult(result.data);
                setcheck(true);
            }
            } 
            console.log(Result);
            getliststudent();
        }
        }catch{
         }
                            
    },[Status] )            

    return(
        <Wrapper>  
                 
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList>
                <Navbar collapseOnSelect expand="lg" bg="white" style={{borderBlock:'none'}}>
                    <Container>
                        <Navbar.Brand href="#home" style={{fontSize:' 2vmax'}}>Danh sách mentor</Navbar.Brand>
                        <Navbar.Collapse>
                        <Nav class="navbar-collapse collapse w-100 order-3 dual-collapse2 ml-auto text-dark"  style={{width:'100%', color:'back'}}>                    
                            <Nav.Link href="#deets" style={{ position:'absolute', left:'30%' , backgroundColor:'#2BA621', color:'white', borderRadius:'5px'}}
                                onClick={List} 
                                name='gotoNode' 
                                status="ALL"
                            > Tất cả</Nav.Link> 
                            <Nav.Link href="#deets" style={{ position:'absolute', left:'45%', backgroundColor:'#2BA621', color:'white', borderRadius:'5px'}}
                                onClick={List} 
                                name='gotoNode' 
                                status="AWAIT"
                            > Chờ duyệt</Nav.Link> 
                            <Nav.Link href="#deets" style={{ position:'absolute', left:'65%', backgroundColor:'#2BA621', color:'white', borderRadius:'5px'}}
                                onClick={List} 
                                name='gotoNode' 
                                status="ACTIVE"
                            > Hoạt Động</Nav.Link>   
                                           
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </HeaderList>               
            <Course><TableKH students={Result}></TableKH></Course>

                
        </Wrapper>
    )
}


export default ThemMentor;