import React, {useState, useEffect} from 'react'
import listStudentCourse from '../../../configs/Course';
import { Wrapper, Course, Navigationbar,HeaderList} from './DanhSachHocVien.styles';
import Sidebar from '../SidebarClassAdmin/SidebarClassAdmin'
import {Navbar, Container,  Nav} from 'react-bootstrap'
import TableKH from './TableSV'

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

const QuanLyKH = () =>{   
    

    const [Result, setResult]= useState([]);
    const [status, setStatus] = useState('ALL');
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
            var list = {idCourse,status}
            const result = await listStudentCourse.listStudentCourse(list);
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
                            
    },[status] )
    return(
        <Wrapper>  
                 
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList>
                <Navbar collapseOnSelect expand="lg" bg="white" style={{borderBlock:'none'}}>
                    <Container>
                        <Navbar.Brand href="#home" style={{fontSize:' 2vmax'}}>Tất cả học viên</Navbar.Brand>
                        <Navbar.Collapse>
                        <Nav class="navbar-collapse collapse w-100 order-3 dual-collapse2 ml-auto text-dark"  style={{width:'100%', color:'back'}}>                    
                            <Nav.Link href="#deets" style={{ position:'absolute', left:'20%' , backgroundColor:'#2BA621', color:'white', borderRadius:'5px'}}
                                onClick={List} 
                                name='gotoNode' 
                                status="ALL"
                            > Tất cả</Nav.Link> 
                            <Nav.Link href="#deets" style={{ position:'absolute', left:'31%', backgroundColor:'#2BA621', color:'white', borderRadius:'5px'}}
                                onClick={List} 
                                name='gotoNode' 
                                status="AWAIT"
                            > Chờ duyệt</Nav.Link> 
                            <Nav.Link href="#deets" style={{ position:'absolute', left:'45%', backgroundColor:'#2BA621', color:'white', borderRadius:'5px'}}
                                onClick={List} 
                                name='gotoNode' 
                                status="STUDYING"
                            > Đang học</Nav.Link>   
                            <Nav.Link href="#deets" style={{ position:'absolute', right:'31%', backgroundColor:'#2BA621', color:'white', borderRadius:'5px'}}
                                onClick={List} 
                                name='gotoNode' 
                                status="DONE"
                            >Hoàn thành</Nav.Link>
                            <Nav.Link href="#deets" style={{ position:'absolute', right:'16%', backgroundColor:'#2BA621', color:'white', borderRadius:'5px'}}
                                onClick={List} 
                                name='gotoNode' 
                                status="CANCEL"
                            >Hủy khóa</Nav.Link>  
                            <Nav.Link href="#deets" style={{ position:'absolute', right:'2%' ,backgroundColor:'#2BA621', color:'white', borderRadius:'5px'}}> Quay về</Nav.Link>                 
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </HeaderList>        
            <Course><TableKH students={Result}></TableKH></Course>

                
        </Wrapper>
    )
}


export default QuanLyKH;