import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

const NoiDungChiTietAss = ({title}) => {   
  
  return(  
        <Card border="light" className="mb-2">
        <Card.Header>{title.assTitle}</Card.Header>
            <Card.Body>            
                <Card.Text>
                {title.ass}
                </Card.Text>
            </Card.Body>
            <Form.Group controlId="formFileLg" className="mb-3" >
                <Form.Label style={{marginLeft:'18px'}}>Nộp file :</Form.Label>
                <Form.Control type="file" size="lg" style={{fontSize:'1vmax', marginLeft:'18px', marginRight:'10px',width:'90%'}} />
            </Form.Group>
          <Button href={`/chitietass?id=${title.id}`} variant="primary" size="lg" style={{fontSize:'1vmax', width:'60%', marginLeft:'20%', background:"#055031"}}>
                SUBMIT
            </Button>
        </Card>
  )
};
export default NoiDungChiTietAss;