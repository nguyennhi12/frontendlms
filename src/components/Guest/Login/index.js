import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import {SiFacebook} from 'react-icons/si'
//style
import { LoginLayout,Signup, Signup_classic, Signup_connect, Form} from './Login.styles'
import Navbar from '../Navbar/Navbar';



const Login =()=>(
    <LoginLayout >
        <Navbar/>
        <Signup style={{backgroundColor:'#000'}}>
         <Signup_connect>
            <h1>Đăng nhập</h1> 

             <a href="#" className='btn btn-social btn-google' > 
                <FcGoogle style={{marginRight:'10px',height:'40px', width:'40px',marginLeft:'-60px'}}/>
                Sign in with Google </a>
            <a href="#" className='btn btn-social btn-facebook' >
                <SiFacebook style={{marginRight:'10px',height:'30px', width:'30px',marginLeft:'-50px'}}/>
                <i className='fa fa-facebook'></i> Sign in with Facebook</a> 

                <Link to='/dangky'></Link>
             <a href="#" className='DangNhap' style={{color:'#fff'}}>Do you have account ? Sign in?</a> 
        </Signup_connect>

        <Signup_classic>
            <Form>
            <fieldset className="username">
                <input type="text" placeholder="Tên tài khoản" />
            </fieldset>


            <fieldset className="password">
                <input type="password" placeholder="Mật khẩu" />
            </fieldset>
            <Link to ='/quenmatkhau'>Bạn quên mật khẩu ?</Link>
            <Link to ='/trangchuteacher' ><button type='submit' className='btn' style={{marginTop:'50px'}}>ĐĂNG NHẬP</button> </Link>
           
            
            
            </Form>
        </Signup_classic>
    </Signup>
    </LoginLayout>
        
);

export default Login;