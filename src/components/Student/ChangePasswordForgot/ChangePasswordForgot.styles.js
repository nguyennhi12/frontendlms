import styled from "styled-components";
import hinh from '../../../images/bgdoimatkhau.jpg';
export const ChangepassLayout =styled.div`
 

    h1 {
        position: absolute;
        width: 609px;
        height: 61.31px;

        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 34px;
        line-height: 51px;
        letter-spacing: 0.3px;
        margin-top: 8%;
        margin-left: 15%;

        color: black;
    }
    img{
      width: 100%;
      height: 100%;
    }
`;

export const Signup = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 500px;
  background-color:#055031;
  border-radius: 10px;
  box-shadow: 0 3px 25px hsla(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  font-family: Open Sans;


`;

export const Signup_connect = styled.div `
  width: 50%;
  padding: 30px 50px;
  font-family: Open Sans;

  
  
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

  

`;



export const Signup_classic = styled.div `
  width: 50%;
  padding: 30px 50px;
  font-family: Open Sans;
  h2 {
    font-size: 16px;
    font-weight: normal;
    margin-top: 23px;
    margin-bottom: 43px;
    text-shadow: 0 2px 3px hsla(0, 0, 0, 0.1);
  }  
  fieldset::after {  
    box-sizing: border-box;  
    font-family: FontAwesome;
    position: absolute;
    right: 15px;
    top: 17px;
    z-index: 2;
    width: 20px;
    color: hsla(0, 0, 0, .2);
    text-align: center;
  }
  
  fieldset.matkhaumoi::after {
    
  }
  
  fieldset.xacnhan::after {
    
  } 
  

  
 

`;

export const Form = styled.form `  
  
    fieldset {
    border: none;
    padding: 0;
    margin: 20px 0;
    position: relative;
    font-family: Open Sans;

    input {
      width: 400px;
      height: 10px;
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
  button{
    width: 90%;
    height: 40px;
    margin-left: 84%;
    outline: none!important;
    background: #eb7d51;
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 0 3px 0px hsla(86, 21%, 44%, 0.2);
    text-shadow: 0 2px 3px hsla(0, 0, 0, 0.2);
    border-radius: 5px;
    position: relative;
    font-size: 12px;
    color:#fff;
    
  }
  button:hover {
  background-color: #fff;
  color: #000;
  }

  

`;