import styled from "styled-components";

import "@fontsource/montserrat"; 

export const Wrapper = styled.div`
    min-height: 90vh;
    font-family: "Montserrat";
    background-color: #EBEBEB;
    display: flex;

    overflow: hidden;

    @media screen and (max-width: 515px){
     display: contents;
     overflow: hidden;
    }
`;

export const Content = styled.div`
padding: 50px;
overflow: hidden;
width: 30%;
@media screen and (max-width: 515px){
    padding: 2px;
    width: 100%;
    margin-bottom: 30px;
}

@media only screen and (max-width: 1023px) and (min-width: 516px){
      
      padding: 10px;
}

@media only screen and (max-width: 1030px) and (min-width: 1024px){
      
   padding: 10px;
}
`;

export const Details = styled.div`
       @media screen and (max-width: 515px){
   
   overflow: hidden;
   width: 90%;
   margin-left: auto;
   margin-right: auto;
}
`;

export const Map = styled.img`
width: 70%;
@media screen and (max-width: 515px){
    
    width: 100%;
}
`;

export const Input = styled.input`
    width: 60%;
    background-color: transparent;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    margin-top: -20px;
    height: 30px;
    font-size: 20px;
`;

export const Change = styled.button`
width: 40%;
height: 40px;
border-color: transparent;
border-radius: 5px;
font-weight: 600;
color: white;
background-color: #8D8D8D;
margin-right: 10%;
cursor: pointer;
`;

export const Confirm = styled.button`
background-color: red;
width: 60%;
height: 60px;
font-size: 19px;
color: white;
border-color: transparent;
font-weight: 600;
border-radius: 10px;
margin-left: auto;
margin-right: auto;
margin-top: 30px;
cursor: pointer;
`;