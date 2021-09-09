import React, {useState, useCallback} from 'react'
import  RoadMaps  from "../../../../configs/Course";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Row, Col, Button, ButtonGroup, Modal} from 'react-bootstrap'
import { HookChiTietCourse } from '../../../../hook/HookChiTietCourse';
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

const FormKH = ()=>{
    var idRoadMap = GetURLParameter('idcourse');
    var id=idRoadMap;
    console.log(idRoadMap)
       const [unit, setunit]=useState('');
    const [titles, settitle]=useState('');
    const[content, setcontent]=useState('')
    const[resuls_create, setresults]=useState('')
    const[errors, seterrors]=useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    async function create_RoadmapContent(){ 
        const title= unit+" "+ titles;
        console.log(title+" "+content)
        let roadmap_content={idRoadMap, title, content};
        try{  
            const result=await RoadMaps.create_RoadmapContent(roadmap_content);
            setresults(result);    
            seterrors(result.errors);       
            console.log(result.message)
            handleShow()
            
        }catch(error){
            console.log(unit, titles)
        }
       
    }        
    console.log(errors)
    return(
        <div> 
        <Form style={{width: '83vmax', color:'black'}}>
            <Row className="mb-3" style={{width: '40vmax',color:'black'}}>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Bài:</Form.Label>
                <Form.Control placeholder="Bài 01" onChange={(e)=>setunit(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Name:</Form.Label>
                <Form.Control placeholder="Các căn giữa trong css"  onChange={(e)=>settitle(e.target.value)}/>
                </Form.Group>                
            </Row>
            <Row className="mb-3" style={{width: '40vmax', marginTop:'5%',color:'black'}}>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Nội dung:</Form.Label>
                <Form.Control
                
                as="textarea"
                multiple='true'
                placeholder="Nội dung của chủ đề"
                style={{ height: '300px' }}
                onChange={(e)=>setcontent(e.target.value)}
                />
                </Form.Group>            
            </Row>
            <ButtonGroup className="mb-2" style={{ marginTop:'25%'}}>
                <Button style={{background:'#055031', marginLeft:'80%'}}>Cancle</Button> 
                <Button style={{background:'#055031', marginLeft:'100%'}} onClick={create_RoadmapContent}>Create</Button>
            </ButtonGroup>
            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
                 <Modal.Header>
                 {resuls_create.message}
                </Modal.Header>       
                <Modal.Body>
                    <div className='text-black' style={{ backgroundColor:'white',borderRadius:'20px', opacity: 0.6}}>                    
                        <div style={{ marginLeft:'10%',paddingBottom:'5%'}}>
                        {
                            errors==undefined?console.log('null'):
                            errors.map(error=>(
                                <h6>{error}</h6>
                            ))
                        }
                                             
                        </div>                                    

                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"  onClick={handleClose}>
                    OK
                    </Button>                
                </Modal.Footer>
          
        </Modal>
                
        </Form>
        </div>

    
)}

export default FormKH;