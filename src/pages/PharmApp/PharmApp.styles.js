import styled from "styled-components";
import "@fontsource/montserrat"; 

export const Wrapper = styled.div`
    min-height: 90vh;
    font-family: "Montserrat";
`;

export const Content = styled.div`
padding: 50px;
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