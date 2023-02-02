import React from "react";
import { Content, OfferContent, SubCategories, SubcategoriesContent, Wrapper, Offer, OfferButton, OfferImage, OfferImageContent, Badge  } from "./Vitamins.styles";
import WelcomeImage from '../../assets/images/welcomeimage.png'
import { BannerContent, WelcomeBanner, BannerImage } from "../PharmApp/PharmApp.styles";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { useNavigate, useLocation } from "react-router-dom";
import Panadol from '../../assets/images/panadol.png'
import WomenVitamin from '../../assets/images/womenvitamin2.png'

const Vitamins = ()=>{
    const navigate = useNavigate()
    const location = useLocation()

    const freshArray = [
        <WelcomeBanner>
        <BannerContent>
            <h1>Get Great Deals</h1>
            <h2>Save up to 50% on Your first order</h2>
        </BannerContent>
        <BannerImage src={WelcomeImage} alt="banner"/>
    </WelcomeBanner>,
    <WelcomeBanner style={{backgroundColor: 'lightgray'}}>
    <BannerContent>
        <h1>Get Great Deals</h1>
        <h2>Save up to 50% on Your first order</h2>
    </BannerContent>
    <BannerImage src={WelcomeImage} alt="banner"/>
</WelcomeBanner>,
<WelcomeBanner style={{backgroundColor: 'lightblue'}}>
    <BannerContent>
        <h1>Get Great Deals</h1>
        <h2>Save up to 50% on Your first order</h2>
    </BannerContent>
    <BannerImage src={WelcomeImage} alt="banner"/>
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
                <SubCategories onClick={()=>navigate('/pharm-App/prescribed')} style={{
                    backgroundColor: location.pathname === '/pharm-App/prescribed' ? '#EA9414': 'white',
                    cursor: location.pathname === '/pharm-App/prescribed' ? 'default': 'pointer'
                }}>
                    <h3>Prescribed</h3>
                </SubCategories>

                <SubCategories style={{
                    backgroundColor: location.pathname === '/pharm-App/vitamins' ? '#EA9414': 'white',
                    cursor: location.pathname === '/pharm-App/vitamins' ? 'default': 'pointer'
                }}>
                    <h3>Vitamins</h3>
                </SubCategories>

                <SubCategories>
                    <h3>Children</h3>
                </SubCategories>

                <SubCategories>
                    <h3>Toiletries</h3>
                </SubCategories>

                <SubCategories>
                    <h3>Baby Food</h3>
                </SubCategories>

                <SubCategories>
                    <h3>Baby Care</h3>
                </SubCategories>

                <SubCategories>
                    <h3>New In Stock</h3>
                </SubCategories>
               </SubcategoriesContent>

               <h2>Vitamins</h2>

               <OfferContent>
               <Offer>
                <Badge>
                    -14%
                </Badge>
        
        <OfferImageContent>
                    <OfferImage src={WomenVitamin}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Women Vitamin</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Cerevit</h4>
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
                    <OfferImage src={WomenVitamin}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Women Vitamin</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Cerevit</h4>
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
                    <OfferImage src={WomenVitamin}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Women Vitamin</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Cerevit</h4>
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
                    <OfferImage src={WomenVitamin}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Women Vitamin</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Cerevit</h4>
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
                    <OfferImage src={WomenVitamin}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Women Vitamin</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Cerevit</h4>
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
                    <OfferImage src={WomenVitamin}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Women Vitamin</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Cerevit</h4>
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
                    <OfferImage src={WomenVitamin}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Women Vitamin</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Cerevit</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

       
               </OfferContent>

               <h2>Prescribed</h2>

               <OfferContent>
               <Offer>
        
        <OfferImageContent>
                    <OfferImage src={Panadol}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Panadol</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Kemsa</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
        
        <OfferImageContent>
                    <OfferImage src={Panadol}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Panadol</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Kemsa</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
        
        <OfferImageContent>
                    <OfferImage src={Panadol}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Panadol</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Kemsa</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
            <h3 style={{color: '#00FF85'}}>KES 345 <span style={{color: 'gray', fontSize: 14, textDecoration: 'line-through' }}>KES 678</span></h3>
            <OfferButton>
            &#128722; Add
            </OfferButton>
        </div>
       
        
        </Offer>

        <Offer>
        
        <OfferImageContent>
                    <OfferImage src={Panadol}/>
        </OfferImageContent>
        <h2 style={{marginTop: -10, color: 'gray'}}>Panadol</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <div style={{display: 'flex', marginTop: -35, color: 'rgba(255,200,1,255)'}}>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>&#10025;</h3>
        <h3>(4.0)</h3>
        </div>
        <h4 style={{marginTop: -15}}>By Kemsa</h4>
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

export default Vitamins;