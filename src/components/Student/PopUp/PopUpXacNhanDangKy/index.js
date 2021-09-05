import React, {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button} from 'react-bootstrap'
import { Wrapper } from './PopUpXacNhanDangKy.styles';


const PopUpXacNhanDangKy=({Title})=> {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button  variant="primary" onClick={handleShow} style={{ background: '#055031'}}>
        JOIN THE CLASS
        </Button>  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}>
          <Wrapper>
            <Modal.Header closeButton className='text-white'>
                <Modal.Title>Xác nhận đăng kí khóa học</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='text-black' style={{ backgroundColor:'white',borderRadius:'20px', opacity: 0.6}}>
                    <h3 style={{ marginLeft:'5%',paddingTop:'5%'}}>{Title.name}</h3>
                    <div style={{ marginLeft:'10%',paddingBottom:'5%'}}>
                      <h6>Time: {Title.Time_Start}</h6>
                      <h6>Teacher: {Title.Teacher}</h6>
                      <h6>Phương thức học tập: {Title.phuongthuc}</h6>
                      <h6>Ngày bắt đầu: {Title.Time}</h6>
                    </div>
                                    

                </div>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Cancle
                </Button>
                <Button variant="primary">Xác nhận</Button>
            </Modal.Footer>

          </Wrapper>
        </Modal>
      </>
    );
  }
  
  

export default PopUpXacNhanDangKy;
