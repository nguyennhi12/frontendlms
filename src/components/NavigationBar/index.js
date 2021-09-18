import React from 'react'

import {RightNav, Avatar} from './NavigationBar.stylde'

import { Link } from 'react-router-dom'

import Image from '../../images/logo.svg'

import EventIcon from '@material-ui/icons/Event';

const NavigationBar =()=>(
    <React.Fragment>
        
        <RightNav>

            <Avatar src={Image} className='avatar'></Avatar>
            <p className='name'>Nguyễn Nhi</p>
            <ul>
                <Link to ='/' className='item'> 
                    <button type='button'>HOME</button>
                </Link>
                <Link to ='/' className='item'>
                    <li>Quản lý khóa học</li>
                </Link>
                <Link to ='/' className='item'>
                    <li>My Profile</li>
                </Link>
                <Link to ='/' className='item'>
                    <li>Ý kiến thảo luận</li>
                </Link>
                <Link to ='/' className='item'>
                    <li>Log out</li>
                </Link>

                
            </ul>
        </RightNav>
    
    </React.Fragment>

)

export default NavigationBar