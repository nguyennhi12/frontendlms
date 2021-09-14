import React from 'react'
import * as Icon from '@material-ui/icons'
export const SidebarData=[
    {
        title:"Trang chủ",
        icon:<Icon.Home/> ,
        link:"/student"
    },
    {
        title:"Quản lý khóa học",
        icon:<Icon.LocalMall/> ,
        link:"/student/quanlykhoahoc"
    },
    {
        title:"Thông tin cá nhân",
        icon:<Icon.Person/> ,
        link:"/student/profile"
    },
    {
        title:"Diễn đàn",
        icon:<Icon.People/> ,
        link:"/diendan"
    },
    {
        title:"Đổi mật khẩu",
        icon:<Icon.Settings/> ,
        link:"/doimatkhau"
    },
    {
        title:"Đăng xuất",
        icon:<Icon.ExitToApp/> ,
        link:"/",
        
    },
]