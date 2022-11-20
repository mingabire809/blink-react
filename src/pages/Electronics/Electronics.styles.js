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

export const BrandButton = styled.button`
    background-color: #C1F0FF;
    width: 200px;
    height: 65px;
    margin-top: 50px;
    border-color: transparent;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
`;

export const BrandContent = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: flex-start;
margin-left: 2%;
margin-top: 30px;

@media screen and (max-width: 1025px){
        width: 100%;
        margin-left: 8.5%;
    }


`;

export const Brand = styled.div`
    background-color: #C7E7FF;
    width: 200px;
    height: 200px;
    border-radius: 20px;
    margin-right: 6.5%;
    margin-top: 20px;
    
`;
export const BrandImage = styled.img`
width: 90%;
height: auto;
margin-top: 40px;
margin-left: 5%;
`;
export const BrandImageContent = styled.div`
width: 100%;
height: 159.5px;
`;

export const YellowContent = styled.div`
    height: 30px;
    width: 200px;
    color: white;
    background-color: #FFC801;
    text-align: center;
    padding-top: 10px;
    font-weight: 700;
    font-size: 20px;
    position: absolute;
    
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

export const AdvertisementBanner = styled.div`
width: 100%;
height: 69px;
border-radius: 20px;
background-size: cover;
padding-top: 300px;

`;

export const TextContent = styled.div`
background-color: #FFD8D8;
width: 100%;
height: 40px;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

h3{
    margin-left: 10%;
    font-size: 30px;
}

`;

export const RecommendedContent = styled.div`
    width: 100%;
display: flex;
overflow-x: scroll;
justify-content: flex-start;
scroll-behavior: smooth;
    ::-webkit-scrollbar{
        display: none;
    }
`;

export const Recommended = styled.div`
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

export const Arrival = styled.img`
width: 150px;
height: 150px;
border-radius: 5px;
margin-left: 50px;
margin-right: 50px;
`;

