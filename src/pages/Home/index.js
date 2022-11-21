import React, {useState, useRef, useEffect} from "react";
import { Categories, CategoryContent, Content,CareerButton2, Data, PlayMobile,FirstDot,Offer, OfferContent, Open,FreshContent, Hand,FreshCourt, FreshProduct, ImageCategory, Phone, PhoneContainer, PhoneContent, Play, Product, ProductContent, SecondDot, Welcome, WhiteContent, Word, Wrapper, FreshImage, Delivery, DeliveryTitle, ButtonMoving, MapContent, MapImage, MapDescription, InputContent, OpenInput, OpenButton, Advertisment, Advertise1, Advertise2, Order, OrderWord, Why, WhyContent, WhyImage, Ads, AdsContent, AdsButton, Career, CareerContent, ContentCareer, CareerButton, ContentCareer2, Download, DownloadWord, PhoneMock, EveryDay, EveryDayItem, ItemContent, ItemButton, ItemImage, OfferImageContent, OfferButton, Badge, OfferImage, MobileBackground } from "./Home.styles";
import PhoneMockup from '../../assets/images/PhoneMockup.png'
import AppStore from '../../assets/images/appstore.jpg'
import PlayStore from '../../assets/images/google.jpg'
import Groceries from '../../assets/images/groceries.png'
import Electronics from '../../assets/images/electronics.png'
import PharmApp from '../../assets/images/pharmapp.png'
import Cosmetics from '../../assets/images/toppng.com-grocery-png-3.png'
import LPG from '../../assets/images/toppng.com-grocery-png-4.png'
import Cafe from '../../assets/images/toppng.com-grocery-png-5.png'
import Last from '../../assets/images/toppng.com-grocery-png-6.png'
import Kitchen from '../../assets/images/toppng.com-grocery-png-7.png'
import Catering from '../../assets/images/toppng.com-grocery-png-8.png'
import Beef from '../../assets/images/roastbeef.png'
import Burger from '../../assets/images/burger.png'
import Drinks from '../../assets/images/drinks.png'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import PlayButton from '../../assets/images/play.png'
import Pause from '../../assets/images/pause.png'
import Marquee from "react-fast-marquee";
import Map from '../../assets/images/map.png'
import PhoneHand from '../../assets/images/phonehand.png'
import Icon1 from '../../assets/images/Icons-1.png'
import Icon2 from '../../assets/images/Icons-2.png'
import Icon3 from '../../assets/images/Icons-3.png'
import Component48 from '../../assets/images/Component48.png'
import DeliveryMan from '../../assets/images/delivery.jpg'
import PhoneMockup2 from '../../assets/images/PhoneMockup2.png'
import Cart from '../../assets/images/cart.png'
import DealBackground from '../../assets/images/dealbackground1.png'
import DealBackground2 from '../../assets/images/dealbackground2.png'
import DealBackground3 from '../../assets/images/dealbackground3.png'
import CountdownTimer from "../../components/CountDownTimer/CountDownTimer";
import { DealContent, Deal, DealButton, UnderDeal } from "../Groceries/Groceries.styles"

import { useNavigate } from "react-router-dom";
import Heart from '../../assets/images/heart.png'


