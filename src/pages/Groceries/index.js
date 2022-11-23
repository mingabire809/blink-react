import React, {useRef, useState, useEffect} from "react";
import ProgressBar from "../../components/ProgressBar";
import { BannerContent, BannerImage, Content, GroceryContent,DealButton, WelcomeBanner, Grocery,Wrapper, WhiteContent, GroceryImage, DealContent, Deal, UnderDeal, PopularContent, Popular, BestSaleCover, BestSaleCoverButton,BestSaleContent, BestSale, BestSaleBadge, GroceryButton, SearchContent, SearchInput, SearchButton } from "./Groceries.styles";
import Grocery0 from '../../assets/images/grocerybanner.png'
import Grocery1 from '../../assets/images/grocery1.png'
import Grocery2 from '../../assets/images/grocery2.png'
import Grocery3 from '../../assets/images/grocery3.png'
import Grocery4 from '../../assets/images/grocery4.png'
import Grocery5 from '../../assets/images/grocery5.png'
import Grocery6 from '../../assets/images/grocery6.png'
import Grocery7 from '../../assets/images/grocery7.png'
import Cart from '../../assets/images/cart.png'
import WhiteCart from '../../assets/images/whitecart.png'
import DealBackground from '../../assets/images/dealbackground1.png'
import DealBackground2 from '../../assets/images/dealbackground2.png'
import DealBackground3 from '../../assets/images/dealbackground3.png'
import Meat from '../../assets/images/meatgrocery.png'
import Meat2 from '../../assets/images/meatgrocery2.png'
import Vegie from '../../assets/images/vegiegrocery.png'
import Green from '../../assets/images/greengrocery.png'
import Snack from '../../assets/images/snacksgrocery.png'
import CountdownTimer from "../../components/CountDownTimer/CountDownTimer";
import { Badge, OfferImage, OfferImageContent } from "../Home/Home.styles";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Marquee from "react-fast-marquee";
import Heart from '../../assets/images/heart.png'
import SearchButtonContent from '../../assets/images/searchbutton.png'
import Grid from '../../assets/images/grid.png'

