import React from 'react'

import { Wrapper, Image_Head, Course, Navigationbar,HeaderList} from './QuanLyKH.styles';
import Sidebar from '../SidebarTeacher/SidebarTeacher'
import Topbar from '../Topbar/Topbar';
import HeaderListSinhVien from './HeaderListKH';
import TableKH from './TableKH'


const QuanLyKH = () =>{   
    const kehoachs= [{thoigian:'Tuần 1',
                            chude: 'Các căn giữa trong css',
                            noidung: 'Đưa bài giảng cho sinh viên và dealine'},
                            {thoigian:'Tuần 2',
                            chude: 'Các căn giữa trong css',
                            noidung: 'Đưa bài giảng cho sinh viên và dealine'},
                            {thoigian:'Tuần 2',
                            chude: 'Các căn giữa trong css',
                            noidung: 'Đưa bài giảng cho sinh viên và dealine'}]  
    return(
        <Wrapper>  
            <Image_Head><Topbar/></Image_Head>       
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList><HeaderListSinhVien/></HeaderList>        
            <Course><TableKH kehoachs={kehoachs}></TableKH></Course>

                
        </Wrapper>
    )
}


export default QuanLyKH;