import React from "react";
import { Confirm, Content, Details, Input, Map, Wrapper } from "./Location.styles";
import Map2 from '../../assets/images/map2.png'
import { useNavigate } from "react-router-dom";

const Location = ()=>{
    const navigate = useNavigate()
    return(
        <Wrapper>
            <Content>
                <Details>
                    <h4>Enter address</h4>
                    <Input/>

                    <h4>Apartment Name, Hse No.</h4>
                    <Input/>

                    <h4>Phone Number</h4>
                    <Input/>

                    <Confirm onClick={()=>navigate('/confirm-location')}>Confirm Location</Confirm>
                </Details>
                
            </Content>
            <Map src={Map2}/>
        </Wrapper>
    )
}

export default Location;