import React from 'react'
import { LayoutManager, Quanlykhoahoc,Itemlist} from './CourseManager.styles';
import NavigationBar from '../../NavigationBar';
import { ListGroup,Button } from 'react-bootstrap'


const CourseManager =()=>(
    
    <LayoutManager>
        <NavigationBar>
        </NavigationBar>
        <Quanlykhoahoc>QUẢN LÝ KHÓA HỌC</Quanlykhoahoc>
        
        <ListGroup style={{width:'75%',position: "absolute",
                    right:'5%', top:'20%'}}>
           <ListGroup.Item action variant="success" style={{marginBottom:'2%'}} >
               Vật Lý
               <Button variant="primary" size="sm" style={{position: "absolute",
                    right:'15%', top:'9%'}}>
                Đánh giá 
                </Button>
                <Button variant="primary" size="sm" style={{position: "absolute",
                    right:'5%', top:'9%'}}>
                Remove
                </Button>
            </ListGroup.Item>
            <ListGroup.Item action variant="success" style={{marginBottom:'2%'}}>
               Hóa học
               <Button variant="primary" size="sm" style={{position: "absolute",
                    right:'15%', top:'9%'}}>
                Đánh giá 
                </Button>
                <Button variant="primary" size="sm" style={{position: "absolute",
                    right:'5%', top:'9%'}}>
                Remove
                </Button>
            </ListGroup.Item>

            <ListGroup.Item action variant="success" style={{marginBottom:'2%'}}>
               Sinh Học 
               <Button variant="primary" size="sm" style={{position: "absolute",
                    right:'15%', top:'9%'}}>
                Đánh giá 
                </Button>
                <Button variant="primary" size="sm" style={{position: "absolute",
                    right:'5%', top:'9%'}}>
                Remove
                </Button>
            </ListGroup.Item>
        
        </ListGroup>
        
        
      
    </LayoutManager>
);

export default CourseManager;