import React from 'react';

import { Link } from 'react-router-dom';

import RMDBLogo from  '../../../images/tmdb_logo.svg';
import TMDBLogo from '../../../images/tmdb_logo.svg';


import { Wrapper,Content,LogoImg,DangNhap, DangKi,Sign } from './Header.styles';

const Header = ()=>(
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
            </Link>
            <Sign>
                <Link to= '/'>
                    <DangNhap >Sign in</DangNhap>
                </Link>
                <Link to ='/'>
                    <DangNhap >Sign up</DangNhap>
                </Link>
                
            </Sign>
            
        </Content>
    </Wrapper>
);


export default Header;