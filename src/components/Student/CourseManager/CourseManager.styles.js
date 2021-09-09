import styled from "styled-components"



export const LayoutManager= styled.div ``;
export const NavigationBar=styled.div``;
export const Quanlykhoahoc = styled.div`
    position: absolute;
    width: 566px;
    height: 32px;
    left: 250px;
    top: 68px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 12px;
    /* or 34% */

    letter-spacing: 0.5px;

    color: #000000;
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 130px;

    position: absolute;
    width: 1250px;
    height: 103px;
    left: 250px;
    top: 164px;

    background: #576C91;
    border-radius: 10px;
    
`;
export const ListGroupItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 130px;

    position: absolute;
    width: 1250px;
    height: 103px;
    left: 250px;
    top: 164px;

    background: #576C91;
    border-radius: 10px;
    
    h1{
        position: static;
        width: 300px;
        height: 42px;
        left: 10px;
        top: 10px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 42px;
        letter-spacing: 0.3px;
        color: #000000;
        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 0px 10px;
    }
 
    .btn{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 130px;

        position: static;
        width: 30px;
        height: 40px;
        left: 1000px;
        top: 33px;
        background: #1294F2;
        border-radius: 10px;
        flex: none;
        order: 3;
        flex-grow: 0;
        margin: 0px 10px;
    }
    .fa{
        position: static;
        width: 67px;
        height: 21px;
        left: 43px;
        top: 8px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.3px;
        color: #FFFFFF;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 10px;
    }
`;
export const Button = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 130px;

    position: absolute;
    width: 1289px;
    height: 103px;
    left: 423px;
    top: 164px;

    background: #576C91;
    border-radius: 10px;
`;
export const Itemlist = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 130px;

    position: absolute;
    width: 1250px;
    height: 103px;
    left: 250px;
    top: 164px;

    background: #576C91;
    border-radius: 10px;
`;
