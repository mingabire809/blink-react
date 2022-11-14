import styled from 'styled-components'

export const Wrapper = styled.div`
min-height: 90vh;
`;

export const Content = styled.div`
 padding: 20px;
`;

export const Search = styled.input`
    width: 90%;
    margin-left: 4.7%;
    height: 45px;
    font-size: 20px;
    border-radius: 13px;

    :hover{
        border: 2px solid rgba(255,200,1,255);

    }
    
`;

export const ItemsContainer = styled.div`
display: flex;
justify-content: space-between;
width: 90%;
margin-left: auto;
margin-right: auto;
margin-top: 20px;
`;

export const JobSelect = styled.select`
    width: 30%;
    height: 40px;
    font-size: 20px;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    background-color: transparent;
    border-bottom: 3px solid gray;
    color: gray;
    margin-top: 40px;

    :hover{
        border-bottom: 3px solid rgba(255,200,1,255);
    }
`;

export const Items = styled.div`
width: 30%;
h1{
    font-size: 22px;
}
h2{
    color: gray;
    font-size: 18px;
}
`;

export const Line = styled.hr`
border: 1px solid rgba(255,200,1,255);

:hover{
    border: 1px solid gray;
}
`;