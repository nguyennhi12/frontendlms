import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

const NoiDungChuDe = ({title}) => {   
  
  return(  
        <Card border="light" className="mb-2">
        <Card.Header>{title.assTitle}</Card.Header>
          <Card.Body>            
            <Card.Text>
              {title.ass}
            </Card.Text>
          </Card.Body>
          <Button href={`/chitietass?id=${title.id}`} variant="primary" size="lg" style={{fontSize:'1vmax', background:'#055031'}}>
                GO TO ASSIGNMENT
            </Button>
        </Card>
  )
};
export default NoiDungChuDe;