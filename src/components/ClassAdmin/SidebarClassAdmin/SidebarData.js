import React from 'react'
import * as Icon from '@material-ui/icons'
export const SidebarData=[
    {
        title:"Home",
        icon:<Icon.Home/> ,
        link:"/classadmin"
    },
    {
        title:"Quản lý khóa học",
        icon:<Icon.LocalMall/> ,
        link:"/classadmin/quanlykhoahoc"
    },
    {
        title:"My Profile",
        icon:<Icon.People/> ,
        link:"/thongtincanhan"
    },
    {
        title:"Ý kiến thảo luận",
        icon:<Icon.Description/> ,
        link:"/diendan"
    },
    {
        title:"Logout",
        icon:<Icon.ExitToApp/> ,
        link:"/"
    },
]