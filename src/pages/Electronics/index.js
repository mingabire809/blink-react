import React from "react";
import { BrandButton, BrandContent, Brand, Content, Wrapper, YellowContent } from "./Electronics.styles";
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
                <YellowContent>
                    Sony
                </YellowContent>
                </Brand>
            </BrandContent>
            </Content>
        </Wrapper>
    )
}

export default Electronics;