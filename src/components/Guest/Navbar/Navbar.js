import React, { useState } from 'react';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink
} from './NavbarElements';
import Logo from '../../../images/logo.svg'
const Navbar = () => {
 
  return (
    <>
      <Nav>
        <NavLink to='/' >
        <img src={Logo} alt='logo' style={{width:'250px',height:'200px',marginLeft:'-200px'}} />
      
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/'activeStyle >
            Trang chủ
          </NavLink>
          <NavLink to='/diendan' activeStyle>
            Diễn đàn
          </NavLink>
         
          {/* <button onClick={handleClick} activeStyle >
            Đăng nhập
          </button> */}

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