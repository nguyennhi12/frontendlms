import React from 'react'

import {Card, ListGroup} from 'react-bootstrap'

import {HookInfoCourse} from '../../../hook/HookInfoCourse'

const Comment = ({id})=>{    
    const {eveluateCourse}=HookInfoCourse({id}); 
   
    return(
        <Card border="info" style={{width:'28vmax', backgroundColor:'#E7FFD3'}}>        
            <Card.Body>
                <Card.Title>Các nhận xét:</Card.Title>
                <ListGroup variant="flush">
                    {eveluateCourse.map(eveluate=>(
                        
                        <div>
                            <ListGroup.Item style={{borderRadius:'30px'}}>
                            <div>
                                <i style={{color:'#2BA621'}}>{eveluate.user.displayName}:</i>
                                <i style={{fontSize:'1vmax', marginLeft:'5%'}}>{eveluate.comment}</i>
                                <p style={{fontSize:'1vmax',marginTop:'0%', color:'#7A7E86'}}>Đã nhận xét vào: {new Date(eveluate.createdAt).toLocaleDateString()}</p>
                                                               
                            </div>                            
                        </ListGroup.Item>                       
                        </div>
                        
                    ))}
                    
                    
                </ListGroup>
            </Card.Body>
        </Card>
    

    )};
export default Comment;