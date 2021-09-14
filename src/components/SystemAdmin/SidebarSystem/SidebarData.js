import React from 'react'
import * as Icon from '@material-ui/icons'
export const SidebarData=[
    {
        title:"Trang chủ",
        icon:<Icon.Home/> ,
        link:"/systemadmin"
    },
    {
        title:"Quản lý tài khoản",
        icon:<Icon.Person/> ,
        link:"/systemadmin/quanlytaikhoan"
    },
    {
        title:"Diễn đàn",
        icon:<Icon.People/> ,
        link:"/diendan"
    },
    
    {
        title:"Đăng xuất",
        icon:<Icon.ExitToApp/> ,
        link:"/"
    },
]