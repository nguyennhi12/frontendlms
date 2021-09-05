import React from 'react'

import { Wrapper, Course, Navigationbar,HeaderList} from './ThemMentor.styles';
import Sidebar from '../SidebarClassAdmin/SidebarClassAdmin'
import HeaderListSinhVien from './HeaderListHocVien';
import TableKH from './TableSV'


const ThemMentor = () =>{   
    const students= [

                        {username:'duchuy3011',
                        name: "Bùi Đức Huy",
                        email:'duchuy11@gmail.com'},

                    ]  
    return(
        <Wrapper>  
                 
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList><HeaderListSinhVien/></HeaderList>        
            <Course><TableKH students={students}></TableKH></Course>

                
        </Wrapper>
    )
}


export default ThemMentor;