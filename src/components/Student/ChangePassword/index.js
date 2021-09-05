import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ChangepassLayout,Signup, Signup_classic, Signup_connect, Form} from './ChangePassword.styles'
import hinh from '../../../images/bgdoimatkhau.jpg';


const ChangePassword =()=>(
    <ChangepassLayout>
         <h1>Đổi mật khẩu</h1> 
        <img src={hinh}/>
       
        <Signup>
         <Signup_connect>
             <Form>
             <fieldset className="username">
                <input type="text" placeholder="Nhập mật khẩu cũ" />
            </fieldset>
            <button type='check' className='btn'>Check</button> 
            <fieldset className="username">
                <input type="text" placeholder="Nhập mã code" />
            </fieldset>
            <button type='check' className='btn'>Check mã code</button> 
             </Form>
        </Signup_connect>
        <Signup_classic>
            <Form>
            <fieldset className="username">
                <input type="text" placeholder="Nhập mật khẩu mới" />
            </fieldset>
            <fieldset className="xacnhan">
                <input type="text" placeholder="Xác nhận mật khẩu mới" />
            </fieldset>
            <Link to =''><button type='submit' className='btn'>Đổi mật khẩu</button> </Link>
            </Form>
        </Signup_classic>
    </Signup>
    </ChangepassLayout>   
);

export default ChangePassword;