import styled from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    .name{
        padding: 10px;
        padding-left: 10%;
        padding-top: 6%;
        font-size: 2vw;
    }
    
    
    

`;

export const Navigationbar = styled.div `      
    height: 100vh;
    padding-top: 3%;    
    list-style-type: none;
    text-align: left;    
    width: 15%;
    background-color: #333333; 

`;
export const Image_Head = styled.div `   
    position: absolute;
    right: 0%;    
    left: 20%;
       
    border-radius: 10px;
    width: 78vmax;
    height: auto;
    
   
   
`;

export const Review = styled.div `   
    max-width: 30%;
    max-height: 40%;
    width: 80vmax;
    height: auto;   
    background-color: white;   
    margin-top: 7%;
   
    position: absolute;
    right: 3px;
    box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
    z-index: 1;
    h2{
        font-size: 1.5vmax;
        margin-left: 5%;
    }

    button{
        width: 80%;
        height: auto;
        outline: none!important;
        background: linear-gradient(-5deg, hsl(60, 61%, 44%), hsl(86, 75%, 54%));
        border: none;
        text-transform: uppercase;
        font-weight: bold;
        box-shadow: 0 3px 0px hsla(86, 21%, 44%, 0.2);
        text-shadow: 0 2px 3px hsla(0, 0, 0, 0.2);
        border-radius: 5px;
        position: relative;
        margin-left: 12%;
        margin-bottom: 5%;
        padding-bottom: 2%;
        padding-top: 2%;
        font-size: 1vmax;
    }
    h3{
        margin: 5%;
        font-size: 1.2vmax;
    }
    .table{
        margin-left: 5%;
    }

    
  
    

`;

export const Table = styled.table `
    text-align: left;
    th{
        padding: 10px;
    }
    font-size: 1vmax;

`;

export const Course = styled.div `
    max-width: 49%;
    max-height: 100%;
    width: 78vmax;
    height: auto;   
    background-color: white;       
    position: absolute;
    right: 0%;    
    left: 20%;
    margin-top: 23%;
    box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
    h1{
        font-size: 1.5vmax;
    }

    
`;

export const ListInfo= styled.ul `
    list-style-type: none;
    font-size: 1.1vmax;

`;

export const Comment = styled.div `
    max-width: 30%;
    max-height: 40%;
    width: 80vmax;
    height: auto;  
    background-color: white;       
    position: absolute;
    right: 3px; 
    box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
    margin-top: 30%;
    margin-left: 3%;
    
    


`;






