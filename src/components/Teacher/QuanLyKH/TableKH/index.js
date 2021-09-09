import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button} from 'react-bootstrap'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

const TableKH = ({kehoachs})=>(
    <Table striped  hover size="sm" >
    <thead>
      <tr>
        <th>Tài khoản</th>
        <th>Tên</th>
        <th>Ngày tháng</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {kehoachs.map(kehoach=>(
            <tr>            
            <td ><div style={{marginTop:'12%'}}><AccessAlarmIcon style={{marginRight:'5%'}}/>
                {kehoach.thoigian}</div></td>
            <td><p style={{marginTop:'3%'}}>{kehoach.chude}</p></td>
            <td><p style={{marginTop:'3%'}}>{kehoach.noidung}</p></td>
            <td><Button href='/suakehoach' style={{marginTop:'3%', backgroundColor:'#055031'}}>Edit</Button></td>
            <td><Button style={{marginTop:'3%', backgroundColor:'#055031'}}>Delete</Button></td>
          </tr>
        ))}

      
    </tbody>
  </Table>
)

export default TableKH;