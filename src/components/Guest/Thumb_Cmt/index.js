import React from 'react'

import {Card, ListGroup} from 'react-bootstrap'

const Comment = ({name, cmt})=>(
    <Card border="info">        
        <Card.Body>
            <Card.Title>Các nhận xét:</Card.Title>
            <ListGroup variant="flush">
                <ListGroup.Item>{name}:{cmt}</ListGroup.Item>
                <ListGroup.Item>{name}:{cmt}</ListGroup.Item>
            </ListGroup>
        </Card.Body>
    </Card>
  

);
export default Comment;