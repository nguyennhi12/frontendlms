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
    right: 2.5%; 
    border-radius: 10px;
    width: 95%;
    max-height: 15vmax;
    object-fit: contain;
    padding-left: 7%;
    background-image: url("https://scr.vn/wp-content/uploads/2020/07/Background-c%C3%A2y-c%E1%BB%8F-m%C3%A0u-t%E1%BB%91i-scaled.jpg");
    object-fit:'cover';
    margin-top: 1%;
   
   
`;



export const Info = styled.div `
    max-width: 30%;
    max-height: 100%;
    width: 60vmax;
    height: auto;   
    background-color: white;       
    position: absolute;
    left: 2.5%;    
    
    margin-top: 17%;
    
    h1{
        font-size: 1.5vmax;
    }    
`;

export const ListInfo= styled.ul `
    list-style-type: none;
    font-size: 1.1vmax;

`;

export const Assiment = styled.div `
    max-width: 58%;
    max-height: 100%;
    width: 200vmax;
    height: auto;  
      
    position: absolute;
    right: 2.5%;    
   
    margin-top: 18%;   
    h1{
        font-size: 1.5vmax;
    }

    
`;






