import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import { Link } from 'react-router-dom';

//style
import { LoginLayout,Signup, Signup_classic, Signup_connect, Form} from './Login.styles'
import Navbar from '../Navbar/Navbar';



const Login =()=>(
    <LoginLayout>
        <Navbar/>
        <Signup>
         <Signup_connect>
            <h1>Đăng nhập</h1> 

             <a href="#" className='btn btn-social btn-google'> 
                
                <i className='fa fa-google'>Sign in with Google</i> </a>
            <a href="#" className='btn btn-social btn-facebook' >
                
                <i className='fa fa-facebook'></i> Sign in with Facebook</a> 
             <a href="#" className='DangNhap'>Do you have account? Sign in?</a> 
        </Signup_connect>

        <Signup_classic>
            <Form>
            <fieldset className="username">
                <input type="text" placeholder="Tên tài khoản" />
            </fieldset>


            <fieldset className="password">
                <input type="password" placeholder="Mật khẩu" />
            </fieldset>
            <Link to ='/quenmatkhau'><quenmk>Bạn quên mật khẩu?</quenmk></Link>
            <Link to ='/trangchuteacher'><button type='submit' className='btn'>ĐĂNG NHẬP</button> </Link>
           
            
            
            </Form>
        </Signup_classic>
    </Signup>
    </LoginLayout>
        
);

export default Login;