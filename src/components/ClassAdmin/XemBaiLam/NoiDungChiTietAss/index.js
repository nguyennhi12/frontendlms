import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

const NoiDungChiTietAss = ({title}) => {   

    const Diem=null; 
    return(  
        <Card border="light" className="mb-2">
        <Card.Header>{title.assTitle}</Card.Header>
            <Card.Body>            
                <Card.Text>
                {title.ass}
                </Card.Text>
            </Card.Body>
            <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Nộp file :</Form.Label>
                <Form.Control type="file" size="lg" style={{fontSize:'1vmax'}} />
            </Form.Group>
            {Diem==null?<Button href={`/`} variant="secondary" style={{fontSize:'1vmax', marginLeft:'5%', background:"#055031"}}>
                            Chấm điểm
                        </Button>
            :<Button href={`/`} variant="secondary" style={{fontSize:'1vmax', marginLeft:'5%', background:"#055031"}}>
                Chỉnh sửa điểm
            </Button>
            }
        </Card>
  )
};
export default NoiDungChiTietAss;