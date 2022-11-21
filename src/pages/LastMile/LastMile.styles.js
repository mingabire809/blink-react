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

export const DetailsContent = styled.div`
display: flex;
justify-content: space-between;
width: 20%;
align-items: center;
margin-top: 10px;

h3{
    color: gray;
}
`;

export const DetailsInput = styled.input`
    width: 80px;
    height: 40px;
    border-radius: 10px;
    background-color: #D9D9D9;
    font-size: 20px;
    border-color: transparent;
`;

export const Button = styled.button`
    width: 170px;
    height: 70px;
    border-radius: 20px;
    background-color: #FFB5FC;
    border-color: transparent;
    font-size: 22px;
    font-weight: 700;
    cursor: pointer;
`;

