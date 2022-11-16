import React from "react";

import { BannerContent, BannerImage, Content, GroceryContent,DealButton, WelcomeBanner, Grocery,Wrapper, WhiteContent, GroceryImage, DealContent, Deal, UnderDeal } from "./Groceries.styles";
import Grocery0 from '../../assets/images/grocerybanner.png'
import Grocery1 from '../../assets/images/grocery1.png'
import Grocery2 from '../../assets/images/grocery2.png'
import Grocery3 from '../../assets/images/grocery3.png'
import Grocery4 from '../../assets/images/grocery4.png'
import Grocery5 from '../../assets/images/grocery5.png'
import Grocery6 from '../../assets/images/grocery6.png'
import Grocery7 from '../../assets/images/grocery7.png'
import Cart from '../../assets/images/cart.png'
import DealBackground from '../../assets/images/dealbackground1.png'
import DealBackground2 from '../../assets/images/dealbackground2.png'
import DealBackground3 from '../../assets/images/dealbackground3.png'
import CountdownTimer from "../../components/CountDownTimer/CountDownTimer";

const Groceries = ()=>{
    const TEN_DAYS_IN_MS = 10 * 24 * 60 * 60 * 1000;
  const TEN_NOW_IN_MS = new Date().getTime();

  const dateTimeAfterTenDays = TEN_NOW_IN_MS + TEN_DAYS_IN_MS;

  const FOUR_DAYS_IN_MS = 4 * 24 * 60 * 60 * 1000;
  const FOUR_NOW_IN_MS = new Date().getTime();

  const dateTimeAfterFourDays = FOUR_NOW_IN_MS + FOUR_DAYS_IN_MS;

  const HUNDRED_DAYS_IN_MS = 100 * 24 * 60 * 60 * 1000;
  const HUNDRED_NOW_IN_MS = new Date().getTime();

  const dateTimeAfterHundredDays = HUNDRED_NOW_IN_MS + HUNDRED_DAYS_IN_MS;
    return(
        <Wrapper>
            <Content>
                <WelcomeBanner>
                    <BannerContent>
                    <h1>Fresh Vegetables Big Discount</h1>
                        <h2>Save up to 50% on Your first order</h2>
                    </BannerContent>
                    <BannerImage src={Grocery0} alt="product"/>
                </WelcomeBanner>
                <h2 style={{
                    textDecoration: '3px solid underline red',
                    marginTop: 50
                }}>Top Sub Categories</h2>

                <GroceryContent>
                    <Grocery>
                        <GroceryImage src={Grocery1} alt="product"/>
                        <WhiteContent>
                            <h3>Fruits & Vegie</h3>
                        </WhiteContent>
                    </Grocery>
                    <Grocery style={{backgroundColor: '#2BFF80'}}>
                        <GroceryImage src={Grocery2} style={{marginTop: -20}} alt="product"/>
                        <WhiteContent>
                            <h3>Meat & Fish</h3>
                        </WhiteContent>
                    </Grocery>
                    <Grocery style={{backgroundColor: '#FFAA1E'}}>
                        <GroceryImage src={Grocery3} style={{marginTop: 60}} alt="product"/>
                        <WhiteContent>
                            <h3>Bakery</h3>
                        </WhiteContent>
                    </Grocery>

                    <Grocery>
                        <GroceryImage src={Grocery4} style={{width: '80%', marginLeft: '10%', marginTop: 15}} alt="product"/>
                        <WhiteContent>
                            <h3>Beverage</h3>
                        </WhiteContent>
                    </Grocery>
                    <Grocery>
                        <GroceryImage src={Grocery5} style={{width: '45%', marginLeft: '25%', marginTop: 20}} alt="product"/>
                        <WhiteContent>
                            <h3>Milk & Yogurt</h3>
                        </WhiteContent>
                    </Grocery>
                    <Grocery style={{backgroundColor: '#04EBFA'}}>
                        <GroceryImage src={Grocery6} style={{marginTop: 10}} alt="product"/>
                        <WhiteContent>
                            <h3>Snacks</h3>
                        </WhiteContent>
                    </Grocery>
                    <Grocery>
                        <GroceryImage src={Grocery7} style={{marginTop: 50}} alt="product"/>
                        <WhiteContent>
                            <h3>Egg & Poutry</h3>
                        </WhiteContent>
                    </Grocery>
                </GroceryContent>
                <h2 style={{
                    textDecoration: '3px solid underline #FFC801',
                    marginTop: 50
                }}>Deals of The Day</h2>
                <DealContent>
                    <Deal style={{
                        backgroundImage: `url(${DealBackground})`
                    }}>
                        <CountdownTimer targetDate={dateTimeAfterFourDays}/>
                        <UnderDeal>
                            <h4>Snack</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div style={{
                                display: 'flex',
                                color: '#EA9414',
                                marginTop: -10
                            }}>
                                <h7>&#9733;</h7>
                                <h7>&#9733;</h7>
                                <h7>&#9733;</h7>
                                <h7>&#9733;</h7>
                                <h7>&#9734;</h7>
                            </div>
                            <h5 style={{marginTop: 0}}>By Nestle</h5>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <h7 style={{fontSize: 10, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h7>
                                <h7 style={{fontSize: 10, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h7>
                                <DealButton>
                                    Add
                                    <img src={Cart} style={{width: 15, height:15, marginLeft: 5}} alt="cart"/>
                                </DealButton>
                            </div>
                            
                        </UnderDeal>
                    </Deal>
                    <Deal style={{
                        backgroundImage: `url(${DealBackground2})`
                    }}>
                        <CountdownTimer targetDate={dateTimeAfterTenDays}/>
                        <UnderDeal>
                            <h4>Vegies</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div style={{
                                display: 'flex',
                                color: '#EA9414',
                                marginTop: -10
                            }}>
                                <h7>&#9733;</h7>
                                <h7>&#9733;</h7>
                                <h7>&#9733;</h7>
                                <h7>&#9733;</h7>
                                <h7>&#9734;</h7>
                            </div>
                            <h5 style={{marginTop: 0}}>By Nestle</h5>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <h7 style={{fontSize: 10, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h7>
                                <h7 style={{fontSize: 10, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h7>
                                <DealButton>
                                    Add
                                    <img src={Cart} style={{width: 15, height:15, marginLeft: 5}} alt="cart"/>
                                </DealButton>
                            </div>
                            
                        </UnderDeal>
                    </Deal>
                    <Deal style={{
                        backgroundImage: `url(${DealBackground3})`
                    }}>
                        <CountdownTimer targetDate={dateTimeAfterHundredDays}/>
                        <UnderDeal>
                            <h4>Vegies</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div style={{
                                display: 'flex',
                                color: '#EA9414',
                                marginTop: -10
                            }}>
                                <h7>&#9733;</h7>
                                <h7>&#9733;</h7>
                                <h7>&#9733;</h7>
                                <h7>&#9733;</h7>
                                <h7>&#9734;</h7>
                            </div>
                            <h5 style={{marginTop: 0}}>By Nestle</h5>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <h7 style={{fontSize: 10, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h7>
                                <h7 style={{fontSize: 10, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h7>
                                <DealButton>
                                    Add
                                    <img src={Cart} style={{width: 15, height:15, marginLeft: 5}} alt="cart"/>
                                </DealButton>
                            </div>
                            
                        </UnderDeal>
                    </Deal>      
                    
                </DealContent>
            </Content>
        </Wrapper>
    )
}
export default Groceries;