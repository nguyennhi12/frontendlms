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
export const HeaderList = styled.div `
    max-width:78%;
    max-height: 100%;
    width: 83vmax;
    height: auto;   
    background-color: rgb(196,196,196,0.24);       
    position: absolute;
    right: 0%;    
    left: 20%;
    margin-top: 13%;
    color: white;
    h1{
        font-size: 1.5vmax;
    }

    
`;


export const Course = styled.div `
    max-width: 100%;
    max-height: 100%;
    width: 78vmax;
    height: auto;   
    background-color: white;       
    position: absolute;
    right: 0%;    
    left: 20%;
    margin-top: 15%;    
    h1{
        font-size: 1.5vmax;
    }

    
`;

export const ListInfo= styled.ul `
    list-style-type: none;
    font-size: 1.1vmax;

`;

export const Assiment = styled.div `
    max-width: 13%;
    max-height: 100%;
    width: 50vmax;
    height: auto;   
    background-color: white;       
    position: absolute;
    right: 2%;   
    margin-top: 17%;
   
    h1{
        font-size: 1.5vmax;
    }

    
`;






