import React from "react";
import { Content, Wrapper, ArrowContainer, DetailsContent, Details1, Data, RadioContent, Input, NewCard, Back, Pay, Summary, Details2 } from "./Payment.styles";
import ArrowForward from '../../assets/images/arrowforward.png'
import Visa1 from '../../assets/images/visa1.png'
import Mpesa from '../../assets/images/mpesa1.png'
import { useNavigate } from "react-router-dom";

const Payment = ()=>{
    const navigate = useNavigate()
    return(
        <Wrapper>
            <Content>
            <ArrowContainer>
                <h4>Home</h4>
                <img src={ArrowForward} style={{height: 14, marginLeft: 20}} alt="arrow"/>
                <h4 style={{marginLeft: 20}}>Cart</h4>
                <img src={ArrowForward} style={{height: 14, marginLeft: 20}} alt="arrow"/>
                <h4 style={{color: '#EA9414', marginLeft: 20}}>Payment</h4>
            </ArrowContainer>

            <DetailsContent>
                <Details1>
                    <Data>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%'}}>
                            <RadioContent>
                            <input type="radio"/>
                            <h4>Credit Card</h4>
                            </RadioContent>

                            <RadioContent>
                            <input type="radio"/>
                            <img src={Visa1} alt="visa"/>
                            </RadioContent>

                            <RadioContent>
                            <input type="radio"/>
                            <img src={Mpesa} alt="mpesa"/>
                            </RadioContent>

                        </div>

                        <h4>Card Number</h4>
                        <Input placeholder="123 435 657 456 876"/>

                        <h4>Name on Card</h4>
                        <Input placeholder="John Doe"/>

                        <div style={{width: 400, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 50}}>
                            <div>
                            <h4>Expiry Date MM/YY</h4>
                        <Input placeholder="12/24" style={{width: 190}}/>
                            </div>

                            <div>
                            <h4>Security CodeY</h4>
                        <Input placeholder="_ _ _" style={{width: 190, textAlign: 'center'}}/>
                            </div>
                        </div>
                    </Data>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: 50
                    }}>
                        <input type="checkbox" style={{width: 20, height: 20, backgroundColor: 'black'}}/>
                        <h4 style={{marginLeft: 20}}>Save Card</h4>
                    </div>

                    <Data>
                        <NewCard>Add New Card</NewCard>
                    </Data>

                    <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginTop: 50}}>
                        <Back>Back to shopping</Back>
                        <Pay onClick={()=>navigate('/payment-confirmation')}>Pay Now</Pay>
                    </div>

                </Details1>
                <Details2>
                <Summary>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <h3>CART SUMMARY</h3>
                        <h3>4 (Items)</h3>
                        </div>

                        <hr/>

                        <div style={{display: 'flex', justifyContent: 'space-between', width: '80%', marginLeft: '10%'}}>
                        <h3 style={{fontWeight: '300'}}>Delivery Charges</h3>
                        <h3 style={{fontWeight: '300'}}>Kes 270</h3>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'space-between', width: '80%', marginLeft: '10%'}}>
                        <h3 style={{fontWeight: '300'}}>Subtotal</h3>
                        <h3 style={{fontWeight: '300'}}>Kes 770</h3>
                        </div>

                        <hr/>

                        <div style={{display: 'flex', justifyContent: 'space-between', width: '80%', marginLeft: '10%'}}>
                        <h3>Subtotal</h3>
                        <h3 style={{fontWeight: '300'}}>Kes 970</h3>
                        </div>
                        
                    </Summary>
                </Details2>
            </DetailsContent>
            </Content>
        </Wrapper>
    )
}

export default Payment;