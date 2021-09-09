import React from 'react'
import * as Icon from '@material-ui/icons'
export const SidebarData=[
    {
        title:"Home",
        icon:<Icon.Home/> ,
        link:"/student"
    },
    {
        title:"Quản lý khóa học",
        icon:<Icon.LocalMall/> ,
        link:"/student/quanlykhoahoc"
    },
    {
        title:"My Profile",
        icon:<Icon.People/> ,
        link:"/student/profile"
    },
    {
        title:"Ý kiến thảo luận",
        icon:<Icon.Description/> ,
        link:"/doimatkhau"
    },
    {
        title:"Logout",
        icon:<Icon.ExitToApp/> ,
        link:"/"
    },
]