import styled from "styled-components";
import hinh from '../../../images/bgdoimatkhau.jpg';

export const WrapperAdd =styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const ThemKHLayout =styled.div`
    
    .close{
      content: 'x';
      cursor: pointer;
      position: fixed;
      right: calc(15% - 100px);
      top: calc(100vh - 85vh - 100px);
      background: #ededed;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      line-height: 20px;
      text-align: center;
      border: 1px solid #999;
      font-size: 20px;
    }
    h4 {
        position: absolute;
        width: 300px;
        height: 20px;
        margin-left: 35%;
        margin-top: 5%;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 24px;


        letter-spacing: -0.015em;

        color: #fff;
    }
    
 
`;

export const Signup = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 800px;
  background:linear-gradient(134deg,hsl(155,88%,16%) , hsl(46,28%,91%));
 
  // background-color:#f1b884;
  border-radius: 10px;
  box-shadow: 0 3px 25px hsla(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  font-family: Open Sans;
  width:800px;
  height: 500px;


`;

export const Signup_connect = styled.div `
  width: 50%;
  padding: 30px 50px;
  font-family: Open Sans;
  margin-top: 7.5%;

  fieldset.wrapdate{
  
  }
  
  fieldset::after {  
    box-sizing: border-box;  
    font-family: FontAwesome;
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 2;
    width: 20px;
    color: hsla(0, 0, 0, .2);
    text-align: center;
  }
  
  fieldset.matkhaucu::after {
    
  }
  
  fieldset.macode::after {
    
  } 
  button{
    width: 80px;
    height: 40px;
    margin-left: 65%;
    outline: none!important;
    background: #DD1D1D;
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 0 3px 0px hsla(86, 21%, 44%, 0.2);
    text-shadow: 0 2px 3px hsla(0, 0, 0, 0.2);
    border-radius: 5px;
    position: relative;
    font-size: 12px;
    margin-top: 10%;
    color:#fff;
    }

  

`;



export const Signup_classic = styled.div `
  width: 50%;
  padding: 30px 50px;
 
  font-family: Open Sans;
  margin-top: 10%;
  h2 {
    font-size: 16px;
    font-weight: normal;
    margin-top: 23px;
    margin-bottom: 43px;
    text-shadow: 0 2px 3px hsla(0, 0, 0, 0.1);
  }
  
  fieldset::after {  
  
   
  }
  
  fieldset.matkhaumoi::after {
    
  }
  
  fieldset.xacnhan {
    margin-top:11px;
  } 
  button{
    width: 80px;
    height: 40px;
    margin-left: 10%;
    outline: none!important;
    background: #2BA621;
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 0 3px 0px hsla(86, 21%, 44%, 0.2);
    text-shadow: 0 2px 3px hsla(0, 0, 0, 0.2);
    border-radius: 5px;
    position: relative;
    font-size: 12px;
    margin-top: 3%;
    color:#fff;
    }
  

  
 

`;

export const Form = styled.form `  
    .select-css {
      width: 10px;
      height:10px;
    }
    fieldset {
    border: none;
    padding: -5px;
    margin: 20px 0;
    position: relative;
    font-family: Open Sans;

    input {
      width: 90%;
      height: 10%;
      color: hsl(0, 0, 20);
      padding: 15px 40px 15px 15px;
      border-radius: 5px;
      font-size: 14px;
      outline: none!important;
      border: 1px solid hsla(0, 0, 0, 0.3);
      box-shadow: inset 0 1px 4px hsla(0, 0, 0, 0.2);
      vertical-align: top;
      
    }
 
  }
`;
