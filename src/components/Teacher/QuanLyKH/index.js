import React from 'react'

import { Wrapper, Image_Head, Course, Navigationbar,HeaderList} from './QuanLyKH.styles';
import Sidebar from '../SidebarTeacher/SidebarTeacher'
import Topbar from '../Topbar/Topbar';
import HeaderListSinhVien from './HeaderListKH';
import TableKH from './TableKH'

import { HookChiTietCourse } from '../../../hook/HookChiTietCourse';
const QuanLyKH = () =>{   
      

    const id='461df3d0-1458-4cc8-bb17-8e64951bf167'
   
    const {        
        results,        
    }=HookChiTietCourse({id});
    console.log(results)
    return(
        <Wrapper>  
            <Image_Head><Topbar/></Image_Head>       
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList><HeaderListSinhVien roadmaps={results} id_roadmap={id} /></HeaderList>        
            <Course><TableKH kehoachs={results}></TableKH></Course>

                
        </Wrapper>
    )
}


export default QuanLyKH;