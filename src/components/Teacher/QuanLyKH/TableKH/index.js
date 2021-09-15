import React, {useState} from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Modal} from 'react-bootstrap';
import  Course  from '../../../../configs/Course';
import Notification from '../../../Notification/Notification'
const TableKH = ({kehoachs})=>{
    const [notify,setNotify]= useState({isOpen:false, message:'',type:''})
    const delete_roadmapcontent = async (event) => {      
      let id = event.target.getAttribute('id_roadmap_content');
      const result = await Course.delete_RoadmapContents(id);
     
      if(result.statusCode===400){
        setNotify({isOpen:true,message:'Bạn chưa điền đủ thông tin',type:'error'})
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
        setNotify({isOpen:true,message:'Bạn đã xóa thành công',type:'success'})
        window.location.reload();
      }          
      
      }
    
   
    console.log(kehoachs)
    return(
      <Table striped  hover size="sm" style={{marginLeft:'1%'}}>
        <thead>
          <tr>
            <th></th>
            <th>Tên</th>
            <th>Nội dung</th>
            <th>Thời gian cập nhật</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {kehoachs.map(kehoach=>(
              <tr>            
              <td style={{marginLeft:'4%'}}></td>            
              <td><p style={{marginTop:'5%'}}>{kehoach.title}</p></td>
              <td><p style={{marginTop:'3%'}}>{kehoach.content}</p></td>
              <td><p style={{marginTop:'3%'}}>{new Date(kehoach.updatedAt).toDateString()}</p></td>
              <td><Button href={`/suakehoach?idroadmapcontent=${kehoach.id}&idroadmap=${kehoach.idRoadMap}`} style={{marginTop:'5%', backgroundColor:'#055031'}}>Edit</Button></td>
              <td><Button  style={{marginTop:'3%', backgroundColor:'#055031'}}
                className="btn btn-default" 
                onClick={delete_roadmapcontent} 
                name='gotoNode' 
                id_roadmap_content={kehoach.id}
              
              >Delete</Button></td>
              
            </tr>
          ))}
          
        </tbody>
        <Notification notify ={notify} setNotify={setNotify}/>
      </Table>
      
    )
}

export default TableKH;