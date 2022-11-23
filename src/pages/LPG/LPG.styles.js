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

export const WelcomeBanner = styled.div`
height: 350px;
width: 100%;
border-radius: 20px;
background-color: #D7E9FF;
display: flex;
justify-content: space-around;
margin-left: auto;
margin-right: auto;
margin-top: 10px;
align-items: center;

@media screen and (max-width: 515px){
   height: 200px;
   margin-top: 80px;
}

`;

export const BannerContent = styled.div`
    
`;
export const BannerImage = styled.img`
    
    height: 350px;
    width: auto;
    @media screen and (max-width: 515px){
   height: 100px;
}
`;

export const BannerButton = styled.button`
width: 150px;;
height: 45px;
border-color: transparent;
font-size: 20px;
background-color: #FFC702;
cursor: pointer;



`;

export const Button = styled.button`
background-color: #FFC2B5;
width: 200px;
height: 70px;
font-size: 20px;
font-weight: 700;
border-color: transparent;
border-radius: 10px;
margin-top: 20px;
cursor: pointer;

`;

export const GasContent = styled.div`
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

export const Gas = styled.div`
    width: 200px;
    height: 250px;
    background-color: #FFC702;
    border-radius: 20px;
    box-shadow: 4px 4px 4px rgba(134,134,134,0.25);
    margin-top: 40px;
    margin-right: 6.6%;
    overflow: hidden;
    cursor: pointer;

    @media screen and (max-width: 515px){
            
            width: 150px;
            height: 200px;
}
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

@media screen and (max-width: 515px){
            
            width: 150px;
            
}
`;

export const GasImage = styled.img`
    width: 60%;
    margin-top: 15px;
    margin-left: 18%;
    z-index: 99999;
`;