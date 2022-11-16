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

export const DealContent = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

export const Deal = styled.div`
    width: 300px;
    height: 300px;
    background-size: cover;
    border-radius: 20px;
    margin-bottom: 50px;
   
`;

export const UnderDeal = styled.div`
    width: 200px;
    height: 170px;
    background-color: #FFFBD9;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 10px;

    p{
        margin-top: -10px;
        font-size: 13px;
    }
`;

export const DealButton = styled.div`
background-color: #A6FFD4;
width: 55px;
display: flex;
height: 20px;
font-size: 13px;
align-items: center;
border-radius: 10px;
padding-left:5px;
cursor: pointer;
margin-left: 42px;
`;