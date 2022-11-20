import React from "react";
import { BrandButton, BrandContent, Brand, Content, Wrapper, YellowContent, BrandImage, BrandImageContent, AdvertisementBanner, TextContent, RecommendedContent, Recommended, DealButton, Arrival } from "./Electronics.styles";
import { WelcomeBanner, Button, BannerButton, BannerImage } from "../LPG/LPG.styles";
import Welcome from '../../assets/images/lpgbanner.png'
import { BannerContent, CategoriesContent, Product, ProductImage, ProductWhite } from "../PharmApp/PharmApp.styles";
import Grid from '../../assets/images/grid.png'
import HeadPhone from '../../assets/images/headphones.png'
import Charger from '../../assets/images/charger.png'
import Mouse from '../../assets/images/mouse.png'
import Duracell from '../../assets/images/Duracell.png'
import Screen from '../../assets/images/screen.png'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Sony from '../../assets/images/Sony.png'
import Hp from '../../assets/images/hp.png'
import Apple from '../../assets/images/Apple.png'
import Samsung from '../../assets/images/Samsung.png'
import ElectronicBanner from '../../assets/images/ElectronicAdvertisement.png'
import Rectangle6 from '../../assets/images/Rectangle48.png'
import { Badge, OfferImage, OfferImageContent } from "../Home/Home.styles";
import Cart from '../../assets/images/cart.png'
import Marquee from "react-fast-marquee";
import Arrival1 from '../../assets/images/Arrival1.png'
import Arrival2 from '../../assets/images/Arrival2.png'
import Arrival3 from '../../assets/images/Arrival3.png'
import Arrival4 from '../../assets/images/Arrival4.png'
import Fridge from '../../assets/images/fridge.png'
import Kettle from '../../assets/images/kettle.png'


