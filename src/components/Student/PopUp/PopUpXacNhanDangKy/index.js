import React, {useState, useCallback} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button} from 'react-bootstrap'
import { Wrapper } from './PopUpXacNhanDangKy.styles';
import { HookgetUser } from '../../../../hook/HookgetUser';
import  RoadMaps  from "../../../../configs/Course";
import Notification from "../../../../components/Notification/Notification";

const PopUpXacNhanDangKy=({name, teacher,createdAt, duration, idCourse, enable})=> {
    const [notify,setNotify]= useState({isOpen:false, message:'',type:''})
    const { error           
    }=HookgetUser({idCourse});    
    const [show, setShow] = useState(false);
    const [showTB, setShowTB] = useState(false);     
    const signup_course= useCallback( async()=>{
      try{          
          const result=await RoadMaps.sigup_course(idCourse);
                    
          console.log(result.message)
          handleClose()
          if(show==false){
            if(result.statusCode===400){
              setNotify({isOpen:true,message:'Bạn đã đăng kí khóa học rồi',type:'error'})
              
            }else{
              if(result.statusCode===200){
                setNotify({isOpen:true,message:'Đăng kí khóa học thành công',type:'success'})
              }
            }
            if(result.success==true){
              setNotify({isOpen:true,message:'Đăng kí khóa học thành công',type:'success'})
              window.location.reload()
            }
            
          }
      }catch(error){

      }
     
  },[]) 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleTBClose = () => setShowTB(false);        
    function onClick (){
      if(error===true){
        setNotify({isOpen:true,message:'Chưa đăng nhập',type:'error'})
      }else{
        handleShow()
      }
      
    }
    
    


    

    return (
      <>{

      }
      <Button  variant="primary" onClick={onClick} disabled={!enable} style={{ background: '#25AB0F'}}>Tham gia khóa học</Button>
        
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}>
          <Wrapper style={{background:'linear-gradient(134deg,hsl(155,88%,16%) , hsl(46,28%,91%))', color:'black'}}>
            <Modal.Header closeButton className='text-white'>
                <Modal.Title>Xác nhận đăng kí khóa học</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='text-black' style={{ backgroundColor:'white',borderRadius:'20px', opacity: 0.6, color:'black'}}>
                    <h3 style={{ marginLeft:'5%',paddingTop:'5%'}}>{name}</h3>
                    <div style={{ marginLeft:'10%',paddingBottom:'5%'}}>
                      <h6>Bắt đầu: {new Date(createdAt).toLocaleString()}</h6>
                      <h6>Giảng viên: {teacher}</h6>                      
                      <h6>Ngày tạo: {duration} ngày</h6>
                    </div>
                                    

                </div>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} style={{background:'#D10A0A'}}>
                  Hủy bỏ
                </Button>
                <Button variant="primary" onClick={signup_course}>Xác nhận</Button>
            </Modal.Footer>

          </Wrapper>
        </Modal>

        {/* Chưa Đăng nhập */}
        <Modal
          show={showTB}
          onHide={handleTBClose}
          backdrop="static"
          keyboard={false}>
          <Wrapper>
            <Modal.Header closeButton className='text-white'>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='text-black' style={{ backgroundColor:'white',borderRadius:'20px', opacity: 0.6}}>
                    <h3 style={{ marginLeft:'5%',paddingTop:'5%'}}>{name}</h3>
                    <div style={{ marginLeft:'10%',paddingBottom:'5%'}}>
                      <h6>Bạn chưa đăng nhập</h6>                      
                    </div>                                    

                </div>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Hủy bỏ
                </Button>
                <Button variant="primary">Đăng Nhập</Button>
            </Modal.Footer>

          </Wrapper>
        </Modal>
        {/* Đăng kí rồi */}
        <Notification notify ={notify} setNotify={setNotify}/>
      </>
    );
  }
  
  

export default PopUpXacNhanDangKy;
