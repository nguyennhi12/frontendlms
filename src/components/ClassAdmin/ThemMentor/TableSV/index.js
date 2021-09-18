import React, {useState} from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Image, Button} from 'react-bootstrap'
import Logo from '../../../../images/logo.svg'
import PopUpThemMentor from '../../PopUpThemMentor'
import Notification from '../../../Notification/Notification'
import  MentorCourses from '../../../../configs/MentorCourse';
const TableSV = ({students})=>{
  const [notify,setNotify]= useState({isOpen:false, message:'',type:''})
  console.log(students)
    const delete_StudentCourse = async (event) => {      
      let idStudent = event.target.getAttribute('idStudent');
      let idCourse= event.target.getAttribute('idCourse');
      let student={idStudent,idCourse}
      const result = await MentorCourses.cancelMentorCourses(student);
     
      if(result.statusCode===400){
        setNotify({isOpen:true,message:'Lỗi rồi',type:'error'})
      }else{
        if(result.statusCode===401){
          setNotify({isOpen:true,message:'Bạn chưa đăng nhập vào đúng quyền',type:'error'})
        }else{
            if(result.statusCode===500){
                setNotify({isOpen:true,message:'Internal Server',type:'error'})
            }else{
                if(result.statusCode===404){
                    setNotify({isOpen:true,message:'Đường dẫn bị sai',type:'error'})
                }
            }
        }
      }
      if(result.success==true){
        setNotify({isOpen:true,message:'Bạn đã xóa mentor thành công',type:'success'})
        window.location.reload();
      }          
      
      }
    
  return (
    <Table striped  hover size="sm" >
    <thead>
      <tr>
        <th><p style={{marginLeft:'10%'}}>Tài khoản</p></th>
        <th ><p style={{marginLeft:'30%'}}>Tên</p></th>
        <th><p style={{marginLeft:'30%'}}>Email</p></th>
        <th>Trạng thái</th>
        <th></th>
    
        <th></th>
      </tr>
    </thead>
    <tbody>
        {students.map(student=>(
            <tr>            
            <td>{
                student.mentor.urlAvatar!=null?<Image className='rounded-circle' src={student.mentor.urlAvatar} width="50" height="50" style={{backgroundColor:'white', marginRight:'5%', marginLeft:'3%'}}></Image>
                :<Image className='rounded-circle' src={Logo} width="50" height="50" style={{backgroundColor:'white', marginRight:'5%', marginLeft:'3%'}}></Image>
              }
                {student.username}</td>
            <td><p style={{marginTop:'5%', marginLeft:'20%'}}>{student.mentor.displayName}</p></td>
            <td><p style={{marginTop:'3%', marginLeft:'20%'}}>{student.mentor.email}</p></td>
            <td><p style={{marginTop:'10%', marginLeft:'20%'}}>{student.status}</p></td>   
        
            <td>
            {student.status=='ACTIVE'?console.log('ACTIVE'):<PopUpThemMentor student={student}/>}</td>
            <td><Button style={{ background: 'red', marginTop:'4%'}}
            onClick={delete_StudentCourse} 
            name='gotoNode' 
            idStudent={student.idUser}
            idCourse={student.idCourse}
            >Hủy Mentor</Button></td>
          </tr>
        ))}

      
    </tbody>
  </Table>

  )
}

export default TableSV;