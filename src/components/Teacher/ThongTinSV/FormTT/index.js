import React, {useEffect, useState} from 'react'
import Studentdetail from '../../../../configs/Authentication'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col} from 'react-bootstrap'

import { useLocation } from "react-router-dom";

const FormTT = ({students})=>{
    console.log(students)
    const [Result, setResult]= useState([]);
    const location = useLocation();
    const idUser= location.state.idUser;
    const [check, setcheck]= useState(false);
      useEffect(()=>{ 
        try{
          if(check==true){
            async function getliststudent(){
              var list = {idUser}
              const result = await Studentdetail.Studentdetail(list);
              if(result.data!=null){
              setResult(result.data);
             
              
              }
            } 
              console.log(Result);
              
              getliststudent();
          }
          
            
        }catch{
  
        }
        
    },[] )

    // const result = await listStudentCourse.listStudentCourse(list);
    return(
    
    <Form >
           
               <Form.Group styles={{Left:'50%',height:'20px',width:'50px'}}as={Col} controlId="formGridEmail">
               <Form.Label styles={{Left:'50%',height:'20px',width:'50px'}}>ClassName</Form.Label>
               <Form.Control type="name" placeholder="Name" readOnly='true' value={idUser.student.displayName}></Form.Control>
               </Form.Group>            
           
          
               <Form.Group as={Col} controlId="formGridEmail">
               <Form.Label>Email</Form.Label>
               <Form.Control type="email" placeholder="Enter email" readOnly='true' value={idUser.student.email} />
               </Form.Group>            
          
   
          
               <Form.Group as={Col} controlId="formGridEmail">
               <Form.Label>Phone number</Form.Label>
               <Form.Control type="phone-number" placeholder="Enter email" readOnly='true' value={idUser.student.phoneNumber} />
               </Form.Group>            
          
   
           <Form.Group className="mb-10" controlId="formGridAddress1">
               <Form.Label>Address</Form.Label>
               <Form.Control placeholder="1" readOnly='true' value={idUser.student.address}/>
           </Form.Group>
               <Form.Group as={Col} controlId="formGridCity">
               <Form.Label>IsMentor</Form.Label>
               <Form.Control placeholder="1" readOnly='true' value={idUser.isMentor} />
               </Form.Group>

          
            
        
    </Form>
   
    
    )
}

export default FormTT;