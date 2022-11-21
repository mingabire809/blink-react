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
background-color: #FFC4AB;
display: flex;
justify-content: space-around;
margin-left: auto;
margin-right: auto;
margin-top: 10px;
align-items: center;

`;

export const BannerContent = styled.div`
    
`;
export const BannerImage = styled.img`
    
    height: 350px;
    width: auto;
`;

export const BannerButton = styled.button`
width: 150px;;
height: 45px;
border-color: transparent;
font-size: 20px;
background-color: #EA9414;
cursor: pointer;
color: white;
font-weight: 700;
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

export const RestaurantContent = styled.div`
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

export const Restaurant = styled.div`
    width: 280px;
    height: 350px;
    margin-top: 40px;
    margin-right: 6.6%;
    overflow: hidden;
    cursor: pointer;
    
`;
export const RestaurantImage = styled.div`
width: 280px;
height: 280px;
background-size: cover;
border-radius: 20px;
`;

export const Timing = styled.div`
    background-color: white;
    width: 95px;
    height: 30px;
    position: absolute;
    margin-top: 249.5px;
    margin-left: 174.7px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    padding-left: 10px;
`;