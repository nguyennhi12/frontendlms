import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Image} from 'react-bootstrap'
import Logo from '../../../../images/logo.svg'

const TableSV = ({students})=>(
  <Table striped  hover size="sm" >
  <thead>
    <tr>
      <th><p style={{marginLeft:'10%'}}>Tài khoản</p></th>
      <th ><p style={{marginLeft:'30%'}}>Tên</p></th>
      <th><p style={{marginLeft:'30%'}}>Email</p></th>
      <th><p style={{marginLeft:'30%'}}>Trạng thái</p></th>
      <th></th>
      
    </tr>
  </thead>
  <tbody>
      {students.map(student=>(
          <tr>            
          <td>{
            student.student.urlAvatar==null?
            <Image className='rounded-circle' src={Logo} width="50" height="50" style={{backgroundColor:'white', marginRight:'5%', marginLeft:'3%'}}></Image>
            : <Image className='rounded-circle' src={student.student.urlAvatar} width="50" height="50" style={{backgroundColor:'white', marginRight:'5%', marginLeft:'3%'}}></Image>}  
              {student.student.userName}</td>
          <td><p style={{marginTop:'3%', marginLeft:'20%'}}>{student.student.displayName}</p></td>
          <td><p style={{marginTop:'3%', marginLeft:'20%'}}>{student.student.email}</p></td>
          <td><p style={{marginTop:'3%', marginLeft:'40%'}}>{student.status}</p></td>          
          <td></td>
        </tr>
      ))}

    
  </tbody>
</Table>

)

export default TableSV;