import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChangepassLayout,Signup, Signup_classic, Signup_connect, Form} from './ChangePassword.styles'
import hinh from '../../../images/bgdoimatkhau.jpg';
import { Modal } from 'react-bootstrap';
import changePassword from '../../../configs/Authentication';
import Notification from "../../Notification/Notification";
import Navbar from "../../Guest/Navbar/Navbar"
const ChangePassword =()=>{
    const [Password,setPassword]=useState('');
    const [NewPassword,setNewPassword]=useState('');
    const [ConfirmNewPassword,setConfirmNewPassword]=useState('');
    const [err_text, seterr_text]= useState('');
    const [Errors, setError]= useState([]);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [notify,setNotify]= useState({isOpen:false, message:'',type:''})
    function GetURLParameter(sParam) {
      var sPageURL = window.location.search.substring(1);
      var sURLVariables = sPageURL.split('&');
      for (var i = 0; i < sURLVariables.length; i++) {
          var sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] == sParam) {
              return sParameterName[1];
          }
      }
    }
      const Change= async()=>
      {
        var password={Password,NewPassword,ConfirmNewPassword}
        console.log(password);
        const result = await changePassword.changePassword(password)
        try{
        if(result.statusCode===400)
        {
          setNotify({isOpen:true, message:'Mật khẩu chưa chính xác', type:'error'})  
        }
        if(result==="Change password success"){
          setNotify({isOpen:true, message:'Đổi mật khẩu thành công', type:'success'})  
        }
      }catch(error){

      }
      }
     
    return (
      <>
      <Navbar/>
      <ChangepassLayout>
         <h1>Đổi mật khẩu</h1> 
       
       
        <Signup>
        <Signup_classic>
            <Form>
            <fieldset className="username">
                <input type="password" placeholder="Nhập mật khẩu cũ" onChange={(e)=>setPassword(e.target.value)}/>
            </fieldset>
            <fieldset className="username">
                <input type="password" placeholder="Nhập mật khẩu mới" onChange={(e)=>setNewPassword(e.target.value)}/>
            </fieldset>
            <fieldset className="xacnhan">
                <input type="password" placeholder="Xác nhận mật khẩu mới"onChange={(e)=>setConfirmNewPassword(e.target.value)} />
            </fieldset>
            <Link><button onClick={Change} type='submit' className='btn'>Đổi mật khẩu</button> </Link>
                
            </Form>
        </Signup_classic>
    </Signup>
    <Notification notify ={notify} setNotify={setNotify}/> 
    </ChangepassLayout>   
    </>
    )
};

export default ChangePassword;