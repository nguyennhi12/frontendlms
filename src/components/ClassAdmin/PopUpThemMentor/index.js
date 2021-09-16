import React, {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button} from 'react-bootstrap'
import { Wrapper } from './PopUpXacNhanThem.styles';
import Notification from '../../Notification/Notification'
import  MentorCourses from '../../../configs/MentorCourse';

const PopUpThemMentor=({student})=> {
  console.log(student)
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [notify,setNotify]= useState({isOpen:false, message:'',type:''})
    console.log(student)
    const activeMentorCourse = async () => {      
      
      let idCourse= student.idCourse;
      let idStudent =student.idUser;
    
      let students={idStudent,idCourse}
      console.log(students)
      const result = await MentorCourses.activeMentorCourse(students);
     
      if(result.statusCode===400){
        setNotify({isOpen:true,message:'Lớp học đã có mentor',type:'error'})
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
        setNotify({isOpen:true,message:'Bạn đã thêm mentor thành công',type:'success'})
        window.location.reload();
      }          
      
      }
  
    return (
      <>
        <Button  variant="primary" onClick={handleShow} style={{ background: '#055031', marginTop:'11%'}}>
          Add
        </Button>  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          >
          <Wrapper
          style={{background:'linear-gradient(134deg,hsl(155,88%,16%) , hsl(46,28%,91%))'}}>
            <Modal.Header closeButton className='text-white'>
                <Modal.Title>Thêm Mentor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='text-white' style={{ borderRadius:'20px', opacity: 0.6}}>
                    <h5 style={{ marginLeft:'5%',paddingTop:'5%', color:'black'}}>Bạn muốn thêm {student.mentor.displayName} vào làm mentor của lớp?</h5> 
                 </div>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Cancle
                </Button>
                <Button variant="primary" onClick={activeMentorCourse}>Xác nhận</Button>
            </Modal.Footer>

          </Wrapper>
        </Modal>
      </>
    );
  }
  
  

export default PopUpThemMentor;
