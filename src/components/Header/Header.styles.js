import styled from 'styled-components'
import "@fontsource/montserrat"; 

export const Wrapper = styled.div`
width: 100%;
height: 70px;
background-color: rgba(255,200,1,255);
z-index: 997;
position: sticky;
top: 0;
font-family: "Montserrat";
`;

export const Content = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const Option = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    h2{
        font-weight: 500;
        font-size: 21.5px;
        cursor: pointer;
    }
`;

export const Icon = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 13%;
align-items: center;
`;

export const LockerContent = styled.div`
    
    margin-top: 4px;
`;
export const NumberContent = styled.div`
background-color: white;
text-align: center;
border-radius: 100%;
position: absolute;
margin-top: -23px;
margin-left: 9px;
`;

