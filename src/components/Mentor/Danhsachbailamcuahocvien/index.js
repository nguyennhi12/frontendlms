import React from 'react'

import { Wrapper, Course, Navigationbar,HeaderList} from './Danhsachbailamcuahocvien.styles';
import Sidebar from '../Sidebar/Sidebar'
import HeaderListSinhVien from './HeaderListHocVien';
import TableKH from './TableSV'


const Danhsachbailamcuahocvien = () =>{   
    const students= [

                        {
                        name: "Bài 1",
                      },
                        {
                        name: "Bài 2",
                        },
                        {
                        name: "Bài 3",
                        },

                    ]  
    return(
        <Wrapper>  
                 
            <Navigationbar><Sidebar></Sidebar> </Navigationbar>  
            <HeaderList><HeaderListSinhVien/></HeaderList>        
            <Course ><TableKH students={students}></TableKH></Course>

                
        </Wrapper>
    )
}


export default Danhsachbailamcuahocvien;