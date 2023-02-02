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
`;

export const SubcategoriesContent = styled.div`
display: flex;
justify-content: space-between;
@media screen and (max-width: 515px){
   
   overflow-x: scroll;
   white-space: nowrap;
   width: 600px;
   height: 70px;
   margin-top: -30px;
   
           overflow-y: scroll;
           scroll-behavior: smooth;
           
   ::-webkit-scrollbar{
       display: none;
   }
   
}

@media only screen and (max-width: 1023px) and (min-width: 516px){
    overflow-x: scroll;
    white-space: nowrap;
    width: 768px;
    height: 70px;
    margin-top: -30px;
    
            overflow-y: scroll;
            scroll-behavior: smooth;
            
    ::-webkit-scrollbar{
        display: none;
    }
       
}


@media only screen and (max-width: 1030px) and (min-width: 1024px){
    overflow-x: scroll;
    white-space: nowrap;
    width: 980px;
    height: 70px;
    margin-top: 0px;
    
            overflow-y: scroll;
            scroll-behavior: smooth;
            
    ::-webkit-scrollbar{
        display: none;
    }
       
}
`;

export const SubCategories = styled.div`
    width: 140px;
    height: 50px;
    background-color: white;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    h3{
        margin-top: 15px;
    }

    @media screen and (max-width: 515px){
   margin-right: 50px;
   margin-top: 10px;
    
    
}

@media only screen and (max-width: 1023px) and (min-width: 516px){
   
   margin-right: 50px;
}

@media only screen and (max-width: 1030px) and (min-width: 1024px){
  
  margin-right: 20px;
}
`;

export const Offer =styled.div`
    width: 250px;
    height: 470px;
    border: 1px solid #50FFAB;
    border-radius: 10px;
    padding: 10px;
    margin-right: 5%;
    margin-top: 20px;
    border-top-left-radius: 30px;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    margin-bottom: 30px;
    box-sizing: border-box;
    background-color: white;
    margin-right: 5%;

    @media screen and (max-width: 515px){
   
   width: 45%;
   height: fit-content;
  

}

@media only screen and (max-width: 1023px) and (min-width: 516px){
       width: 28%;
       height: fit-content;
}

@media only screen and (max-width: 1030px) and (min-width: 1024px){
       width: 28%;
       height: fit-content;
}
`;
export const OfferImageContent = styled.div`
width: 100%;
height: 250px;

@media screen and (max-width: 515px){
   
   width: 100%;
   height: 210px;
   
  

}
`;

export const OfferImage = styled.img`
    margin-left: 10%;
    @media screen and (max-width: 515px){
   
   margin-left: 0%;

   width: 100%;
  

}

@media only screen and (max-width: 1023px) and (min-width: 516px){
       width: 100%;
       margin-left: 0%;
       
}

@media only screen and (max-width: 1030px) and (min-width: 1024px){
       width: 100%;
       margin-left: 0%;
       
}
`;

export const Badge = styled.div`
    width: 100px;
    height: 30px;
    color: white;
    background-color: #D11AFF;
    text-align: center;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    margin-left: -10px;
    margin-top: -10px;
    font-weight: 700;
    padding-top: 10px;
    font-size: 23px;

    box-shadow: 0px 4px 4px rgba(12, 3, 32, 0.39);

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

    @media screen and (max-width: 515px){
        font-size: 12px;
}

`;

export const OfferContent = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;

padding-left: 6.5%;

@media screen and (max-width: 515px){
   
   padding-left: 2%;
   justify-content: space-between;

}

@media only screen and (max-width: 1023px) and (min-width: 516px){
       padding-left: 0%;
       justify-content: space-between;
       
}

@media only screen and (max-width: 1030px) and (min-width: 1024px){
       padding-left: 0%;
       justify-content: space-between;
       
}
`;