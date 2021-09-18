import React from 'react'

import { Wrapper, Image_Head, Course, Navigationbar,HeaderList} from './QuanLyDiem.styles';

import { HookListChuDe } from '../../../hook/HookListChuDe';
import SidebarTeacher from '../SidebarTeacher/SidebarTeacher'
import Topbar from '../Topbar/Topbar';
import HeaderListSinhVien from './HeaderListSinhVien';
import TableSinhVien from './TableSinhVien'
import {HookgetScoreofCourse} from '../../../hook/HookgetScoreofCourse'
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
const QuanLyDiem = () =>{   
    var idCourse= GetURLParameter('idCourse');
    const {results}=HookgetScoreofCourse({idCourse})
    console.log(results)

                            
    return(
        <Wrapper >  
            
            <SidebarTeacher />
            <HeaderList><HeaderListSinhVien id={idCourse}/></HeaderList>        
            <Course><TableSinhVien students={results}></TableSinhVien></Course>

                
        </Wrapper>
    )
}


export default QuanLyDiem;