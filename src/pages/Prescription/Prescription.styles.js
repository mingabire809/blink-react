import styled from "styled-components";
import "@fontsource/montserrat"; 

export const Wrapper = styled.div`
    min-height: 90vh;
    font-family: "Montserrat";
`;
export const Content = styled.div`
    padding: 50px;
    overflow: hidden;

    @media screen and (max-width: 515px) {
        padding: 10px;  
    }
`;

export const Upload = styled.button`
    width: 130px;
    height: 60px;
    border-color: transparent;
    background-color: #FFC903;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 20px;
`;

export const Background = styled.div`
    border-radius: 20px;
    width: 100%;
    background-color: #FED7FF;
    height: 350px;
    margin-top: 20px;

    @media screen and (max-width: 515px) {
        height: 250px;
    }
`;