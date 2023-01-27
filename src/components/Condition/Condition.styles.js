import styled from "styled-components";
import "@fontsource/montserrat"; 

export const Wrapper = styled.div`
  position: fixed;
  z-index: 9999999;
  background-color: rgba(0,0,0,0.4);
  width: 100vw;
  height: 100vh;

`;

export const Content = styled.div`
  width: 40vw;
    height: 80vh;
    background-color: white;
    border-color: #152542;
    border-radius: 3px;
    margin-top: 20px;
    margin-left: 32vw;
    
    padding: 20px;
    border-width: 3px;
    font-family: "Montserrat";
    overflow-y: scroll;
    
    scroll-behavior: smooth;
    ::-webkit-scrollbar{
        display: none;
    }
    

    @media screen and (max-width: 414px){
        width: 80%;
        margin-left: 5%;
    }
    
  

`;

export const CloseContainer = styled.div`

`;

export const Close = styled.div`
width: 60px;
height: 60px;
border-radius: 100px;
background-color: #ACACAC;
margin-left: 85%;
`;

export const DetailsContent = styled.div`
margin-top: 30px;
font-family: 'Times New Roman', Times, serif;
font-style: italic;
font-size: 16px;
`;

export const ConditionContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`;