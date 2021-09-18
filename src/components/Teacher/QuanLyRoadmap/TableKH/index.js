import React, {useState} from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Modal} from 'react-bootstrap';
import  Course  from '../../../../configs/Course';
import Notification from '../../../Notification/Notification'
const TableKH = ({kehoachs, idCourse})=>{
    const [notify,setNotify]= useState({isOpen:false, message:'',type:''})
    const [message, setmessage]=useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [roadmap, setroadmap]=useState('')
    const[ idroamap, setidroadmap]=useState('')
    const [title, setnewtitle]= useState('')
    const edit_roadmap = async (event) => {      
      let id = event.target.getAttribute('id_roadmap'); 

      setidroadmap(id)     
      setmessage('Chỉnh sửa chương');
      let newroadmap= event.target.getAttribute('roadmap')      
      console.log(newroadmap)
      setroadmap(newroadmap)
      handleShow()
      }
      const delete_roadmap = async (event) => {      
        let id = event.target.getAttribute('id_roadmap');
        const result = await Course.delete_Roadmaps(id);
       
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
    
    async function onClick_OK (){
      let roadmap={idCourse, title, idroamap}
      const result = await Course.edit_Roadmap(roadmap);
      handleClose()
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
        setNotify({isOpen:true,message:'Bạn đã chỉnh sửa thành công',type:'success'})
        window.location.reload();
      }          
    }
    if(kehoachs==undefined){
      return null
    }
    
    return(
      <Table striped  hover size="sm" style={{marginLeft:'1%'}}>
        <thead>
          <tr>
            <th></th>
            <th>Tên</th>
            
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
              <td><p style={{marginTop:'3%'}}>{new Date(kehoach.updatedAt).toLocaleString()}</p></td>
              <td><Button style={{marginTop:'5%', background:'#1CDB0B'}}
                className="btn btn-default" 
                onClick={edit_roadmap} 
                name='gotoNode' 
                id_roadmap={kehoach.id}
                roadmap={kehoach.title}
              >Sửa</Button></td>
              <td><Button  style={{marginTop:'3%', background:'red'}}
                className="btn btn-default" 
                onClick={delete_roadmap} 
                name='gotoNode' 
                id_roadmap={kehoach.id}
              
              >Xóa</Button></td>
              <Modal
                  
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}>
                      <Modal.Header style={{fontSize:'1.5vmax'}}>
                        {message}
                      </Modal.Header>       
                      <Modal.Body>
                          <div className='text-black' style={{ backgroundColor:'white',borderRadius:'20px', opacity: 0.6, color:'black'}}>                    
                            <h6 style={{color:'black'}}>Tên RoadMap</h6>
                            <input placeholder={roadmap}  onChange={(e)=>setnewtitle(e.target.value)} style={{width:470}}></input>
                          </div>                          
                      </Modal.Body>
                      <Modal.Footer>
                          <Button style={{background:'#FF2C2C'}} onClick={handleClose}>
                            Hủy
                          </Button> 
                          <Button style={{background:'#1CDB0B'}}  onClick={onClick_OK}>
                            Lưu
                          </Button> 
                          
                          <Button   href={`/teacher/quanlykehoach?idRoadMap=${idroamap}`}>
                            Di chuyển đến bài học 
                          </Button>                
                      </Modal.Footer>
                
              </Modal>
            </tr>
          ))}
          
        </tbody>
        <Notification notify ={notify} setNotify={setNotify}/>
      </Table>
    )
}

export default TableKH;