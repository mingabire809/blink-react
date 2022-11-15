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
background-color: #B2FED0;
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
    
    height: 350px;
    width: auto;
`;

export const GroceryContent = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: flex-start;
margin-left: 2%;
margin-top: 40px;
margin-bottom: 40px;

@media screen and (max-width: 1025px){
        width: 100%;
        margin-left: 8.5%;
    }

`;

export const Grocery = styled.div`
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

export const WhiteContent = styled.div`
width: 200px;
height: 100px;
border-radius: 20px;
background-color: white;
margin-top: -30px;
padding-top: 10px;
h3{
    text-align: center;
    font-weight: 700;
    
}
`;

export const GroceryImage = styled.img`
    width: 100%;
    margin-top: 35px;
    
    z-index: 99999;
`;