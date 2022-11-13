import styled from "styled-components";

export const Wrapper = styled.div`

`;

export const Content = styled.div`
    padding: 20px;
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
    

`;

export const Product = styled.div`
text-align: center;
width: 160px;
height: fit-content;
margin-right: 5.3%;
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
`;

export const MapDescription = styled.div`
display: flex;
align-items: baseline;
font-size: 14px;
position: absolute;
margin-left: 715px;
margin-top: 380px;
width: 350px;
justify-content: space-between;

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