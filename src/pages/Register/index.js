import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import FacebookIcon from '@material-ui/icons/Facebook';
import { Modal, Button } from 'react-bootstrap';
import  Authentication  from '../../configs/Authentication';


//style
import { Signup, Signup_classic, Signup_connect, Form, Layout_Register} from './Register.styles'
import Navbar from '../../components/Guest/Navbar/Navbar';


const Register =()=>{ 

    const [DisplayName, sethoten]=useState('');
    const [Email, setemail]=useState('');
    const [PhoneNumber, setsdt]=useState('');
    const [UserName, setusename]=useState('');
    const [Password, setpassword]=useState('');
    const [nhaplaipw, setnhaplaipw]=useState('');
    const Address='Thủ Đức';
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Errors, setError]= useState([]);
    async function onClick(){   
        if(Password==nhaplaipw){
            let person = {Email,UserName, DisplayName, PhoneNumber, Address, Password}
            const result = await Authentication.Register(person);  
            
            
            console.warn(result.errors[0])
            if(result.statusCode==400){
                setError(result.errors)
                console.warn(Errors)
                console.log(result.statusCode)
                handleShow()   
            }
        }else{
                setError(['RePassword is invalid!!'])
                handleShow()   
        }
       
        
        
    }
   
   



    return(
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
                    <input type="text" placeholder="Họ và tên"  onChange={(e)=>sethoten(e.target.value)}/>
                    </fieldset>

                    <fieldset className="email">
                        <input type="email" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
                    </fieldset>

                    <fieldset className="sdt">
                        <input type="text" placeholder="Số điện thoại" onChange={(e)=>setsdt(e.target.value)}/>
                    </fieldset>

                    <fieldset className="username">
                        <input type="text" placeholder="Tên tài khoản"onChange={(e)=>setusename(e.target.value)} />
                    </fieldset>


                    <fieldset className="password">
                        <input type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
                    </fieldset>

                    <fieldset className="XNPS">
                       
                        <input type='password' placeholder="Xác nhận mật khẩu" onChange={(e)=>setnhaplaipw(e.target.value)}/>
                    </fieldset>
                    <Link >
                        <button type='submit' className='btn' 
                            onClick={onClick}
                        >SIGN UP</button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title style={{fontSize:'2.4vmax'}}>Error</Modal.Title>                            
                            </Modal.Header>
                            { Errors.map(error=>(
                                <Modal.Body style={{color:'red', fontSize:'1.5vmax', marginLeft:'5%'}}>{error}</Modal.Body> 
                            ))
                            }
                                                        
                        </Modal>                            
                      
                    </Link>
                    
                    </Form>
                </Signup_classic>
            </Signup>
        </Layout_Register>
    )
};

export default Register;

