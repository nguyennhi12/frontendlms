import React from 'react'

import { Wrapper, Image_Head, Review, Table, Course, ListInfo,Comment,itemComment,Navigationbar } from './InfoCourse.styles';
import { Link } from 'react-router-dom';
import Thumb_Cmt from '../Thumb_Cmt';

import Navi_Bootstrap from '../Navi_Bootstrap'
import HeaderCourse from '../HeaderCourse';
import NoiDungCourse from '../NoiDungCourse';
const InfoCourse = () =>(
    <Wrapper>
        <Navigationbar><Navi_Bootstrap/></Navigationbar>
        
        <Image_Head><HeaderCourse nameCourse='CÔNG NGHỆ PHẦN MỀM'></HeaderCourse></Image_Head>
        
        <Review>
            <h2>Đánh giá 5/5</h2>
            <Table className='table'>
                <tr>
                    <th>Monday, 28 Junly 2021 </th>
                    <th>Mr. Mai Tuan Khoi</th>
                    
                </tr>
                <tr>
                    <th>02.00-03.30 PM</th>
                    <th>Zoom</th>
                </tr>
                
            </Table>
            <h3>STUDENT: 35/35</h3>
            <Link to='/'>
                <button type='button' className='join'>JOIN THE CLASS</button>
            </Link>
        </Review>
        <Course className='course'>
            <NoiDungCourse noidung="Some quick example text to build on the card title and make up the bulk
        of the card's content."/>
        </Course>
        <Comment> 
            <Thumb_Cmt name='Nhi' cmt='Goodddd!!'/>
        </Comment>
    </Wrapper>
)

export default InfoCourse;