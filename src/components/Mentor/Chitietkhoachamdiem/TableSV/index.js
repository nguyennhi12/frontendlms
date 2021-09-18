import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Image, Button} from 'react-bootstrap'
import Logo from '../../../../images/logo.svg'

const TableSV = ({students})=>{
 
  return (
    <Table striped  hover size="sm" >
    <thead>
      <tr>
        <th><p style={{marginLeft:'15%'}}>Tên</p></th>
        <th></th>
    
        
      </tr>
    </thead>
    <tbody>
        {students.map(student=>(
            <tr>            
            <td><Image className='rounded-circle' src={Logo} width="50" height="50" style={{backgroundColor:'white', marginRight:'5%', marginLeft:'3%'}}></Image>
                {student.name}</td>
            <td><Button style={{marginTop:'1%', backgroundColor:'#055031',marginLeft:'40%'}}>Check exam</Button></td>
           
              
          </tr>
        ))}

      
    </tbody>
  </Table>

  )
}

export default TableSV;