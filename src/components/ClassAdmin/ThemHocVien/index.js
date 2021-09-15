import React from 'react'

import { Wrapper, Course, Navigationbar,HeaderList} from './ThemHocVien';
import Sidebar from '../SidebarClassAdmin/SidebarClassAdmin'
import HeaderListSinhVien from './HeaderListHocVien';
import TableKH from './TableSV'
import { HookStudentCourse } from '../../../hook/HookStudentofCourse';
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

const ThemHocVien = () =>{  
    var idcourse=GetURLParameter('idcourse')
    const status='AWAIT' 
    const{students}= HookStudentCourse({status,idcourse })
    console.log(students);                  
    
    return(
        <Wrapper>  
                 
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList><HeaderListSinhVien id={idcourse}/></HeaderList>        
            <Course><TableKH students={students}></TableKH></Course> 

                
        </Wrapper>
    )
}


export default ThemHocVien;