import React from "react";
import { CaffeImage, CartButton, CategoriesContent, Content, ImageContent, Popular, PopularButton, PopularContent, Product, ProductImage, ProductWhite, Recommended, Wrapper } from "./BlinkCafe.styles";
import Coffee from '../../assets/images/coffee1.png'
import Smoothies from '../../assets/images/smoothies1.png'
import Pastry from '../../assets/images/pastry1.png'
import Fresh from '../../assets/images/fresh1.png'
import Grid from '../../assets/images/grid.png'
import Caffe1 from '../../assets/images/Caffe1.png'
import Caffe2 from '../../assets/images/Caffe2.png'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import WhiteCart from '../../assets/images/whitecart.png'
import { useEffect, useState } from "react";



const BlinkCafe = ()=>{
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 515px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 515px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    const cafe = [
        <CaffeImage src={Caffe1}/>,
        <CaffeImage src={Caffe2}/>
    ]

    const recommended = [
        <Recommended style={{backgroundImage: `url(${Caffe1})`}}>
                <h2 style={{textAlign: 'center'}}>Buy 2 Get 1 Free</h2>
               </Recommended>,
               <Recommended style={{backgroundImage: `url(${Caffe2})`}}>
                <h2 style={{textAlign: 'center'}}>Buy 2 Get 1 Free</h2>
               </Recommended>
    ]
    return(
        <Wrapper>
            <Content>
            <h2>Categories</h2>
            <CategoriesContent>
                <Product style={{backgroundColor: '#FFB39A'}}>
                    <ProductImage src={Coffee} style={{width: "70%", marginLeft: '15%'}}/>
                    <ProductWhite>
                    <h3>Coffee</h3>
                    </ProductWhite>
                </Product>

                <Product style={{backgroundColor: '#FFE790'}}>
                    <ProductImage src={Smoothies} style={{width: "73%", marginLeft: '15%'}}/>
                    <ProductWhite>
                    <h3>Smoothies</h3>
                    </ProductWhite>
                </Product>

                <Product style={{backgroundColor: '#FFE3B9'}}>
                    <ProductImage src={Fresh} style={{width: "92%", marginLeft: '10%'}}/>
                    <ProductWhite>
                    <h3>Fresh Juice</h3>
                    </ProductWhite>
                </Product>
                <Product style={{backgroundColor: '#FFE896'}}>
                    <ProductImage src={Pastry} style={{width: "100%"}}/>
                    <ProductWhite>
                    <h3>Pastry</h3>
                    </ProductWhite>
                </Product>

                <Product style={{backgroundColor: '#FFE790'}}>
                    <ProductImage src={Smoothies} style={{width: "73%", marginLeft: '15%'}}/>
                    <ProductWhite>
                    <h3>Smoothies</h3>
                    </ProductWhite>
                </Product>

                <Product style={{backgroundColor: '#FFB39A'}}>
                    <ProductImage src={Coffee} style={{width: "70%", marginLeft: '15%'}}/>
                    <ProductWhite>
                    <h3>Coffee</h3>
                    </ProductWhite>
                </Product>

                <Product style={{height: screen ? 150: 190, marginTop: 20, backgroundColor: '#C7E7FF'}}>
                    <ProductImage src={Grid} style={{width: '60%', marginLeft: '18%'}} alt="product"/>
                    <h2 style={{textAlign: 'center', marginTop: 0, fontWeight: '800'}}>All</h2>
                </Product>
            </CategoriesContent>
            <Slider autoplay={3000}>
                {cafe.map((slide, index) => <div>
                    <div>{slide}</div>
                </div>)}
               </Slider>
               <PopularButton style={{marginTop: screen ? -130:50}}>Popular</PopularButton>
               <PopularContent>
                <Popular>
                    <ImageContent>
                    <img src={Coffee} style={{width: '100%'}} alt="product"/>
                    </ImageContent>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h4 style={{fontWeight: "900"}}>Coffee Latte</h4>
                        <h5 style={{color: '#FF7C03', fontWeight: "900"}}>KES 270</h5>
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
                    <h5 style={{width: '80%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                        <CartButton>
                            <img src={WhiteCart} alt="cart"/>
                        </CartButton>
                    </div>
                </Popular>
                <Popular>
                    <ImageContent>
                    <img src={Coffee} style={{width: '100%'}} alt="product"/>
                    </ImageContent>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h4 style={{fontWeight: "900"}}>Coffee Latte</h4>
                        <h5 style={{color: '#FF7C03', fontWeight: "900"}}>KES 270</h5>
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
                    <h5 style={{width: '80%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                        <CartButton>
                            <img src={WhiteCart} alt="cart"/>
                        </CartButton>
                    </div>
                </Popular>
                <Popular>
                    <ImageContent>
                    <img src={Coffee} style={{width: '100%'}} alt="product"/>
                    </ImageContent>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h4 style={{fontWeight: "900"}}>Coffee Latte</h4>
                        <h5 style={{color: '#FF7C03', fontWeight: "900"}}>KES 270</h5>
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
                    <h5 style={{width: '80%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                        <CartButton>
                            <img src={WhiteCart} alt="cart"/>
                        </CartButton>
                    </div>
                </Popular>
                <Popular>
                    <ImageContent>
                    <img src={Coffee} style={{width: '100%'}} alt="product"/>
                    </ImageContent>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h4 style={{fontWeight: "900"}}>Coffee Latte</h4>
                        <h5 style={{color: '#FF7C03', fontWeight: "900"}}>KES 270</h5>
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
                    <h5 style={{width: '80%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                        <CartButton>
                            <img src={WhiteCart} alt="cart"/>
                        </CartButton>
                    </div>
                </Popular>
                <Popular>
                    <ImageContent>
                    <img src={Coffee} style={{width: '100%'}} alt="product"/>
                    </ImageContent>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h4 style={{fontWeight: "900"}}>Coffee Latte</h4>
                        <h5 style={{color: '#FF7C03', fontWeight: "900"}}>KES 270</h5>
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
                    <h5 style={{width: '80%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                        <CartButton>
                            <img src={WhiteCart} alt="cart"/>
                        </CartButton>
                    </div>
                </Popular>
                <Popular>
                    <ImageContent>
                    <img src={Coffee} style={{width: '100%'}} alt="product"/>
                    </ImageContent>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h4 style={{fontWeight: "900"}}>Coffee Latte</h4>
                        <h5 style={{color: '#FF7C03', fontWeight: "900"}}>KES 270</h5>
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
                    <h5 style={{width: '80%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                        <CartButton>
                            <img src={WhiteCart} alt="cart"/>
                        </CartButton>
                    </div>
                </Popular>
                <Popular>
                    <ImageContent>
                    <img src={Coffee} style={{width: '100%'}} alt="product"/>
                    </ImageContent>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h4 style={{fontWeight: "900"}}>Coffee Latte</h4>
                        <h5 style={{color: '#FF7C03', fontWeight: "900"}}>KES 270</h5>
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
                    <h5 style={{width: '80%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                        <CartButton>
                            <img src={WhiteCart} alt="cart"/>
                        </CartButton>
                    </div>
                </Popular>
                <Popular>
                    <ImageContent>
                    <img src={Coffee} style={{width: '100%'}} alt="product"/>
                    </ImageContent>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h4 style={{fontWeight: "900"}}>Coffee Latte</h4>
                        <h5 style={{color: '#FF7C03', fontWeight: "900"}}>KES 270</h5>
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -25}}>
                    <h5 style={{width: '80%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                        <CartButton>
                            <img src={WhiteCart} alt="cart"/>
                        </CartButton>
                    </div>
                </Popular>
               </PopularContent>
               <h2 style={{marginTop: 100, marginBottom: screen ? -70: 0}}>Top Recommended</h2>
               <Slider autoplay={3000}>
                {recommended.map((slide, index) => <div>
                    <div>{slide}</div>
                </div>)}
               </Slider>
               
            </Content>
        </Wrapper>
    )
}

export default BlinkCafe;