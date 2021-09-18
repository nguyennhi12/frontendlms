import React from 'react'

import { Wrapper,  FormSV, Navigationbar, ImageSV} from './SuaKH.styles';

import Sidebar from '../SidebarTeacher/SidebarTeacher'
import FormSuaKH from './FormSuaKH';
import {Image, } from 'react-bootstrap'
import Hoa from '../../../images/tmdb_logo.svg'
const SuaKH = () =>{   
    
    return(
        <Wrapper>   
                         
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>
            <h1 style={{ marginLeft:'3%', marginTop:'3%', }}>Chỉnh sửa kế hoạch</h1>    
            <FormSV><FormSuaKH/></FormSV>

            <ImageSV>
                <Image src={Hoa} width="150" height="150" roundedCircle  style={{background:'#055031', marginLeft:'35%', marginTop:'10%'}}/>
                <h1 style={{ marginLeft:'35%', marginTop:'8%', }}>NguyenNhi123</h1>
            </ImageSV>

                
        </Wrapper>
    )
}


export default SuaKH;