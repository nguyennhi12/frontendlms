import React,{useState, useEffect, useCallback} from 'react'
import  Assignment  from "../../../configs/Course";

import { Wrapper, Image_Head, Course, Navigationbar,HeaderList} from './QuanLyBaiKT.styles';
import Sidebar from '../SidebarTeacher/SidebarTeacher'
import Topbar from '../Topbar/Topbar';
import HeaderListSinhVien from './HeaderListKT';
import TableKH from './TableKT'
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
const QuanLyKT = () =>{ 
    const idRoadMapContent=GetURLParameter('idroadmapcontent')
    const [results, setresult]=useState([]); 
    const[check, setcheck]=useState(false)
    const fetchRoadmap = useCallback( async()=>{
        try{  
            const detail=await Assignment.getListAssignment(idRoadMapContent);            
            setresult(detail.data); 
            if(detail.success==true) {
                setcheck(true)
            }
        }catch(error){
           
        }
       
    },[idRoadMapContent])  
    useEffect(()=>{ 
        try{
            if(( check==false)){ 
                fetchRoadmap();
                console.log(results)
            }        
            else{  
                
                console.log(results)
            }
        }catch{

        }
        
    },[check,fetchRoadmap, idRoadMapContent] )    
    
    return(
        <Wrapper>  
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList><HeaderListSinhVien roadmaps={results} idRoadMapContent={idRoadMapContent} /></HeaderList>        
            <Course><TableKH kehoachs={results} idRoadMapContent={idRoadMapContent} ></TableKH></Course> 

                
        </Wrapper>
    )
}


export default QuanLyKT;