import styled from "styled-components"

export const LoginLayout =styled.div``;

export const Signup = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 800px;
  background: hsl(0, 0, 100);
  border-radius: 10px;
  box-shadow: 0 3px 25px hsla(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  font-family: Open Sans;


`;

export const Signup_connect = styled.div `
  width: 50%;
  padding: 50px 50px;
  background:linear-gradient(134deg, hsl(180, 96%, 65%), hsl(270, 95%, 45%));
  color: hsl(0, 0, 100);
  justify-content: center;
  font-family: Open Sans;

  
  h1 {

    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 40px;
    text-shadow: 0 2px 3px hsla(0, 0, 0, 0.1);
  }
  a{
    text-decoration: none;
  }
  
  .btn {
  display: block;
  background: hsl(86, 76%, 71%);
  color: rgba(0, 0, 0, 0.54);
  text-decoration: none;
  margin: 20px auto;
  padding: 15px 15px;
  border-radius: 5px;
  position: relative;
  
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
  padding-left: 64px;
  position: relative;
  z-index: 1;   
    
}

    .btn-google {
        background: rgba(249, 91, 41, 0.87);
        vertical-align: middle;
        color: hsl(300, 100%, 90%);;
  }

    .btn-facebook {
      background: #183BF2;
      vertical-align: middle;
      color: hsl(300, 100%, 90%);;
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
  
  fieldset.email::after {
    
  }
  
  fieldset.password::after {
    
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
      width: 90%;
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
  quenmk{
    font-weight: bold;
    font-size: 21px;
    line-height: 31px;
    color: #494242;
  }

  button{
    width: 100%;
    height: 48px;
    outline: none!important;
    background: linear-gradient(-5deg, hsl(60, 61%, 44%), hsl(86, 75%, 54%));
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 0 3px 0px hsla(86, 21%, 44%, 0.2);
    text-shadow: 0 2px 3px hsla(0, 0, 0, 0.2);
    border-radius: 5px;
    position: relative;
    
  }
  

  

`;
// export const LogoImg = styled.img `
//     width: 200px;
//     @media screen and (max-width: 500px){
//         width: 150px;
//     }
// `; 
// export const faceLogoImg = styled.img `
//     width: 200px;
//     @media screen and (max-width: 500px){
//         width: 80px;
//     }
// `;