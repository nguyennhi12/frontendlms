import React, {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button} from 'react-bootstrap'
import { Wrapper } from './PopUpXacNhanThem.styles';


const PopUpXacNhanThem=()=> {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button  variant="primary" onClick={handleShow} style={{ background: '#055031', marginTop:'6%'}}>
          Add
        </Button>  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}>
          <Wrapper>
            <Modal.Header closeButton className='text-white'>
                <Modal.Title>Thêm học viên</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='text-white' style={{ borderRadius:'20px', opacity: 0.6}}>
                    <h5 style={{ marginLeft:'5%',paddingTop:'5%'}}>Bạn muốn thêm học viên này vào lớp?</h5> 
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
  
  

export default PopUpXacNhanThem;
