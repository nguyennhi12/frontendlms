import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hoa from '../../../images/Hoa.svg'
import PropTypes from 'prop-types'

import {Card} from 'react-bootstrap'

const HeaderCourse = ({nameCourse}) => (
    <Card className="bg-dark text-white" style={{position:'relative', marginTop:'3%'}}>
        <Card.Img src={Hoa} alt="Card image" fluid style={{height:'200px', objectFit:'cover'}}/>
        <Card.ImgOverlay>
            <Card.Title style={{position:'absolute',top:'27%', fontSize:'2vmax', marginLeft:'3%'}}>{nameCourse}</Card.Title>            
        </Card.ImgOverlay>
    </Card>


);


HeaderCourse.propTypes={
    nameCourse: PropTypes.string,
    
}

export default HeaderCourse;