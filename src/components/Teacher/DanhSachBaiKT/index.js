import React from 'react'

import { Wrapper, Image_Head, Course, Navigationbar,HeaderList} from './DanhSachBaiKT.styles';

import { HookListChuDe } from '../../../hook/HookListChuDe';
import Sidebar from '../SidebarTeacher/SidebarTeacher'
import Topbar from '../Topbar/Topbar';
import HeaderListBaiKT from './HeaderListBaiKT';
import TableBaiKT from './TableBaiKT'


const DanhSachBaiKT = () =>{   
    const tests= [{tenbaikt:'Kiểm tra lần 1 - chủ đề 1',
                            tgbd: '12h30PM 24.5.2021',
                            tgkt: '13h30PM 24.5.2021',
                            loaibaikt:'Trắc nghiệm'},
                            {tenbaikt:'Kiểm tra lần 2 - chủ đề 2',
                            tgbd: '12h30PM 12.6.2021',
                            tgkt: '13h30PM 12.6.2021',
                            loaibaikt:'Trắc nghiệm'},
                            {tenbaikt:'Kiểm tra lần 3 - chủ đề 3-4',
                            tgbd: '12h30PM 24.7.2021',
                            tgkt: '13h30PM 24.7.2021',
                            loaibaikt:'Trắc nghiệm'},
                            {tenbaikt:'Kiểm tra cuối kì - tất cả chủ đề',
                            tgbd: '12h30PM 24.8.2021',
                            tgkt: '14h30PM 24.8.2021',
                            loaibaikt:'Trắc nghiệm'}
                            ]  
    return(
        <Wrapper>  
            <Image_Head><Topbar/></Image_Head>       
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList><HeaderListBaiKT/></HeaderList>        
            <Course><TableBaiKT tests={tests}></TableBaiKT></Course>

                
        </Wrapper>
    )
}


export default DanhSachBaiKT;