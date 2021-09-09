import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { API_URL } from '../../../configs/config';
const NoiDungChuDe = ({title}) => {   
  if(title == undefined){
    return null;
  }
  const date_start= new Date(title.start).toLocaleString()
  const date_finish= new Date(title.finish).toLocaleString()
    
  return(  
        <Card border="light" className="mb-2">
        <Card.Header>{title.title}</Card.Header>
          <Card.Body>            
            <Card.Text>
              Content:{title.content}              
            </Card.Text>
            <Card.Text>
              Start: {date_start}              
            </Card.Text>
            <Card.Text>
              Finisht: {date_finish}              
            </Card.Text>
            <Card.Text>
            <a href={title.urlFile} tabindex="-1"><strong>{title.title}</strong></a>
            </Card.Text>
          </Card.Body>
          {
            title.outofdate==false?<Button href={`/chitietass?id_ass=${title.id}&id_roadmapcontent=${title.idRoadMapContent}`} variant="primary" size="lg" style={{fontSize:'1vmax', background:'#055031'}}>
            Nộp bài tập
        </Button>:
        <Button  variant="primary" size="lg" style={{fontSize:'1vmax', background:'#C10C0C'}}>
                Bạn không có quyền nộp bài
        </Button>
          }
          
        </Card>
  )
};
export default NoiDungChuDe;