import React , {useState, useEffect} from 'react'

import { Wrapper, Image_Head, Review, Table, Course, Comment,Navigationbar } from './InfoCourse.styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Thumb_Cmt from '../Thumb_Cmt';
import HeaderCourse from '../HeaderCourse';
import NoiDungCourse from '../NoiDungCourse';
import PopUpXacNhanDangKy from '../../Student/PopUp/PopUpXacNhanDangKy';
import Sidebar from '../../Student/SidebarStudent/Sidebar'
import {HookInfoCourse} from '../../../hook/HookInfoCourse'
import {Card} from 'react-bootstrap'
const InfoCourse = () =>{  
    const id='abec2983-de4a-426c-82bb-603de47c8832';
    const {course, enable, eveluate, student , teacher          
    }=HookInfoCourse({id});
    const date= new Date(course.createdAt)
    
    return(
        <Wrapper>
            <Navigationbar><Sidebar/></Navigationbar>
            
            <Image_Head><HeaderCourse Course={course}></HeaderCourse></Image_Head>
            
            <Review>
                <Card border="info" style={{width:'28vmax'}}>  
                <h2 style={{marginTop:'2%', color:'red'}}>Đánh giá {eveluate.totalPoint}/5</h2>
                <Table className='table'>
                    <tr>
                        <th>Bắt đầu: {date.toLocaleString()} </th>
                        <th>GV: {teacher.displayName}</th>
                        {/* <th>{results_infos.teacher}</th> */}
                        
                    </tr>
                    <tr>
                        <th>Thời lượng: {course.duration} ngày</th>
                        <th>Zoom</th>
                    </tr>                    
                </Table>
                <h3>STUDENT: {student}/35</h3>  
                <PopUpXacNhanDangKy name={course.name} teacher={teacher.displayName} createdAt={course.createdAt}  duration={course.duration}  idCourse={id}  enable={enable}></PopUpXacNhanDangKy>
            </Card>
            </Review>
            <Course className='course'>
                <NoiDungCourse noidung={course.description}/>
            </Course>
            <Comment> 
                <Thumb_Cmt id={id}/>
            </Comment>
        </Wrapper>
    )
}

export default InfoCourse;