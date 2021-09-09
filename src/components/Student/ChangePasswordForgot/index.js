import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChangepassLayout,Signup, Signup_classic,Form} from './ChangePasswordForgot.styles'
import hinh from '../../../images/bgdoimatkhau.jpg';
import { Modal } from 'react-bootstrap';

const ChangePasswordForgot =()=>{
  const [NewPassword,setNewPassword]=useState('');
  const [ConfirmNewPassword,setConfirmNewPassword]=useState('');
  const [Errors, setError]= useState([]);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseRe = () => setshow_rePW(false);
  const [show_rePW, setshow_rePW]= useState(false);
  const handleShowRe = () => setshow_rePW(true);
    async function Change()
    {
      let item={NewPassword,ConfirmNewPassword}
      console.warn(item)

      let result = await fetch("https://uy72xy9qjk.execute-api.ap-southeast-1.amazonaws.com/api/Authentication/resetpass?token&email",{
          method: 'POST',
          body:JSON.stringify(item),
          headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
          }
      })
      result= await result.json()
      console.warn("result",result)
      if(NewPassword!=ConfirmNewPassword){
        setError(result.errors)
        console.warn(Errors)
        console.log(result.statusCode)
        handleShow()   
      }
      if(result.statusCode==400){
        setError(result.errors)
        console.warn(Errors)
        console.log(result.statusCode)
        handleShow()   
      }
      
    }
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
      </ChangepassLayout>   
    )

}  


export default ChangePasswordForgot;