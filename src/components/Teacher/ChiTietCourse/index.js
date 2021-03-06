import React from 'react'

import { Wrapper, Image_Head, Course, Navigationbar,Assiment, HeaderList } from './ChiTietCourse.styles';
import HeaderCourse from './HeaderChiTietCourse';
import NavbarCourse from './NavbarCourse';

import NoiDungChuDe from './NoiDungChuDe'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import {HookChiTietCourse} from '../../../hook/HookChiTietCourse'
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
const InfoCourse = () =>{ 
    //const { state } = this.props.location 
    var idCourse=GetURLParameter('idCourse'); 
    var id = GetURLParameter('id');
    const {
        results,
        results_details,
        position,
        setposition,       
        roadmapcontent,
        course
    }=HookChiTietCourse({id, idCourse});
    console.log(id)
         
    console.log(course)
    function onClickNext (){
        position===results.length-1?setposition(0):setposition(position+1)
    }

    function onClickPause (){
        position===0?setposition(results.length-1):setposition(position-1)
    }   
    return(
        <Wrapper>        
            <Navigationbar><NavbarCourse results={results_details}></NavbarCourse> </Navigationbar>                
            <Image_Head><HeaderCourse Course={course}></HeaderCourse></Image_Head>  
            <Button style={{position:'absolute', right:'3%', marginTop:'10%' }} onClick={onClickNext}>Bài sau</Button>
            <Button style={{position:'absolute', right:'10%', marginTop:'10%' }}onClick={onClickPause}>Bài trước</Button>
            <Course>
            {
                roadmapcontent==null?console.log("null"):
                <NoiDungChuDe roadmapcontent={roadmapcontent} setposition={setposition} ></NoiDungChuDe>
            }            
            
            </Course>  
                       
            <Assiment>
                <Button href={`/teacher/danhsachsinhvien?idCourse=${course.id}`} style={{width:'12vmax', marginBottom:'6%'}}>Danh sách học viên</Button>
                <Button href={`/quanlydiem?idCourse=${course.id}`} style={{width:'12vmax', marginBottom:'6%'}}>Danh sách điểm</Button>
                {roadmapcontent==null?console.log("null")
                :<Button href={`/teacher/danhsachbaiKT?idCourse=${course.id}&idroadmapcontent=${roadmapcontent.id}`} style={{width:'12vmax', marginBottom:'6%'}}>Bài kiểm tra</Button>}
                {roadmapcontent==null?console.log("null")
                :<Button href={`/document/${roadmapcontent.id}`} style={{width:'12vmax', marginBottom:'6%'}}>Tài liệu</Button>}
                <Button href={`/quanlyroadmap?idcourse=${course.id}`} style={{width:'12vmax', marginBottom:'6%'}}><Link to={`/quanlyroadmap?idcourse=${course.id}`} style={{textDecoration:"none"}} ></Link>Kế hoạch</Button>
 
            </Assiment>
        </Wrapper>
    )
}


export default InfoCourse;