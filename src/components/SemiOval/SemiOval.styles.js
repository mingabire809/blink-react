import styled from "styled-components";

export const Wrapper = styled.div`
     background-color: rgba(255,200,1,255);
  width: 100%;
  height: 100px;
  border-radius: 60%;
    margin-top: -50px;
  transform: rotate(180deg);

  @media screen and (min-width: 516px) {
    display: none;
  }

`;