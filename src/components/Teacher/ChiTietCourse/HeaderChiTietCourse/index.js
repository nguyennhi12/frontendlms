import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const HeaderChiTietCourse = ({Course}) => {
    if(Course==null){
        return null;
    }
    return(
    <Card className="bg-dark text-white" style={{position:'relative', width:'77vmax'}}>
        <Card.Img src={Course.urlImage} alt="Card image" fluid style={{height:'190px', objectFit:'cover'}}/>
        <Card.ImgOverlay>
            <Card.Title style={{position:'absolute',top:'27%', fontSize:'2vmax', marginLeft:'3%'}}>{Course.name}</Card.Title>            
        </Card.ImgOverlay>
    </Card>


)};


export default HeaderChiTietCourse;