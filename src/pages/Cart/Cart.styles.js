import styled from "styled-components";
import "@fontsource/montserrat"; 

export const Wrapper = styled.div`
    min-height: 90vh;
    font-family: "Montserrat";
    background-color: #EBEBEB;
`;
export const Content = styled.div`
padding: 50px;
overflow: hidden;

@media screen and (max-width: 515px){
    padding: 2px;
}

@media only screen and (max-width: 1023px) and (min-width: 516px){
       padding: 10px;
       
}

@media only screen and (max-width: 1030px) and (min-width: 1024px){
  padding: 10px;
       
}
`;

export const ArrowContainer = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 515px){
      display: none;
    }
`;

export const DetailsContent = styled.div`
display: flex;
width: 100%;
align-items: baseline;
justify-content: space-between;

@media screen and (max-width: 515px){
      display: contents;
    }
`;

export const Details1 = styled.div`
width: 67%;

@media screen and (max-width: 515px){
      width: 100%;
    }

    @media only screen and (max-width: 1023px) and (min-width: 516px){
       width: 69.5%;
       
}

`;

export const Details2 = styled.div`
width: 27%;
@media screen and (max-width: 515px){
      width: 100%;
    }

    @media only screen and (max-width: 1023px) and (min-width: 516px){
       width: 29.5%;
       
}
`;

export const Data = styled.div`
background-color: white;
width: 100%;
height: 100px;
display: flex;

`;

export const ProductContent = styled.div`
width: 100%;
background-color: white;
margin-top: 40px;
`;

export const Product = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
    margin-bottom: 20px;

    @media screen and (max-width: 515px){
      p{
        font-size: 12px;
      }

      .price{
        font-size: 14px;
        margin-top: -10px;
      }

      
    }
    
`;

export const QuantityContent = styled.div`
background-color: #FFC0C0;
width: 70px;
height: 30px;
border-radius: 10px;
margin-top: -14px;
margin-bottom: 10px;
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 515px){
     margin-left: -15px;
      
    }


`;

export const DeleteImage = styled.img`
position: absolute;
margin-left: 59.5%;
margin-top: -6%;
cursor: pointer;

@media screen and (max-width: 515px){
     margin-top: -25%;
     margin-left: 90%;
    }

    @media only screen and (max-width: 1023px) and (min-width: 516px){
      margin-top: -15%;
      margin-left: 62%;
       
}

@media only screen and (max-width: 1030px) and (min-width: 1024px){
       margin-top: -11%;
       margin-left: 61%;
       
}

`;

export const Summary = styled.div`
    width: 100%;
background-color: white;

@media only screen and (max-width: 1023px) and (min-width: 516px){
       h3{
        font-size: 15px;
       }
       
}
`;

export const Proceed = styled.button`
background-color: red;
display: flex;
align-items: center;
justify-content: space-evenly;
width: 200px;
height: 65px;
font-size: 19px;
color: white;
border-color: transparent;
font-weight: 600;
border-radius: 10px;
margin-left: auto;
margin-right: auto;
margin-top: 30px;
cursor: pointer;
`;

export const Continue = styled.div`
    font-weight: 600;
border-radius: 10px;
margin-left: auto;
margin-right: auto;
background-color: transparent;
border: 1px solid red;
width: 200px;
height: 65px;
text-align: center;
margin-top: 30px;
cursor: pointer;
`;