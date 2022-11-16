import styled from "styled-components";
import "@fontsource/montserrat"; 

export const Wrapper = styled.div`
 min-height: 90vh;
    font-family: "Montserrat";
`;

export const Content = styled.div`
padding: 50px;
overflow: hidden;
`;

export const BrandButton = styled.button`
    background-color: #C1F0FF;
    width: 200px;
    height: 65px;
    margin-top: 50px;
    border-color: transparent;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
`;

export const BrandContent = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: flex-start;
margin-left: 2%;
margin-top: 30px;

@media screen and (max-width: 1025px){
        width: 100%;
        margin-left: 8.5%;
    }


`;

export const Brand = styled.div`
    background-color: #C7E7FF;
    width: 200px;
    height: 200px;
    border-radius: 20px;
    
`;

export const YellowContent = styled.div`
    height: 30px;
    width: 200px;
    color: white;
    background-color: #FFC801;
    text-align: center;
    padding-top: 10px;
    font-weight: 700;
    font-size: 20px;
    position: absolute;
    margin-top: 159px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;