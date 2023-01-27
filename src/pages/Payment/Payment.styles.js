import styled from "styled-components";

import "@fontsource/montserrat"; 

export const Wrapper = styled.div`
    min-height: 90vh;
    font-family: "Montserrat";
    background-color: #EBEBEB;
`;

export const Content = styled.div`
padding: 50px;
overflow: hidden;
@media screen and (max-width: 515px){
    padding: 2px;
}
`;

export const ArrowContainer = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 515px){
      display: none;
    }
`;

export const DetailsContent = styled.div`
display: flex;
width: 100%;
align-items: baseline;
justify-content: space-between;
`;

export const Details1 = styled.div`
width: 67%;

`;

export const Details2 = styled.div`
width: 27%;
`;

export const Data = styled.div`
background-color: white;
width: 100%;

padding: 10px;

`;

export const RadioContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20%;
`;

export const Input = styled.input`
    border-radius: 40px;
    border: 1px solid #000000;
    width: 400px;
    height: 50px;
    font-size: 18px;
`;

export const NewCard = styled.button`
    background-color: #F2F2F2;
    width: 130px;
    height: 70px;
    border-radius: 10px;
    margin-left: 44%;
    
    border-color: transparent;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Back = styled.button`
    border-radius: 40px;
    border: 1px solid #000000;
    box-sizing: border-box;
    width: 180px;
    height: 60px;
    font-size: 18px;
    color: #7E7E7E;
    cursor: pointer;
`;

export const Pay = styled.button`
    border-radius: 40px;
    background-color: red;
    border-color: transparent;
    width: 180px;
    height: 60px;
    font-size: 18px;
    color: white;
    cursor: pointer;

`;

export const Summary = styled.div`
    width: 100%;
background-color: white;
`;