const Home = () =>{
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 515px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 515px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    const popularElement = useRef(null)
    
   //   const [right, setRight] = useState(0)
     
      
  /*  const scrollLeft = () => {
      setRight(right + 400)
      popularElement.current.scrollLeft = right
      
  }
  
  const scrollRight = () => {
      setRight(right - 400)
      popularElement.current.scrollLeft = right
      
  }*/
    const TEN_DAYS_IN_MS = 10 * 24 * 60 * 60 * 1000;
    const TEN_NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterTenDays = TEN_NOW_IN_MS + TEN_DAYS_IN_MS;
  
    const FOUR_DAYS_IN_MS = 4 * 24 * 60 * 60 * 1000;
    const FOUR_NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterFourDays = FOUR_NOW_IN_MS + FOUR_DAYS_IN_MS;
  
    const HUNDRED_DAYS_IN_MS = 100 * 24 * 60 * 60 * 1000;
    const HUNDRED_NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterHundredDays = HUNDRED_NOW_IN_MS + HUNDRED_DAYS_IN_MS;



    const navigate = useNavigate()
    const [delivery, setDelivery] = useState(true)
    const freshArray = [
        <FreshContent>
                
                <h1 style={{fontSize: screen ? 20:50}}>Butchery & Fishery</h1>
                <FreshProduct>
                    <FreshImage src={Beef} alt="fresh"/>
                </FreshProduct>
                
               </FreshContent>,
               <FreshContent style={{backgroundColor: 'wheat'}}>
               
               <h1 style={{fontSize: screen ? 20:50}}>Drinks & Beverage</h1>
               <FreshProduct>
                   <FreshImage src={Drinks} alt="fresh"/>
               </FreshProduct>
               
              </FreshContent>,
              <FreshContent>
              
              <h1 style={{fontSize: screen ? 20:50}}>Snacks</h1>
              <FreshProduct>
                  <FreshImage src={Burger} alt="fresh"/>
              </FreshProduct>
              
             </FreshContent>

    ]

    const advertiseArray =[
        <Advertisment>
                            <Advertise1 style={{backgroundColor: 'white'}}>
                            <h1>Advertise on this space</h1>
                            </Advertise1>
                            <Advertise2 style={{backgroundColor: 'white'}}>
                            <h1>Advertise on this space</h1>
                            </Advertise2>
                        </Advertisment>,

<Advertisment>
<Advertise1 style={{backgroundColor: 'lightgray'}}>
<h1>Advertise on this space</h1>
</Advertise1>
<Advertise2 style={{backgroundColor: 'lightgray'}}>
<h1>Advertise on this space</h1>
</Advertise2>
</Advertisment>,

<Advertisment>
                            <Advertise1>
                            <h1>Advertise on this space</h1>
                            </Advertise1>
                            <Advertise2>
                            <h1>Advertise on this space</h1>
                            </Advertise2>
                        </Advertisment>,

    ]

    
    return(
        <Wrapper>
            <Content>
                <Welcome>
                    <MobileBackground>

                    </MobileBackground>
                <Word>
                <h1 style={{ marginLeft: screen? 8: 25}}><Data></Data></h1>
                <h1 style={{marginTop: screen ? 0: -70, marginLeft: screen ? 8: 25}}>At Your Door</h1>
                <h1 style={{marginTop: screen ? 0: -70, marginLeft: screen? 8: 25}}>In <span style={{color: 'rgba(255,200,1,255)'}}>10 Minutes</span></h1>
                <h2 style={{marginTop: screen ? 0:-43, marginLeft: screen? 8: 25}}>The future of Supermarkets is here!</h2>
                <Play><img src={PlayStore} style={{
                    width: 200,
                    cursor: 'pointer'
                }} alt="app"/>
                <img src={AppStore} style={{
                    width: 200,
                    cursor: 'pointer'
                }} alt="app"/>
                </Play>
               </Word>
               <PhoneContent>
                <FirstDot></FirstDot>
                <PhoneContainer>
                <Phone src={PhoneMockup} alt="phone"/>
                </PhoneContainer>
                <SecondDot></SecondDot>
               </PhoneContent>
               {screen ? <h3 style={{marginLeft: '10%'}}>The future of supermarket is here</h3>: null}
               <PlayMobile>
               <img src={PlayStore} style={{
                    width: 150,
                    cursor: 'pointer'
                }} alt="app"/>
                <img src={AppStore} style={{
                    width: 150,
                    cursor: 'pointer'
                }} alt="app"/>
               </PlayMobile>
                </Welcome>

<Categories>
    <h1 style={{textAlign: 'center', textDecoration: 'underline 5px rgba(255,200,1,255)'}}>Our Categories</h1>
    <CategoryContent>
        <Product onClick={()=>navigate("/Groceries")}>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Groceries} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Groceries</h3>
        </Product>
        <Product onClick={()=>navigate('/Electronics')}>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Electronics} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Electronics</h3>
        </Product>
        <Product onClick={()=>navigate('/pharm-App')}>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={PharmApp} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>PharmApp</h3>
        </Product>
        <Product onClick={()=>navigate('/Cosmetics')}>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Cosmetics} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Cosmetics</h3>
        </Product>
        <Product onClick={()=>navigate('/LPG-gas')}>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={LPG} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>LPG Gas</h3>
        </Product>
        <Product onClick={()=>navigate("/Blink-Cafe")}>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Cafe} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>BlinkCafe</h3>
        </Product>
        <Product>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Last} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Last Mile Delivery</h3>
        </Product>
        <Product>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Kitchen} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Kitchen</h3>
        </Product>
        <Product>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Catering} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Catering</h3>
        </Product>
        <Product>
            <ProductContent>
               <h1 style={{marginTop: 40}}>Weekly Offers!</h1>
            </ProductContent>
            <h3>&nbsp;</h3>
        </Product>
    </CategoryContent>
