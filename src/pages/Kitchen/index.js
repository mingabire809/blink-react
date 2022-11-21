import React from "react";
import { BannerContent, Content, WelcomeBanner, Wrapper, BannerButton, BannerImage, CategoriesContent, Product, ProductWhite, ProductImage, RestaurantContent, Restaurant, RestaurantImage } from "./Kitchen.styles";
import Coffee from '../../assets/images/coffee1.png'
import Pastry from '../../assets/images/pastry1.png'
import { Button } from "../LPG/LPG.styles";
import Ethiopian from '../../assets/images/ethiopia.png'
import Kenyan from '../../assets/images/kenyan.png'
import Nigerian from '../../assets/images/nigerian.png'
import NorthIndian from '../../assets/images/northindiancuisine.png'
import Italian from '../../assets/images/italian.png'
import Korean from '../../assets/images/korean.png'
import Grid from '../../assets/images/grid.png'

const Kitchen = ()=>{
    return(
        <Wrapper>
            <Content>
                <WelcomeBanner>
                    <BannerContent>
                    <h1>Don't Miss out on Amazing Offers</h1>
                    <h2>Save up to 50% on Your first order</h2>
                    <BannerButton>Shop Now</BannerButton>
                    </BannerContent>
                    <BannerImage src={Pastry} style={{width: 250, height: 200}}/>
                    <BannerImage src={Coffee} style={{width: 230, height: 180}}/>
                </WelcomeBanner>

                <Button>Shop By Cuisine</Button>

                <CategoriesContent>
                    <Product>
                        <ProductImage src={Ethiopian} style={{marginBottom: 25}}/>
                        <ProductWhite>
                        <h3>Ethiopian</h3>
                        </ProductWhite>
                    </Product>

                    <Product>
                        <ProductImage src={Kenyan} style={{marginBottom: 15}}/>
                        <ProductWhite>
                        <h3>Kenyan</h3>
                        </ProductWhite>
                    </Product>

                    <Product>
                        <ProductImage src={Nigerian} style={{marginBottom: 18}}/>
                        <ProductWhite>
                        <h3>Nigerian</h3>
                        </ProductWhite>
                    </Product>

                    <Product>
                        <ProductImage src={NorthIndian} style={{width: '95%'}}/>
                        <ProductWhite>
                        <h3>Indian</h3>
                        </ProductWhite>
                    </Product>
                    <Product>
                        <ProductImage src={Italian}/>
                        <ProductWhite>
                        <h3>Italian</h3>
                        </ProductWhite>
                    </Product>
                    <Product>
                        <ProductImage src={Korean} style={{marginBottom: 15}}/>
                        <ProductWhite>
                        <h3>Korean</h3>
                        </ProductWhite>
                    </Product>

                    <Product style={{height: 190, marginTop: 20}}>
                    <ProductImage src={Grid} style={{width: '60%', marginLeft: '18%'}} alt="product"/>
                    <h2 style={{textAlign: 'center', marginTop: 0, fontWeight: '800'}}>All</h2>
                </Product>
                </CategoriesContent>

                <Button style={{width: 230, backgroundColor: '#FFE99A'}}>Shop By Restaurant</Button>
                <RestaurantContent>
                    <Restaurant>
                        <RestaurantImage>

                        </RestaurantImage>
                        <div style={{display: 'flex', justifyContent: 'space-between',
                         marginLeft: 'auto', marginRight: 'auto', width: 260, alignItems: 'center', marginTop: -13}}>
                            <h4>Kfc Kilimani</h4>
                            <div style={{
                                display: 'flex',
                                color: '#EA9414'
                                
                            }}>
                                <h7>&#9733;</h7>
                                <h7>&#9733;</h7>
                                <h7>&#9733;</h7>
                                <h7>&#9733;</h7>
                                <h7>&#9734;</h7>
                            </div>
                         </div>

                         <div style={{display: 'flex', justifyContent: 'space-between',
                         marginLeft: 'auto', marginRight: 'auto', width: 260, alignItems: 'center', marginTop: -40}}>
                            <h5>Kfc killimani - Denis Prit Rd</h5>
                            
                         </div>
                         <div style={{display: 'flex', justifyContent: 'space-between',
                         marginLeft: 'auto', marginRight: 'auto', width: 260, alignItems: 'center', marginTop: -40}}>
                            <h5>Delivery Kes 75</h5>
                            <h5>$$$</h5>
                         </div>
                        
                    </Restaurant>
                </RestaurantContent>
            </Content>
        </Wrapper>
    )
}

export default Kitchen;