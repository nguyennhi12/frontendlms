import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Image} from 'react-bootstrap'
import Logo from '../../../../images/logo.svg'
import callApi from '../../../../api/apiService'
const buttonKichhoat = (id) => {
   callApi(`Course/studingCourse/${id}`, "GET")
    .then((res) => {
      console.log(res);
      
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
};
const TableKH = ({courses})=>(
    <Table striped  hover size="sm" style={{borderRadius:'5px'}} >
    <thead>
      <tr style={{background:'#B6FDB0', fontSize:'1.2vmax'}}>
        <th>Hình ảnh</th>
        <th>Tên khóa học</th>
        <th>Trạng thái</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {courses.map(course=>(
            <tr>            
            <td ><Image className='rounded-circle' src={course.urlImage} width="50" height="50" style={{backgroundColor:'white', marginRight:'5%', marginLeft:'3%'}}></Image></td>
            <td><p style={{marginTop:'5%'}}>{course.name}</p></td>                   

            <td><p style={{marginTop:'7%'}}>{course.status}</p></td> 
            {
              course.status ==="ACTIVE" ?  <td><Button onClick={()=>{buttonKichhoat(course.id)}} style={{marginTop:'3%', marginLeft:'40%', backgroundColor:'#055031'}}>Kích hoạt</Button></td> : <td></td>
            }           
           
            <td><Button href={`/themhocvien?idcourse=${course.id}`} style={{marginTop:'3%', marginLeft:'40%', backgroundColor:'#055031'}}>Thêm Học viên</Button></td>

            <td><Button href={`/themMentor?idcourse=${course.id}`} style={{marginTop:'3%',marginLeft:'40%', backgroundColor:'#055031'}}>Thêm Mentor</Button></td>
          </tr>
        ))}

      
    </tbody>
  </Table>
)

export default TableKH;