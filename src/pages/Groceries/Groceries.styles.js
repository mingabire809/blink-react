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
margin-left: 5%;
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

export const PopularContent = styled.div`
width: 100%;
display: flex;
overflow-x: scroll;
justify-content: flex-start;
scroll-behavior: smooth;
    ::-webkit-scrollbar{
        display: none;
    }
`;

export const Popular = styled.div`
    width: 300px;
    height: 450px;
    border: 1px solid #50FFAB;
    border-radius: 20px;
    padding: 10px;
    margin-right: 5%;
    margin-top: 20px;
    border-top-left-radius: 30px;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    margin-bottom: 10px;
`;

export const PopularRight = styled.button`
    font-size: 50px;
    background-color: lightgray;
    position: absolute;
    border-color: transparent;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    cursor: pointer;
    padding-bottom: 70px;
    margin-left: 87%;
    margin-top: 200px;

`;

export const PopularLeft = styled.button`
    font-size: 50px;
    background-color: lightgray;
    position: absolute;
    border-color: transparent;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    cursor: pointer;
    padding-bottom: 70px;
    
    margin-top: 200px;

`;

export const BestSaleCover = styled.div`
    background-color: #C0FFDD;
    width: 26%;
    height: 510px;
    border-radius: 20px;
    padding: 30px;
    margin-right: 2%;
    h1{
       color: #5C2100;
       font-weight: 700;
        
    }
`;

export const BestSaleCoverButton = styled.button`
    width: 180px;
    height: 50px;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    border-color: transparent;
    background-color: #FF6D03;
    font-weight: 700;
    margin-top: 60%;
    margin-left: 20%;
    cursor: pointer;
`;

export const BestSaleContent = styled.div`
    display: flex;
    width: 70%;
    overflow-x: scroll;
justify-content: flex-start;
scroll-behavior: smooth;
    ::-webkit-scrollbar{
        display: none;
    }
`;
export const BestSale = styled.div`
    width: 250px;
    height: 510px;
    border: 1px solid #50FFAB;
    border-radius: 20px;
    padding: 10px;
    margin-right: 5%;
    margin-top: 20px;
    border-top-left-radius: 50px;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    margin-bottom: 10px;
`;

export const BestSaleBadge = styled.div`
    width: 100px;
    height: 30px;
    color: white;
    background-color: red;
    text-align: center;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    margin-left: -10px;
    margin-top: -10px;
    font-weight: 700;
    padding-top: 10px;
    font-size: 23px;
    box-shadow: 0px 4px 4px rgba(12, 3, 32, 0.39);
    margin-bottom: 30px;

`;

export const GroceryButton = styled.div`
width: 150px;
height: 40px;
background-color: #FF6D03;
display: flex;
align-items: center;
border-radius: 20px;
color: white;
font-weight: 700;
padding-left: 60px;
margin-left: 7%;
`;