import styled from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    .name{
        padding: 20px;
        padding-left: 10%;
        padding-top: 6%;
        font-size: 2vw;
    }
    
    
    

`;

export const Navigationbar = styled.div `      
    height: 100vh;
     
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
    max-height: 4vmax;
    object-fit: contain;
    
   
   
`;
export const Formbkt = styled.div`
    width: 800px;
    height: 500px;
    margin-top: 5%;
    margin-left: 10%;
    
`;





export const HeaderList = styled.div `
    max-width:90%;
    max-height: 100%;
    width: 83vmax;
    height: auto;   
    background-color: white;       
    position: absolute;
    right: 0%;    
    left: 16%;
    margin-top: 5%;
    
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
    background-color: white;       
    position: absolute;
    right: 2%;    
   
    margin-top: 17%;
    box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
    h1{
        font-size: 1.5vmax;
    }

    
`;


