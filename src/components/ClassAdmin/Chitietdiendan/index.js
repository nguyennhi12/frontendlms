import React from 'react'

import { Wrapper, Image_Head, Course, Navigationbar,HeaderList,btn} from './Chitietdiendan.styles';
import { Button } from 'react-bootstrap';
import { HookListChuDe } from '../../../hook/HookListChuDe';
import Sidebar from '../SidebarClassAdmin/SidebarClassAdmin'
import Topbar from '../Topbar/Topbar';
import HeaderListSinhVien from './HeaderListSinhVien';
import TableSinhVien from './TableSinhVien'


const Chitietdiendan = () =>{   
    const students= [{username:'Bùi Đức Huy'},
                            {username:'Nguyễn Thị Yến Nhi'},
                            {username:'Huỳnh Nhật Thiên'},
                            {username:'Nguyễn Gia Huy'},
                            {username:'Nguyễn Phan Nhật Tú'},]  
    return(
        <Wrapper>  
            <Image_Head><Topbar/></Image_Head>       
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList><HeaderListSinhVien/></HeaderList>        
            <Course><TableSinhVien students={students}></TableSinhVien></Course>
            <Button style={{height:'40px',width:'100px',marginLeft:'60%',marginTop:'40%'}}>Cancel</Button>

                
        </Wrapper>
    )
}


export default Chitietdiendan;