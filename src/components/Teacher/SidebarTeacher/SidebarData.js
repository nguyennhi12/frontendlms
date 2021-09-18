import React from 'react'
import * as Icon from '@material-ui/icons'
export const SidebarData=[
    {
        title:"Quản lý khóa học",
        icon:<Icon.Home/> ,
        link:"/teacher"
    },
    {
        title:"Diễn đàn",
        icon:<Icon.Group/> ,
        link:"/diendan"
    },
    {
        title:"Thông tin cá nhân",
        icon:<Icon.Person/> ,
        link:"/teacher/profileteacher"
    },
    {
        title:"Đổi mật khẩu",
        icon:<Icon.Settings/> ,
        link:"/doimatkhau"
    },
    {
        title:"Đăng xuất",
        icon:<Icon.ExitToApp/> ,
        link:"/"
    },
]