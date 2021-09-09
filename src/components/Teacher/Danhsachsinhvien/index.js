import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Image_Head, Course, Navigationbar,HeaderList} from './Danhsachsinhvien.styles';
import listStudentCourse from '../../../configs/Authentication';
import { Button, Modal} from 'react-bootstrap';
import Sidebar from '../SidebarTeacher/SidebarTeacher';
import Topbar from '../Topbar/Topbar';
import HeaderListSinhVien from './HeaderListSinhVien'
import TableSinhVien from './TableSinhVien'


const Danhsachsinhvien = () =>{
  const [Result, setResult]= useState([]);
  const [Errors, setError]= useState([]);
  const [err_text, seterr_text]= useState('');
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [postList, setPostList] = useState([]);
  const [status, setStatus] = useState(['']);
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
    async function List()
    {
      
      var idCourse= 'd032b7ed-0cee-4728-a275-899e3563f19b';
      idCourse = GetURLParameter('idCourse');
      const result = await listStudentCourse.listStudentCourse(idCourse);
      setResult(result.data);
      if(result.statusCode==404)
      {
        setError(result.errors)
        console.warn(Errors)
        console.log(result.statusCode)
        handleShow()  
      }
    }
    useEffect(()=>{
      async function fetchdata(){
          if(Result.length===0){
              await List();                
          }
          else{                
            console.log(Result);
            // status='STUDYING';
            
          }
      }
      fetchdata()
  }, [Result])
    return(
        <Wrapper>  
            <Image_Head><Topbar/></Image_Head>       
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList><HeaderListSinhVien/></HeaderList>        
            <Course><TableSinhVien students={Result}></TableSinhVien></Course>
            {/* <Link onClick={()=> setStatus(status==="AWAIT")} styles={{height:'20%',width:'20px',marginTop:'90%',marginLeft:'90%'}}>AWAIT</Link>  */}
        </Wrapper>
    )
}


export default Danhsachsinhvien;