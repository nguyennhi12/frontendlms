import React, {useState} from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Image,Table, Button} from 'react-bootstrap'
import Logo from '../../../../images/logo.svg'
import Notification from '../../../Notification/Notification'
import  MentorCourses from '../../../../configs/MentorCourse';
const TableMentor = ({students})=>{
  const [notify,setNotify]= useState({isOpen:false, message:'',type:''})
  console.log(students)
    const create_StudentCourse = async (event) => {      
      let idStudent = event.target.getAttribute('idStudent');
      let idCourse= event.target.getAttribute('idCourse');
      let student={idStudent,idCourse}
      const result = await MentorCourses.create_MentorCourse(student);
     
      if(result.statusCode===400){
        setNotify({isOpen:true,message:'Học viên đã là MENTOR hoặc đang chờ phê duyệt',type:'error'})
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
        setNotify({isOpen:true,message:'Bạn đã đề cử thành công',type:'success'})
        window.location.reload();
      }          
      
      }
    
  return(
    <Table striped  hover size="sm"  style={{marginTop:'2%'}}>
    <thead>
      <tr style={{background:'#B6FDB0'}}>
        <th>Tài khoản</th>
        <th>Tên</th>
        <th>Email</th>
        <th>Trạng thái</th>
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
            <td><p style={{marginTop:'3%'}}>{student.student.displayName}</p></td>            
            <td><p style={{marginTop:'3%'}}>{student.student.email}</p></td>
            <td><p style={{marginTop:'3%'}}>{student.status}</p></td>
            {student.isMentor==true?<td><h5 style={{color:'red', marginTop:'10%'}}>Mentor</h5></td>:<td>{student.status=='STUDYING'?<Button style={{marginTop:'3%', backgroundColor:'#055031'}}
            className="btn btn-default" 
            onClick={create_StudentCourse} 
            name='gotoNode' 
            idStudent={student.idUser}
            idCourse={student.idCourse}
            >Đề cử</Button>:console.log("AWAIT")}</td>}
            
          </tr>
        ))}

      
    </tbody>
    <Notification notify ={notify} setNotify={setNotify}/>
  </Table>
)}

export default TableMentor;