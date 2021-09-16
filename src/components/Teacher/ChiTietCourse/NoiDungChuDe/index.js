import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'


const NoiDungChuDe = ({roadmapcontent}) => {  
  console.warn(roadmapcontent);
  if(roadmapcontent == undefined){
    roadmapcontent={"idRoadMap": "",
    "roadMap": null,
    "title": "aaaaaa",
    "content": "",
    "createAssignment": [],
    "documents":[{}]};
  }
  return(  
        <Card border="light" className="mb-2" style={{width:"60vmax"}}>
        <Card.Header>{roadmapcontent.title}</Card.Header>
          <Card.Body>            
            <Card.Text>
              {roadmapcontent.content}
            </Card.Text>
            {
              roadmapcontent.documents.length!=0? <Card.Text style={{fontSize:'1.5vmax'}}>
              Tài liệu:                
            </Card.Text>: console.log("null")
            }  
            {    
                roadmapcontent.documents.map(document=>(
                <div>
                  <Card.Text>
                  {document.content}                
                  </Card.Text>
                  <a href={document.urlDocument} tabindex="-1"><strong>{document.content}</strong></a>
                </div>
                
             
              ))
            }
            
          </Card.Body>
        </Card>
  )
};

    
 


export default NoiDungChuDe;