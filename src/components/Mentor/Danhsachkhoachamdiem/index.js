import React from 'react'

import { Wrapper, Image_Head, Course, Navigationbar,HeaderList,btn} from './Danhsachkhoachamdiem.styles';
import { Button } from 'react-bootstrap';
import { HookListChuDe } from '../../../hook/HookListChuDe';
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar';
import HeaderListSinhVien from './HeaderListSinhVien';
import TableSinhVien from './TableSinhVien'


const Danhsachkhoachamdiem = () =>{   
    const students= [{username:'Học máy'},
                            {username:'Nhập môn lập trình'},
                            {username:'Toán 1'},
                            {username:'Lý 1'},
                            {username:'OOP'},]  
    return(
        <Wrapper>  
            <Image_Head><Topbar/></Image_Head>       
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList><HeaderListSinhVien/></HeaderList>        
            <Course><TableSinhVien students={students}></TableSinhVien></Course>
            <Button style={{height:'40px',width:'100px',marginLeft:'60%',marginTop:'40%'}}>Cancel</Button>

                
        </Wrapper>
    )
}


export default Danhsachkhoachamdiem;