import React from 'react'
import { Link } from 'react-router-dom';
import HeaderListSinhVien from '../HeaderListSinhVien';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image,Table, Button, Container} from 'react-bootstrap'
import Logo from '../../../../images/logo.svg'

const TableSinhVien = ({students})=>{
  
  console.log(students)
  
  return(  
  <Table striped  hover size="sm" >
  <thead>
    <tr>
      <th>Tên</th>
      <th>Điểm trung binh</th>
      <th>Trạng thái</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
      {students.map(student=>(
          <tr>
          <td><Image className='rounded-circle' src={student.student.urlAvatar} width="50" height="50" style={{backgroundColor:'white', marginRight:'5%', marginLeft:'3%'}}></Image>
              {student.student.displayName}</td>
          <td><p style={{marginTop:'3%'}}>{student.aVGScore} Điểm</p></td>
          <td><p style={{marginTop:'3%'}}>{student.status}</p></td>  
          <td></td>
          
        </tr>
      ))}
  </tbody>
  <Link style={{marginLeft:'20%'}}>AWAIT</Link>
  <Link style={{marginLeft:'40%'}}>STUDYING</Link>
  <Link style={{marginLeft:'40%'}}>DONE</Link>
  <Link style={{marginLeft:'40%'}}>CANCEL</Link>
</Table>


)
}

export default TableSinhVien;