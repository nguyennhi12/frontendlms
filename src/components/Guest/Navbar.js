import React from 'react';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink
} from './NavbarElements';
import Logo from '../../images/logo.svg'
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/' >
        <img src={Logo} alt='logo' style={{width:'300px',height:'350px',marginLeft:'-300px'}} />
      
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/'activeStyle >
            Trang chủ
          </NavLink>
          <NavLink to='/diendan' activeStyle>
            Diễn đàn
          </NavLink>
         
          <NavLink to='/dangnhap' activeStyle>
            Đăng nhập
          </NavLink>
          {/* Second Nav */}
          <NavBtnLink to='/dangky'>Đăng ký</NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;