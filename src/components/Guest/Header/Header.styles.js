import styled from "styled-components";

export const Wrapper = styled.div `
    background: black;
    padding: 0 20px;
    max-height: 50px;
`;

export const Content = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    max-height: 20px;
    padding: 20px 0;
    margin: 0 auto;
`;

export const LogoImg = styled.img `
    width: 200px;
    @media screen and (max-width: 500px){
        width: 150px;
    }
`;

export const Sign = styled.div `
    padding: 0 20px;

`;

export const DangNhap = styled.a`
    color: white;
    margin: 2px 30px;
    
`;

