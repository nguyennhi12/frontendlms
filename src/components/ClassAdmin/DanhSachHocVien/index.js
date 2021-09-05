import React from 'react'

import { Wrapper, Image_Head, Course, Navigationbar,HeaderList} from './DanhSachHocVien.styles';
import Sidebar from '../SidebarClassAdmin/SidebarClassAdmin'
import HeaderListSinhVien from './HeaderListHocVien';
import TableKH from './TableSV'


const QuanLyKH = () =>{   
    const students= [{username:'nguyennhi2009',
                        name: "Nguyễn Nhi",
                        email:'nguyennhi09@gmail.com'},

                        {username:'duchuy3011',
                        name: "Bùi Đức Huy",
                        email:'duchuy11@gmail.com'},

                        {username:'nguyennhi2009',
                        name: "Nguyễn Nhi",
                        email:'nguyennhi09@gmail.com'}]  
    return(
        <Wrapper>  
                 
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList><HeaderListSinhVien/></HeaderList>        
            <Course><TableKH students={students}></TableKH></Course>

                
        </Wrapper>
    )
}


export default QuanLyKH;