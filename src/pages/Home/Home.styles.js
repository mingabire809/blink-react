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
    width: 80%;
    margin-left: auto;
    margin-right: auto;

`;

export const Product = styled.div`
text-align: center;
width: 160px;
height: fit-content;
margin-right: 2%;
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
