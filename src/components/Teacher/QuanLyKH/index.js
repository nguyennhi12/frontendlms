import React from 'react'

import { Wrapper, Image_Head, Course, Navigationbar,HeaderList} from './QuanLyKH.styles';
import Sidebar from '../SidebarTeacher/SidebarTeacher'
import Topbar from '../Topbar/Topbar';
import HeaderListSinhVien from './HeaderListKH';
import TableKH from './TableKH'
import { useHistory } from "react-router-dom";
import { HookChiTietCourse } from '../../../hook/HookChiTietCourse';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
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
    const history = useHistory();
    const id=GetURLParameter('idRoadMap')
    const {        
        results,     
    }=HookChiTietCourse({id});
    
    return(
        <Wrapper>  
            <Image_Head><Topbar/></Image_Head>       
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList><HeaderListSinhVien idroadmap={id} /></HeaderList>        
            <Course><TableKH kehoachs={results}></TableKH></Course>

                
        </Wrapper>
    )
}


export default QuanLyKH;