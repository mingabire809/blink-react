import styled from "styled-components";
import "@fontsource/montserrat"; 

export const Wrapper = styled.div`
 min-height: 90vh;
    font-family: "Montserrat";
`;

export const Content = styled.div`
padding: 50px;
overflow: hidden;
@media screen and (max-width: 515px){
    padding: 2px;
}
`;

export const EventContent = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin-top: 50px;
`;

export const Event = styled.div`
width: 45%;
height: 350px;
border-radius: 20px;
background-size: cover;
margin-top: 30px;

@media screen and (max-width: 515px) {
    width: 100%
}
`;

export const EventTitle = styled.div`
border-top-left-radius: 20px;
border-top-right-radius: 20px;
height: 40px;
background-color: #FFC903;
text-align: center;
padding-top: 10PX;
font-size: 25px;
font-weight: 700;
`;

export const AllEvent = styled.div`
    width: 100%;
    background-color: #D7E9FF;
    height: 80px;
    text-align: center;
    padding-top: 50px;
    font-weight: 700;
    font-size: 30px;
    cursor: pointer;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const EventPlannerContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 515px) {
   
}
`;

export const EventPlanner = styled.div`
width: 30%;
height: 280px;
border-radius: 20px;
background-color: #D7E9FF;

@media screen and (max-width: 515px) {
  
}
`;

export const EventPlannerImage = styled.img`
    margin-left: 30%;
    margin-top: 30px;
    @media screen and (max-width: 515px) {
   width: 100px;
   margin-left: 10%;
   
}
`;