</Categories>

<EveryDay>
    <EveryDayItem style={{backgroundColor: '#f0e8d4'}}>
        <ItemContent>
            <h3>Everyday Fresh & Clean with Our Products</h3>
            
            <ItemButton>Shop Now &#x2192;</ItemButton>
        </ItemContent>
        <ItemImage src={Groceries}/>
        
    </EveryDayItem>

    <EveryDayItem style={{backgroundColor: '#f2e8e7'}}>
    <ItemContent>
            <h3>Make your Breakfast Healthy and Easy</h3>
            
            <ItemButton>Shop Now &#x2192;</ItemButton>
        </ItemContent>
        <ItemImage src={Cafe}/>
        </EveryDayItem>

        <EveryDayItem style={{backgroundColor: '#e7eaf3'}}>
        <ItemContent>
            <h3>The best Organic Products Online</h3>
            
            <ItemButton>Shop Now &#x2192;</ItemButton>
        </ItemContent>
        <ItemImage src={Catering}/>
        </EveryDayItem>
</EveryDay>
<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 70}}>
<h1>Offer</h1>
<div style={{display: 'flex'}}>
    <h3 style={{color: 'rgba(255,200,1,255)', marginLeft: 5, marginRight: 5, fontWeight: '400'}}>All</h3>
    <h3 style={{marginLeft: 5, marginRight: 5, fontWeight: '400'}}>BlinkCafe</h3>
    <h3 style={{marginLeft: 5, marginRight: 5, fontWeight: '400'}}>Groceries</h3>
    <h3 style={{marginLeft: 5, marginRight: 5, fontWeight: '400'}}>Electronics</h3>
    <h3 style={{marginLeft: 5, marginRight: 5, fontWeight: '400'}}>Pharm App</h3>
    <h3 style={{marginLeft: 5, marginRight: 5, fontWeight: '400'}}>Cosmetics</h3>
</div>
</div>

