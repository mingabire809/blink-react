import styled from "styled-components";
import "@fontsource/montserrat"; 

export const Wrapper = styled.div`
    min-height: 90vh;
    font-family: "Montserrat";
    background-color: #F2F2F2;
`;

export const Content = styled.div`
padding: 50px;
overflow: hidden;
@media screen and (max-width: 515px){
    padding: 2px;
}
`;

export const ArrowContainer = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 515px){
      display: none;
    }
`;

export const ProductDetails = styled.div`
display: flex;
justify-content: space-between;
@media screen and (max-width: 515px){
       flex-wrap: wrap;
    }
`;
export const ProductContent = styled.div`
    width: 32%;
    @media screen and (max-width: 515px){
        width: 98%;
        margin-top: 40px;
    }
`;

export const ProductImageContent = styled.div`

`;

export const AddToCart = styled.button`
width: 100%;
height: 70px;
border-radius: 10px;
background-color: #FFC903;
border-color: transparent;
display: flex;
align-items: center;
color: white;
font-size: 20px;
justify-content: space-around;
cursor: pointer;
`;

export const ColorContent = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    margin-top: 100px;
    @media screen and (max-width: 515px){
       display: none;
    }
`;

export const Color1 = styled.div`
width: 50%;
height: 100%;
background-color: #00AAAA;
border-bottom-left-radius: 10px;
border-top-left-radius: 10px;
`;

export const Color2 = styled.div`
width: 50%;
height: 100%;
background-color: #FF00B8;
border-bottom-right-radius: 10px;
border-top-right-radius: 10px;
`;

export const TableContent = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
`;

export const Table = styled.div`
    height: 300px;
    width: 350px;
    border: 1px solid black;
    border-radius: 20px;
    @media screen and (max-width: 515px){
        margin-top: 20px;
    }

    @media screen and (max-width: 1027px){
        margin-top: 20px;
    }
`;

export const Feedback = styled.div`
    width: 90%;
    display: flex;
    background-color: #D9D9D9;
    border-radius: 20px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;

    @media screen and (max-width: 515px){
       flex-wrap: wrap;
       height: fit-content;
    }
`;

export const FeedbackImage = styled.img`
    border-radius: 20px;
    height: 100%;
    width: 340px;
    @media screen and (max-width: 515px){
        width: 100%;
    }
`;

export const Word = styled.div`
    padding-left: 20px;
    padding-right: 20px;
`;

export const Review = styled.div`
    width: 160px;
    height: 90px;
    background-color: #EA9414;
    margin-left: auto;
    margin-right: auto;
    color: white;
    margin-top: 20px;
    text-align: center;
    cursor: pointer;
`;


