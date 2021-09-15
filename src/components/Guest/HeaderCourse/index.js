import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hoa from '../../../images/Hoa.svg'
import PropTypes from 'prop-types'

import {Card} from 'react-bootstrap'

const HeaderCourse = ({Course}) => (
    <Card className="bg-dark text-white" style={{position:'relative', width:'77vmax'}}>
        <Card.Img src={Course.urlImage} alt="Card image" fluid style={{height:'190px', objectFit:'cover'}}/>
        <Card.ImgOverlay>
            <Card.Title style={{position:'absolute',top:'27%', fontSize:'2vmax', marginLeft:'3%'}}>{Course.name}</Card.Title>            
        </Card.ImgOverlay>
    </Card>


);


HeaderCourse.propTypes={
    nameCourse: PropTypes.string,
    
}

export default HeaderCourse;