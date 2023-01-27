import React from "react";
import { Change, Confirm, Content, Details, Input, Map, Wrapper } from "./Confirm.styles";
import Map2 from '../../assets/images/map2.png'
import Address from '../../assets/images/address.png'
import { useNavigate } from "react-router-dom";

const ConfirmLocation = ()=>{
    const navigate = useNavigate()
    return(
        <Wrapper>
            <Content>
                <Details>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={Address} alt="address"/>
                        <h4 style={{marginLeft: 30}}>Kiambu</h4>
                    </div>
                    
                    <hr/>

                    <h4>View Park Apt. Hse No.3A</h4>
                    <hr/>

                    <h4>+254 234 454 546</h4>
                    <hr/>
                    <Change onClick={()=>navigate('/location')}>Change Address</Change>
                    <Confirm onClick={()=>navigate('/payment')}>Proceed to pay</Confirm>
                </Details>
                
            </Content>
            <Map src={Map2}/>
        </Wrapper>
    )
}

export default ConfirmLocation;