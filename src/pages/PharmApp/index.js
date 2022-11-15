import React from "react";
import { BannerContent, BannerImage, Button1, Button2, Button3, CategoriesContent, Content, DiapperBanner, Product, ProductImage, ProductWhite, WelcomeBanner, WelcomeButtonContent, Wrapper } from "./PharmApp.styles";
import WelcomeImage from '../../assets/images/welcomeimage.png'
import BabyCare from '../../assets/images/baby-care.png'
import Vitamin from '../../assets/images/vitamin.png'
import Children from '../../assets/images/children.png'  
import Toiletries from '../../assets/images/toiletries.png'
import BabyFood from '../../assets/images/baby.png'
import New from '../../assets/images/new.png'
import Grid from '../../assets/images/grid.png' 
import Diaper1 from '../../assets/images/diapper1.png'
import Diaper2 from '../../assets/images/diapper2.png'
import Marquee from "react-fast-marquee";

import Rectangle1 from '../../assets/images/Rectangle45.png'
import Rectangle2 from '../../assets/images/Rectangle65.png'
import Rectangle3 from '../../assets/images/Rectangle66.png'
import Rectangle4 from '../../assets/images/Rectangle67.png'
import Rectangle5 from '../../assets/images/Rectangle68.png'
import Rectangle6 from '../../assets/images/Rectangle48.png'

import Rectangle7 from '../../assets/images/Rectangle69.png'
import Rectangle8 from '../../assets/images/Rectangle70.png'
import Rectangle9 from '../../assets/images/Rectangle71.png'
import Rectangle10 from '../../assets/images/Rectangle72.png'
import Rectangle11 from '../../assets/images/Rectangle73.png'
import Rectangle12 from '../../assets/images/Rectangle74.png'

import Nestle from '../../assets/images/Nestle.png'
import Pampers from '../../assets/images/Pampers.png'
import Johnson from '../../assets/images/johnsons.png'
import Dove from '../../assets/images/dove.png'

