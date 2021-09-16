import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Modal} from 'react-bootstrap';
import  Course  from '../../../../configs/Course';
import Notification from '../../../Notification/Notification'
const TableKH = ({kehoachs, idRoadMapContent})=>{   
    const [notify,setNotify]= useState({isOpen:false, message:'',type:''})
    const [message, setmessage]=useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [roadmap, setroadmap]=useState('')
    const[ idassignment, setidroadmap]=useState('')
    const [title, setnewtitle]= useState('')
    const [UrlSubmit, setUrl] = useState();
    const [start, setstart]= useState();
    const [finish, setfinish]= useState();
    const changeUrl = (e) => {
      setUrl(e.target.files[0]);
    };
    //console.log(kehoachs)
    const edit_roadmap = async (event) => {      
      let id = event.target.getAttribute('id_assignment'); 
      setidroadmap(id)     
      setmessage('Chỉnh sửa bài kiểm tra');
      let newroadmap= event.target.getAttribute('roadmap')
      let newtitle= event.target.getAttribute('title')    
      setnewtitle(newtitle); 
     
      setroadmap(newroadmap)
      handleShow()
      }
      const delete_roadmap = async (event) => {      
        let id = event.target.getAttribute('id_roadmapcontent');
        const result = await Course.delete_Assignments(id);       
        if(result.statusCode===400){
          setNotify({isOpen:true,message:'Bạn không có quyền chỉnh sửa',type:'error'})
        }else{
          if(result.statusCode===401){
            setNotify({isOpen:true,message:'Bạn chưa đăng nhập vào đúng quyền',type:'error'})
          }else{
              if(result.statusCode===500){
                  setNotify({isOpen:true,message:'Bạn chưa nhập đủ thông tin',type:'error'})
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
      let formdata= new FormData();
      formdata.append('idRoadMapContent',idRoadMapContent)
      formdata.append("title", title);
      formdata.append("content", roadmap);
      formdata.append("URLFile",UrlSubmit);
      formdata.append("start", start);  
      formdata.append("finish", finish);  

    
      const result = await Course.updateAssignment(formdata, idassignment);
      
      handleClose()
      if(result.statusCode===400){
        setNotify({isOpen:true,message:'Bạn chưa đăng nhập vào đúng quyền',type:'error'})
      }else{
        if(result.statusCode===401){
          setNotify({isOpen:true,message:'Chưa đăng nhập',type:'error'})
        }else{
            if(result.statusCode===500){
                setNotify({isOpen:true,message:'Chưa nhập đủ thông tin',type:'error'})
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
            <th>Thời gian bắt đầu</th>
            <th>Thời gian kết thúc</th>
            <th>Đề bài</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {kehoachs.map(kehoach=>(
              <tr>            
              <td style={{marginLeft:'4%'}}></td>            
              <td><p style={{marginTop:'5%'}}>{kehoach.title}</p></td>              
              <td><p style={{marginTop:'3%'}}>{new Date(kehoach.start).toLocaleString()}</p></td>
              <td><p style={{marginTop:'3%'}}>{new Date(kehoach.finish).toLocaleString()}</p></td>
              <td><a href={kehoach.urlFile} style={{marginTop:'3%'}}>{(kehoach.title)}</a></td>
              <td><Button style={{marginTop:'5%', background:'#19B90B'}}
                className="btn btn-default" 
                onClick={edit_roadmap} 
                name='gotoNode' 
                id_assignment={kehoach.id}
                title={kehoach.title}
                roadmap={kehoach.content}
              >Edit</Button></td>
              <td><Button  style={{marginTop:'3%', background:'#19B90B'}}
                className="btn btn-default" 
                onClick={delete_roadmap} 
                name='gotoNode' 
                id_roadmap={kehoach.id}
              
              >Delete</Button></td>
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
                            <h6 style={{color:'black'}}>Chủ đề kiểm tra</h6>
                            <input value={title} style={{width:'100%'}} onChange={(e)=>setnewtitle(e.target.value)}></input>
                            <h6 style={{color:'black'}} style={{marginTop:'2%'}}>Nội dung kiểm tra</h6>
                            <input value={roadmap} style={{width:'100%'}}  onChange={(e)=>setroadmap(e.target.value)}></input>
                            <h6 style={{color:'black'}} style={{marginTop:'2%'}}>Đề kiểm tra</h6>
                            <input type='file' style={{width:'100%'}}  onChange={changeUrl}></input>
                            <div><label>Bắt đầu</label><input value={start} type='datetime-local' style={{ marginLeft:'3%',width:'50%'}} onChange={(e)=>setstart(e.target.value)}></input></div>
                            <div style={{marginTop:'2%'}}><label>Kết thúc</label><input value={finish} type='datetime-local' style={{ marginLeft:'2%',width:'50%'}} onChange={(e)=>setfinish(e.target.value)}></input></div>
                          </div>                          
                      </Modal.Body>
                      <Modal.Footer>
                          <Button style={{background:'#FF2C2C'}} onClick={handleClose}>
                            Hủy
                          </Button> 
                          <Button style={{background:'red'}}  onClick={onClick_OK}>
                            Lưu
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