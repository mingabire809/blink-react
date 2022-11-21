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

export const WelcomeBanner = styled.div`
height: 350px;
width: 100%;
border-radius: 20px;
background-color: #FFEEB1;
display: flex;
justify-content: space-around;
margin-left: auto;
margin-right: auto;
margin-top: 10px;
align-items: center;

`;

export const BannerContent = styled.div`
    h1{
        width: 60%;
    }
    h2{
        font-weight: 400;
    }
`;
export const BannerImage = styled.img`
    width: 480px;
    height: auto;
`;

export const WelcomeButtonContent = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 98%;
margin-top: 30px;
margin-left: auto;
margin-right: auto;
`;

export const Button1 = styled.button`
height: 70px;
border-radius: 14px;
width: 260px;
background-color: #FFC2B5;
font-size: 20px;
font-weight: 700;
border-color: transparent;
cursor: pointer;
`;

export const Button2 = styled.button`
height: 70px;
border-radius: 14px;
width: 200px;
background-color: #C1F0FF;
font-size: 20px;
font-weight: 700;
border-color: transparent;
cursor: pointer;
`;

export const Button3 = styled.button`
height: 70px;
border-radius: 14px;
width: 200px;
background-color: #FFB1F7;
font-size: 20px;
font-weight: 700;
border-color: transparent;
cursor: pointer;
`;

export const CategoriesContent = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: flex-start;
margin-left: 5%;

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

export const DiapperBanner = styled.div`
height: 350px;
width: 100%;
border-radius: 20px;
display: flex;
justify-content: space-between;
margin-left: auto;
margin-right: auto;
margin-top: 100px;
align-items: center;
background-color: #EFEFEF

`;
