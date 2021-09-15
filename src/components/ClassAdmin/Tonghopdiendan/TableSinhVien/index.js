import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Image,Table, Button} from 'react-bootstrap'
import Logo from '../../../../images/logo.svg'

const TableSinhVien = ({students})=>(
    <Table striped  hover size="sm" >
    <thead>
      <tr>
        <th>Khóa học</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {students.map(student=>(
            <tr>            
            <td><Image className='rounded-circle' src={Logo} width="50" height="50" style={{backgroundColor:'white', marginRight:'5%', marginLeft:'3%'}}></Image>
                {student.username}</td>
                <td><Button style={{marginTop:'3%', backgroundColor:'#055031',marginLeft:'20%'}}>View</Button></td>
          </tr>
        ))}

      
    </tbody>
  </Table>
)

export default TableSinhVien;