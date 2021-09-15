import React from 'react'

import { Wrapper, Image_Head, Navigationbar,HeaderList, Formbkt} from './Suabaikiemtra.styles';
import { Form, Button, Row, Col } from 'react-bootstrap'

import Sidebar from '../SidebarTeacher/SidebarTeacher';
import Topbar from '../Topbar/Topbar';
import Header from './Header/index'
import SuaBKT from './SuaBKT';


const Suabaikiemtra = () =>{   
  
    return(
        <Wrapper>  
            <Image_Head><Topbar/></Image_Head>       
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList><Header/></HeaderList>        
            <Formbkt>
                <SuaBKT></SuaBKT>
            </Formbkt>    
        </Wrapper>
    )
}


export default Suabaikiemtra;