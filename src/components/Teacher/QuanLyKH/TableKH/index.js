import React, {useState} from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Modal} from 'react-bootstrap';
import  Course  from '../../../../configs/Course';
import Notification from '../../../Notification/Notification'
const TableKH = ({kehoachs})=>{    
    const [message, setmessage]=useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [content, setroadmapcontent]=useState('')
    const[ idroamapcontent, setidroadmapcontent]=useState('')
    const [title, setnewtitle]= useState('')
    const[ idRoadMap, setidroadmap]=useState('')

    const edit_roadmap = async (event) => { 
      let id_roadmap= event.target.getAttribute('idRoadMap') 
        
      setidroadmap(id_roadmap) 
      let id = event.target.getAttribute('id_roadmap'); 
      setidroadmapcontent(id)     
      setmessage('Chỉnh sửa RoadMap');
      let newtitle= event.target.getAttribute('title')      
      let newcontent= event.target.getAttribute('content')
      setnewtitle(newtitle);
      setroadmapcontent(newcontent);
      handleShow()      }
      
    

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
      async function onClick_OK (){
        let roadmap_content={idRoadMap, title, content};
        try{  
            const result=await Course.edit_RoadmapContent(roadmap_content, idroamapcontent);
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
                setNotify({isOpen:true,message:'Chỉnh sửa thành công',type:'success'})
                window.location.reload();
              }          
        }catch(error){
           
        }
      }
      if(kehoachs==undefined){
        return null
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
              <td><Button 
               className="btn btn-default" 
               onClick={edit_roadmap} 
               name='gotoNode' 
              id_roadmap={kehoach.id}
              title={kehoach.title}
              content={kehoach.content}
              idRoadMap={kehoach.idRoadMap}
              style={{marginTop:'5%', backgroundColor:'#1CDB0B'}}>Sửa</Button></td>
              <td><Button  style={{marginTop:'3%', backgroundColor:'red'}}
                className="btn btn-default" 
                onClick={delete_roadmapcontent} 
                name='gotoNode' 
                id_roadmap_content={kehoach.id}
               
              >Xóa</Button></td>
              
            </tr>
          ))}
          
        </tbody>
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
                            <input placeholder={title}  onChange={(e)=>setnewtitle(e.target.value)} style={{width:470}}></input>
                          </div>  
                          <div className='text-black' style={{ backgroundColor:'white',borderRadius:'20px', opacity: 0.6, color:'black'}}>                    
                            <h6 style={{color:'black'}}>Tên RoadMap</h6>
                            <input placeholder={content}  onChange={(e)=>setroadmapcontent(e.target.value)} style={{width:470}}></input>
                          </div>                          
                      </Modal.Body>
                      <Modal.Footer>
                          <Button style={{background:'#FF2C2C'}} onClick={handleClose}>
                            Hủy
                          </Button> 
                          <Button style={{background:'#1CDB0B'}}  onClick={onClick_OK}>
                            Lưu
                          </Button> 
                          
                                       
                      </Modal.Footer>
                
              </Modal>
        <Notification notify ={notify} setNotify={setNotify}/>
      </Table>
      
    )
}

export default TableKH;