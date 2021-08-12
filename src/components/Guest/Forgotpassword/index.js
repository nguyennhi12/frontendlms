import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import { Link } from 'react-router-dom';

//style
import { ForgotpasswordLayout,Signup, Signup_classic, Signup_connect, Form} from './Forgotpassword.styles'
import Navbar from '../Navbar/Navbar';


const Forgotpassword =()=>(
   
    <ForgotpasswordLayout>
        <Navbar/>
        <Signup>
         <Signup_connect>
            <h1>Quên mật khẩu</h1>
            <div id='type'>
                <button>
                    <a><input type='radio' id='radio_1' name='type' value='1' /> Tài khoản student  <br/></a>
                    <c><input type='radio' id='radio_2' name='type' value='2' /> Các tài khoản khác   <br/></c>
                    
                    
                </button>
            </div>
            
        </Signup_connect>

        <Signup_classic>
            <Form>
            <fieldset className="username">
                <input type="text" placeholder="Email" />
            </fieldset>
           
            <Link to ='/dangnhap'><quenmk>Đăng nhập</quenmk></Link>
            <Link to ='/trangchuteacher'><button type='submit' className='btn'>XÁC NHẬN</button> </Link>
           
            
            
            </Form>
        </Signup_classic>
    </Signup>
    </ForgotpasswordLayout>
        
);

export default Forgotpassword;