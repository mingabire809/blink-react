import styled from "styled-components";
import "@fontsource/montserrat"; 

export const Wrapper = styled.div`
min-height: 90vh;
font-family: "Montserrat";
`;

export const Content = styled.div`
padding: 20px;
`;

export const WordContent = styled.div`
text-align: center;
width: 50%;
margin-left: auto;
margin-right: auto;
h2{
    color: rgba(255,200,1,255);
    margin-top: 70px;
}
p{
    color: gray;
}
`;

export const ItemsContainer = styled.div`
display: flex;
justify-content: flex-start;
width: 90%;
margin-left: auto;
margin-right: auto;
margin-top: 20px;
flex-wrap: wrap;

`;

export const FormInput = styled.input`
 width: 30%;
    margin-right: 2%;
    height: 40px;
    font-size: 20px;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    background-color: transparent;
    border-bottom: 3px solid gray;
    color: gray;
    margin-top: 40px;

    :hover{
        border-bottom: 3px solid rgba(255,200,1,255);
    }
`;

export const Select = styled.select`
    width: 31%;
    margin-right: 2%;
    height: 47px;
    font-size: 20px;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    background-color: transparent;
    border-bottom: 3px solid gray;
    color: gray;
    margin-top: 40px;

    :hover{
        border-bottom: 3px solid rgba(255,200,1,255);
    }
`;

export const Button = styled.button`
    background-color: rgba(255,200,1,255);
    border-color: transparent;
    width: 190px;
    height: 45px;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    margin-left: 40%;
    margin-top: 40px;
    margin-bottom: 40px;
`;