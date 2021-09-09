import React from 'react'

import { Wrapper, Image_Head, Course, Navigationbar,HeaderList} from './QuanLyKH.styles';
import Sidebar from '../../Teacher/SidebarTeacher/SidebarTeacher'
import HeaderListSinhVien from './HeaderListKH';
import TableKH from './TableKH'


const QuanLyKH = () =>{   
    const courses= [{name:'Công Nghệ Phần Mềm',
                        code_course: "CNPM_CLC"},
                        {name:'Lập Trình Di Động',
                        code_course: "MB_CLC"},
                        {name:'Kiểm Thử Phần Mềm',
                        code_course: "KTPM_CLC"}]  
    return(
        <Wrapper>  
                 
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList><HeaderListSinhVien/></HeaderList>        
            <Course><TableKH courses={courses}></TableKH></Course>
        
                
        </Wrapper>
    )
}


export default QuanLyKH;