const PharmApp = ()=>{
    return(
        <Wrapper>
            <Content>
                <WelcomeBanner>
                    <BannerContent>
                        <h1>Don't Miss out on Amazing Offers</h1>
                        <h2>Save up to 50% on Your first order</h2>
                    </BannerContent>
                    <BannerImage src={WelcomeImage} alt="banner"/>
                </WelcomeBanner>
                <WelcomeButtonContent>
                    <Button1>Upload your Prescription</Button1>
                    <Button2>Shop by Brands</Button2>
                    <Button3>Shop by Condition</Button3>
                </WelcomeButtonContent>
                
            </Content>
            <hr/>
            <Content>
            <h1>Categories</h1>
            <CategoriesContent>
                <Product>
                    <ProductImage src={WelcomeImage} alt="product"/>
                    <ProductWhite>
                        <h3>Prescribed</h3>
                    </ProductWhite>
                </Product>
                <Product>
                <ProductImage src={Vitamin} style={{width: '50%', marginLeft: '25%'}} alt="product"/>
                    <ProductWhite>
                        <h3>Vitamins</h3>
                    </ProductWhite>
                </Product>
                <Product style={{backgroundColor: '#7FFFFF'}}>
                <ProductImage src={Children}/>
                    <ProductWhite>
                        <h3>Children</h3>
                    </ProductWhite>
                </Product>
                <Product style={{backgroundColor: 'black'}}>
                <ProductImage src={Toiletries} style={{marginTop: -115}} alt="product"/>
                    <ProductWhite>
                        <h3>Toiletries</h3>
                    </ProductWhite>
                </Product>
                <Product style={{backgroundColor:'#F10D0D'}}>
                <ProductImage src={BabyFood} style={{width: '70%', marginLeft: '12%'}} alt="product"/>
                    <ProductWhite>
                        <h3>Baby Food</h3>
                    </ProductWhite>
                </Product>
                <Product style={{backgroundColor: '#B9FFCE'}}>
                <ProductImage src={New} style={{width: '70%', marginLeft: '15%'}} alt="product"/>
                    <ProductWhite>
                        <h3>New In Stock</h3>
                    </ProductWhite>
                </Product>
                <Product style={{backgroundColor: '#051EFF'}}>
                <ProductImage src={BabyCare} style={{marginTop: 40}} alt="product"/>
                    <ProductWhite>
                        <h3>Baby Care</h3>
                    </ProductWhite>
                </Product>
                <Product style={{height: 190, marginTop: 0, backgroundColor: '#C7E7FF'}}>
                    <ProductImage src={Grid} style={{width: '60%', marginLeft: '18%'}} alt="product"/>
                    <h2 style={{textAlign: 'center', marginTop: 0, fontWeight: '800'}}>All</h2>
                </Product>
            </CategoriesContent>
            <DiapperBanner>
                <img src={Diaper1} style={{height: 350, width: '59%'}} alt="product"/>
                <div style={{
                    width: '41%',  
                }}>
                    <img src={Diaper2} style={{marginLeft: '10%'}} alt="product"/>
                </div>
                
            </DiapperBanner>
            
            </Content>
            <Marquee gradient={false} speed={50} play={true} style={{marginTop: 40, marginBottom: 20}}>
                       <img src={Rectangle1} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                       <img src={Rectangle2} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                       <img src={Rectangle3} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                       <img src={Rectangle4} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                       <img src={Rectangle5} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                       <img src={Rectangle1} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                       <img src={Rectangle2} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                       <img src={Rectangle3} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                       <img src={Rectangle4} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                       <img src={Rectangle5} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                       </Marquee>

                       <Content>
                       <h1>Best Sellers</h1>
                       <img src={Rectangle6} style={{width: '100%', height: 350, borderRadius: 20}} alt="product"/>
                       </Content>

                       <Marquee gradient={false} speed={50} play={true} style={{marginTop: 40, marginBottom: 20}}>
                       <img src={Rectangle7} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                       <img src={Rectangle8} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                       <img src={Rectangle9} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                       <img src={Rectangle10} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                       <img src={Rectangle11} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>

                       <img src={Rectangle7} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                       <img src={Rectangle8} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                       <img src={Rectangle9} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                       <img src={Rectangle10} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                       <img src={Rectangle11} style={{width: 150, height: 150, marginRight: 45}} alt="product"/>
                      
                       </Marquee>

                       <Content>
                       <h1>Top Selling Medical Conditions</h1>
                       <img src={Rectangle12} style={{width: '100%', height: 350, borderRadius: 20}} alt="product"/>

                       <h1 style={{marginTop: 50}}>Brands</h1>
                       <CategoriesContent style={{marginBottom: 40}}>
                       <Product style={{height: 190, marginTop: 20, backgroundColor: '#C7E7FF'}}>
                    <ProductImage src={Nestle} style={{width: '95%', marginTop: 0}} alt="product"/>
                </Product>

                <Product style={{height: 190, marginTop: 20, backgroundColor: '#C7E7FF'}}>
                    <ProductImage src={Pampers} style={{ marginTop: 30}} alt="product"/>
                </Product>

                <Product style={{height: 190, marginTop: 20, backgroundColor: '#C7E7FF'}}>
                    <ProductImage src={Johnson} style={{ marginTop: 60}} alt="product"/>
                </Product>
                <Product style={{height: 190, marginTop: 20, backgroundColor: '#C7E7FF'}}>
                    <ProductImage src={Dove} style={{ marginTop: 30}} alt="product"/>
                </Product>

                <Product style={{height: 190, marginTop: 20, backgroundColor: '#C7E7FF'}}>
                    <ProductImage src={Grid} style={{width: '60%', marginLeft: '18%'}} alt="grid"/>
                    <h2 style={{textAlign: 'center', marginTop: 0, fontWeight: '800'}}>All</h2>
                </Product>
                
                       </CategoriesContent>
                       </Content>
        </Wrapper>
    )
}

export default PharmApp;