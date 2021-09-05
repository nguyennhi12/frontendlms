import { Form, Button, Row, Col } from 'react-bootstrap'
import React from 'react'
import Datetime from './Datetime'



const TaoBKT = ()=>(
    
    <Form>
                <Form.Group className="mb-2" controlId="formGridAddress1" style={{marginTop:'9%'}}>
                    <Form.Control placeholder="Tiêu đề" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formGridAddress2">
                <label>Thời gian bắt đầu</label>
                <Datetime></Datetime>
                <label style={{marginTop:'2%'}}>Thời gian kết thúc</label>
                <Datetime></Datetime>
                </Form.Group>
                
                <Form.Group className="mb-4" id="noidung" >
                <Form.Control as="textarea" placeholder="Nội dung" style={{ height: '150px' }}/>
                </Form.Group>
                <Form.Group className="mb-3" id="formGridAddress6">
                    <Form.Control placeholder="Các định dạng File được nộp"/>
                </Form.Group>

                <Button variant="primary" type="submit" style={{marginLeft:'70%',background:'red'}}>
                    Hủy
                </Button> 
                <Button variant="primary" type="submit"style={{marginLeft:'5%',background: 'green'}}>
                    Lưu
                </Button>      
    </Form>
)
export default TaoBKT;