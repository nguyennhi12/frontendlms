import React from 'react'

import { Wrapper,  FormSV, Navigationbar, ImageSV} from './TaoKH.styles';

import Sidebar from '../SidebarTeacher/SidebarTeacher'
import FormTaoKH from './FormTaoKH';
import {Image, } from 'react-bootstrap'
import Hoa from '../../../images/tmdb_logo.svg'
const TaoKH = () =>{   
    
    return(
        <Wrapper>   
                         
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>
            <h1 style={{ marginLeft:'3%', marginTop:'3%', }}>Tạo kế hoạch mới</h1>    
            <FormSV><FormTaoKH/></FormSV>

            <ImageSV>
                <Image src={Hoa} width="150" height="150" roundedCircle  style={{background:'#055031', marginLeft:'35%', marginTop:'10%'}}/>
                <h1 style={{ marginLeft:'35%', marginTop:'8%', }}>NguyenNhi123</h1>
            </ImageSV>

                
        </Wrapper>
    )
}


export default TaoKH;