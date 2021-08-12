import styled from "styled-components";

export const Avatar = styled.img   `
    
    background: #456BD9;   
    border-radius: 50%;
    box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);   
    margin: 0 auto;
    outline: none;
    
`;


export const RightNav = styled.div `
    
    background: white;    
    height: 100vh;
    padding-top: 3%;    
    list-style-type: none;
    text-align: left;    
    width: 15%;
    background-color: #333333; 
    
    .name{
        margin-top: 0px;
        margin-left: 10%;
        font-size: 1.5vmax;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: white;
    }
    
    .avatar{
        display: block;
        margin: 2% auto;             
        position: relative;
        height : 8vmax ;
        width: 8vmax;
       
        
        
    }
    
    .item{
        text-decoration: none;
        list-style-type: none !important;        
        font-size: 1vmax;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        color: white;
        
        
        
    }
    .icon{
        width: 2.5vmax;
        height: 2.5vmax;
    }
    
    button{
        margin-top: 5%;
        margin-bottom: 20%;
        width: 9vmax;
        height: 35px;
        border-radius: 10px;
        background: linear-gradient(134deg, hsl(180, 96%, 65%), hsl(270, 95%, 45%));
        box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
        :focus{outline:none};
        padding-right: 10%;
        font-size: 2 vmax;

    }

    li {
        width: auto;
        height: 40px;
        line-height: 40px;        
        
        display: block;
        :hover{
            background-color: #444444;
            font-weight: bold;
            color: white;
        }
        
        
    }
    

`;

