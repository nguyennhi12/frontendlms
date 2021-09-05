import React from 'react'

import { Wrapper, Image_Head, Course, Navigationbar,HeaderList} from './Danhsachsinhvien.styles';


import Sidebar from '../SidebarTeacher/SidebarTeacher';
import Topbar from '../Topbar/Topbar';
import HeaderListMentor from './HeaderListMentor'
import TableMentor from './TableMentor'


const Danhsachsinhvien = () =>{   
    const students= [{username:'Huy Bui',
                            name: 'Bùi Đức Huy',
                            date: 'May 26, 2019'},
                            {username:'Nhi Nguyễn',
                            name: 'Nguyễn Thị Yến Nhi',
                            date: 'May 26, 2019'},
                            {username:'Huy Bui',
                            name: 'Bùi Đức Huy',
                            date: 'May 26, 2019'},
                            {username:'Nhi Nguyễn',
                            name: 'Nguyễn Thị Yến Nhi',
                            date: 'May 26, 2019'},
                            {username:'Huy Bui',
                            name: 'Bùi Đức Huy',
                            date: 'May 26, 2019'}]  
    return(
        <Wrapper>  
            <Image_Head><Topbar/></Image_Head>       
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList><HeaderListMentor/></HeaderList>        
            <Course><TableMentor students={students}></TableMentor></Course>

                
        </Wrapper>
    )
}


export default Danhsachsinhvien;