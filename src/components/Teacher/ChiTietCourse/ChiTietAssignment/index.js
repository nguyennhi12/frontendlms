import React from 'react'

import { Wrapper, Image_Head, Info,Assiment } from './ChiTietAssignment.styles';


import HeaderCourse from '../../Guest/HeaderCourse';
import { HookListChuDe } from '../../../hook/HookListChuDe';
import NoiDungAss from '../NoiDungAss';
import NoiDungChiTietAss from './NoiDungChiTietAss'
import {Image, Button} from 'react-bootstrap'
import Logo from '../../../images/tmdb_logo.svg'

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

const ChiTietAssignment = () =>{ 
    //const { state } = this.props.location
    var id = GetURLParameter('id');
    console.log(id)
    const {state}=HookListChuDe();  
    return(
        <Wrapper> 
            <Image_Head><HeaderCourse nameCourse='CÔNG NGHỆ PHẦN MỀM'></HeaderCourse></Image_Head>              
            <Info>
                <Image className='rounded-circle ' src={Logo} width="100" height="100" style={{backgroundColor:'black',
                    marginBottom:'10%', position: "absolute",
                    left: "50%", marginTop:"5%"}}></Image>
                
                <strong className="me-auto" style={{marginBottom:'10%', position: "absolute",
                    left: "52%", marginTop:"30%"}}>Nguyễn Nhi</strong>

                <div style={{marginBottom:'10%', position: "absolute",
                    left: "40%", marginTop:"43%"}}>
                    <h6>Start: 9h30AM-03/04/2021</h6>
                    <h6>Finish: 12h00AM-04/04/2021</h6>
                </div>
                <Button variant="primary" style={{marginBottom:'10%', position: "absolute",
                    left: "48%", marginTop:"60%", width:'30%', background:'#055031'}}>Hủy</Button>
                

                
            </Info>  
            <Assiment>
                {state.Titles.map(title=>(
                    title.id!=id?console.log('khong')
                    :<NoiDungChiTietAss title={title} ></NoiDungChiTietAss> ))
                }
                
            </Assiment>              
                
        </Wrapper>
    )
}


export default ChiTietAssignment;