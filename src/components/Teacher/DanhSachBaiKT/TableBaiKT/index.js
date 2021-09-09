import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Image,Table, Button} from 'react-bootstrap'
import Logo from '../../../../images/logo.svg'

const TableBaiKT = ({tests})=>(
    <Table striped  hover size="sm" >
    <thead>
      <tr>
        <th>Bài kiểm tra</th>
        <th>Thời gian bắt đầu</th>
        <th>Thời gian kết thúc</th>
        <th>Loại bài kiểm tra</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {tests.map(test=>(
            <tr>            
            <td><Image className='rounded-circle' src={Logo} width="50" height="50" style={{backgroundColor:'white', marginRight:'5%', marginLeft:'3%'}}></Image>
                {test.tenbaikt}</td>
            <td><p style={{marginTop:'3%'}}>{test.tgbd}</p></td>
            <td><p style={{marginTop:'3%'}}>{test.tgkt}</p></td>
            <td><p style={{marginTop:'3%'}}>{test.loaibaikt}</p></td>
            <td><Button style={{marginTop:'3%', backgroundColor:'#055031'}}>EDIT</Button></td>
            <td><Button style={{marginTop:'3%', backgroundColor:'#055031'}}>DELETE</Button></td>
          </tr>
        ))}

      
    </tbody>
  </Table>
)

export default TableBaiKT;