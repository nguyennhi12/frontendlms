import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image,Table, Button,Modal, Form} from 'react-bootstrap'
import Logo from '../../../../images/logo.svg'
import  StudentCourses  from '../../../../configs/StudentCourse';
const TableSinhVien = ({students})=>{
  const [notify,setNotify]= useState({isOpen:false, message:'',type:''})
  const [message, setmessage]=useState('')
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  const [studentScore, setStudentScore]= useState({})
  const[score, setScore]= useState()
  const edit_StudentScores = async (event) => {      
    let idStudent = event.target.getAttribute('idStudent');
    let idAssignment= event.target.getAttribute('idAssignment')
    let idCourse= event.target.getAttribute('idCourse')
    let urlAssignment= event.target.getAttribute('urlAssignment')
    let Score= event.target.getAttribute('Score')
    let nameScore= event.target.getAttribute('nameScore')
    let nameStudent= event.target.getAttribute('nameStudent')
    console.log(idStudent)    
    setStudentScore({idStudent,idAssignment,idCourse,urlAssignment,Score,nameScore, nameStudent})
   
    setmessage('Chỉnh sửa điểm học viên');   
    handleShow()
    }
    
    async function onClick (e){     
        e.preventDefault();
        let formdata= new FormData();
        formdata.append("idCourse", studentScore.idCourse);
        formdata.append("idAssignment", studentScore.idAssignment);
        formdata.append("idStudent",studentScore.idStudent);  
        formdata.append("Score",score);        
        const result=await StudentCourses.updateStudentScore(formdata)
        console.log(result)
        if(result.statusCode===400){
            setNotify({isOpen:true,message:'Bạn đã nộp bài rồi',type:'error'})
          }else{
            if(result.statusCode===401){
              setNotify({isOpen:true,message:'Bạn chưa đăng nhập vào đúng quyền',type:'error'})
            }else{
                if(result.statusCode===500){
                    setNotify({isOpen:true,message:'Internal Server',type:'error'})
                }else{
                    if(result.statusCode==404){
                        setNotify({isOpen:true,message:'Chưa chọn file bài tập',type:'error'})
                    }
                }
            }
          }
          if(result.success==true){
            setNotify({isOpen:true,message:'Cập nhật bài thành công',type:'success'})
            window.location.reload();
          }          

    
  
  
  }

  return(
    <Table striped  hover size="sm" >
    <thead>
      <tr style={{background:'#B6FDB0'}}>
        <th>Tài khoản</th>
        <th>Tên</th>
        <th>Điểm</th>
        <th>Tên bài kiểm tra</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {students.map(student=>(
            <tr>            
            <td>{
            student.student.urlAvatar==null?
            <Image className='rounded-circle' src={Logo} width="50" height="50" style={{backgroundColor:'white', marginRight:'5%', marginLeft:'3%'}}></Image>
            : <Image className='rounded-circle' src={student.linkAvatarStudent} style={{backgroundColor:'white', marginRight:'5%', marginLeft:'3%',width:"50px",height:"50px"}}></Image>}  
            {student.student.userName}</td>
            <td><p style={{marginTop:'3%'}}>{student.student.displayName}</p></td>
            <td><p style={{marginTop:'3%'}}>{student.score}</p></td>
            <td><p style={{marginTop:'3%'}}>{student.createAssignment.title}</p></td>
            {student.score!=0?<td><Button style={{marginTop:'3%', backgroundColor:'#055031'}}             
             className="btn btn-default" 
             onClick={edit_StudentScores} 
             name='gotoNode' 
             nameStudent={student.student.displayName}
             nameScore={student.createAssignment.title}
             Score={student.score}
             urlAssignment={student.urlAssignment}
             idCourse={student.idCourse}
             idAssignment={student.idAssignment}
             idStudent={student.idUser}
             >Chỉnh sửa</Button></td>: 
            <td><Button style={{marginTop:'3%', backgroundColor:'#055031'}}
            className="btn btn-default" 
             onClick={edit_StudentScores} 
             name='gotoNode' 
             nameStudent={student.student.displayName}
             nameScore={student.createAssignment.title}
             Score={student.score}
             urlAssignment={student.urlAssignment}
             idCourse={student.idCourse}
             idAssignment={student.idAssignment}
             idStudent={student.idUser}>Chấm điểm</Button></td>}
            <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}>
                    <div style={{ background:'linear-gradient(134deg,hsl(155,88%,16%) , hsl(46,28%,91%))'}}>
                      <Modal.Header style={{fontSize:'2vmax', color:'white'}}>
                        <b>{message}</b>
                      </Modal.Header>       
                      <Modal.Body >
                          <div className='text-black' style={{ backgroundColor:'white',borderRadius:'20px', color:'black', marginLeft:'4%'}}> 
                          <div style={{ backgroundColor:'white',borderRadius:'20px', color:'black', marginLeft:'6%', paddingTop:'3%',paddingBottom:'3%'}}>                  
                            <h6 style={{color:'black'}}>Tên học viên: {studentScore.nameStudent}</h6>
                            <h6 style={{color:'black'}}>Tên bài kiểm tra: {studentScore.nameScore}</h6>
                            <h6 style={{color:'black'}}>Điểm kiểm tra: {studentScore.Score} điểm</h6>
                            <a href={`${studentScore.urlAssignment}`} download={student.nameStudent+"_"+student.nameScore}>Tải bài làm của sinh viên</a>
                            <div><b>Nhập điểm chỉnh sửa: </b> <input style={{width:'14%', height:'8%', marginLeft:'5%',marginRight:'3%'}} type='number' max='10' min='0'
                            onChange={(e)=>setScore(e.target.value)} ></input><label>Điểm</label></div>
                            </div> 
                          </div>          
                                    
                      </Modal.Body>
                           
                      <Modal.Footer>
                          <Button style={{background:'#FF2C2C'}} onClick={handleClose}>
                            Hủy
                          </Button> 
                          <Button style={{background:'#1CDB0B'}}  
                            onClick={onClick}
                          >
                            Lưu
                          </Button> 
                          
                              
                      </Modal.Footer>
                      </div>
              </Modal>
          </tr>
        ))}

      
    </tbody>
  </Table>
)}

export default TableSinhVien;