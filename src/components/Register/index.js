import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import FacebookIcon from '@material-ui/icons/Facebook';


//style
import { Signup, Signup_classic, Signup_connect, Form, Layout_Register} from './Register.styles'
import Navbar from '../Guest/Navbar/Navbar';


const Register =()=>(   

     <Layout_Register>
        <Navbar/>
         <Signup>        
            <Signup_connect>
                <h1>Create your account</h1>
                
                <Link to='/'>
                    
                    <a className='btn btn-social btn-facebook' ><FacebookIcon></FacebookIcon><i className='fa fa-facebook'></i> Sign in with Facebook</a>
                </Link>
                <Link to='/'>
                    
                    <p className='btn btn-social btn-google'><FcGoogle /><i className='fa fa-google'>Sign in with Google</i> </p>
                </Link>

                <Link to='/'>
                    <p className='DangNhap'>Do you have account? Sign in?</p>
                </Link>
                
                
            </Signup_connect>

            <Signup_classic>
                <h2>Or use the classical way</h2>
                <Form>
                <fieldset className="hoten">
                <input type="text" placeholder="Họ và tên" />
                </fieldset>

                <fieldset className="email">
                    <input type="email" placeholder="Email" />
                </fieldset>

                <fieldset className="sdt">
                    <input type="text" placeholder="Số điện thoại" />
                </fieldset>

                <fieldset className="username">
                    <input type="text" placeholder="Tên tài khoản" />
                </fieldset>


                <fieldset className="password">
                    <input type="password" placeholder="password" />
                </fieldset>

                <fieldset className="XNPS">
                    <input type='password' placeholder="Xác nhận mật khẩu" />
                </fieldset>
                <Link to='/a'>
                    <button type='submit' className='btn'>SIGN UP</button>
                </Link>
                
                </Form>
            </Signup_classic>
        </Signup>
     </Layout_Register>
    

  
    

);

export default Register;

