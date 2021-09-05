import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hoa from '../../../images/Hoa.svg'
import PropTypes from 'prop-types'

import {Card} from 'react-bootstrap'

const HeaderCourse = ({nameCourse}) => (
    <Card className="bg-dark text-white" style={{position:'relative'}}>
        <Card.Img src={Hoa} alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title style={{position:'absolute',top:'25%', fontSize:'2vmax'}}>{nameCourse}</Card.Title>            
        </Card.ImgOverlay>
    </Card>


);


HeaderCourse.propTypes={
    nameCourse: PropTypes.string,
    
}

export default HeaderCourse;