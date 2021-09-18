import React, {useState} from 'react'

import {Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container,  Nav} from 'react-bootstrap'
import AddIcon from '@material-ui/icons/Add';
import Notification from '../../../Notification/Notification'
import  Course  from '../../../../configs/Course';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";

const HeaderListKH = ({roadmaps, idRoadMapContent})=>{   
    if(roadmaps.length===0){
        roadmaps=[{
            roadMap:{
                title:''
            }
        }]
    }
    const [notify,setNotify]= useState({isOpen:false, message:'',type:''})
    const history = useHistory();
    const [message, setmessage]=useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  
    const [roadmap, setroadmap]=useState('')
    const[ idassignment, setidroadmap]=useState('')
    const [title, setnewtitle]= useState('')
    const [UrlSubmit, setUrl] = useState();
    const [start, setstart]= useState();
    const [finish, setfinish]= useState();
    const edit_roadmap =() => {      
      handleShow()
      }
      const changeUrl = (e) => {
        setUrl(e.target.files[0]);
      };
    async function onClick_OK (){
      handleShow()
      }
      async function onClick_OK (){
        let formdata= new FormData();
        formdata.append('idRoadMapContent', idRoadMapContent)
        formdata.append("title", title);
        formdata.append("content", roadmap);
        formdata.append("start", start);  
        formdata.append("finish", finish);  
        formdata.append("URLFile", UrlSubmit);
        const result = await Course.createAssignment(formdata);        
        handleClose()
        if(result.statusCode===400){
          setNotify({isOpen:true,message:'Bạn chưa điền đủ thông tin',type:'error'})
        }else{
          if(result.statusCode===401){
            setNotify({isOpen:true,message:'Bạn chưa đăng nhập vào đúng quyền',type:'error'})
          }else{
              if(result.statusCode===500){
                  setNotify({isOpen:true,message:'Bạn chưa điền đủ thông tin',type:'error'})
              }else{
                  if(result.statusCode===404){
                      setNotify({isOpen:true,message:'Đường dẫn bị sai',type:'error'})
                  }
              }
          }
        }
        if(result.success==true){
          setNotify({isOpen:true,message:'Bạn đã thêm thành công',type:'success'})
          window.location.reload();
        }          
      }
      if(roadmaps==undefined){
        return null
      }
      
    
   
    return(
    <Navbar collapseOnSelect expand="lg" bg="white" style={{borderBlock:'none'}}>
      <span
        onClick={() => {
          history.goBack();
        }}
        style={{
          marginLeft: 0,
          marginTop: "-10px",
          display: "block",
          textDecoration: "none",
          color: "#98a0a5",
          cursor: "pointer",
          width: 150,
          height: 60,
          padding: 10,
        }}
      >
        <ArrowBackIosIcon style={{ fontSize: "20px" }} />
        Quay lại
      </span>
    <Container>
        <Navbar.Brand href="#home">Bài kiểm tra</Navbar.Brand>
        <Navbar.Collapse>
        <Nav class="navbar-collapse collapse w-100 order-3 dual-collapse2 ml-auto text-dark"  style={{width:'100%', color:'back'}}>        
        <Nav.Link  style={{ position:'absolute', right:'3%'}}
        className="btn btn-default" 
        onClick={edit_roadmap}        
        > <AddIcon />Tạo mới</Nav.Link>        
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
                            <h6 style={{color:'black'}}>Chủ đề kiểm tra</h6>
                            <input placeholder={'Bài kiểm tra đột xuất'} style={{width:'100%'}} onChange={(e)=>setnewtitle(e.target.value)}></input>
                            <h6 style={{color:'black'}} style={{marginTop:'2%'}}>Nội dung kiểm tra</h6>
                            <input placeholder={'Mở cam nhé các em'} style={{width:'100%'}}  onChange={(e)=>setroadmap(e.target.value)}></input>
                            <h6 style={{color:'black'}} style={{marginTop:'2%'}}>Đề kiểm tra</h6>
                            <input type='file' style={{width:'100%'}}  onChange={changeUrl}></input>
                            <div><label>Bắt đầu</label><input placeholder={start} type='datetime-local' style={{ marginLeft:'3%',width:'50%'}} onChange={(e)=>setstart(e.target.value)}></input></div>
                            <div style={{marginTop:'2%'}}><label>Kết thúc</label><input placeholder={finish} type='datetime-local' style={{ marginLeft:'2%',width:'50%'}} onChange={(e)=>setfinish(e.target.value)}></input></div>
                          </div>                          
                      </Modal.Body>
                      <Modal.Footer>
                          <Button style={{background:'#FF2C2C'}} onClick={handleClose}>
                            Hủy
                          </Button> 
                          <Button style={{background:'#1CDB0B'}}  onClick={onClick_OK}>
                            Lưu
                          </Button> 
                                       
                      </Modal.Footer>
                
              </Modal>
              <Notification notify ={notify} setNotify={setNotify}/>
    </Navbar>
)}

export default HeaderListKH;