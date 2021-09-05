import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Row, Col, Button, ButtonGroup} from 'react-bootstrap'



const FormKH = ()=>(
    <Form >
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Thời gian:</Form.Label>
            <Form.Control placeholder="Tuần 1" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Chủ đề:</Form.Label>
            <Form.Control placeholder="Các căn giữa trong css"  />
            </Form.Group>

            
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nội dung:</Form.Label>
            <Form.Control
            as="textarea"
            placeholder="Nội dung của chủ đề"
            style={{ height: '300%' }}
            />
            </Form.Group>            
        </Row>
        <ButtonGroup className="mb-2" style={{ marginTop:'40%'}}>
            <Button  style={{background:'#055031', marginLeft:'140%'}}>Cancle</Button> 
            <Button style={{background:'#055031', marginLeft:'100%', paddingLeft:'20%', paddingRight:'20%'}}>Edit</Button>
        </ButtonGroup>

       
             
    </Form>

    
)

export default FormKH;