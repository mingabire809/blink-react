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

export const Details = styled.div`

background-color: white;
width: 70%;
height: 700px;
margin-left: auto;
margin-right: auto;
margin-top: 50px;
padding: 50px;

@media screen and (max-width: 515px){
     height: fit-content;
     width: 65%;
      
    }
`;

export const Green = styled.div`
    background-color: #00E05A;
    width: 250px;
    height: 250px;
    border-radius: 300px;
    margin-left: auto;
    margin-right: auto;
    
`;

export const Back = styled.button`
    border-radius: 40px;
    border-color: transparent;
    box-sizing: border-box;
    width: 180px;
    height: 60px;
    font-size: 18px;
    background-color: #A3A3A3;
    color: white;
    cursor: pointer;
    margin-left: 35%;
    margin-right: auto;
    margin-top: 30px;

    @media screen and (max-width: 515px){
     margin-left: 20%;
      
    }
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
    margin-left: 35%;
    margin-right: auto;
    margin-top: 30px;

    @media screen and (max-width: 515px){
     margin-left: 20%;
      
    }

`;