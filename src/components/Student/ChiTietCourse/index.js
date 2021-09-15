import React from 'react'
import { Wrapper, Image_Head, Course, Navigationbar,Assiment } from './ChiTietCourse.styles';
import HeaderCourse from '../../Guest/HeaderCourse';
import NavbarCourse from '../NavbarCourse';
import NoiDungChuDe from '../NoiDungChuDe'
import NoiDungAss from '../NoiDungAss';
import {HookChiTietCourse} from '../../../hook/HookChiTietCourse'
import {HookgetUser} from '../../../hook/HookgetUser'
import { Button } from 'react-bootstrap';
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
    var idCourse='abec2983-de4a-426c-82bb-603de47c8832';
    var id = '47964cd7-a329-432d-a10e-76f5bbccb758'
    id = GetURLParameter('id');
    const {
        results,
        results_details,
        position,
        setposition,
        positionass,
        setpositionass,
        roadmapcontent,
        course
    }=HookChiTietCourse({id, idCourse});

    const {
        user, error
    }=HookgetUser()
  
    console.log(course)
    function onClickNext (){
        position===results.length-1?setposition(0):setposition(position+1)
    }

    function onClickPause (){
        position===0?setposition(results.length-1):setposition(position-1)
    }
    function onClickNextAss (){
        
        positionass===roadmapcontent.createAssignment.length-1?setpositionass(0):setpositionass(positionass+1)
    }

    function onClickPauseAss (){
        positionass===0?setpositionass(roadmapcontent.createAssignment.length-1):setpositionass(positionass-1)
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
                {
                    roadmapcontent == null ?console.log('null'):
                        roadmapcontent.createAssignment[positionass] == null ? console.log('null'):<div>
                        <NoiDungAss title={roadmapcontent.createAssignment[positionass]} idcourse={course.id}  idstudent={user.userId} positionass={positionass}></NoiDungAss>
                        <Button style={{position:'absolute', right:'4%', marginTop:'5%' }} onClick={onClickNextAss}>Bài sau</Button>
                        <Button style={{position:'absolute', right:'30%', marginTop:'5%' }}onClick={onClickPauseAss}>Bài trước</Button>
                    </div>
                }
                
                
            </Assiment>              
                
        </Wrapper>
    )
}


export default InfoCourse;