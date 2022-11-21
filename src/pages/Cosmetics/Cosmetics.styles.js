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
background-color: #FED7FF;
display: flex;
justify-content: space-around;
margin-left: auto;
margin-right: auto;
margin-top: 10px;
align-items: center;
overflow: hidden;

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
    width: 340px;
    height: auto;
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

export const BrandContent = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: flex-start;
margin-left: 4%;
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
    margin-right: 6.5%;
    margin-top: 20px;
    
`;
export const BrandImage = styled.img`
width: 90%;
height: auto;
margin-top: 40px;
margin-left: 5%;
`;
export const BrandImageContent = styled.div`
width: 100%;
height: 159.5px;
`;

export const HairImage = styled.img`
width: 300px;
height: 300px;
border-radius: 10px;
margin-left: 50px;
margin-right: 50px;
`;

export const FaceContent = styled.div`
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

export const Face = styled.div`
width: 400px;
height: 300px;
background-size: cover;
border-radius: 20px;
margin-right: 100px;
`;

export const Badge = styled.div`
background-color: red;
width: 50px;
height: 30px;
border-top-left-radius: 20px;
border-bottom-right-radius: 20px;
padding-left: 20px;
color: white;
font-weight: 700;
font-size: 20px;
`;

export const ProductContent = styled.div`

width: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: flex-start;
margin-left: 5%;
margin-top: 30px;

@media screen and (max-width: 1025px){
        width: 100%;
        margin-left: 8.5%;
    }

`;

export const Image = styled.img`
 width: 200px;
    height: 200px;

    border-radius: 20px;
   
    margin-top: 40px;
    margin-right: 6.6%;
    overflow: hidden;
    cursor: pointer;
`;