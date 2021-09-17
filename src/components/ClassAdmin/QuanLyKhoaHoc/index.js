import React from 'react'

import { Wrapper, Image_Head, Course, Navigationbar,HeaderList} from './QuanLyKH.styles';
import Sidebar from '../../ClassAdmin/SidebarClassAdmin/SidebarClassAdmin'
import HeaderListSinhVien from './HeaderListKH';
import TableKH from './TableKH'
import callApi from '../../../api/apiService';
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