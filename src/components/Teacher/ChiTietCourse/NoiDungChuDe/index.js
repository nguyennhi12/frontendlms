import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'


const NoiDungChuDe = ({title}) => {   
  
  return(  
        <Card border="light" className="mb-2">
        <Card.Header>{title.title}</Card.Header>
          <Card.Body>            
            <Card.Text>
              {title.content}
            </Card.Text>
          </Card.Body>
        </Card>
  )
};

    
 


export default NoiDungChuDe;