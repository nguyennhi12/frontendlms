import styled from "styled-components"



export const Layout_Register= styled.div `
 
`;

export const Signup = styled.div `
  position: absolute;
  border :1px solid #000;
  margin-top:20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 1000px;
  height:600px;
  background: hsl(0, 0, 100);
  border-radius: 10px;
  box-shadow: 0 3px 25px hsla(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;

  


`;

export const Signup_connect = styled.div `
  width: 45%;
 
  padding: 30px 50px;
  background-color:#055031;
  color: hsl(0, 0, 100);
  justify-content: center;
  font-family: Open Sans;
  a{
    
    text-decoration: none;
  }
  
  h1 {

    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 150px;
    text-shadow: 0 2px 3px hsla(0, 0, 0, 0.1);
  }

  .btn {
  display: block;
  background: hsl(86, 76%, 71%);
  color: hsl(0, 0, 100);
  
  margin: 10px 0 0 0 ;
  padding: 15px 15px;
  border-radius: 5px;
  position: relative;
  margin-bottom:10px;
 
  
  
  &::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all .2s ease-in-out;
    box-shadow: inset 0 3px 0 hsla(0, 0, 0, 0), 0 3px 3px hsla(0, 0, 0, .2);
    border-radius: 5px;
  
  }
  
  &:hover::after {
    box-sizing: border-box;
  
    background: hsla(0, 0, 0, 0.1);
    box-shadow: inset 0 3px 0 hsla(0, 0, 0, 0.2);
  }}

  .btn-social {
  padding-left: 14px;
  position: relative;
  z-index: 1;   
     
    
}
  .fa{
    margin-left: 2%;
  }
  

  .btn-facebook {
    background-color: hsl(240, 50%, 41%);
 
    color: hsl(300, 100%, 90%);;
    
    
  }
  .btn-google {
  background-color: hsl(7, 71%, 55%); 
  color: hsl(300, 100%, 90%);

  }
  .DangNhap{
    color: hsl(330, 100%, 90%);
  }
  

`;



export const Signup_classic = styled.div `
  width: 60%;
  margin-top:-20px;
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
    width: 10px;
    color: hsla(0, 0, 0, .2);
    text-align: center;
  }
  
  fieldset.email::after {
    
  }
  
  fieldset.password::after {
    
  } 
  

  
 

`;

export const Form = styled.form `  
  
    fieldset {
    border: none;
    padding: 0;
    margin: 20px 30px;
    position: relative;
    font-family: Open Sans;

    input {
      width: 100%;
      height: 50px;
      color: hsl(0, 0, 20);
      padding: 15px 40px 15px 15px;
      border-radius: 5px;
      font-size: 14px;
      outline: none !important;
      border: 1px solid hsla(0, 0, 0, 0.3);
      box-shadow: inset 0 1px 4px hsla(0, 0, 0, 0.2);
      vertical-align: top;
      
    }
  }

  button{
    margin-left:30px;
    width: 88%;
    height: 48px;
    outline: none!important;
    background-color: #055031;
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 0 3px 0px hsla(86, 21%, 44%, 0.2);
    text-shadow: 0 2px 3px hsla(0, 0, 0, 0.2);
    border-radius: 5px;
    position: relative;
    color:white;
    
  }
  

  

`;






