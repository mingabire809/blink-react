import React, {useState, useEffect} from "react";
import { BannerContent, BannerImage, Content, WelcomeBanner, Wrapper, Face,CategoriesContent, ProductImage, ProductWhite, Product, BrandContent, Brand, BrandImageContent, BrandImage, HairImage, FaceContent, Badge, ProductContent, Image } from "./Cosmetics.styles";
import { Button } from "../LPG/LPG.styles";
import { Button2 } from "../PharmApp/PharmApp.styles";
import CosmeticBanner from '../../assets/images/cosmeticswelcome.png'
import Nivea from '../../assets/images/nivea.png'
import Skin from '../../assets/images/skin.png'
import Brushes from '../../assets/images/brushes.png'
import Hair from '../../assets/images/hair.png'
import Nails from '../../assets/images/nails.png'
import Perfume from '../../assets/images/perfume.png'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Grid from '../../assets/images/grid.png' 
import Dove from '../../assets/images/dovelogo.png'
import NiveaLogo from '../../assets/images/nivea2.png'
import Channel from '../../assets/images/chanel1.png'
import Cussons from '../../assets/images/cussons.png'
import { AdvertisementBanner } from "../Electronics/Electronics.styles";
import { TextContent } from "../Electronics/Electronics.styles";
import ElectronicBanner from '../../assets/images/ElectronicAdvertisement.png'
import Rectangle6 from '../../assets/images/Rectangle48.png'
import Marquee from "react-fast-marquee";
import HairCare from '../../assets/images/HairCare.png'
import HairCare2 from '../../assets/images/HairCare2.png'
import Face1 from '../../assets/images/Face1.png'
import Face2 from '../../assets/images/Face2.png'

import Rectangle7 from '../../assets/images/Rectangle69.png'
import Rectangle8 from '../../assets/images/Rectangle70.png'
import Rectangle9 from '../../assets/images/Rectangle71.png'
import Rectangle10 from '../../assets/images/Rectangle72.png'
import Rectangle11 from '../../assets/images/Rectangle73.png'
import { useNavigate } from "react-router-dom";

