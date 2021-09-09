import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Row, Col} from 'react-bootstrap'
import SortIcon from '@material-ui/icons/Sort';
import Filter1Icon from '@material-ui/icons/Filter1';


const FormTT = ()=>(
    <Form >
        <Row xs="mb-3" >
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Name" readOnly='true' value='Nguyễn Thị Yến Nhi'/>
            </Form.Group>            
        </Row>
        <Row className="mb-3" >
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" readOnly='true' value='18110170@student.hcmute.edu.vn' />
            </Form.Group>            
        </Row>

        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="phone-number" placeholder="Enter email" readOnly='true' value='079166155' />
            </Form.Group>            
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1" readOnly='true' value='số 1, Võ Văn Ngân, phường Linh Chiểu, quận Thủ Đức, TP.HCM'/>
        </Form.Group>


        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Role</Form.Label>
            <Form.Control placeholder="1" readOnly='true' value='Female'/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>State</Form.Label>
            <Form.Control placeholder="1" readOnly='true' value='student' />
            </Form.Group>

            
        </Row>

             
    </Form>

    
)

export default FormTT;