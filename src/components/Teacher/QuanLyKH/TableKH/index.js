import React, {useState} from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Modal} from 'react-bootstrap';
import  Course  from '../../../../configs/Course';

const TableKH = ({kehoachs})=>{
    const [message, setmessage]=useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const delete_roadmapcontent = async (event) => {      
      let id = event.target.getAttribute('id_roadmap_content');
      const result = await Course.delete_RoadmapContents(id);
      setmessage(result.message);
      // console.log(result)
      console.log(id)
      handleShow()
      
      
      }
    function onClick_OK (){
      handleClose()
      window.location.reload();
    }

    
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
              <td><p style={{marginTop:'3%'}}>{kehoach.updatedAt}</p></td>
              <td><Button href='/suakehoach' style={{marginTop:'5%', backgroundColor:'#055031'}}>Edit</Button></td>
              <td><Button  style={{marginTop:'3%', backgroundColor:'#055031'}}
                className="btn btn-default" 
                onClick={delete_roadmapcontent} 
                name='gotoNode' 
                id_roadmap_content={kehoach.id}
              
              >Delete</Button></td>
              <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
                 <Modal.Header>
                 {message}
                </Modal.Header>       
                <Modal.Body>
                    <div className='text-black' style={{ backgroundColor:'white',borderRadius:'20px', opacity: 0.6}}>                    
                      <h6>{message}</h6>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"  onClick={onClick_OK}>
                      OK
                    </Button>                
                </Modal.Footer>
          
        </Modal>
            </tr>
          ))}
          
        </tbody>
      </Table>
    )
}

export default TableKH;