<OfferContent ref={popularElement}>
<Marquee gradient={false} speed={40} play={true}>
<Offer>
        <Badge>
            Hot
        </Badge>
    <OfferImageContent>
                <OfferImage src={Cafe}/>
    </OfferImageContent>
    <h6 style={{color: 'gray'}}>Snack</h6>
    <h2 style={{marginTop: -15}}>Blink Cafe</h2>
    <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>(4.0)</h3>
    </div>
    <h4 style={{marginTop: -15}}>By <span style={{color: 'rgba(255,200,1,255)'}}>Blink</span></h4>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
        <h3>Ksh 3,500</h3>
        <OfferButton>
        &#128722; Add
        </OfferButton>
    </div>
    <h5 style={{marginTop: -20, color: 'gray', textDecoration: 'line-through'}}>Ksh 5,500</h5>
    
    </Offer>
    <Offer>
        <Badge>
            Hot
        </Badge>
    <OfferImageContent>
                <OfferImage src={Groceries}/>
    </OfferImageContent>
    <h6 style={{color: 'gray'}}>Snack</h6>
    <h2 style={{marginTop: -15}}>Groceries</h2>
    <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>(4.0)</h3>
    </div>
    <h4 style={{marginTop: -15}}>By <span style={{color: 'rgba(255,200,1,255)'}}>Blink</span></h4>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
        <h3>Ksh 3,500</h3>
        <OfferButton>
        &#128722; Add
        </OfferButton>
    </div>
    <h5 style={{marginTop: -20, color: 'gray', textDecoration: 'line-through'}}>Ksh 5,500</h5>
    
    </Offer>
    <Offer>
        <Badge>
            Hot
        </Badge>
    <OfferImageContent>
                <OfferImage src={LPG}/>
    </OfferImageContent>
    <h6 style={{color: 'gray'}}>Snack</h6>
    <h2 style={{marginTop: -15}}>LPG Gas</h2>
    <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>(4.0)</h3>
    </div>
    <h4 style={{marginTop: -15}}>By <span style={{color: 'rgba(255,200,1,255)'}}>Blink</span></h4>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
        <h3>Ksh 3,500</h3>
        <OfferButton>
        &#128722; Add
        </OfferButton>
    </div>
    <h5 style={{marginTop: -20, color: 'gray', textDecoration: 'line-through'}}>Ksh 5,500</h5>
    
    </Offer>
    <Offer>
        <Badge>
            Hot
        </Badge>
    <OfferImageContent>
                <OfferImage src={Electronics}/>
    </OfferImageContent>
    <h6 style={{color: 'gray'}}>Snack</h6>
    <h2 style={{marginTop: -15}}>Electronics</h2>
    <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>(4.0)</h3>
    </div>
    <h4 style={{marginTop: -15}}>By <span style={{color: 'rgba(255,200,1,255)'}}>Blink</span></h4>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
        <h3>Ksh 3,500</h3>
        <OfferButton>
        &#128722; Add
        </OfferButton>
    </div>
    <h5 style={{marginTop: -20, color: 'gray', textDecoration: 'line-through'}}>Ksh 5,500</h5>
    
    </Offer>
    <Offer>
        <Badge>
            Hot
        </Badge>
    <OfferImageContent>
                <OfferImage src={Kitchen} style={{marginRight: 20}}/>
    </OfferImageContent>
    <h6 style={{color: 'gray'}}>Snack</h6>
    <h2 style={{marginTop: -15}}>Kitchen</h2>
    <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>(4.0)</h3>
    </div>
    <h4 style={{marginTop: -15}}>By <span style={{color: 'rgba(255,200,1,255)'}}>Blink</span></h4>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
        <h3>Ksh 3,500</h3>
        <OfferButton>
        &#128722; Add
        </OfferButton>
    </div>
    <h5 style={{marginTop: -20, color: 'gray', textDecoration: 'line-through'}}>Ksh 5,500</h5>
    
    </Offer>
    <Offer style={{marginRight: 250}}>
        <Badge>
            Hot
        </Badge>
    <OfferImageContent>
                <OfferImage src={Catering}/>
    </OfferImageContent>
    <h6 style={{color: 'gray'}}>Snack</h6>
    <h2 style={{marginTop: -15}}>Catering</h2>
    <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>&#10025;</h3>
    <h3>(4.0)</h3>
    </div>
    <h4 style={{marginTop: -15}}>By <span style={{color: 'rgba(255,200,1,255)'}}>Blink</span></h4>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
        <h3>Ksh 3,500</h3>
        <OfferButton>
        &#128722; Add
        </OfferButton>
    </div>
    <h5 style={{marginTop: -20, color: 'gray', textDecoration: 'line-through'}}>Ksh 5,500</h5>
    
    </Offer>
</Marquee>

    

</OfferContent>
<h2 style={{
                    textDecoration: '3px solid underline #FFC801',
                    marginTop: 50
                }}>Deals of The Day</h2>
