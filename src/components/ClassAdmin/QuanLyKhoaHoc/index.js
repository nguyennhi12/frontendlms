import React from 'react'

import { Wrapper, Image_Head, Course, Navigationbar,HeaderList} from './QuanLyKH.styles';
import Sidebar from '../../Teacher/SidebarTeacher/SidebarTeacher'
import HeaderListSinhVien from './HeaderListKH';
import TableKH from './TableKH'

import { HookAllCourse } from '../../../hook/HookAllCourse';
const QuanLyKH = () =>{   
   
    const {results}= HookAllCourse();
    console.log(results);
    return(
        <Wrapper>  
                 
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList><HeaderListSinhVien /></HeaderList>        
            <Course><TableKH courses={results}></TableKH></Course>
        
                
        </Wrapper>
    )
}


export default QuanLyKH;