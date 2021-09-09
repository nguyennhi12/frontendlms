import React from 'react'

import { Wrapper, Course, Navigationbar,HeaderList} from './Chitietkhoachamdiem.styles';
import Sidebar from '../Sidebar/Sidebar'
import HeaderListSinhVien from './HeaderListHocVien';
import TableKH from './TableSV'


const Chitietkhoachamdiem = () =>{   
    const students= [

                        {
                        name: "Bùi Đức Huy",
                      },
                        {
                        name: "Bùi Đức Huy",
                        },
                        {
                        name: "Bùi Đức Huy",
                        },

                    ]  
    return(
        <Wrapper>  
                 
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList><HeaderListSinhVien/></HeaderList>        
            <Course><TableKH students={students}></TableKH></Course>

                
        </Wrapper>
    )
}


export default Chitietkhoachamdiem;