const Electronics = () =>{
    const freshArray = [
        <WelcomeBanner style={{backgroundColor: '#EBD8FF'}}>
            
        <BannerContent>
            <h1>Don't Miss out on Amazing Offers</h1>
            <h2>Save up to 50% on Your first order</h2>
            <BannerButton>Shop Now</BannerButton>
        </BannerContent>
    

<BannerImage src={Welcome}/>
</WelcomeBanner>,

<WelcomeBanner style={{backgroundColor: 'lightgray'}}>
            
            <BannerContent>
                <h1>Don't Miss out on Amazing Offers</h1>
                <h2>Save up to 50% on Your first order</h2>
                <BannerButton>Shop Now</BannerButton>
            </BannerContent>
        
    
    <BannerImage src={Welcome}/>
</WelcomeBanner>,
<WelcomeBanner style={{backgroundColor: 'lightblue'}}>
            
                    <BannerContent>
                        <h1>Don't Miss out on Amazing Offers</h1>
                        <h2>Save up to 50% on Your first order</h2>
                        <BannerButton>Shop Now</BannerButton>
                    </BannerContent>
                
            
            <BannerImage src={Welcome}/>
        </WelcomeBanner>
    
    ]

    const AdvertiseArray = [
        <AdvertisementBanner style={{backgroundImage: `url(${ElectronicBanner})`}}>
            <TextContent>
                <h3>20% OFF</h3>
            </TextContent>
            </AdvertisementBanner>,
            <AdvertisementBanner style={{backgroundImage: `url(${Rectangle6})`}}>
            
            </AdvertisementBanner>
    ]
    return(
        <Wrapper>
            <Content>
            <Slider autoplay={3000}>
                {freshArray.map((slide, index) => <div>
                    <div>{slide}</div>
                </div>)}
               </Slider>
        <Button>Shop by Category</Button>

        <CategoriesContent>
                <Product style={{backgroundColor: '#FF02B8'}}>
                    <ProductImage src={HeadPhone} alt="product" style={{width: '60%', marginLeft: '20%'}}/>
                    <ProductWhite>
                        <h3>Headphones</h3>
                    </ProductWhite>
                </Product>
                <Product>
                <ProductImage src={Charger} style={{width: '65%', marginLeft: '25%'}} alt="product"/>
                    <ProductWhite>
                        <h3>Chargers</h3>
                    </ProductWhite>
                </Product>
                <Product style={{backgroundColor: '#FF02B8'}}>
                <ProductImage src={Mouse} style={{width: '95%'}}/>
                    <ProductWhite>
                        <h3>Mouse</h3>
                    </ProductWhite>
                </Product>
                <Product>
                <ProductImage src={Duracell} style={{marginTop: 0}} alt="product"/>
                    <ProductWhite>
                        <h3>Batteries</h3>
                    </ProductWhite>
                </Product>
                <Product>
                <ProductImage src={Screen} style={{width: '60%', marginLeft: '19%'}} alt="product"/>
                    <ProductWhite>
                        <h3>Screen Protectors</h3>
                    </ProductWhite>
                </Product>
                <Product style={{backgroundColor: '#02FF86'}}>
                <ProductImage src={Welcome}  alt="product"/>
                    <ProductWhite>
                        <h3>Kitchen Appliances</h3>
                    </ProductWhite>
                </Product>
               
                <Product style={{height: 190, marginTop: 0, backgroundColor: '#C7E7FF'}}>
                    <ProductImage src={Grid} style={{width: '60%', marginLeft: '18%'}} alt="product"/>
                    <h2 style={{textAlign: 'center', marginTop: 0, fontWeight: '800'}}>All</h2>
                </Product>
            </CategoriesContent>

            <BrandButton>Shop by Brands</BrandButton>
            <BrandContent>

                <Brand>
                <BrandImageContent>
                <BrandImage src={Sony}/>
                </BrandImageContent>
                
                <YellowContent>
                    Sony
                </YellowContent>
                </Brand>

                <Brand>
                <BrandImageContent>
                <BrandImage src={Hp} style={{marginTop: 0}}/>
                </BrandImageContent>
                
                <YellowContent>
                    HP
                </YellowContent>
                </Brand>

                <Brand>
                <BrandImageContent>
                <BrandImage src={Apple} style={{marginTop: 0, width: '75%', marginLeft: '10%'}}/>
                </BrandImageContent>
                
                <YellowContent>
                    Apple
                </YellowContent>
                </Brand>

                <Brand>
                <BrandImageContent>
                <BrandImage src={Samsung} style={{ width: '86%', marginLeft: '7%'}}/>
                </BrandImageContent>
                
                <YellowContent>
                    Samsung
                </YellowContent>
                </Brand>

                <Product style={{height: 190, marginTop: 20, backgroundColor: '#C7E7FF'}}>
                    <ProductImage src={Grid} style={{width: '60%', marginLeft: '18%'}} alt="product"/>
                    <h2 style={{textAlign: 'center', marginTop: 0, fontWeight: '800'}}>All</h2>
                </Product>
                
            </BrandContent>

            <h2 style={{marginTop: 100}}>Advertise Here</h2>
            <Slider autoplay={3000}>
                {AdvertiseArray.map((slide, index) => <div>
                    <div>{slide}</div>
                </div>)}
               </Slider>
                    
               <h2 style={{marginTop: 100}}>Top Recommended</h2>  
                   
            <RecommendedContent>
            <Marquee gradient={false} speed={40} play={true}>
            <Recommended>
                    <Badge>New</Badge>
                    <OfferImageContent style={{height: 220}}>
                        <OfferImage src={HeadPhone} alt="product"/>
                    </OfferImageContent>
                    <h3>HeadPhone</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div style={{
                                display: 'flex',
                                color: '#EA9414',
                                marginTop: -30
                            }}>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9734;</h3>
                            </div>
                            <h3 style={{marginTop: -20}}>By Nestle</h3>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: -15, width: 300}}>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h3>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h3>
                                <DealButton style={{height: 40, width: 80, fontSize: 20, borderRadius: 20, marginLeft: 70}}>
                                    Add
                                    <img src={Cart} style={{width: 23, height:23, marginLeft: 5}} alt="cart"/>
                                </DealButton>
                            </div>
                </Recommended>

                <Recommended>
                    <Badge style={{backgroundColor: 'red'}}>Sale</Badge>
                    <OfferImageContent style={{height: 220}}>
                        <OfferImage src={Charger} alt="product"/>
                    </OfferImageContent>
                    <h3>Charges</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div style={{
                                display: 'flex',
                                color: '#EA9414',
                                marginTop: -30
                            }}>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9734;</h3>
                            </div>
                            <h3 style={{marginTop: -20}}>By Nestle</h3>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: -15, width: 300}}>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h3>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h3>
                                <DealButton style={{height: 40, width: 80, fontSize: 20, borderRadius: 20, marginLeft: 70}}>
                                    Add
                                    <img src={Cart} style={{width: 23, height:23, marginLeft: 5}} alt="cart"/>
                                </DealButton>
                            </div>
                </Recommended>


                <Recommended>
                    <Badge style={{backgroundColor: '#1AFFD6'}}>New</Badge>
                    <OfferImageContent style={{height: 220}}>
                        <OfferImage src={Mouse} alt="product"/>
                    </OfferImageContent>
                    <h3>Mouse</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div style={{
                                display: 'flex',
                                color: '#EA9414',
                                marginTop: -30
                            }}>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9734;</h3>
                            </div>
                            <h3 style={{marginTop: -20}}>By Nestle</h3>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: -15, width: 300}}>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h3>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h3>
                                <DealButton style={{height: 40, width: 80, fontSize: 20, borderRadius: 20, marginLeft: 70}}>
                                    Add
                                    <img src={Cart} style={{width: 23, height:23, marginLeft: 5}} alt="cart"/>
                                </DealButton>
                            </div>
                </Recommended>

                <Recommended>
                    <Badge style={{backgroundColor: '#FF1ABF'}}>Sale</Badge>
                    <OfferImageContent style={{height: 220}}>
                        <OfferImage src={Duracell} alt="product"/>
                    </OfferImageContent>
                    <h3>Batteries</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div style={{
                                display: 'flex',
                                color: '#EA9414',
                                marginTop: -30
                            }}>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9734;</h3>
                            </div>
                            <h3 style={{marginTop: -20}}>By Nestle</h3>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: -15, width: 300}}>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h3>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h3>
                                <DealButton style={{height: 40, width: 80, fontSize: 20, borderRadius: 20, marginLeft: 70}}>
                                    Add
                                    <img src={Cart} style={{width: 23, height:23, marginLeft: 5}} alt="cart"/>
                                </DealButton>
                            </div>
                </Recommended>

                <Recommended style={{marginRight: 500}}>
                    <Badge>New</Badge>
                    <OfferImageContent style={{height: 220}}>
                        <OfferImage src={Screen} alt="product"/>
                    </OfferImageContent>
                    <h3>Screen</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div style={{
                                display: 'flex',
                                color: '#EA9414',
                                marginTop: -30
                            }}>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9734;</h3>
                            </div>
                            <h3 style={{marginTop: -20}}>By Nestle</h3>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: -15, width: 300}}>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h3>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h3>
                                <DealButton style={{height: 40, width: 80, fontSize: 20, borderRadius: 20, marginLeft: 70}}>
                                    Add
                                    <img src={Cart} style={{width: 23, height:23, marginLeft: 5}} alt="cart"/>
                                </DealButton>
                            </div>
                </Recommended>
            </Marquee>
                
            </RecommendedContent>

            <h2 style={{marginTop: 100}}>New Arrivals</h2>  
            <Marquee gradient={false} speed={40} play={true}>
            <Arrival src={Arrival1}/>
            <Arrival src={Arrival2}/>
            <Arrival src={Arrival3}/>
            <Arrival src={Arrival4}/>
            <Arrival src={Arrival1}/>
            <Arrival src={Arrival2}/>
            <Arrival src={Arrival3}/>
            <Arrival src={Arrival4}/>
            </Marquee>
            <h2 style={{marginTop: 100}}>Kitchen Appliances</h2> 
            <Marquee gradient={false} speed={40} play={true}>
            <Recommended>
                    <Badge>New</Badge>
                    <OfferImageContent style={{height: 220}}>
                        <OfferImage src={Kettle} alt="product"/>
                    </OfferImageContent>
                    <h3>Kettle</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div style={{
                                display: 'flex',
                                color: '#EA9414',
                                marginTop: -30
                            }}>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9734;</h3>
                            </div>
                            <h3 style={{marginTop: -20}}>By Nestle</h3>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: -15, width: 300}}>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h3>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h3>
                                <DealButton style={{height: 40, width: 80, fontSize: 20, borderRadius: 20, marginLeft: 70}}>
                                    Add
                                    <img src={Cart} style={{width: 23, height:23, marginLeft: 5}} alt="cart"/>
                                </DealButton>
                            </div>
                </Recommended>

                <Recommended>
                    <Badge style={{backgroundColor: 'red'}}>New</Badge>
                    <OfferImageContent style={{height: 220}}>
                        <OfferImage src={Fridge} alt="product"/>
                    </OfferImageContent>
                    <h3>Fridge</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div style={{
                                display: 'flex',
                                color: '#EA9414',
                                marginTop: -30
                            }}>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9734;</h3>
                            </div>
                            <h3 style={{marginTop: -20}}>By Nestle</h3>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: -15, width: 300}}>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h3>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h3>
                                <DealButton style={{height: 40, width: 80, fontSize: 20, borderRadius: 20, marginLeft: 70}}>
                                    Add
                                    <img src={Cart} style={{width: 23, height:23, marginLeft: 5}} alt="cart"/>
                                </DealButton>
                            </div>
                </Recommended>
                <Recommended>
                    <Badge>New</Badge>
                    <OfferImageContent style={{height: 220}}>
                        <OfferImage src={Kettle} alt="product"/>
                    </OfferImageContent>
                    <h3>Kettle</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div style={{
                                display: 'flex',
                                color: '#EA9414',
                                marginTop: -30
                            }}>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9734;</h3>
                            </div>
                            <h3 style={{marginTop: -20}}>By Nestle</h3>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: -15, width: 300}}>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h3>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h3>
                                <DealButton style={{height: 40, width: 80, fontSize: 20, borderRadius: 20, marginLeft: 70}}>
                                    Add
                                    <img src={Cart} style={{width: 23, height:23, marginLeft: 5}} alt="cart"/>
                                </DealButton>
                            </div>
                </Recommended>

                <Recommended style={{marginRight: 500}}>
                    <Badge style={{backgroundColor: 'red'}}>New</Badge>
                    <OfferImageContent style={{height: 220}}>
                        <OfferImage src={Fridge} alt="product"/>
                    </OfferImageContent>
                    <h3>Fridge</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div style={{
                                display: 'flex',
                                color: '#EA9414',
                                marginTop: -30
                            }}>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9734;</h3>
                            </div>
                            <h3 style={{marginTop: -20}}>By Nestle</h3>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: -15, width: 300}}>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h3>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h3>
                                <DealButton style={{height: 40, width: 80, fontSize: 20, borderRadius: 20, marginLeft: 70}}>
                                    Add
                                    <img src={Cart} style={{width: 23, height:23, marginLeft: 5}} alt="cart"/>
                                </DealButton>
                            </div>
                </Recommended>
                
            </Marquee>
            
            </Content>
        </Wrapper>
    )
}

export default Electronics;