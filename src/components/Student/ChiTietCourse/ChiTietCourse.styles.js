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
    background-color: #055031; 

`;
export const Image_Head = styled.div `   
    position: absolute;
    right: 0%;    
    left: 20%;       
    border-radius: 10px;
    width: 78vmax;
    max-height: 4vmax;
    object-fit: contain;
    
   
   
`;



export const Course = styled.div `
    max-width: 49%;
    max-height: 100%;
    width: 78vmax;
    height: auto;         
    position: absolute;
    right: 0%;    
    left: 20%;
    margin-top: 14%;    
    h1{
        font-size: 1.5vmax;
    }

    
`;

export const ListInfo= styled.ul `
    list-style-type: none;
    font-size: 1.1vmax;

`;

export const Assiment = styled.div `
    max-width: 27%;
    max-height: 100%;
    width: 50vmax;
    height: auto; 
    position: absolute;
    right: 2%;    
   
    margin-top: 14%;
    
    h1{
        font-size: 1.5vmax;
    }

    
`;






