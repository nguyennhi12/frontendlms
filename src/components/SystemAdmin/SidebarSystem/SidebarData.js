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
        icon:<Icon.Group/> ,
        link:"/systemadmin/quanlytaikhoan"
    },
    {
        title:"Cập nhật mật khẩu",
        icon:<Icon.Settings/> ,
        link:"/systemadmin/capnhatmatkhau"
    },
    {
        title:"Đăng xuất",
        icon:<Icon.ExitToApp/> ,
        link:"/"
    },
]