<DealContent style={{
    flexWrap: screen ? 'nowrap': 'wrap',
    overflowX: screen ? 'scroll': '-moz-initial'
}}>
                    <Deal style={{
                        backgroundImage: `url(${DealBackground})`,
                        marginRight: screen ? 60:0
                    }}>
                        <img src={Heart} style={{width: 40, height: 40, marginTop: 20, marginBottom: -50, marginLeft: '80%'}} alt="heart"/>
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
                        backgroundImage: `url(${DealBackground2})`,
                        marginRight: screen ? 60:0
                    }}>
                        <img src={Heart} style={{width: 40, height: 40, marginTop: 20, marginBottom: -50, marginLeft: '80%'}} alt="heart"/>
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
                        <img src={Heart} style={{width: 40, height: 40, marginTop: 20, marginBottom: -50, marginLeft: '80%'}} alt="heart"/>
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

                <FreshCourt>
                <h1 style={{textAlign: 'center', textDecoration: 'underline 5px rgba(255,200,1,255)'}}>Fresh Court</h1>
                

              

               

               <Slider autoplay={3000}>
                {freshArray.map((slide, index) => <div>
                    <div>{slide}</div>
                </div>)}
               </Slider>

              
                </FreshCourt>
                
                    
               
            </Content>
            <Delivery>
                        <DeliveryTitle>
                            <h1>Our Delivery Areas</h1>
                            {delivery ? <ButtonMoving src={Pause} onClick={()=>setDelivery(false)}/>:
                            <ButtonMoving src={PlayButton} onClick={()=>setDelivery(true)}/>}
                            
                        </DeliveryTitle>

                       <Marquee gradient={false} speed={120} play={delivery}>
                        <h1 style={{color: 'rgba(255,200,1,255)', fontSize: screen? 25: 85, marginRight: 70, marginLeft: 70}}>KILELESHWA</h1>
                        <h1 style={{color: 'rgba(255,200,1,255)', fontSize: screen? 25: 85, marginRight: 70, marginLeft: 70}}>LAVINGTON</h1>
                        <h1 style={{color: 'rgba(255,200,1,255)', fontSize: screen? 25: 85, marginRight: 70, marginLeft: 70}}>HURLINGHAM</h1>
                        <h1 style={{color: 'rgba(255,200,1,255)', fontSize: screen? 25: 85, marginRight: 70, marginLeft: 70}}>KILIMANI</h1>
                       </Marquee>
                    </Delivery>

                    <Content>
                        <MapContent>
                    <MapImage src={Map}/>
                    <MapDescription>
                        <div>
                            <h3>1. Westlands</h3>
                            <h3 style={{marginTop: -15, color: 'gray', fontWeight: '300'}}>2. Dagoretti South</h3>
                            <h3 style={{marginTop: -15, color: 'gray', fontWeight: '300'}}>3. Lang'ata</h3>
                            <h3 style={{marginTop: -15, color: 'gray', fontWeight: '300'}}>4. Kibra</h3>
                            <h3 style={{marginTop: -15, color: 'gray', fontWeight: '300'}}>5. Dagoretti North</h3>
                            <h3 style={{marginTop: -15, color: 'gray', fontWeight: '300'}}>6. Starehe</h3>
                            <h3 style={{marginTop: -15, color: 'gray', fontWeight: '300'}}>7. Kamukunji</h3>
                            <h3 style={{marginTop: -15, color: 'gray', fontWeight: '300'}}>8. Mathare</h3>
                            <h3 style={{marginTop: -15}}>9. Ruaraka</h3>
                        </div>
                        <div>
                            <h3 style={{color: 'gray', fontWeight: '300'}}>10. Roysambu</h3>
                            <h3 style={{marginTop: -15, color: 'gray', fontWeight: '300'}}>11. Embakasi North</h3>
                            <h3 style={{marginTop: -15, color: 'gray', fontWeight: '300'}}>12. Embakasi Central</h3>
                            <h3 style={{marginTop: -15, color: 'gray', fontWeight: '300'}}>13. Embakasi West</h3>
                            <h3 style={{marginTop: -15, color: 'gray', fontWeight: '300'}}>14. Kasarani</h3>
                            <h3 style={{marginTop: -15, color: 'gray', fontWeight: '300'}}>15. Embakasi East</h3>
                            <h3 style={{marginTop: -15, color: 'gray', fontWeight: '300'}}>16. Embakasi South</h3>
                            <h3 style={{marginTop: -15, color: 'gray', fontWeight: '300'}}>17. Makadara</h3>
                            
                        </div>
                    </MapDescription>
                        </MapContent>
                        <Open>
                            <div>
                            <h1 style={{fontSize: screen ? 22: 40}}>Your Area Not Listed?</h1>
                            <h1 style={{fontSize: screen ? 22: 40}}>Let us know where to find you.</h1>
                            </div>
                        <InputContent>
                        <OpenInput type="text" placeholder="First Name"/>
                        <OpenInput type="text" placeholder="Last Name"/>
                        <OpenInput type="text" placeholder="Location Name"/>
                        <OpenInput type="email" placeholder="Email Name"/>
                        <OpenInput type="number" placeholder="Phone Number"/>
                        <OpenButton>Sign Up to get notified</OpenButton>
                        </InputContent>
                        </Open>

                        <div style={{marginTop: 100}}>
                        <Slider autoplay={3000}>
                {advertiseArray.map((slides, index) => <div style={{height: 400}}>
                    {slides}
                </div>)}
               </Slider>
                        </div>

                       
                        
                    </Content>
                     <Order>
                            <OrderWord>
                                <h1>1. ORDER</h1>
                                <h2 style={{marginTop: screen ? 0: -15}}>Buy what you need.</h2>
                                <h1>2. CHECKOUT</h1>
                                <h2 style={{marginTop: screen ? 0: -15}}>Complete your payment.</h2>
                                <h1>3. WAIT</h1>
                                <h2 style={{marginTop: screen ? 0: -15}}>Our legendary rides will be at your door step in 10 mins.</h2>
                            </OrderWord>
                            <Hand src={PhoneHand}/>
                    </Order>

                    <Content>
                    <h1 style={{textAlign: 'center', textDecoration: 'underline 5px rgba(255,200,1,255)', marginTop: 100}}>Why Blink?</h1>
                    <Why>
                        <WhyContent>
                            <WhyImage src={Icon1}/>
                            <div>
                            <h2>Supermarket Prices</h2>
                            <h3>Over 3,000 items direct to your doorstep at normal supermarket prices</h3>
                            </div>
                            
                        </WhyContent>
                        <WhyContent>
                            <WhyImage src={Icon2}/>
                            <div>
                            <h2>Ultrafast Delivery</h2>
                            <h3>Timing is everything! We will be at our doorstep before you know it.</h3>
                            </div>
                            
                        </WhyContent>
                        <WhyContent>
                            <WhyImage src={Icon3}/>
                            <div>
                            <h2>Environmental Friendly</h2>
                            <h3>Our decisions and goals towards becoming carbon negative</h3>
                            </div>
                            
                        </WhyContent>
                    </Why>
                    </Content>
                    <Ads style={{
                        backgroundImage: `url(${Component48})`
                    }}>
                        <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
                        <AdsContent style={{marginLeft: 40}}>
                            <h1>Build your brand with us!</h1>
                           
                        </AdsContent>
                        <AdsContent style={{marginRight: 40}}>
                            <h1>Advertise with us!</h1>
                        </AdsContent>
                        </div>
                        <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
                        <AdsContent style={{marginLeft: 40}}>
                        <h3>Promote your products within the blink app, across our marketing channels, and through our store & rider network</h3>
                           
                        </AdsContent>
                        <AdsContent style={{marginRight: 40}}>
                        <h3>Advertise on our website and app</h3>
                        </AdsContent>
                        </div>

                        <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 20}}>
                        <AdsContent style={{marginLeft: 40}}>
                        <AdsButton>More Info</AdsButton>
                           
                        </AdsContent>
                        <AdsContent style={{marginRight: 40}}>
                        <AdsButton>More Info</AdsButton>
                        </AdsContent>
                        </div>
                        

                       
                    </Ads>

                    <Career>
                        <img src={DeliveryMan} alt="delivery" style={{width: '40%'}}/>
                        <CareerContent>
                        <ContentCareer>
                        <h1>Career Opportunities!</h1>
                        <CareerButton onClick={()=>navigate('/careers')}>Apply</CareerButton>
                        </ContentCareer>
                        <hr/>
                        <ContentCareer2>
                            <h1>Become A Supplier</h1>
                            <CareerButton2 onClick={()=>navigate('/suppliers')}>Apply</CareerButton2>
                        </ContentCareer2>
                        <hr/>
                        <ContentCareer>
                        <h1>Become A Delivery Agent</h1>
                        <CareerButton onClick={()=>navigate('/delivery-agents')}>Apply</CareerButton>
                        </ContentCareer>
                        <hr/>
                        </CareerContent>
                    </Career>
                    <Content>
                        <Download>
                    <DownloadWord>
                        <h1>Download Blink App Now.</h1>
                        <h2>The future of supermarkets is here.</h2>
                        <h2 style={{marginTop: -20}}>Download now and start shopping!</h2>
                        <Play><img src={PlayStore} style={{
                    width: 200,
                    cursor: 'pointer'
                }} alt="app"/>
                <img src={AppStore} style={{
                    width: 200,
                    cursor: 'pointer'
                }} alt="app"/>
                </Play>
                    </DownloadWord>
                    <PhoneMock src={PhoneMockup2}/>
                        </Download>
                        
                    </Content>

        </Wrapper>
    )
}

export default Home;