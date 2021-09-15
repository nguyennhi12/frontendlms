import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Image} from 'react-bootstrap'
import Logo from '../../../../images/logo.svg'

const TableKH = ({courses})=>(
    <Table striped  hover size="sm" style={{borderRadius:'5px'}} >
    <thead>
      <tr style={{background:'#B6FDB0', fontSize:'1.2vmax'}}>
        <th>Hình ảnh</th>
        <th>Tên khóa học</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {courses.map(course=>(
            <tr>            
            <td ><Image className='rounded-circle' src={course.urlLink} width="50" height="50" style={{backgroundColor:'white', marginRight:'5%', marginLeft:'3%'}}></Image></td>
            <td><p style={{marginTop:'3%'}}>{course.name}</p></td>
            <th></th>
            <td><Button href={`/themhocvien?idcourse=${course.id}`} style={{marginTop:'3%', marginLeft:'60%', backgroundColor:'#055031'}}>Add Student</Button></td>

            <td><Button href={`/themMentor?idcourse=${course.id}`} style={{marginTop:'3%',marginLeft:'40%', backgroundColor:'#055031'}}>Add Mentor</Button></td>
          </tr>
        ))}

      
    </tbody>
  </Table>
)

export default TableKH;