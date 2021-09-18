import React from 'react'
import * as Icon from '@material-ui/icons'
export const SidebarData=[
   
    {
        title:"Quản lý khóa học",
        icon:<Icon.LocalMall/> ,
        link:"/classadmin/quanlykhoahoc"
    },
    {
        title:"Thông tin cá nhân",
        icon:<Icon.Person/> ,
        link:"/classadmin/profile"
    },
    {
        title:"Ý kiến thảo luận",
        icon:<Icon.Description/> ,
        link:"/diendan"
    },
    {
        title:"Đăng xuất",
        icon:<Icon.ExitToApp/> ,
        link:"/"
    },
]