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
    max-height: 4vmax;
    object-fit: contain;
    
   
   
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
    width: 58vmax;
    height: auto;   
    background-color: white;       
    position: absolute;
    right: 2.5%;    
   
    margin-top: 18%;
    box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
    h1{
        font-size: 1.5vmax;
    }

    
`;






