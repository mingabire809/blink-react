import React, {useState} from "react";
import { Categories, CategoryContent, Content, Data, FirstDot, Open,FreshContent, FreshCourt, FreshProduct, ImageCategory, Phone, PhoneContainer, PhoneContent, Play, Product, ProductContent, SecondDot, Welcome, WhiteContent, Word, Wrapper, FreshImage, Delivery, DeliveryTitle, ButtonMoving, MapContent, MapImage, MapDescription, InputContent, OpenInput, OpenButton, Advertisment, Advertise1, Advertise2 } from "./Home.styles";
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


const Home = () =>{
    const [delivery, setDelivery] = useState(true)
    const freshArray = [
        <FreshContent>
                
                <h1 style={{fontSize: 50}}>Butchery & Fishery</h1>
                <FreshProduct>
                    <FreshImage src={Beef} alt="fresh"/>
                </FreshProduct>
                
               </FreshContent>,
               <FreshContent style={{backgroundColor: 'wheat'}}>
               
               <h1 style={{fontSize: 50}}>Drinks & Beverage</h1>
               <FreshProduct>
                   <FreshImage src={Drinks} alt="fresh"/>
               </FreshProduct>
               
              </FreshContent>,
              <FreshContent>
              
              <h1 style={{fontSize: 50}}>Snacks</h1>
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
                <Word>
                <h1 style={{ marginLeft: 25}}><Data></Data></h1>
                <h1 style={{marginTop: -70, marginLeft: 25}}>At Your Door</h1>
                <h1 style={{marginTop: -70, marginLeft: 25}}>In <span style={{color: 'rgba(255,200,1,255)'}}>10 Minutes</span></h1>
                <h2 style={{marginTop: -43, marginLeft: 25}}>The future of Supermarkets is here!</h2>
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
                </Welcome>

<Categories>
    <h1 style={{textAlign: 'center', textDecoration: 'underline 5px rgba(255,200,1,255)'}}>Our Categories</h1>
    <CategoryContent>
        <Product>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Groceries} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Groceries</h3>
        </Product>
        <Product>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Electronics} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Electronics</h3>
        </Product>
        <Product>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={PharmApp} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>PharmApp</h3>
        </Product>
        <Product>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Cosmetics} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Cosmetics</h3>
        </Product>
        <Product>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={LPG} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>LPG Gas</h3>
        </Product>
        <Product>
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

                       <Marquee gradient={false} speed={45} play={delivery}>
                        <h1 style={{color: 'rgba(255,200,1,255)', fontSize: 85, marginRight: 70, marginLeft: 70}}>KILELESHWA</h1>
                        <h1 style={{color: 'rgba(255,200,1,255)', fontSize: 85, marginRight: 70, marginLeft: 70}}>LAVINGTON</h1>
                        <h1 style={{color: 'rgba(255,200,1,255)', fontSize: 85, marginRight: 70, marginLeft: 70}}>HURLINGHAM</h1>
                        <h1 style={{color: 'rgba(255,200,1,255)', fontSize: 85, marginRight: 70, marginLeft: 70}}>KILIMANI</h1>
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
                            <h1 style={{fontSize: 40}}>Let Us Know Where Blink Should Open Next</h1>
                            <h1 style={{fontSize: 40}}>LET'S VOTE!</h1>
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

        </Wrapper>
    )
}

export default Home;