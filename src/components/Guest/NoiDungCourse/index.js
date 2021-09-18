import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Logo from '../../../images/tmdb_logo.svg'
import Hoa from '../../../images/Hoa.svg'
import PropTypes from 'prop-types'

import {Card} from 'react-bootstrap'

const NoiDungCourse = ({noidung}) => (
   
        <Card border="light"
                  
          style={{width:'100%'}}
        >
          <Card.Header>Các nội dung chính</Card.Header>
          <Card.Body>            
            <Card.Text>
              {noidung}
            </Card.Text>
          </Card.Body>
        </Card>
);
    
 
NoiDungCourse.propTypes={
    noidung: PropTypes.string,
    
}

export default NoiDungCourse;