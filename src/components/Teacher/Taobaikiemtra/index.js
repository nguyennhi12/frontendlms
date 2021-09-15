import React from 'react'

import { Wrapper, Image_Head, Navigationbar,HeaderList, Formbkt} from './Taobaikiemtra.styles';
import { Form, Button, Row, Col } from 'react-bootstrap'

import Sidebar from '../SidebarTeacher/SidebarTeacher';
import Topbar from '../Topbar/Topbar';
import Header from './Header/index'
import TaoBKT from './TaoBKT';


const Taobaikiemtra = () =>{   
  
    return(
        <Wrapper>  
            <Image_Head><Topbar/></Image_Head>       
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList><Header/></HeaderList>        
            <Formbkt>
                <TaoBKT></TaoBKT>
            </Formbkt>    
        </Wrapper>
    )
}


export default Taobaikiemtra;