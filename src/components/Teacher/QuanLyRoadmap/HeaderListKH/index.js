import React, {useState} from 'react'

import {Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container,  Nav} from 'react-bootstrap'
import AddIcon from '@material-ui/icons/Add';
import Notification from '../../../Notification/Notification'
import  Course  from '../../../../configs/Course';
const HeaderListKH = ({roadmaps, id_roadmap, idCourse})=>{
    console.log(roadmaps)
    if(roadmaps.length===0){
        console.log("null")
        roadmaps=[{
            roadMap:{
                title:''
            }
        }]
    }
    const [notify,setNotify]= useState({isOpen:false, message:'',type:''})
    const [message, setmessage]=useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const[ idroamap, setidroadmap]=useState('')
    const [title, setnewtitle]= useState('')
    const edit_roadmap =() => {      
      handleShow()
      }
      
    async function onClick_OK (){
      let roadmap={idCourse, title}
      const result = await Course.create_Roadmap(roadmap);
      handleClose()
      if(result.statusCode===400){
        setNotify({isOpen:true,message:'Bạn chưa điền đủ thông tin',type:'error'})
      }else{
        if(result.statusCode===401){
          setNotify({isOpen:true,message:'Bạn chưa đăng nhập vào đúng quyền',type:'error'})
        }else{
            if(result.statusCode===500){
                setNotify({isOpen:true,message:'Internal Server',type:'error'})
            }else{
                if(result.statusCode===404){
                    setNotify({isOpen:true,message:'Đường dẫn bị sai',type:'error'})
                }
            }
        }
      }
      if(result.success==true){
        setNotify({isOpen:true,message:'Bạn đã chỉnh sửa thành công',type:'success'})
        window.location.reload();
      }          
    }
    
    return(
    <Navbar collapseOnSelect expand="lg" bg="white" style={{borderBlock:'none'}}>
    <Container>
        <Navbar.Brand href="#home">All Plan</Navbar.Brand>
        <Navbar.Collapse>
        <Nav class="navbar-collapse collapse w-100 order-3 dual-collapse2 ml-auto text-dark"  style={{width:'100%', color:'back'}}>        
        <Nav.Link  style={{ position:'absolute', right:'3%'}}
        className="btn btn-default" 
        onClick={edit_roadmap}        
        > <AddIcon />Create New</Nav.Link>        
        </Nav>
    </Navbar.Collapse>
    </Container>
    <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}>
                      <Modal.Header style={{fontSize:'1.5vmax'}}>
                        {message}
                      </Modal.Header>       
                      <Modal.Body>
                          <div className='text-black' style={{ backgroundColor:'white',borderRadius:'20px', opacity: 0.6, color:'black'}}>                    
                            <h6 style={{color:'black'}}>Tên RoadMap</h6>
                            <input placeholder='Chapter 1: HTML, CSS'  onChange={(e)=>setnewtitle(e.target.value)}></input>
                          </div>                          
                      </Modal.Body>
                      <Modal.Footer>
                          <Button style={{background:'#FF2C2C'}} onClick={handleClose}>
                            Cancle
                          </Button> 
                          <Button style={{background:'#1CDB0B'}}  onClick={onClick_OK}>
                            OK
                          </Button> 
                          
                          <Button   href={`/quanlykehoach?idRoadMap=${idroamap}`}>
                            Di chuyển đến RoadMap Content
                          </Button>                
                      </Modal.Footer>
                
              </Modal>
              <Notification notify ={notify} setNotify={setNotify}/>
    </Navbar>
)}

export default HeaderListKH;