const Cosmetics = ()=>{
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 515px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 515px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);

    const navigate = useNavigate()
    const welcome = [
        <WelcomeBanner>
                    <BannerContent>
                    <h1>Don't Miss out on Amazing Offers</h1>
                <h2>Save up to 50% on Your first order</h2>
                    </BannerContent>
                    <BannerImage src={CosmeticBanner}/>
                </WelcomeBanner>,
                <WelcomeBanner style={{backgroundColor: 'pink'}}>
                <BannerContent>
                <h1>Don't Miss out on Amazing Offers</h1>
            <h2>Save up to 50% on Your first order</h2>
                </BannerContent>
                <BannerImage src={CosmeticBanner}/>
            </WelcomeBanner>,
            <WelcomeBanner style={{backgroundColor: 'purple'}}>
            <BannerContent>
            <h1>Don't Miss out on Amazing Offers</h1>
        <h2>Save up to 50% on Your first order</h2>
            </BannerContent>
            <BannerImage src={CosmeticBanner}/>
        </WelcomeBanner>
    ]

    const bestSeller = [
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
                {welcome.map((slide, index) => <div>
                    <div>{slide}</div>
                </div>)}
               </Slider>
               <Button style={{marginTop: screen ? -40: 0}}>Shop by Category</Button>
               <CategoriesContent>
                <Product style={{backgroundColor: '#FF64CA'}}>
                    <ProductImage src={Nivea} style={{width: '30%', marginLeft: '30%'}}/>
                    <ProductWhite>
                        <h3>Body Care</h3>
                    </ProductWhite>
                </Product>

                <Product>
                    <ProductImage src={Skin} style={{width:'60%', marginLeft: '20%'}}/>
                    <ProductWhite>
                        <h3>Skin Care</h3>
                    </ProductWhite>
                </Product>

                <Product style={{backgroundColor: '#FF64CA'}}>
                    <ProductImage src={Brushes} style={{width:'77%', marginLeft: '10%'}}/>
                    <ProductWhite>
                        <h3>Makeup & Brows</h3>
                    </ProductWhite>
                </Product>

                <Product onClick={()=>navigate('/single-product')}>
                    <ProductImage src={Hair} style={{width:'37%', marginLeft: '30%'}}/>
                    <ProductWhite>
                        <h3>Hair Care</h3>
                    </ProductWhite>
                </Product>

                <Product>
                    <ProductImage src={Nails} style={{width:'60%', marginLeft: '20%'}}/>
                    <ProductWhite>
                        <h3>Nail Care</h3>
                    </ProductWhite>
                </Product>

                <Product style={{backgroundColor: '#02FF86'}}>
                    <ProductImage src={Perfume} style={{width:'70%', marginLeft: '15%'}}/>
                    <ProductWhite>
                        <h3>Fragrance</h3>
                    </ProductWhite>
                </Product>

                <Product>
                    <ProductImage src={Skin} style={{width:'63%', marginLeft: '20%'}}/>
                    <ProductWhite>
                        <h3>accessories</h3>
                    </ProductWhite>
                </Product>
                <Product style={{height: screen ? 150:190, marginTop: 0, backgroundColor: '#C7E7FF'}}>
                    <ProductImage src={Grid} style={{width: '60%', marginLeft: '18%'}} alt="product"/>
                    <h2 style={{textAlign: 'center', marginTop: 0, fontWeight: '800'}}>All</h2>
                </Product>
               </CategoriesContent>
               <Button2 style={{marginTop: 100}}>Shop by Brands</Button2>


               <BrandContent>
               <Brand>
               <BrandImageContent>
               <BrandImage src={Cussons}/>
               </BrandImageContent>
               </Brand>

               <Brand>
               <BrandImageContent>
               <BrandImage src={NiveaLogo}/>
               </BrandImageContent>
               </Brand>

               <Brand>
               <BrandImageContent>
               <BrandImage src={Channel}/>
               </BrandImageContent>
               </Brand>

               <Brand>
               <BrandImageContent>
               <BrandImage src={Dove}/>
               </BrandImageContent>
               </Brand>

               <Product style={{height: screen ? 150:190, marginTop: 20, backgroundColor: '#C7E7FF'}}>
                    <ProductImage src={Grid} style={{width: '60%', marginLeft: '18%'}} alt="product"/>
                    <h2 style={{textAlign: 'center', marginTop: 0, fontWeight: '800'}}>All</h2>
                </Product>
               </BrandContent>

               <h2 style={{marginTop: screen ? 40:100, marginBottom: screen ? -100:0}}>Best Sellers</h2> 
               <Slider autoplay={3000}>
                {bestSeller.map((slide, index) => <div>
                    <div>{slide}</div>
                </div>)}
               </Slider>

               <h2 style={{marginTop: screen ? 20:100}}>Hair Care</h2> 
               <Marquee gradient={false} speed={40} play={true}>
               <HairImage src={HairCare}/>
               <HairImage src={HairCare2}/>
               <HairImage src={HairCare}/>
               <HairImage src={HairCare2}/>

               </Marquee>
               <h2 style={{marginTop: 100}}>Face and Body Skin Care</h2> 
               <FaceContent>
                <Face style={{backgroundImage: `url(${Face1})`}}>
                    <Badge>Hot</Badge>
                </Face>
                <Face style={{backgroundImage: `url(${Face2})`}}>

                </Face>
               </FaceContent>

               <h2 style={{marginTop: 100}}>Shower, bath & Soap, Perfumes & Toiletries</h2> 
               <ProductContent>
                <Image src={Rectangle7}/>
                <Image src={Rectangle8}/>
                <Image src={Rectangle9}/>
                <Image src={Rectangle10}/>
                <Image src={Rectangle11}/>
                <Image src={Rectangle7}/>
                <Image src={Rectangle8}/>
                <Image src={Rectangle9}/>
                <Image src={Rectangle10}/>
                <Image src={Rectangle11}/>
               </ProductContent>
            </Content>
        </Wrapper>
    )
}

export default Cosmetics;