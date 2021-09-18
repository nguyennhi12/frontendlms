import React from 'react'

import { Wrapper, Image_Head, Course, Navigationbar,HeaderList} from './QuanLyRoadmap.styles';
import Sidebar from '../SidebarTeacher/SidebarTeacher'
import Topbar from '../Topbar/Topbar';
import HeaderListSinhVien from './HeaderListKH';
import TableKH from './TableKH'
import { HookChiTietCourse } from '../../../hook/HookChiTietCourse';
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
  }  
const QuanLyKH = () =>{ 
    const idCourse=GetURLParameter('idcourse')
    console.log(idCourse)
    const {        
        course,        
    }=HookChiTietCourse({idCourse});
    console.log(course)
    return(
        <Wrapper>  
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
             <HeaderList><HeaderListSinhVien roadmaps={course} idCourse={idCourse} /></HeaderList>        
            <Course><TableKH kehoachs={course.roadMaps} idCourse={idCourse}></TableKH></Course> 

                
        </Wrapper>
    )
}


export default QuanLyKH;