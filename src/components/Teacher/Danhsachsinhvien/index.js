import React ,{useState, useEffect}from 'react'

import { Wrapper, Image_Head, Course, Navigationbar,HeaderList} from './Danhsachsinhvien.styles';
import Sidebar from '../SidebarTeacher/SidebarTeacher';
import Topbar from '../Topbar/Topbar';
import HeaderListSinhVien from './HeaderListMentor'
import TableSinhVien from './TableMentor'
import listStudentCourse from '../../../configs/Course';
import {Button} from 'react-bootstrap'
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
  const Danhsachsinhvien = () =>{
    const [Result, setResult]= useState([]);
    const [status, setStatus] = useState('ALL');
    const [check, setcheck]= useState(false);
    var idCourse= 'abec2983-de4a-426c-82bb-603de47c8832';
    idCourse = GetURLParameter('idCourse');
    
      const List = (async(event)=>
      {
        setStatus (event.target.getAttribute('status'));
        setcheck(false);
      }
      )
      useEffect(()=>{ 
        try{
          
        
          if(check==false){
            async function getliststudent(){
              var list = {idCourse,status}
              const result = await listStudentCourse.listStudentCourse(list);
              if(result.data!=null){
              setResult(result.data);
              setcheck(true);
              }
            } 
              console.log(Result);
              getliststudent();
          }
          
            
        }catch{
  
        }
        
    },[status] )
      
      return(
          <Wrapper>  
              <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
              <HeaderList><HeaderListSinhVien id={idCourse}/></HeaderList>                    
              <Course>
              <Button onClick={List} 
                    style={{marginLeft:'%'}}
                  name='gotoNode' 
                  status="ALL">ALL</Button>
              <Button onClick={List} 
                style={{marginLeft:'10%'}}
                  name='gotoNode' 
                  status="STUDYING">STUDYING</Button>
              <Button onClick={List} 
                style={{marginLeft:'12%'}}
                  name='gotoNode' 
                  status="AWAIT" >AWAIT</Button>   
              <Button onClick={List} 
                style={{marginLeft:'14%'}}
                  name='gotoNode' 
                  status="DONE" >DONE</Button>   
              
              {Result==null? console.log("null"):
              <TableSinhVien 
              students={Result}></TableSinhVien>  }
              </Course>
              
          </Wrapper>
         
      )
  }
  
export default Danhsachsinhvien;