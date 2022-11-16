import styled from "styled-components";
import "@fontsource/montserrat"; 

export const Wrapper = styled.div`
   font-family: "Montserrat";
`;

export const Content = styled.div`
    padding: 20px;
    overflow: hidden;
`;

export const Welcome = styled.div`
display: flex;

`;
export const Word = styled.div`
    width: 50%;
    
    h1{
        font-size: 80px;
       
    }
    h2{
        font-weight: 400;
        font-size: 30px;
    }
`;
export const Data = styled.span`
    ::before{
        content: "Electronics";
    animation: animate infinite 10s;
    padding-left: 10px; 
    }
    @keyframes animate {
  
  0% {
      content: "Electronics";
  }

  25% {
      content: "Groceries";
  }

  50% {
      content: "Cosmetics";
  }
  75% {
      content: "Medecine";
  }
  100% {
      content: "LPG Gas";
  }
  
}

`;

export const PhoneContent = styled.div`
    width: 50%;
    margin-top: 120px;
    
`;

export const PhoneContainer = styled.div`
background-color: rgba(255,200,1,255);
width: 350px;
height: 350px;
border-radius: 100%;
margin-left: 20%;
`;

export const Phone = styled.img`
width: 270px;
margin-top: -50px;
margin-left: 20px;
animation: updown 9s ease infinite;
@keyframes updown {
 

 50% {
   transform: translateY(8%);
   
 }

 
}
`;

export const FirstDot = styled.div`
position: absolute;
background-color: rgba(255,200,1,255);
width: 50px;
height: 50px;
border-radius: 100%;
margin-left: 2%;
margin-top: -3%;
`;

export const SecondDot = styled.div`
position: absolute;
background-color: rgba(255,200,1,255);
width: 30px;
height: 30px;
border-radius: 100%;
margin-left: 35%;
`;

export const Play = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin-left: 25px;
    
`; 

export const Categories = styled.div`
    margin-top: 100px;
`;

export const CategoryContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    
    margin-left: 5.5%;
    @media screen and (max-width: 1025px){
        width: 100%;
        margin-left: 8.5%;
    }

`;

export const Product = styled.div`
text-align: center;
width: 160px;
height: fit-content;
margin-right: 5.3%;
cursor: pointer;
`;

export const ProductContent = styled.div`
background-color: rgba(255,200,1,255);
width: 160px;
height: 160px;
border-radius: 50px;
overflow: hidden;
`;
export const WhiteContent = styled.div`
 width: 160px; 
    height: 100px; 
    background-color: white;
    margin-top: 80px;
    border-radius: 100%;
`;

export const ImageCategory = styled.img`

    margin-top: -90px;
    margin-left: auto;
    margin-right: auto;
    width: 170px;
`;

export const EveryDay = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 70px;

`;

export const EveryDayItem = styled.div`
    width: 30%;
    height: 235px;
    background-color: rgba(255,218,85,255);
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
`;

export const ItemContent = styled.div`
    h3{
        position: absolute;
      
        width: 23%;
        margin-left: 1%;
        
    }
`;

export const ItemButton = styled.button`
    width: 140px;
    height: 40px;
    font-size: 20px;
    border-color: transparent;
    color: black;
    background-color: yellow;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 12%;
    margin-top: 170px;
`;

export const ItemImage = styled.img`
    width: 60%;
`;


export const OfferContent = styled.div`
width: 100%;
display: flex;
overflow-x: scroll;
justify-content: flex-start;
scroll-behavior: smooth;
    ::-webkit-scrollbar{
        display: none;
    }
`;

export const Offer =styled.div`
    width: 300px;
    height: 450px;
    border: 1px solid #50FFAB;
    border-radius: 10px;
    padding: 10px;
    margin-right: 5%;
    margin-top: 20px;
    border-top-left-radius: 30px;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    margin-bottom: 10px;
`;
export const OfferImageContent = styled.div`
width: 100%;
height: 250px;
`;

export const OfferImage = styled.img`
    margin-left: 10%;
`;

export const Badge = styled.div`
    width: 100px;
    height: 30px;
    color: white;
    background-color: blue;
    text-align: center;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    margin-left: -10px;
    margin-top: -10px;
    font-weight: 700;
    padding-top: 10px;
    font-size: 23px;

`;
export const OfferButton = styled.button`
    background-color: rgba(255,200,1,255);
    border-color: transparent;
    font-size: 18px;
    height: 30px;
    width: 90px;
    cursor: pointer;
    background-color: #A6FFD4;
    border-radius: 20px;

`;

export const FreshCourt = styled.div`
    margin-top: 120px;
`;

export const FreshContent = styled.div`
    width: 100%;
    height: 400px;
    border-radius: 20px;
    background-color: rgba(255,200,1,255);
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const FreshProduct = styled.div`
  background-color: rgba(255,218,85,255);
    border-radius: 100%;
    width: 300px;
    height: 300px;
   
`;
export const LeftContent = styled.div`
width:50px;
height: 50px;
background-color: black;
border-radius: 100%;
cursor: pointer;

`;
export const RightContent = styled.div`
width:50px;
height: 50px;
background-color: black;
border-radius: 100%;
cursor: pointer;

`;
export const FreshImage = styled.img`
    width: 350px;
  
`;
export const LeftIndicator = styled.img`
    width: 50px;
    margin-top: 5px;
`;
export const RigthIndicator = styled.img`
    width: 50px;
    margin-top: 5px;
    transform: rotate(180deg)
`;

