import styled from "styled-components";
import "@fontsource/montserrat"; 

export const Wrapper = styled.div`
    min-height: 90vh;
    font-family: "Montserrat";
    background-color: #DDDDDD;
`;
export const Content = styled.div`
padding: 50px;
overflow: hidden;

@media screen and (max-width: 515px){
    padding: 2px;
}
`;

export const CategoryContent = styled.div`
display: flex;
align-items: center;
width: 90%;
margin-left: auto;
margin-right: auto;

@media screen and (max-width: 515px){
   margin-bottom: 30px;
   width: 90%;
   margin-top: 20px;
   
   .line{
    width: 35%;
   }
   
}

@media only screen and (max-width: 1023px) and (min-width: 516px){
       .line{
        width: 70%;
        
       }
       
}

@media only screen and (max-width: 1030px) and (min-width: 1024px){
      
    .line{
        width: 80%;
        
       }
}
`;

export const Category = styled.div`
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid gray;
    text-align: center;
    padding-top: 15px;
    cursor: pointer;
`;

export const GasContent = styled.div`
display: flex;
justify-content: space-between;
margin-top: 50px;

@media screen and (max-width: 515px){
   
  display: contents;
 
   
   
   
   
}
`;

export const AccessoryContent = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
margin-top: 50px;
margin-left: 3%;

@media screen and (max-width: 515px){
padding-left: 14%
   
}

@media only screen and (max-width: 1023px) and (min-width: 516px){
       padding-left: 8%;
       
}

@media only screen and (max-width: 1030px) and (min-width: 1024px){
      
    padding-left: 2%;
}

`;

export const Gas = styled.div`
width: 45%;
height: 450px;
background-color: white;
border: 1px solid rgba(0,0,0,0.5);
border-radius: 10px;
cursor: pointer;

@media screen and (max-width: 515px){
   
   width: 100%;
   margin-top: 20px;
 
}
@media only screen and (max-width: 1023px) and (min-width: 516px){
       .angle{
        width: 100%;
        margin-bottom: 50px;
       }
       
}

@media only screen and (max-width: 1030px) and (min-width: 1024px){
      
    .angle{
        width: 100%;
        margin-bottom: 20px;
       }
}



`;

export const Accessory = styled.div`
width: 250px;
height: 300px;
border: 1px solid rgba(0,0,0,0.5);
border-radius: 10px;
background-color: white;
margin-right: 4%;
margin-bottom: 30px;
cursor: pointer;
`;