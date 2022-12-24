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
background-color: #FFEEB1;
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

@media only screen and (max-width: 780px) and (min-width: 516px){
        height: 300px;
    }

`;

export const BannerContent = styled.div`
    h1{
        width: 100%;
        @media screen and (max-width: 515px){
            font-size: 15px;
}

@media only screen and (max-width: 780px) and (min-width: 516px){
        font-size: 25px;
    }
    }
    h2{
        font-weight: 400;
        @media screen and (max-width: 515px){
            font-size: 15px;
}
@media only screen and (max-width: 780px) and (min-width: 516px){
        font-size: 20px;
    }
    }
`;
export const BannerImage = styled.img`
    width: 480px;
    height: auto;
    @media screen and (max-width: 515px){
   height: 100px;
}
@media only screen and (max-width: 780px) and (min-width: 516px){
        width: 280px;
    }
`;

export const WelcomeButtonContent = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 98%;
margin-top: 30px;
margin-left: auto;
margin-right: auto;
@media screen and (max-width: 515px){
            margin-top: 0px;
            flex-wrap: wrap;
            margin-top: -80px;
}
`;

export const Button1 = styled.button`
height: 70px;
border-radius: 14px;
width: 260px;
background-color: #FFC2B5;
font-size: 20px;
font-weight: 700;
border-color: transparent;
cursor: pointer;
@media screen and (max-width: 515px){
            width: 200px;
            font-size: 15px;
            margin-top: 10px;
}

@media only screen and (max-width: 780px) and (min-width: 516px){
        width: 250px;
    }
`;

export const Button2 = styled.button`
height: 70px;
border-radius: 14px;
width: 200px;
background-color: #C1F0FF;
font-size: 20px;
font-weight: 700;
border-color: transparent;
cursor: pointer;
@media screen and (max-width: 515px){
            width: 160px;
            font-size: 15px;
            margin-top: 10px;
}

@media only screen and (max-width: 780px) and (min-width: 516px){
     width: 180px   
    }
`;

export const Button3 = styled.button`
height: 70px;
border-radius: 14px;
width: 200px;
background-color: #FFB1F7;
font-size: 20px;
font-weight: 700;
border-color: transparent;
cursor: pointer;
@media screen and (max-width: 515px){
            width: 160px;
            font-size: 15px;
            margin-top: 10px;
}

@media only screen and (max-width: 780px) and (min-width: 516px){
     width: 190px   
    }
`;

export const CategoriesContent = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: flex-start;
margin-left: 5%;

@media screen and (max-width: 1025px){
        width: 100%;
        margin-left: 8.5%;
    }

`;

export const Product = styled.div`
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

@media only screen and (max-width: 780px) and (min-width: 516px){
        margin-right: 3%;
    }
`;

export const ProductWhite = styled.div`
width: 200px;
height: 100px;
border-radius: 20px;
background-color: white;
margin-top: -20px;
padding-top: 10px;
h3{
    text-align: center;
    
}

@media screen and (max-width: 515px){
            
            width: 150px;
            
}
`;

export const ProductImage = styled.img`
    width: 100%;
    margin-top: 30px;
    z-index: 99999;
`;

export const DiapperBanner = styled.div`
height: 350px;
width: 100%;
border-radius: 20px;
display: flex;
justify-content: space-between;
margin-left: auto;
margin-right: auto;
margin-top: 100px;
align-items: center;
background-color: #EFEFEF;

@media screen and (max-width: 515px){
   height: 200px;
   
}

`;
