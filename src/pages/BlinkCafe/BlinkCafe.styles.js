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

export const CategoriesContent = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: flex-start;
margin-left: 5%;
margin-bottom: 100px;

@media screen and (max-width: 1025px){
        width: 100%;
        margin-left: 8.5%;
    }

`;

export const Product = styled.div`
    width: 200px;
    height: 250px;
    background-color: #FFC702;
    border-radius: 20px;
    box-shadow: 4px 4px 4px rgba(134,134,134,0.25);
    margin-top: 40px;
    margin-right: 6.6%;
    overflow: hidden;
    cursor: pointer;
`;

export const ProductWhite = styled.div`
width: 200px;
height: 100px;
border-radius: 20px;
background-color: white;
margin-top: -20px;
padding-top: 10px;
h3{
    text-align: center;
    
}
`;

export const ProductImage = styled.img`
    width: 100%;
    margin-top: 30px;
    z-index: 99999;
`;

export const CaffeImage = styled.img`
width: 100%;
height: 400px;
`;

export const PopularButton = styled.button`
height: 70px;
width: 150px;
border-radius: 20px;
background-color: #C1F0FF;
margin-top: 50px;
border-color: transparent;
font-size: 25px;
cursor: pointer;
font-weight: 700;
`;

export const PopularContent = styled.div`

width: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: flex-start;
margin-left: 3%;
margin-top: 50px;

@media screen and (max-width: 1025px){
        width: 100%;
        margin-left: 8.5%;
    }
`;

export const Popular = styled.div`
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: #DCDCDC;
    height: 290px;
    width: 200px;
    padding: 10px;
    margin-right: 4.6%;
    margin-top: 30px;
`;

export const ImageContent = styled.div`
width: 160px;
height: 160px;
background-color: white;
border-radius: 20px;
margin-left: auto;
margin-right: auto;
margin-top: 20px;
`;

export const CartButton = styled.button`
background-color: #1A2838;
height: 35px;
width: 35px;
border-radius: 5px;
border-color: transparent;
`;

export const Recommended = styled.div`
width: 100%;
height: 380px;
background-size: cover;
border-radius: 20px;
padding-top: 20px;

`;