const Groceries = ()=>{
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 515px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 515px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    const TEN_DAYS_IN_MS = 10 * 24 * 60 * 60 * 1000;
  const TEN_NOW_IN_MS = new Date().getTime();

  const dateTimeAfterTenDays = TEN_NOW_IN_MS + TEN_DAYS_IN_MS;

  const FOUR_DAYS_IN_MS = 4 * 24 * 60 * 60 * 1000;
  const FOUR_NOW_IN_MS = new Date().getTime();

  const dateTimeAfterFourDays = FOUR_NOW_IN_MS + FOUR_DAYS_IN_MS;

  const HUNDRED_DAYS_IN_MS = 100 * 24 * 60 * 60 * 1000;
  const HUNDRED_NOW_IN_MS = new Date().getTime();

  const dateTimeAfterHundredDays = HUNDRED_NOW_IN_MS + HUNDRED_DAYS_IN_MS;

  const popularElement = useRef(null)
  const bestElement = useRef(null)
  /*  const [right, setRight] = useState(0)
    const [bestRight, setBestRight] = useState(0)
    
  const scrollLeft = () => {
    setRight(right + 400)
    popularElement.current.scrollLeft = right
    
}

const scrollRight = () => {
    setRight(right - 400)
    popularElement.current.scrollLeft = right
    
}

const scrollLeft2 = () =>{
    setBestRight(bestRight + 400)
    bestElement.current.scrollLeft = bestRight
}

const scrollRight2 = () =>{
    setBestRight(bestRight - 400)
    bestElement.current.scrollLeft = bestRight
}*/

const freshArray = [
    <WelcomeBanner>
    <BannerContent>
    <h1>Fresh Vegetables Big Discount</h1>
        <h2>Save up to 50% on Your first order</h2>
    </BannerContent>
    <BannerImage src={Grocery0} alt="product"/>
</WelcomeBanner>,
<WelcomeBanner style={{backgroundColor: 'lightgray'}}>
                    <BannerContent>
                    <h1>Fresh Vegetables Big Discount</h1>
                        <h2>Save up to 50% on Your first order</h2>
                    </BannerContent>
                    <BannerImage src={Grocery0} alt="product"/>
                </WelcomeBanner>,

<WelcomeBanner style={{backgroundColor: 'lightblue'}}>
<BannerContent>
<h1>Fresh Vegetables Big Discount</h1>
    <h2>Save up to 50% on Your first order</h2>
</BannerContent>
<BannerImage src={Grocery0} alt="product"/>
</WelcomeBanner>

]
  
    return(
        <Wrapper>
            <Content>
                <SearchContent>
                    <SearchInput placeholder=" &#x1F50D; Search item..."/>
                    <SearchButton>
                        <img src={SearchButtonContent} alt="search"/>
                    </SearchButton>
                </SearchContent>
            <Slider autoplay={3000}>
                {freshArray.map((slide, index) => <div>
                    <div>{slide}</div>
                </div>)}
               </Slider>
                
                <h2 style={{
                    textDecoration: '3px solid underline red',
                    marginTop: screen ? -30:50
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
                    <Grocery style={{height: screen? 170:190, marginTop: 20}}>
                    <GroceryImage src={Grid} style={{width: '60%', marginLeft: '18%'}} alt="product"/>
                    <h2 style={{textAlign: 'center', marginTop: 0, fontWeight: '800'}}>All</h2>
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
                        backgroundImage: `url(${DealBackground2})`
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
                <h2 style={{
                    textDecoration: '3px solid underline #FFC801',
                    marginTop: screen ? 10:150
                }}>Most Popular Product</h2>
                <PopularContent ref={popularElement}>
                <Marquee gradient={false} speed={40} play={true}>
                <Popular>
                        <Badge>New</Badge>
                        <OfferImageContent style={{height: 220}}>
                            <OfferImage src={Meat}/>
                            <OfferImage src={Meat2}/>
                        </OfferImageContent>
                        <h3>Meat</h3>
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
                    </Popular>

                    <Popular>
                        <Badge style={{backgroundColor: 'red'}}>Sale</Badge>
                        <OfferImageContent style={{height: 220}}>
                            <OfferImage src={Snack} style={{marginLeft: '22%', marginTop: 25}}/>
                            
                        </OfferImageContent>
                        <h3>Snacks</h3>
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
                    </Popular>
                    <Popular>
                        
                        <OfferImageContent style={{height: 220, marginTop: 30}}>
                            <OfferImage src={Green} style={{marginTop: 20}}/>
                            
                        </OfferImageContent>
                        <h3>Green</h3>
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
                    </Popular>

                    <Popular>
                        <Badge style={{backgroundColor: '#FFC801'}}>Hot</Badge>
                        <OfferImageContent style={{height: 220}}>
                            <OfferImage src={Vegie} style={{marginTop: 20}}/>
                            
                        </OfferImageContent>
                        <h3>Vegie</h3>
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
                    </Popular>

                    <Popular>
                        <Badge style={{backgrooundColor: 'D11AFF'}}>-14%</Badge>
                        <OfferImageContent style={{height: 220}}>
                            <OfferImage src={Meat}/>
                            <OfferImage src={Meat2}/>
                        </OfferImageContent>
                        <h3>Meat</h3>
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
                    </Popular>
                </Marquee>
                    
                </PopularContent>
                {screen ? null:<h2 style={{
                    textDecoration: '3px solid underline #FFC801',
                    marginTop: 100,
                }}>Daily Best Sales</h2>}
                
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <BestSaleCover>
                    <div style={{marginLeft: 'auto', marginRight: 'auto', width: '83%'}}>
                    <h1>Bring Health</h1>
                    <h1 style={{marginTop: -20}}>to</h1>
                    <h1 style={{marginTop: -20}}>Your House</h1>
                    </div>

                    <BestSaleCoverButton>Shop Now</BestSaleCoverButton>
                   
                </BestSaleCover>
                <BestSaleContent ref={bestElement}>
                <Marquee gradient={false} speed={40} play={true}>
                <BestSale>
                    <BestSaleBadge>Sale</BestSaleBadge>
                    <OfferImageContent style={{ height: 180, overflow: 'hidden', marginTop: -13}}>
                        <OfferImage src={Snack}/>
                    </OfferImageContent>
                    <h3>Snack</h3>
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
                            <div style={{display: 'flex', alignItems: 'center', marginTop: -15, width: 250}}>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h3>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h3>
                                
                            </div>
                            <ProgressBar bgcolor="orange" progress='70' height={5}/>
                            <h5 style={{marginTop: 0}}>Sold 57/120</h5>
                            <GroceryButton>Add to cart <img src={WhiteCart} style={{marginLeft: 10}} alt="cart"/></GroceryButton>
                    </BestSale>

                    <BestSale>
                    <BestSaleBadge>Sale</BestSaleBadge>
                    <OfferImageContent style={{ height: 180, overflow: 'hidden', marginTop: -13}}>
                        <OfferImage src={Snack}/>
                    </OfferImageContent>
                    <h3>Snack</h3>
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
                            <div style={{display: 'flex', alignItems: 'center', marginTop: -15, width: 250}}>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h3>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h3>
                                
                            </div>
                            <ProgressBar bgcolor="orange" progress='70' height={5}/>
                            <h5 style={{marginTop: 0}}>Sold 57/120</h5>
                            <GroceryButton>Add to cart <img src={WhiteCart} style={{marginLeft: 10}} alt="cart"/></GroceryButton>
                    </BestSale>

                    <BestSale>
                    <BestSaleBadge>Sale</BestSaleBadge>
                    <OfferImageContent style={{ height: 180, overflow: 'hidden', marginTop: -13}}>
                        <OfferImage src={Snack}/>
                    </OfferImageContent>
                    <h3>Snack</h3>
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
                            <div style={{display: 'flex', alignItems: 'center', marginTop: -15, width: 250}}>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h3>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h3>
                                
                            </div>
                            <ProgressBar bgcolor="orange" progress='70' height={5}/>
                            <h5 style={{marginTop: 0}}>Sold 57/120</h5>
                            <GroceryButton>Add to cart <img src={WhiteCart} style={{marginLeft: 10}} alt="cart"/></GroceryButton>
                    </BestSale>

                    <BestSale>
                    <BestSaleBadge>Sale</BestSaleBadge>
                    <OfferImageContent style={{ height: 180, overflow: 'hidden', marginTop: -13}}>
                        <OfferImage src={Snack}/>
                    </OfferImageContent>
                    <h3>Snack</h3>
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
                            <div style={{display: 'flex', alignItems: 'center', marginTop: -15, width: 250}}>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h3>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h3>
                                
                            </div>
                            <ProgressBar bgcolor="orange" progress='70' height={5}/>
                            <h5 style={{marginTop: 0}}>Sold 57/120</h5>
                            <GroceryButton>Add to cart <img src={WhiteCart} style={{marginLeft: 10}} alt="cart"/></GroceryButton>
                    </BestSale>

                    <BestSale>
                    <BestSaleBadge>Sale</BestSaleBadge>
                    <OfferImageContent style={{ height: 180, overflow: 'hidden', marginTop: -13}}>
                        <OfferImage src={Snack}/>
                    </OfferImageContent>
                    <h3>Snack</h3>
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
                            <div style={{display: 'flex', alignItems: 'center', marginTop: -15, width: 250}}>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h3>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h3>
                                
                            </div>
                            <ProgressBar bgcolor="orange" progress='70' height={5}/>
                            <h5 style={{marginTop: 0}}>Sold 57/120</h5>
                            <GroceryButton>Add to cart <img src={WhiteCart} style={{marginLeft: 10}} alt="cart"/></GroceryButton>
                    </BestSale>
                </Marquee>
                   
                 
                    
                </BestSaleContent>
                </div>
                
            </Content>
        </Wrapper>
    )
}
export default Groceries;