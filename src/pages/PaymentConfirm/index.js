import React from "react";
import ArrowForward from '../../assets/images/arrowforward.png'
import { ArrowContainer, Back, Content, Details, Green, Pay, Wrapper } from "./PaymentConfirm.styles";
import Yes from '../../assets/images/yes.png'
import { useNavigate } from "react-router-dom";

const PaymentConfirm = ()=>{
    const navigate = useNavigate()
    return(
        <Wrapper>
            <Content>
                <ArrowContainer>
                <h4>Home</h4>
                <img src={ArrowForward} style={{height: 14, marginLeft: 20}} alt="arrow"/>
                <h4 style={{marginLeft: 20}}>Cart</h4>
                <img src={ArrowForward} style={{height: 14, marginLeft: 20}} alt="arrow"/>
                <h4 style={{marginLeft: 20}}>Payment</h4>
                <img src={ArrowForward} style={{height: 14, marginLeft: 20}} alt="arrow"/>
                <h4 style={{color: '#EA9414', marginLeft: 20}}>Finish</h4>
                </ArrowContainer>

                <Details>
                    <Green>
                        <img src={Yes} alt="yes" style={{marginLeft: '16%', marginTop: 50}}/>
                    </Green>
                    <h1 style={{textAlign: 'center', fontWeight: '900'}}>Successfully Ordered!</h1>
                    <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, lectus at fermentum vestibulum</p>

                    <Pay onClick={()=>navigate('/track')}>Track Order</Pay>
                    <Back onClick={()=>navigate('/')}>Back shopping</Back>
                </Details>
            </Content>
        </Wrapper>
    )
}

export default PaymentConfirm;