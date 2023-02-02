import React, {useState, useEffect} from "react";

import { Content, OfferContent, SubCategories, SubcategoriesContent, Wrapper, Offer, OfferButton, OfferImage, OfferImageContent, Badge} from './GroceryDetails.styles'
import Grocery0 from '../../assets/images/grocerybanner.png'
import { WelcomeBanner, BannerContent, BannerImage } from "../Groceries/Groceries.styles";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { useLocation, useNavigate } from "react-router-dom";
import Meat from '../../assets/images/meatgrocery.png'
import Meat2 from '../../assets/images/meatgrocery2.png'

const GroceryDetails = ()=>{
    const navigate = useNavigate()
    const location = useLocation()

    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 515px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 515px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);

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
            <Slider autoplay={3000} previousButton={false} nextButton={false}>
                {freshArray.map((slide, index) => <div>
                    <div>{slide}</div>
                </div>)}
               </Slider>

               <SubcategoriesContent>
                <SubCategories style={{
                    backgroundColor: '#EA9414',
            
                }}>
                    <h3>Fruits & Vegies</h3>
                </SubCategories>

                <SubCategories>
                    <h3>Meat & Fish</h3>
                </SubCategories>

                <SubCategories>
                    <h3>Bakery</h3>
                </SubCategories>

                <SubCategories>
                    <h3>Beverage</h3>
                </SubCategories>

                <SubCategories>
                    <h3>Milk & Yoghurt</h3>
                </SubCategories>

                <SubCategories>
                    <h3>Snacks</h3>
                </SubCategories>

                <SubCategories>
                    <h3>Eggs & Poutry</h3>
                </SubCategories>
               </SubcategoriesContent>

               <OfferContent>
               <Offer>
        
        <OfferImageContent>
                    <OfferImage src={Grocery0} style={{width: screen ? '100%': 200, marginTop: 50}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Green</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
        
        <OfferImageContent>
                    <OfferImage src={Grocery0} style={{width:screen ? '100%':  200, marginTop: 50}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Green</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
        
        <OfferImageContent>
                    <OfferImage src={Grocery0} style={{width:screen ? '100%':  200, marginTop: 50}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Green</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
        
        <OfferImageContent>
                    <OfferImage src={Grocery0} style={{width: screen ? '100%': 200, marginTop: 50}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Green</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
        
        <OfferImageContent>
                    <OfferImage src={Grocery0} style={{width: screen ? '100%': 200, marginTop: 50}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Green</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
        
        <OfferImageContent>
                    <OfferImage src={Grocery0} style={{width: screen ? '100%': 200, marginTop: 50}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Green</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
        
        <OfferImageContent>
                    <OfferImage src={Grocery0} style={{width: screen ? '100%': 200, marginTop: 50}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Green</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        
               </OfferContent>

               <h2>Meat & Fish</h2>

               <OfferContent>
               <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        
               </OfferContent>

               <h2>Beverage</h2>

               <OfferContent>
               <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        
               </OfferContent>

               <h2>Milk & Yoghurt</h2>

               <OfferContent>
               <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        
               </OfferContent>

               <h2>Snacks</h2>

               <OfferContent>
               

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>
               </OfferContent>

               <h2>Eggs & Pourtly</h2>

               <OfferContent>
               <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={Meat}/>
                    <OfferImage src={Meat2} style={{marginLeft: 0}}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Meat</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Nestle</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        
               </OfferContent>
            </Content>
        </Wrapper>
    )
}

export default GroceryDetails;