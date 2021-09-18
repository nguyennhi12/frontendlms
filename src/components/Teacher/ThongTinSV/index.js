import React,{ useState ,useEffect, useCallback} from 'react'

import { Wrapper,  FormSV, Navigationbar, ImageSV} from './ThongTinSV.styles';
import Studentdetail from '../../../configs/Authentication'
import { HookListChuDe } from '../../../hook/HookListChuDe';
import Sidebar from '../SidebarTeacher/SidebarTeacher'
import FormTT from './FormTT';
import {Image, } from 'react-bootstrap'
import Hoa from '../../../images/tmdb_logo.svg'
import { useLocation } from "react-router-dom";
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
const ThongTinSV = ({students}) =>{   
    console.log(students)
    const [Result, setResult]= useState([]);
    const [status, setStatus] = useState('ALL');
    const [check, setcheck]= useState(false);
    const location = useLocation();
    const idUser= location.state.idUser;
    console.log(idUser)
    
    
   
      const List = (async(event)=>
      {
        setStatus (event.target.getAttribute('status'));
        setcheck(false);
      }
      )
      useEffect(()=>{ 
        try{
          if(check==true){
            async function getliststudent(){
              var list = {idUser}
              const result = await Studentdetail.Studentdetail(list);
              if(result.data!=null){
              setResult(result.data);
             
              
              }
            } 
              console.log(Result);
              
              getliststudent();
          }
          
            
        }catch{
  
        }
        
    },[] )
    return(
        <Wrapper>   
                         
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>
            <h1 style={{ marginLeft:'3%', marginTop:'3%', }}>Thông Tin Sinh Viên</h1>    
            <FormSV><FormTT/></FormSV>

            <ImageSV>
                <Image src={idUser.student.urlAvatar} width="150" height="150" roundedCircle  style={{background:'#055031', marginLeft:'35%', marginTop:'10%'}}/>
                <h1 style={{ marginLeft:'40%', marginTop:'8%', }}>{idUser.student.displayName}</h1>
            </ImageSV>

                
        </Wrapper>
    )
}


export default ThongTinSV;