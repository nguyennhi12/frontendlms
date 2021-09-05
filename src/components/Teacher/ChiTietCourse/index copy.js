import React from 'react'

import { Wrapper, Image_Head, Course, Navigationbar,Assiment, HeaderList } from './ChiTietCourse.styles';


import HeaderCourse from '../../Guest/HeaderCourse';
import NavbarCourse from '../../Student/NavbarCourse';
import { HookListChuDe } from '../../../hook/HookListChuDe';
import NoiDungChuDe from '../../Student/NoiDungChuDe'
import NoiDungAss from '../../Student/NoiDungAss';
import HeaderChiTietCourse from './HeaderChiTietCourse';
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
    

    var id = GetURLParameter('id');
    console.log(id)
    const {state}=HookListChuDe();  
    return(
        <Wrapper>        
            <Navigationbar><NavbarCourse ></NavbarCourse> </Navigationbar>
                
            <Image_Head><HeaderCourse nameCourse='CÔNG NGHỆ PHẦN MỀM'></HeaderCourse></Image_Head>
            <HeaderList><HeaderChiTietCourse/></HeaderList>
            <Course>
            {state.Titles.map(title=>(
                title.id!=id?console.log('khong')
                :<NoiDungChuDe title={title} ></NoiDungChuDe> ))
            }
            
            </Course>  
            <Assiment>
                {state.Titles.map(title=>(
                    title.id!=id?console.log('khong')
                    :<NoiDungAss title={title} ></NoiDungAss> ))
                }
                
            </Assiment>              
                
        </Wrapper>
    )
}


export default InfoCourse;