export const Delivery = styled.div`
 width: 100%;
 height: 400px;
 background-color: black;
 margin-left: auto;
 margin-right: auto;
 margin-top: 100px;
`;

export const DeliveryTitle = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 50%;
margin-left: auto;
margin-right: auto;
color: white;
font-size: 25px;
`;
export const ButtonMoving = styled.img`
    width: 60px;
`;

export const MapContent = styled.div`
    display: flex;
`;

export const MapImage = styled.img`
    width: 1000px;
    @media screen and (max-width: 1025px){
        width: 500px;
    }
`;

export const MapDescription = styled.div`
display: flex;
align-items: baseline;
font-size: 14px;
position: absolute;
margin-left: 725px;
margin-top: 380px;
width: 350px;

justify-content: space-between;
@media screen and (max-width: 1025px){
        margin-top: 160px;
        margin-left: 380px;
    }

`;
export const Open = styled.div`
    display: flex;
    padding-left: 3%;
    margin-top: 50px;
`;

export const InputContent = styled.div`
display: flex;
flex-wrap: wrap;
width: 70%;
justify-content: space-between;
margin-right: 5%;
`;

export const OpenInput = styled.input`
    height: 30px;
    width: 230px;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: rgba(255,200,1,255);
    font-size: 18px;
`;
export const OpenButton = styled.button`
height: 45px;
background-color: white;
border: 2px solid black;
font-size: 20px;
border-radius: 10px;
cursor: pointer;

`;

export const Advertisment = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 400px;

`;

export const Advertise1 = styled.div`
width: 400px;
width: 35%;
background-color: gray;
border-bottom-left-radius: 30px;
border-top-left-radius: 30px;
h1{
    text-align: center;
    margin-top: 150px;
    font-size: 45px;
}
`;
export const Advertise2 = styled.div`
width: 400px;
width: 55%;
background-color: gray;
border-bottom-right-radius: 30px;
border-top-right-radius: 30px;
h1{
    text-align: center;
    margin-top: 150px;
    font-size: 45px;
}
`;

export const Order = styled.div`
background-color: rgba(255,200,1,255);
width: 100%;
height: 550px;
display: flex;
justify-content: space-around;
margin-top: 100px;
`;

export const OrderWord = styled.div`
 
 width: 40%;
 margin-left: 10%;
 h1{
    font-size: 40px;
 }
 h2{
    font-size: 30px;
 }
`;

export const Hand = styled.img`

`;
export const Why = styled.div`
 width: 95%;
 
 height: 400px;
 margin-left: auto;
 margin-right: auto;
 transition: 2s;
 display: flex;
 justify-content: space-between;
 :hover{
    width: 100%;
    transition: 2s;
 }
`;

export const WhyContent = styled.div`

width: 350px;

text-align: center;
height: fit-content;
h3{
    font-weight: 400;
}
`;

export const WhyImage = styled.img`

`;

export const Ads = styled.div`
    width: 100%;
    height: 430px;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    
`;

export const AdsContent = styled.div`
    width: 300px;
    height: fit-content;
    margin-top: -20px;
    h3{
        font-weight: 400;
        margin-top: -20px;
    }
    h1{
        font-size: 45px;
    }
`;

export const AdsButton = styled.button`
    width: 180px;
    height: 50px;
    font-size: 20px;
    background-color: rgba(228,228,228,255);
    border-radius: 10px;
    border: 3px solid black;

    cursor: pointer;

    :hover{
        background-color: black;
        color: white;
    }
`;

export const Career = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    margin-top: 100px;
    
    
`;

export const CareerContent = styled.div`
    background-color: black;
    width: 60%;
    
    ::after{
        width: 11%;
    height: 450px;
    content: '';

    background: inherit;
    transform-origin: right;
    transform: skewX(-10deg);
    background-color: black;
    position: absolute;
    margin-left: -90px;
    margin-top: -299px;

   
    
    z-index: 1;
    @media screen and (max-width: 1025px){
        display: none;
    }
    }
`;

export const ContentCareer = styled.div`
display: flex;
justify-content: space-evenly;
color: rgba(255,200,1,255);
align-items: center;

margin-left: 20px;
`;

export const CareerButton = styled.button`
background-color: rgba(255,200,1,255);
width: 180px;
height: 50px;
font-size: 25px;
border-radius: 10px;
border-color: transparent;
cursor: pointer;
transition: 2s;
color: gray;
:hover{
    margin-left: 25px;
    transition: 2s;
}
`;
export const ContentCareer2 = styled.div`
display: flex;
justify-content: space-evenly;
color: white;
align-items: center;
`;

export const CareerButton2 = styled.button`
background-color: white;
width: 180px;
height: 50px;
font-size: 25px;
border-radius: 10px;
border-color: transparent;
cursor: pointer;
transition: 2s;
color: gray;
:hover{
    margin-right: 25px;
    transition: 2s;
}
`;

export const Download = styled.div`
margin-top: 20px;
height: 400px;
width: 100%;
display: flex;
justify-content: space-around;

`;

export const DownloadWord = styled.div`
margin-top: 100px;

h1{
    font-size: 40px;
}
h2{
    font-weight: 400;
}
`;

export const PhoneMock = styled.img`
    width: 400px;
    
`;
