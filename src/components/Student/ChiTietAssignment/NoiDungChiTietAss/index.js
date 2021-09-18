import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import  StudentCourses  from '../../../../configs/StudentCourse';
import Notification from '../../../Notification/Notification'
const NoiDungChiTietAss = ({title, idCourse,submited, idstudent,assigment}) => {   
    console.log(idCourse)
    const [UrlSubmit, setUrl] = useState();
    const [notify,setNotify]= useState({isOpen:false, message:'',type:''});
    
    const changeUrl = (e) => {
        setUrl(e.target.files[0]);
      };
    async function onClick (e){
      if(submited=="true"){
        e.preventDefault();
        console.log(UrlSubmit)
        let idAssignment= title.id
        let student={UrlSubmit, idAssignment, idCourse, idstudent}
        let formdata= new FormData();
        formdata.append("idCourse", student.idCourse);
        formdata.append("idAssignment", student.idAssignment);
        formdata.append("UrlSubmit", student.UrlSubmit);        
        const result=await StudentCourses.updateStudentScore(formdata, idstudent)
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
          }          

      }else{
        e.preventDefault();
        console.log(UrlSubmit)
        let idAssignment= title.id
        let student={UrlSubmit, idAssignment, idCourse}
        let formdata= new FormData();
        formdata.append("idCourse", student.idCourse);
        formdata.append("idAssignment", student.idAssignment);
        formdata.append("UrlSubmit", student.UrlSubmit);
        
        const result=await StudentCourses.createStudentScore(formdata)
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
            setNotify({isOpen:true,message:'Nộp bài thành công',type:'success'})
          }          
      }
    }
    return(  
        <Card border="light" className="mb-2" style={{width:'55vmax'}}>
        <Card.Header style={{backgroundColor:'#C2FEBC'}}>{title.title}</Card.Header>
            <Card.Body>            
                <Card.Text>
                {title.content}
                </Card.Text>
                <Card.Text>
                <a href={title.urlFile} tabindex="-1"><strong>{title.title}</strong></a>
                </Card.Text>
            </Card.Body>
            <Form.Group controlId="formFileLg" className="mb-3" >
                <Form.Label style={{marginLeft:'18px'}}>Nộp file :</Form.Label>
                {submited=='true'?<Form.Control type="file" size="lg" style={{fontSize:'1vmax', marginLeft:'18px', marginRight:'10px',width:'90%'}} 
                    onChange={changeUrl} formAction={"https://fpt-intern.s3.ap-southeast-1.amazonaws.com/Submits/f9a9990b-9d63-4751-870a-61a9440bb142Simple%20Registration%20Form%20using%20JAVA%20Swing_Exercise01.docx?AWSAccessKeyId=AKIAUJD3ECR5Y5ZJSPX4&Expires=1635056927&Signature=IrDH2%2BOpG0dtxiV%2BgI8ExRuXnas%3D"} ></Form.Control>
                :<Form.Control type="file" size="lg" style={{fontSize:'1vmax', marginLeft:'18px', marginRight:'10px',width:'90%'}} 
                onChange={changeUrl}/>}
               
            </Form.Group>
            {submited=="true"?<Button variant="primary" size="lg" style={{fontSize:'1vmax', width:'100%', background:"#055031"}}
            onClick={onClick}>              
                Sửa bài nộp
            </Button>:
            <Button variant="primary" size="lg" style={{fontSize:'1vmax', width:'100%', background:"#055031"}}
            onClick={onClick}>              
                Nộp bài
            </Button>}
          
            <Notification notify ={notify} setNotify={setNotify}/>
        </Card>
  )
};
export default NoiDungChiTietAss;