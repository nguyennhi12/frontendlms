import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChangepassLayout,Signup, Signup_classic,Form} from './ChangePasswordForgot.styles'
import hinh from '../../../images/bgdoimatkhau.jpg';
import { Modal,Button } from 'react-bootstrap';
import ForgotPassword from '../../../configs/Authentication';
import Notification from "../../Notification/Notification";
const ChangePasswordForgot =()=>{
  const [NewPassword,setNewPassword]=useState('');
  const [ConfirmNewPassword,setConfirmNewPassword]=useState('');
  const [Errors, setError]= useState([]);
  const [err_text, seterr_text]= useState('');
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseRe = () => setshow_rePW(false);
  const [show_rePW, setshow_rePW]= useState(false);
  const handleShowRe = () => setshow_rePW(true);
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
    const Change= useCallback(async()=>
    {
      var email=GetURLParameter('email')
      var token=GetURLParameter('token')
      var Password={email,token,NewPassword,ConfirmNewPassword}
      console.log(Password);
      const result = await ForgotPassword.ForgotPassword(Password)
      try{
      if(result.statusCode===400)
      {
        setError(result.errors)
        seterr_text(result.message)

        console.log(Errors)        
        console.log(err_text);
        console.log(result.statusCode)
        setNotify({isOpen:true, message:'Mật khẩu chưa chính xác', type:'error'})
      }
      if(result.success===true)
      {
        setNotify({isOpen:true, message:'Đổi mật khẩu thành công', type:'success'})  
      }

    }catch(error){

    }
      
    }
    )
    return(
      <ChangepassLayout>
           <h1>Đổi mật khẩu</h1> 
          <img src={hinh}/>
         
          <Signup>
          <Signup_classic>
              <Form>
              <fieldset className="username">
                  <input type="text" placeholder="Nhập mật khẩu mới" onChange={(e)=>setNewPassword(e.target.value)} />
              </fieldset>
              <fieldset className="xacnhan">
                  <input type="text" placeholder="Xác nhận mật khẩu mới" onChange={(e)=>setConfirmNewPassword(e.target.value)} />
              </fieldset>
              <Link><button onClick={Change} type='submit' className='btn'>Đổi mật khẩu</button>       
              </Link>
              
              </Form>
          </Signup_classic>
      </Signup>
      <Notification notify ={notify} setNotify={setNotify}/> 
      </ChangepassLayout>   
    )

}  


export default ChangePasswordForgot;