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
height: 100px;
display: flex;

`;

export const ProductContent = styled.div`
width: 100%;
background-color: white;
margin-top: 40px;
`;

export const Product = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
    margin-bottom: 20px;
    
`;

export const QuantityContent = styled.div`
background-color: #FFC0C0;
width: 70px;
height: 30px;
border-radius: 10px;
margin-top: -14px;
margin-bottom: 10px;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const DeleteImage = styled.img`
position: absolute;
margin-left: 59.5%;
margin-top: -6%;
cursor: pointer;

`;

export const Summary = styled.div`
    width: 100%;
background-color: white;
`;

export const Proceed = styled.button`
background-color: red;
display: flex;
align-items: center;
justify-content: space-evenly;
width: 200px;
height: 65px;
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

export const Continue = styled.div`
    font-weight: 600;
border-radius: 10px;
margin-left: auto;
margin-right: auto;
background-color: transparent;
border: 1px solid red;
width: 200px;
height: 65px;
text-align: center;
margin-top: 30px;
cursor: pointer;
`;