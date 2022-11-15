import styled from "styled-components";
import "@fontsource/montserrat"; 

export const Wrapper = styled.div`
width: 100%;
height: 390px;
background-color: rgba(255,200,1,255);
font-family: "Montserrat";
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
`;

export const Content2 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 77%;
margin-left: auto;
padding-right: 20px;
padding-left: 20px;
`;

export const Input = styled.input`
width: 250px;
height: 36px;
background: #ffffff;
font-size: 22px;
border-color: transparent;

`;

export const FooterButton = styled.button`
    width: 50px;
    border-color: transparent;
    background-color: black;
`;

export const Arrow = styled.img`
    width: 35px;
    transform: rotate(180deg)
`;

export const FooterButton2 = styled.button`
    width: 50px;
    height: 50px;
    border-color: transparent;
    background-color: black;
    border-color: transparent;
    cursor: pointer;
`;

export const Arrow2 = styled.img`
    width: 35px;
    transform: rotate(90deg);
    
`;

export const Wrapper2 = styled.div`
width: 100%;
font-family: "Montserrat";
background-color: rgba(223,176,0,225);
    height: 50px;
    display: flex;
    justify-content: space-between;
 
`;