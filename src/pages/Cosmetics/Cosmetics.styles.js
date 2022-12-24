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
background-color: #FED7FF;
display: flex;
justify-content: space-around;
margin-left: auto;
margin-right: auto;
margin-top: 10px;
align-items: center;
overflow: hidden;

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
        width: 60%;
        @media screen and (max-width: 515px){
            font-size: 17px;
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
    width: 340px;
    height: auto;
    @media screen and (max-width: 515px){
   width: 100px;
}

@media only screen and (max-width: 780px) and (min-width: 516px){
        width: 280px;
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

    @media only screen and (max-width: 780px) and (min-width: 516px){
        margin-right: 3%;
    }

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

export const BrandContent = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: flex-start;
margin-left: 4%;
margin-top: 30px;

@media only screen and (max-width: 780px) and (min-width: 516px){
        margin-left: 2%;
    }

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
    @media screen and (max-width: 515px){
            
            width: 150px;
            height: 150px;
}

@media only screen and (max-width: 780px) and (min-width: 516px){
        margin-right: 3%;
    }
    
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

export const HairImage = styled.img`
width: 300px;
height: 300px;
border-radius: 10px;
margin-left: 50px;
margin-right: 50px;

@media screen and (max-width: 515px){
            
            width: 200px;
            height: 200px;
            margin-left: 30px;
            margin-right: 30px;
}
`;

export const FaceContent = styled.div`
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

export const Face = styled.div`
width: 400px;
height: 300px;
background-size: cover;
border-radius: 20px;
margin-right: 100px;

@media screen and (max-width: 515px){
        width: 300px;
        height: 200px;
        margin-top: 20px;
    }

`;

export const Badge = styled.div`
background-color: red;
width: 50px;
height: 30px;
border-top-left-radius: 20px;
border-bottom-right-radius: 20px;
padding-left: 20px;
color: white;
font-weight: 700;
font-size: 20px;
`;

export const ProductContent = styled.div`

width: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: flex-start;
margin-left: 5%;
margin-top: 30px;

@media screen and (max-width: 1025px){
        width: 100%;
        margin-left: 8.5%;
    }

    @media screen and (max-width: 515px){
       margin-bottom: 30px;
    }

`;

export const Image = styled.img`
 width: 200px;
    height: 200px;

    border-radius: 20px;
   
    margin-top: 40px;
    margin-right: 6.6%;
    overflow: hidden;
    cursor: pointer;
    @media screen and (max-width: 515px){
       width: 100px;
       height: 100px;
    }

    @media only screen and (max-width: 780px) and (min-width: 516px){
     margin-right: 3%;   
    }
`;